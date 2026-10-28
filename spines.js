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
      a.href = w ? `work.html#${encodeURIComponent(w.id)}` : `category.html#${encodeURIComponent(s.id)}`;
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
     One screen, no page scroll. Bands of the open category and the ones before it are
     stacked at the top (under the header); the rest wait stacked at the bottom.
     The open category's photos fill the space between and are swiped sideways.
     Tapping a band, or swiping up/down, opens it — the bands slide up or down to make room. Nothing closes,
     so the last one (Clo 3D) stays open too. Measured on a 412×917 phone. */
  function buildPhone() {
    const host = document.getElementById('mspines');
    if (!host) return;
    const n = SECTIONS.length;
    host.innerHTML = SECTIONS.map((s, i) => {
      const photos = (s.photos || []).map((ph) => {
        const w = typeof ph === 'string' ? WORKS.find((x) => x.id === ph) : null;
        const img = w ? w.cover : ph;
        if (!img) return '';
        const href = w ? `work.html#${encodeURIComponent(w.id)}` : `category.html#${encodeURIComponent(s.id)}`;
        return `<a class="ms-photo" href="${href}" aria-label="${esc(w ? w.title : s.label + ': ' + (img.alt || ''))}">` +
               media(img, `loading="${i ? 'lazy' : 'eager'}" decoding="async"`) + `</a>`;
      }).join('');
      return `<button type="button" class="ms-band" data-i="${i}" aria-controls="ms-row-${i}">${esc(s.label)}</button>` +
             `<div class="ms-row" id="ms-row-${i}"><div class="ms-scroll">${photos}</div></div>`;
    }).join('');
    const bands = [...host.querySelectorAll('.ms-band')];
    const rows = [...host.querySelectorAll('.ms-row')];
    const scrollers = rows.map((r) => r.querySelector('.ms-scroll'));
    let open = 0;

    // The bands never move with the finger. Only the open category's row has height:
    // the bands above it stack under the header, the ones after it sit at the bottom.
    function place() {
      const cs = getComputedStyle(host);
      const T = parseFloat(cs.paddingTop) || 66;
      const B = bands[0].offsetHeight;
      const R = Math.max(0, host.clientHeight - T - n * B);     // what's left of the screen
      host.style.setProperty('--ph', R + 'px');
      bands.forEach((b, i) => { b.classList.toggle('is-open', i === open); b.setAttribute('aria-expanded', String(i === open)); });
      rows.forEach((r, i) => { r.style.height = (i === open ? R : 0) + 'px'; r.inert = i !== open; });
    }
    function openAt(i, fromEnd) {
      i = Math.max(0, Math.min(n - 1, i));
      if (i === open) return false;
      const sc = scrollers[i];
      sc.scrollTop = fromEnd ? sc.scrollHeight : 0;        // coming back up: land on its last photo
      open = i;
      place();
      busyUntil = performance.now() + 900;
      return true;
    }
    bands.forEach((b, i) => b.addEventListener('click', () => openAt(i)));

    const atTop = (sc) => sc.scrollTop <= 2;
    const atEnd = (sc) => sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 2;
    let busyUntil = 0;

    // Touch: a swipe that starts on the last photo and keeps going up opens the next category;
    // one that starts on the first photo and goes down opens the previous one.
    let sy = 0, sx = 0, startTop = false, startEnd = false;
    host.addEventListener('touchstart', (e) => {
      sy = e.touches[0].clientY; sx = e.touches[0].clientX;
      startTop = atTop(scrollers[open]); startEnd = atEnd(scrollers[open]);
    }, { passive: true });
    host.addEventListener('touchmove', (e) => {
      // a band area or an edge photo: the page itself must not rubber-band
      const dy = e.touches[0].clientY - sy;
      if (!e.target.closest('.ms-scroll') || (dy < 0 && startEnd) || (dy > 0 && startTop)) e.preventDefault();
    }, { passive: false });
    host.addEventListener('touchend', (e) => {
      if (performance.now() < busyUntil) return;
      const t = e.changedTouches[0], dy = t.clientY - sy, dx = t.clientX - sx;
      if (Math.abs(dy) < 40 || Math.abs(dy) < Math.abs(dx) * 1.2) return;
      if (dy < 0 && startEnd) openAt(open + 1, false);
      else if (dy > 0 && startTop) openAt(open - 1, true);
    }, { passive: true });

    // Wheel / trackpad: same idea, one category per gesture.
    host.addEventListener('wheel', (e) => {
      const sc = scrollers[open], down = e.deltaY > 0;
      const inside = e.target.closest('.ms-scroll');
      if (inside && !(down ? atEnd(sc) : atTop(sc))) return;  // still photos to see: let it scroll
      e.preventDefault();
      const now = performance.now();
      if (now < busyUntil || Math.abs(e.deltaY) < 8) { busyUntil = Math.max(busyUntil, now + 150); return; }
      if (!inside) { sc.scrollBy({ top: down ? sc.clientHeight : -sc.clientHeight, behavior: 'smooth' }); busyUntil = now + 700; if (!(down ? atEnd(sc) : atTop(sc))) return; }
      openAt(open + (down ? 1 : -1), !down);
    }, { passive: false });

    addEventListener('resize', place);
    place();
    requestAnimationFrame(() => host.classList.add('is-ready'));
  }
})();
