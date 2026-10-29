/* Work menu (desktop and tablet, 768px and up).
   Clicking WORK in the header turns it pink and slides a panel in from the left:
   a 90% white veil with the categories from works.js. "X CLOSE", Esc or a click
   outside the panel closes it. Below 768px the stack-icon menu (menu.js) is used.
   Needs works.js loaded first. Used by every page. */
(() => {
  const C = window.CATEGORIES || [];
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const here = decodeURIComponent(location.hash.slice(1));

  const css = `
    .wm-veil { position: fixed; inset: 0; z-index: 59; }
    .wm-panel {
      position: fixed; top: 0; bottom: 0; left: 0; z-index: 60;
      width: 24.95vw; min-width: 360px;                      /* 479px at 1920 */
      border-right: 1px solid #0b0b0b;
      background: rgba(255, 255, 255, 0.9);
      transform: translateX(-100%);
      transition: transform .55s cubic-bezier(.22, 1, .36, 1);
      overflow-y: auto; overscroll-behavior: contain;
      font-family: "ABC Areal", "Helvetica Neue", Helvetica, Arial, sans-serif; color: #0b0b0b;
    }
    .wm-panel.is-open { transform: none; }
    .wm-top { height: var(--header, clamp(72px, 10.4vh, 116px)); display: flex; align-items: center; padding-left: var(--pad, 3.6vw); }
    .wm-close { font-weight: 700; font-size: clamp(10.5pt, 1.25vw, 19.5pt); letter-spacing: 0; color: #0b0b0b; transition: color .2s ease; }
    .wm-close:hover:not(.is-fresh) { color: #FF3686; }
    .hd-link { color: #0b0b0b; transition: color .2s ease; }
    .hd-link:hover, .hd-link:focus-visible, .hd-link[aria-current="page"] { color: #FF3686; outline: none; }
    .wm-close:focus-visible { outline: 2px solid #FF3686; outline-offset: 4px; }
    .wm-body { padding: 0 var(--pad, 3.6vw) 6vh; margin-top: calc(13.8vh - var(--header, clamp(72px, 10.4vh, 116px))); }
    .wm-title { font-family: "Faculty Glyphic", serif; font-weight: 400; line-height: 1.05;
                font-size: clamp(30pt, min(3.6vw, 6.4vh), 72pt); }
    .wm-list { margin-top: 1.6vh; }
    .wm-more { margin-top: 1.5vh !important; }
    .wm-cat > a, .wm-cat > span { display: inline-block; font-family: "Faculty Glyphic", serif;
      font-size: clamp(20px, min(1.82vw, 3.24vh), 40px); line-height: 1.37; white-space: nowrap; color: #0b0b0b; transition: color .2s ease; }
    .wm-cat { margin-top: .12em; }
    .wm-subs { margin: .45em 0 .6em; }
    .wm-subs a { display: inline-block; font-size: clamp(14px, min(1.25vw, 2.22vh), 26px); line-height: 1.67; color: #0b0b0b; transition: color .2s ease; }
    .wm-panel a:hover, .wm-panel a:active, .wm-panel a:focus-visible, .wm-cat a[aria-current="page"], .wm-subs a[aria-current="page"] { color: #FF3686; outline: none; }
    .wm-more { margin-top: .2vh; }
    .wm-big > a { display: inline-block; font-family: "Faculty Glyphic", serif; color: #0b0b0b; transition: color .2s ease;
                  font-size: clamp(30pt, min(3.6vw, 6.4vh), 72pt); line-height: 1.33; }
    .wm-panel li { opacity: 0; transform: translateX(-10px); transition: opacity .4s ease, transform .4s ease; }
    .wm-panel.is-open li { opacity: 1; transform: none; transition-delay: calc(.12s + var(--i) * .04s); }
    a.is-work-open { visibility: hidden; }   /* X CLOSE takes its place */
    html.wm-lock { overflow: hidden; }   /* the page itself only (not body: that would unstick pinned content behind) */
    @media (max-width: 767.98px) { .wm-panel, .wm-veil { display: none !important; } }
    @media (prefers-reduced-motion: reduce) { .wm-panel, .wm-panel li { transition: none; } }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  let i = 0;
  const items = C.filter((c) => c.inMenu !== false).map((c) => {
    const subs = c.subs || [];
    const first = subs.length ? subs[0].id : c.id;
    const subList = subs.length
      ? `<ul class="wm-subs">${subs.map((s) => `<li style="--i:${i++}"><a href="category.html#${esc(s.id)}"${s.id === here ? ' aria-current="page"' : ''}>${esc(s.title)}</a></li>`).join('')}</ul>`
      : '';
    return `<li class="wm-cat" style="--i:${i++}"><a href="category.html#${esc(first)}"${!subs.length && c.id === here ? ' aria-current="page"' : ''}>${esc(c.menu || c.title)}</a>${subList}</li>`;
  }).join('');
  const page = location.pathname.split('/').pop();
  const more = [['About', 'about.html'], ['Press', '#'], ['Contact', '#']]
    .map(([t, h]) => `<li class="wm-big" style="--i:${i++}"><a href="${h}"${h === page ? ' aria-current="page"' : ''}>${t}</a></li>`).join('');

  const veil = document.createElement('div');
  veil.className = 'wm-veil'; veil.hidden = true;
  const panel = document.createElement('nav');
  panel.className = 'wm-panel'; panel.id = 'work-menu'; panel.hidden = true;
  panel.setAttribute('aria-label', 'Work');
  panel.innerHTML = `
    <div class="wm-top"><button type="button" class="wm-close">X CLOSE</button></div>
    <div class="wm-body">
      <p class="wm-title">Work</p>
      <ul class="wm-list">${items}</ul>

    </div>`;
  document.body.append(veil, panel);

  const triggers = [...document.querySelectorAll('[data-work-menu]')];
  let lastTrigger = null;

  function open(trigger) {
    lastTrigger = trigger;
    triggers.forEach((t) => { t.classList.add('is-work-open'); t.setAttribute('aria-expanded', 'true'); });
    veil.hidden = false; panel.hidden = false;
    document.documentElement.classList.add('wm-lock');
    requestAnimationFrame(() => requestAnimationFrame(() => panel.classList.add('is-open')));
    const x = panel.querySelector('.wm-close');
    x.classList.add('is-fresh');                       // it opens right under the cursor: stay black until the mouse leaves it
    x.addEventListener('pointerleave', () => x.classList.remove('is-fresh'), { once: true });
    setTimeout(() => x.focus({ preventScroll: true }), 50);
  }
  function close() {
    panel.classList.remove('is-open');
    triggers.forEach((t) => { t.classList.remove('is-work-open'); t.setAttribute('aria-expanded', 'false'); });
    document.documentElement.classList.remove('wm-lock');
    veil.hidden = true;
    setTimeout(() => { if (!panel.classList.contains('is-open')) panel.hidden = true; }, 550);
    lastTrigger?.focus({ preventScroll: true });
  }

  triggers.forEach((t) => {
    t.setAttribute('aria-controls', 'work-menu');
    t.setAttribute('aria-expanded', 'false');
    t.addEventListener('click', (e) => {
      if (!matchMedia('(min-width: 768px)').matches) return;      // phones: follow the link
      e.preventDefault();
      panel.classList.contains('is-open') ? close() : open(t);
    });
  });
  panel.querySelector('.wm-close').addEventListener('click', close);
  veil.addEventListener('click', close);
  panel.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    // a link to the page we're already on (only the #part changes): just close
    if (a && a.pathname === location.pathname) setTimeout(close, 0);
  });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && panel.classList.contains('is-open')) close(); });
  addEventListener('hashchange', () => {
    const h = decodeURIComponent(location.hash.slice(1));
    panel.querySelectorAll('.wm-subs a').forEach((a) => (a.hash.slice(1) === h ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current')));
    panel.querySelectorAll('.wm-cat').forEach((li) => {
      const c = C.find((x) => x.id === li.querySelector('a').hash.slice(1));
      li.classList.toggle('is-here', !!c && (c.id === h || (c.subs || []).some((s) => s.id === h)));
    });
  });
  // the wheel shouldn't move the page behind the open panel
  veil.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
})();
