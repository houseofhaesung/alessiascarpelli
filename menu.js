/* Mobile menu (below 768px): the stack icon opens a full-screen menu
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
      padding: 120px var(--mpad, 26px) 48px;                    /* "Work" sits at 130px on a 412×917 phone */
      opacity: 0; transition: opacity .3s ease;
    }
    .mobile-menu.is-open { opacity: 1; }
    .mobile-menu ul { display: block; margin: 0; padding: 0; list-style: none; }
    .mobile-menu a { display: inline-block; color: #0b0b0b; transition: color .2s ease; }
    .mobile-menu a:hover, .mobile-menu a:focus-visible, .mm-cats a[aria-current="page"] { color: #FF3686; outline: none; }
    /* main entries: Work, About, Press, Contact */
    .mm-top > li > a { font-family: "Faculty Glyphic", serif; font-weight: 400; font-size: min(10.7vw, 48px); line-height: 1.41; }
    /* Work's categories */
    .mobile-menu .mm-cats { padding: .1em 0 .3em; }
    .mm-cats > li > a { font-family: "Faculty Glyphic", serif; font-weight: 400; font-size: min(7.6vw, 34px); line-height: 1.37; }
    /* a category's own pages */
    .mobile-menu .mm-subs { padding: .5em 0 .75em; }
    .mm-subs a { font-family: "ABC Areal", "Helvetica Neue", Helvetica, Arial, sans-serif; font-weight: 400; font-size: min(4.85vw, 22px); line-height: 1.4; }
    .mobile-menu li { opacity: 0; transform: translateY(8px); transition: opacity .35s ease, transform .35s ease; }
    .mobile-menu.is-open li { opacity: 1; transform: none; }
    .mobile-menu .mm-cats li, .mobile-menu .mm-subs li { opacity: 1; transform: none; }
    .mobile-menu.is-open .mm-top > li:nth-child(2) { transition-delay: .04s; }
    .mobile-menu.is-open .mm-top > li:nth-child(3) { transition-delay: .08s; }
    .mobile-menu.is-open .mm-top > li:nth-child(4) { transition-delay: .12s; }
    html.menu-open, html.menu-open body { overflow: hidden; }
    header img { transition: opacity .3s ease; }
    html.menu-open header img { opacity: .12; }               /* the logo fades behind the veil; the X stays */

    /* Site cursor: the logo A, tilted 45° like an arrow. Black A on light backgrounds,
       white A on the black footer (images/cursor*.png, 2x for sharp screens).
       The click point is the top of the A. Desktop only: a mouse/trackpad on a screen
       768px or wider (the desktop layout). Phones and tablets keep their normal pointer. */
    @media (min-width: 768px) and (hover: hover) and (pointer: fine) {
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
    @media (min-width: 768px) { .mobile-menu { display: none !important; } }
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

  // WORK: always followed by its categories and their pages (from works.js)
  const work = menu.querySelector('[data-mobile-work]');
  const C = window.CATEGORIES || [];
  menu.querySelector('ul').classList.add('mm-top');
  if (work && C.length) {
    const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const here = location.pathname.endsWith('category.html') ? decodeURIComponent(location.hash.slice(1)) : '';
    const cur = (id) => (id === here ? ' aria-current="page"' : '');
    work.textContent = 'Work';
    const list = document.createElement('ul');
    list.className = 'mm-cats';
    list.innerHTML = C.map((c) => {
      const subs = c.subs || [];
      const first = subs.length ? subs[0].id : c.id;
      return `<li><a href="category.html#${esc(first)}"${subs.length ? '' : cur(c.id)}>${esc(c.menu || c.title)}</a>` +
        (subs.length ? `<ul class="mm-subs">${subs.map((x) => `<li><a href="category.html#${esc(x.id)}"${cur(x.id)}>${esc(x.title)}</a></li>`).join('')}</ul>` : '') +
        `</li>`;
    }).join('');
    work.after(list);
    work.removeAttribute('aria-current');
  }
  // the other entries in title case, as in the design
  menu.querySelectorAll('.mm-top > li > a').forEach((a) => { a.textContent = a.textContent.charAt(0) + a.textContent.slice(1).toLowerCase(); });

  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);       // a link was chosen
    else if (e.target === menu) setOpen(false);       // tap on the empty veil
  });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setOpen(false); btn.focus(); }
  });
  matchMedia('(min-width: 768px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
})();
