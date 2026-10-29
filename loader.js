/* Loading + page-change screen.
   A white veil with the black logo in the middle; its three pink triangles pop in one
   after another (stop-motion), then the veil fades out and the page appears.
   - first visit in this tab: plays in full while the page loads
   - going to another page of the site: the veil fades in, the triangles fill, then the
     next page opens and fades in from the same picture
   Loaded in <head> on every page so nothing shows before it. */
(() => {
  const html = document.documentElement;
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FIRST = 350, STAGGER = 480;               // the first triangle pops in after 0.35s, then one every 0.48s
  const FILL_ALL = FIRST + STAGGER * 2 + 100;     // ~1.4s until the logo is complete
  const store = { get(k) { try { return sessionStorage.getItem(k); } catch (_) { return null; } },
                  set(k, v) { try { sessionStorage.setItem(k, v); } catch (_) {} } };

  const css = `
    .ld { position: fixed; inset: 0; z-index: 9999; display: grid; place-items: center;
          background: rgba(255, 255, 255, .94); opacity: 1; transition: opacity .8s ease; }
    .ld.is-out { opacity: 0; pointer-events: none; }
    .ld.is-in-start { opacity: 0; }
    .ld-logo { position: relative; width: min(24.6vw, 480px); min-width: 240px; aspect-ratio: 1884 / 156; }
    @media (max-width: 767.98px) { .ld-logo { width: 68vw; min-width: 0; } }
    .ld-logo img { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
    /* stop-motion: each triangle just appears — pop, pop, pop — no fading or growing */
    .ld-tri { visibility: hidden; }
    .ld-tri.is-on, .ld.is-full .ld-tri { visibility: visible; }
    @media (prefers-reduced-motion: reduce) { .ld { transition: none !important; } }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const ld = document.createElement('div');
  ld.className = 'ld';
  ld.setAttribute('aria-hidden', 'true');
  ld.innerHTML = '<div class="ld-logo"><img src="images/logo-base.png" alt="" />' +
    [1, 2, 3].map((k) => `<img class="ld-tri" src="images/logo-tri-${k}.png" alt="" />`).join('') + '</div>';
  html.appendChild(ld);                           // before <body> exists: covers the page at once

  const fromSite = store.get('ld-next') === location.pathname;   // we came here through the veil
  store.set('ld-next', '');
  const firstVisit = !store.get('ld-seen');
  store.set('ld-seen', '1');

  const tris = [...ld.querySelectorAll('.ld-tri')];
  let timers = [];
  function pop() {                                  // pop, pop, pop
    timers.forEach(clearTimeout);
    tris.forEach((t) => t.classList.remove('is-on'));
    timers = tris.map((t, k) => setTimeout(() => t.classList.add('is-on'), FIRST + k * STAGGER));
  }

  // ----- arriving -----
  const t0 = performance.now();
  let minShow = 0;
  if (REDUCED) { ld.classList.add('is-full'); minShow = 200; }
  else if (fromSite) { ld.classList.add('is-full'); minShow = 250; }             // logo already complete
  else if (firstVisit) { pop(); minShow = FILL_ALL + 550; }
  else { ld.classList.add('is-full'); minShow = 300; }                         // reload / direct link
  let done = false;
  function reveal() {
    if (done) return; done = true;
    const wait = Math.max(0, minShow - (performance.now() - t0));
    setTimeout(() => { ld.classList.add('is-out'); }, wait);
  }
  addEventListener('load', reveal);
  setTimeout(reveal, 4000);                        // never wait longer than this for slow photos

  // coming back with the browser's back button: the page is shown as it was
  addEventListener('pageshow', (e) => { if (e.persisted) { ld.classList.remove('is-in-start'); ld.classList.add('is-out'); } });

  // ----- leaving for another page of the site -----
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.matches('[data-work-menu]') && matchMedia('(min-width: 768px)').matches) return;   // WORK opens the menu panel
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === location.pathname) return;                 // same page, only the # changes
    e.preventDefault(); e.stopImmediatePropagation();
    store.set('ld-next', url.pathname);
    if (REDUCED) { location.href = url.href; return; }
    ld.classList.remove('is-out', 'is-full');
    tris.forEach((t) => t.classList.remove('is-on'));
    ld.classList.add('is-in-start');
    void ld.offsetWidth;                                           // start from transparent
    ld.classList.remove('is-in-start');                            // veil fades in…
    setTimeout(pop, 300 - FIRST);                                  // …the triangles pop in…
    setTimeout(() => { location.href = url.href; }, 300 + FILL_ALL + 250);   // …then the next page
  }, true);
})();
