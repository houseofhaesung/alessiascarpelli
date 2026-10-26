/* Mobile menu (below 1024px): the stack icon opens a full-screen menu
   on a 90% white veil; the icon turns into an X to close it.
   Used by index.html, about.html and work.html. */
(() => {
  const css = `
    .menu-btn { width: 44px; height: 44px; margin-right: -11px; display: grid; place-items: center; color: #0b0b0b; }
    .menu-btn svg { width: 22px; height: 22px; }
    .menu-btn .i-close { display: none; }
    .menu-btn[aria-expanded="true"] .i-open { display: none; }
    .menu-btn[aria-expanded="true"] .i-close { display: block; }
    .menu-btn:focus-visible { outline: 2px solid #FF3686; outline-offset: 2px; }

    .mobile-menu {
      position: fixed; inset: 0; z-index: 40;
      background: rgba(255, 255, 255, 0.9);
      -webkit-backdrop-filter: blur(2px); backdrop-filter: blur(2px);
      padding: 150px var(--mpad, 26px) 40px;
      opacity: 0; transition: opacity .3s ease;
    }
    .mobile-menu.is-open { opacity: 1; }
    .mobile-menu ul { display: grid; gap: 0; }
    .mobile-menu a {
      display: inline-block;
      font-family: "Faculty Glyphic", serif; font-weight: 400; text-transform: uppercase;
      font-size: clamp(28px, 9.5vw, 46px); line-height: 1.6;   /* Faculty Glyphic: 39px on a 412px phone, as in the design */
      color: #0b0b0b; transition: color .2s ease;
    }
    .mobile-menu a:hover, .mobile-menu a:focus-visible { color: #FF3686; outline: none; }
    .mobile-menu li { opacity: 0; transform: translateY(8px); transition: opacity .35s ease, transform .35s ease; }
    .mobile-menu.is-open li { opacity: 1; transform: none; }
    .mobile-menu.is-open li:nth-child(2) { transition-delay: .04s; }
    .mobile-menu.is-open li:nth-child(3) { transition-delay: .08s; }
    .mobile-menu.is-open li:nth-child(4) { transition-delay: .12s; }
    html.menu-open, html.menu-open body { overflow: hidden; }

    /* Site cursor: the logo A, tilted 45° like an arrow. Black A on light backgrounds,
       white A on the black footer (images/cursor*.png, 2x for sharp screens).
       The click point is the top of the A. Desktop only: a mouse/trackpad on a screen
       1024px or wider (the desktop layout). Phones and tablets keep their normal pointer. */
    @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
      html, body, body * {
        cursor: url("images/cursor.png") 4 1, auto !important;
        cursor: -webkit-image-set(url("images/cursor.png") 1x, url("images/cursor@2x.png") 2x) 4 1, auto !important;
        cursor: image-set(url("images/cursor.png") 1x, url("images/cursor@2x.png") 2x) 4 1, auto !important;
      }
      .site-footer, .site-footer * {
        cursor: url("images/cursor-white.png") 4 1, auto !important;
        cursor: -webkit-image-set(url("images/cursor-white.png") 1x, url("images/cursor-white@2x.png") 2x) 4 1, auto !important;
        cursor: image-set(url("images/cursor-white.png") 1x, url("images/cursor-white@2x.png") 2x) 4 1, auto !important;
      }
      .stage.is-dragging, .stage.is-dragging * { cursor: grabbing !important; }   /* while dragging the home gallery */
    }
    .mobile-menu { overflow-y: auto; }
    /* WORK: its pages listed underneath (open by default) */
    .mm-work { display: none; padding: .1em 0 1em; }
    .mm-work.is-open { display: block; }
    .mobile-menu .mm-work a { display: block; font-family: "ABC Areal", "Helvetica Neue", Helvetica, Arial, sans-serif; font-weight: 400; text-transform: none; font-size: clamp(18px, 6.77vw, 31px); line-height: 1.29; }
    .mobile-menu .mm-work li { opacity: 1; transform: none; }
    @media (min-width: 1024px) { .mobile-menu { display: none !important; } }
    @media (prefers-reduced-motion: reduce) { .mobile-menu, .mobile-menu li { transition: none; } }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  function setOpen(open) {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.documentElement.classList.toggle('menu-open', open);
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(() => menu.classList.add('is-open'));
      menu.querySelector('a')?.focus({ preventScroll: true });
    } else {
      menu.classList.remove('is-open');
      setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 300);
    }
  }

  // WORK: show the categories (from works.js) instead of leaving the page
  const work = menu.querySelector('[data-mobile-work]');
  const C = window.CATEGORIES || [];
  const MOBILE_WORK_ITEMS = 4;   // how many Work pages the phone menu lists (4 = the Fashion Design pages, as in the design)
  if (work && C.length) {
    const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const list = document.createElement('ul');
    list.className = 'mm-work'; list.id = 'mm-work';
    // as in the design: the Fashion Design pages, then the other Work sections
    const entries = C.flatMap((c) => ((c.subs || []).length ? c.subs : [c]));
    list.innerHTML = entries.slice(0, MOBILE_WORK_ITEMS).map((x) => `<li><a href="category.html#${esc(x.id)}">${esc(x.menu || x.title)}</a></li>`).join('');
    work.after(list);
    list.classList.add('is-open');
    work.setAttribute('aria-expanded', 'true'); work.setAttribute('aria-controls', 'mm-work');
    work.addEventListener('click', (e) => {
      e.preventDefault(); e.stopPropagation();
      const open = !list.classList.contains('is-open');
      list.classList.toggle('is-open', open);
      work.setAttribute('aria-expanded', String(open));
    });
  }

  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);       // a link was chosen
    else if (e.target === menu) setOpen(false);       // tap on the empty veil
  });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setOpen(false); btn.focus(); }
  });
  matchMedia('(min-width: 1024px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
})();
