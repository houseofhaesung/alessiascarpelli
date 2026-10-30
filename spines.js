/* Home page, desktop and tablet (768px and up): the category spines.

   Picture a shelf of book spines laid out in one long sideways row:
     [pink cover][FASHION DESIGN][photo][photo][photo][STYLING…][photo]…[CLO 3D][photo]…
   The page opens with the first category already open and can't scroll back past it;
   scrolling down (wheel, trackpad, drag, ←/→) moves on to the next categories.
   Each spine stops when it reaches the left stack (behind the spines already open)
   and waits on the right stack until its turn, so a category "opens" and its
   photos slide out from behind it. Clicking a spine glides straight to it.

   Measured from the 1920×1080 design: spines 126px wide, 12px apart,
   photos 4:5 and as tall as the space under the header, 12px apart.
   Needs works.js (window.HOME, window.WORKS) loaded first. */
(() => {
  // a photo, or a short silent looping video when the entry has  video: 'file.mp4'  (src = its still)
  function media(img, attrs) {
    const e = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    if (img.video) return `<video src="${e(img.video)}" poster="${e(img.src)}" width="${img.w}" height="${img.h}" muted loop autoplay playsinline preload="metadata" aria-label="${e(img.alt || '')}" draggable="false"></video>`;
    return `<img src="${e(img.src)}" width="${img.w}" height="${img.h}" alt="${e(img.alt || '')}" ${attrs} />`;
  }
  const SECTIONS = window.HOME || [];
  const WORKS = window.WORKS || [];
  const root = document.getElementById('spines');
  if (!root || !SECTIONS.length) return;

  const EASE = 0.1;          // how quickly the row catches up with the scroll (1 = instantly)
  // clicking a spine (or ←/→): an even, gentle move — slow start, steady, slow stop (no spring)
  const GLIDE_MIN = 1400, GLIDE_MAX = 4200;   // ms; longer distances take longer (the photos in between stay readable)
  const smooth = (t) => -(Math.cos(Math.PI * t) - 1) / 2;   // ease-in-out sine: the gentlest curve
  let glide = null;          // { from, to, t0, dur } while a click-move is running
  const desktop = matchMedia('(min-width: 768px)');
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- build ---------- */
  const track = document.createElement('div');
  track.className = 'sp-track';
  const cover = document.createElement('div');
  cover.className = 'sp-cover';                      // the wide pink block before the first spine
  track.appendChild(cover);
  root.appendChild(track);

  const sections = SECTIONS.map((s, i) => {
    const spine = document.createElement('button');
    spine.type = 'button';
    spine.className = `sp-spine${i === 0 ? ' is-first' : ''}`;
    spine.setAttribute('aria-label', `Open ${s.label}`);
    spine.innerHTML = `<span class="sp-label">${esc(s.label)}</span>`;
    root.appendChild(spine);

    const photos = (s.photos || []).map((ph) => {
      const w = typeof ph === 'string' ? WORKS.find((x) => x.id === ph) : null;
      const img = w ? w.cover : ph;
      if (!img) return null;
      const a = document.createElement('a');
      a.className = 'sp-photo';
      a.href = w ? `work.html#${encodeURIComponent(w.link || w.id)}` : `category.html#${encodeURIComponent(s.id)}`;
      a.setAttribute('aria-label', w ? w.title : `${s.label}: ${img.alt || ''}`);
      a.tabIndex = -1;                                  // reachable once the section is open
      a.innerHTML = media(img, 'decoding="async" draggable="false"');
      track.appendChild(a);
      return a;
    }).filter(Boolean);
    return { spine, photos };
  });

  /* ---------- geometry ---------- */
  let S = 0, G = 0, H = 0, PW = 0, VW = 0, max = 0;
  const natural = [];        // each spine's x in the long row
  const openAt = [];         // scroll position at which each section is open
  // labels touch each other and their photos; the gap G is only between two photos
  const leftMin = (i) => i * S;
  const rightMax = (i) => VW - (SECTIONS.length - i) * S;

  function measure() {
    S = sections[0].spine.getBoundingClientRect().width || 126;                 // spine width in px
    G = parseFloat(getComputedStyle(sections[0].spine, '::after').width) || 0;   // gap between photos (from --gap)
    H = root.clientHeight;
    VW = root.clientWidth;
    PW = Math.round(H * 0.8);                           // photos are 4:5
    let x = rightMax(0);                                // the first spine starts on the right stack
    cover.style.width = (x + S) + 'px';                // runs on under the first spine, so no hairline shows between them
    sections.forEach((sec, i) => {
      natural[i] = x;
      openAt[i] = Math.max(0, x - leftMin(i));
      x += S;                                           // photos touch their label…
      sec.photos.forEach((a, k) => { a.style.left = x + 'px'; a.style.width = PW + 'px'; x += PW + (k < sec.photos.length - 1 ? G : 0); });
    });                                                 // …and the next label; G only between photos
    max = Math.max(0, x - VW);
    target = Math.max(openAt[0] || 0, Math.min(target, max));
  }

  /* ---------- motion ---------- */
  const spineX = (i, at) => Math.min(Math.max(natural[i] - at, leftMin(i)), rightMax(i));
  let p = 0, target = 0, current = -1;
  function frame() {
    if (desktop.matches) {
      let spineAt = null, photoFade = 1;
      if (glide && glide.jump) {
        // jumping past other categories: the new photos are in place straight away and
        // the labels (white, above the photos) slide over them to their new places
        const g = glide, t = Math.min(1, (performance.now() - g.t0) / g.dur), e = smooth(t);
        p = g.to;
        spineAt = (i) => spineX(i, g.from) + (spineX(i, g.to) - spineX(i, g.from)) * e;
        if (t >= 1) glide = null;
      } else if (glide) {
        const t = Math.min(1, (performance.now() - glide.t0) / glide.dur);
        p = glide.from + (glide.to - glide.from) * smooth(t);
        if (t >= 1) glide = null;
      } else {
        p += (target - p) * (REDUCED ? 1 : EASE);
        if (Math.abs(target - p) < 0.1) p = target;
      }
      track.style.transform = `translate3d(${-p.toFixed(1)}px,0,0)`;
      track.style.opacity = photoFade < 1 ? photoFade.toFixed(3) : '';
      sections.forEach((sec, i) => {
        const x = spineAt ? spineAt(i) : spineX(i, p);
        sec.spine.style.transform = `translate3d(${x.toFixed(1)}px,0,0)`;
      });
      // the open section = the last one whose spine has reached the left stack
      // (after a click, the clicked one lights up straight away; the ones passed on the way don't)
      let open = 0;
      openAt.forEach((o, i) => { if ((glide ? glide.to : p) >= o - 2) open = i; });
      if (open !== current) {
        current = open;
        sections.forEach((sec, i) => {
          sec.spine.classList.toggle('is-open', i === open);
          sec.spine.setAttribute('aria-expanded', String(i === open));
          sec.photos.forEach((a) => { a.tabIndex = i === open ? 0 : -1; });
        });
      }
    }
    requestAnimationFrame(frame);
  }

  // the row never goes back past Fashion Design being open (the closed pink cover is not shown)
  const go = (to, soft, jump) => {
    target = Math.max(openAt[0] || 0, Math.min(max, to));
    if (jump && !REDUCED) {
      glide = { jump: true, from: p, to: target, t0: performance.now(), dur: 1300 };
    } else if (soft && !REDUCED) {
      const dist = Math.abs(target - p);
      glide = { from: p, to: target, t0: performance.now(), dur: Math.min(GLIDE_MAX, GLIDE_MIN + dist * 0.55) };
    } else glide = null;                          // wheel / drag take over straight away
  };

  root.addEventListener('wheel', (e) => {
    if (!desktop.matches) return;
    e.preventDefault();
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    go(target + d * (e.deltaMode === 1 ? 16 : 1));
  }, { passive: false });

  // drag to move; a drag never counts as a click
  let downX = 0, downT = 0, dragging = false, moved = false;
  root.addEventListener('pointerdown', (e) => {
    if (!desktop.matches || e.button !== 0) return;
    dragging = true; moved = false; downX = e.clientX; downT = target;
  });
  addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - downX;
    if (Math.abs(dx) > 5) { moved = true; root.classList.add('is-dragging'); }
    if (moved) go(downT - dx * 1.4);
  });
  addEventListener('pointerup', () => { dragging = false; root.classList.remove('is-dragging'); });
  root.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);

  // clicking a spine opens that section
  // clicking a spine glides there, passing through the photos in between
  sections.forEach((sec, i) => sec.spine.addEventListener('click', () => {
    if (i === current) return;
    go(openAt[i], true);
  }));

  // ←/→ move one section at a time
  addEventListener('keydown', (e) => {
    if (!desktop.matches || document.documentElement.classList.contains('wm-lock')) return;
    if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    e.preventDefault();
    const next = e.key === 'ArrowRight'
      ? openAt.find((o) => o > target + 2) ?? max
      : [...openAt].reverse().find((o) => o < target - 2) ?? 0;
    go(next, true);
  });

  buildPhone();
  addEventListener('resize', measure);
  measure();
  // first view: Fashion Design already open
  p = target = openAt[0];
  requestAnimationFrame(frame);
  requestAnimationFrame(() => root.classList.add('is-ready'));

  /* ---------- Phones (below 768px) ----------
     An index down the left (one tab per category, like tabs on a book) and the photos
     full-screen beside it, swiped sideways one at a time. The tab of the category on
     screen turns pink; tapping a tab glides to that category's first photo. */
  function buildPhone() {
    const host = document.getElementById('mspines');
    if (!host) return;
    const firstOf = [];                     // index of each category's first photo
    let k = 0;
    const photos = SECTIONS.map((s, i) => {
      firstOf[i] = k;
      return (s.photos || []).map((ph) => {
        const w = typeof ph === 'string' ? WORKS.find((x) => x.id === ph) : null;
        const img = w ? w.cover : ph;
        if (!img) return '';
        k++;
        const href = w ? `work.html#${encodeURIComponent(w.link || w.id)}` : `category.html#${encodeURIComponent(s.id)}`;
        return `<a class="ms-photo" data-cat="${i}" href="${href}" aria-label="${esc(w ? w.title : s.label + ': ' + (img.alt || ''))}">` +
               media(img, `loading="${k > 2 ? 'lazy' : 'eager'}" decoding="async"`) + `</a>`;
      }).join('');
    }).join('');
    host.innerHTML =
      `<nav class="ms-index" aria-label="Categories">${SECTIONS.map((s, i) => `<button type="button" class="ms-tab" data-i="${i}"><span>${esc(s.label)}</span></button>`).join('')}</nav>` +
      `<div class="ms-scroll">${photos}</div>`;
    const tabs = [...host.querySelectorAll('.ms-tab')];
    const sc = host.querySelector('.ms-scroll');
    const items = [...sc.children];
    let on = -1, glideTo = -1, raf = 0;

    const step = () => (items[1] ? items[1].offsetLeft - items[0].offsetLeft : sc.clientWidth);
    function mark(i) {
      if (i === on) return;
      on = i;
      tabs.forEach((t, j) => { t.classList.toggle('is-on', j === i); t.setAttribute('aria-current', j === i ? 'true' : 'false'); });
    }
    // the category of the photo filling the screen
    function update() {
      if (glideTo >= 0) return;
      const p = Math.max(0, Math.min(items.length - 1, Math.round(sc.scrollLeft / step())));
      mark(+items[p].dataset.cat);
    }
    sc.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });

    // tapping a tab: glide through the photos in between (eased; never too fast)
    const sine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;
    function glide(i) {
      cancelAnimationFrame(raf);
      const from = sc.scrollLeft, to = items[firstOf[i]].offsetLeft - items[0].offsetLeft, d = to - from;
      mark(i); glideTo = i;
      if (REDUCED || Math.abs(d) < 2) { sc.scrollLeft = to; glideTo = -1; return; }
      const dur = Math.min(2800, 1000 + Math.abs(d) * 0.35), t0 = performance.now();
      sc.classList.add('is-gliding');
      const tick = (now) => {
        const t = Math.min(1, (now - t0) / dur);
        sc.scrollLeft = from + d * sine(t);
        if (t < 1) raf = requestAnimationFrame(tick);
        else { sc.classList.remove('is-gliding'); glideTo = -1; }
      };
      raf = requestAnimationFrame(tick);
    }
    tabs.forEach((t, i) => t.addEventListener('click', () => glide(i)));
    // slide to one photo (used after an up/down swipe and by the wheel)
    function slideTo(p) {
      p = Math.max(0, Math.min(items.length - 1, p));
      cancelAnimationFrame(raf);
      const from = sc.scrollLeft, to = items[p].offsetLeft - items[0].offsetLeft, d = to - from;
      if (REDUCED || Math.abs(d) < 2) { sc.scrollLeft = to; sc.classList.remove('is-gliding'); return; }
      const dur = Math.min(900, 420 + Math.abs(d) * 0.6), t0 = performance.now();
      sc.classList.add('is-gliding');
      const tick = (now) => {
        const t = Math.min(1, (now - t0) / dur);
        sc.scrollLeft = from + d * sine(t);
        if (t < 1) raf = requestAnimationFrame(tick); else sc.classList.remove('is-gliding');
      };
      raf = requestAnimationFrame(tick);
    }
    const nearest = () => Math.round(sc.scrollLeft / step());

    // Swiping up/down moves the photos sideways too: the row follows the finger
    // (up = forward, down = back) and settles on the next or previous photo.
    let sx = 0, sy = 0, start = 0, startP = 0, mode = '';
    sc.addEventListener('touchstart', (e) => {
      if (glideTo >= 0) { glideTo = -1; }
      cancelAnimationFrame(raf); sc.classList.remove('is-gliding');
      const t = e.touches[0]; sx = t.clientX; sy = t.clientY; start = sc.scrollLeft; startP = nearest(); mode = '';
    }, { passive: true });
    sc.addEventListener('touchmove', (e) => {
      const t = e.touches[0], dx = t.clientX - sx, dy = t.clientY - sy;
      if (!mode && Math.abs(dx) + Math.abs(dy) > 8) mode = Math.abs(dy) > Math.abs(dx) ? 'v' : 'h';
      if (mode !== 'v') return;                               // sideways: the browser scrolls as usual
      e.preventDefault();
      sc.classList.add('is-gliding');
      sc.scrollLeft = start - dy;
    }, { passive: false });
    sc.addEventListener('touchend', (e) => {
      if (mode !== 'v') return;
      const dy = e.changedTouches[0].clientY - sy;
      slideTo(Math.abs(dy) > 40 ? startP + (dy < 0 ? 1 : -1) : startP);
    }, { passive: true });

    // mouse wheel / trackpad (e.g. a narrow desktop window): one photo per gesture
    let wheelBusy = 0;
    sc.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;   // sideways trackpad swipes scroll as usual
      e.preventDefault();
      const now = performance.now();
      if (now < wheelBusy || Math.abs(e.deltaY) < 6) { wheelBusy = Math.max(wheelBusy, now + 120); return; }
      wheelBusy = now + 650;
      slideTo(nearest() + (e.deltaY > 0 ? 1 : -1));
    }, { passive: false });

    // Autoplay: when nobody is touching, each photo stays ~2 seconds, then the row slides
    // quickly (about 0.6s, eased) to the next one. A touch, the wheel or a tab tap pauses it;
    // it carries on a few seconds after the last touch. After the last photo it glides back
    // to the first.
    const HOLD = 2000, SLIDE = 620, RESUME = 3500;
    let nextAt = performance.now() + HOLD, autoRaf = 0, autoBusy = false;
    const hold = () => { nextAt = performance.now() + RESUME; if (autoBusy) { cancelAnimationFrame(autoRaf); autoBusy = false; sc.classList.remove('is-gliding'); } };
    ['touchstart', 'wheel', 'pointerdown'].forEach((ev) => sc.addEventListener(ev, hold, { passive: true }));
    tabs.forEach((t) => t.addEventListener('click', () => { nextAt = performance.now() + RESUME + 2800; }));
    const quick = (t) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);   // ease in and out
    function autoStep(now) {
      if (!REDUCED && !desktop.matches && !autoBusy && glideTo < 0 && now > nextAt && !document.documentElement.classList.contains('menu-open')) {
        const p = nearest();
        if (p >= items.length - 1) { glide(0); nextAt = now + 2800 + HOLD; }
        else {
          const from = sc.scrollLeft, to = items[p + 1].offsetLeft - items[0].offsetLeft, d = to - from, t0 = now;
          autoBusy = true; sc.classList.add('is-gliding');
          const tick = (n) => {
            const t = Math.min(1, (n - t0) / SLIDE);
            sc.scrollLeft = from + d * quick(t);
            if (t < 1) autoRaf = requestAnimationFrame(tick);
            else { autoBusy = false; sc.classList.remove('is-gliding'); nextAt = performance.now() + HOLD; }
          };
          autoRaf = requestAnimationFrame(tick);
        }
      }
      requestAnimationFrame(autoStep);
    }
    requestAnimationFrame(autoStep);

    // fit the tab type: 17.5px with 14px above and below (as designed on a 917px phone),
    // smaller when the four tabs would not fit the screen
    const nav = host.querySelector('.ms-index');
    function fitTabs() {
      nav.style.setProperty('--tf', '100px'); nav.style.setProperty('--tp', '0px');
      const len = tabs.reduce((t, b) => t + b.firstChild.getBoundingClientRect().height, 0) / 100;   // in em
      const room = host.clientHeight - 24;                                                         // keep a little photo below
      const f = Math.max(10, Math.min(17.5, (room - tabs.length * 27) / len));
      nav.style.setProperty('--tf', f.toFixed(2) + 'px');
      nav.style.setProperty('--tp', Math.round(f * 0.78) + 'px');
    }
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(fitTabs);
    addEventListener('resize', fitTabs);
    mark(0);
    requestAnimationFrame(() => host.classList.add('is-ready'));
  }
})();
