/* =====================================================================
   WORKS — one entry per project. Used by the home gallery (index.html),
   the category pages (category.html) and the project page (work.html).
   To add a project, copy one entry.

   id           short name used in the link: work.html#<id>
                (letters, numbers and - only)
   title        project name
   year         e.g. "2024"
   category     which Work menu section it belongs to (an id from CATEGORIES below)
   sub          for Fashion Design: which sub-page (an id from its subs)
   heading      the big lines next to the photo on the project page
                (leave out and the year + title are used)
   home         false = don't show this project in the home gallery
   cover        the image shown on the home gallery
   size         size on the home gallery: "L" tall, "M" medium, "S" small
                (leave out and the pattern M, L, S, M, L … is used)
   mobileRatio  phones: width ÷ height of the full-width photo box (crops the photo);
                leave out to show the photo uncropped
   description  one or more paragraphs; <b>bold</b> is allowed
   credits      list of [role, name] pairs
   images       the photos on the project page, in order
                (the cover is shown first automatically)

   w, h         an image's pixel size (only the ratio matters), so the
                layout doesn't jump while it loads.

   TODO: titles, years, categories, texts and credits below are
   placeholders — replace them with the real project information.
   ===================================================================== */
window.WORKS = [
  {
    id: 'stacy-15-winter',
    title: 'Stacy Wear 15 Winter',
    year: '2026',
    heading: ['2026', 'Stacy Wear', '15 Winter'],
    category: 'fashion-design', sub: 'selected-works',
    // TODO: temporary photo cut from the mockup — replace with the original file
    cover: { src: 'images/work/stacy-15-winter.jpg', w: 1112, h: 780, alt: 'Two models in black denim with pink stitching' },
    home: false,
    description: '',
    credits: [],
    images: [],
  },
  {
    id: 'work-01',
    title: 'Project Title 01',
    year: '2024',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-01.jpg', w: 1067, h: 1600, alt: 'Model in chain bra lying on black vinyl' },
    size: 'M',
    mobileRatio: 0.875,
    description: 'Project description goes here. Write a short paragraph about the idea, the materials and the people involved.',
    credits: [['Design', 'Alessia Scarpelli'], ['Photo', 'Name Surname'], ['Model', 'Name Surname']],
    images: [],
  },
  {
    id: 'work-02',
    title: 'Project Title 02',
    year: '2024',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-02.jpg', w: 1067, h: 1600, alt: 'Model in mauve cargo jacket against a wall' },
    size: 'L',
    description: 'Project description goes here.',
    credits: [['Design', 'Alessia Scarpelli'], ['Photo', 'Name Surname']],
    images: [],
  },
  {
    id: 'work-03',
    title: 'Project Title 03',
    year: '2023',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-03.jpg', w: 1279, h: 1600, alt: 'Model in knitted balaclava holding flowers' },
    size: 'S',
    description: 'Project description goes here.',
    credits: [['Design', 'Alessia Scarpelli'], ['Photo', 'Name Surname']],
    images: [],
  },
  {
    id: 'work-04',
    title: 'Project Title 04',
    year: '2023',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-04.jpg', w: 1066, h: 1600, alt: 'Three models in black vinyl on a faux-fur rug' },
    size: 'M',
    description: 'Project description goes here.',
    credits: [['Design', 'Alessia Scarpelli'], ['Photo', 'Name Surname']],
    images: [],
  },
  {
    id: 'work-05',
    title: 'Project Title 05',
    year: '2023',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-05.jpg', w: 1280, h: 1600, alt: 'Model in white puffer and cut-out trousers' },
    size: 'L',
    description: 'Project description goes here.',
    credits: [['Design', 'Alessia Scarpelli'], ['Photo', 'Name Surname']],
    images: [],
  },
  {
    id: 'work-06',
    title: 'Project Title 06',
    year: '2023',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-06.jpg', w: 1068, h: 1600, alt: 'Model in lilac faux-fur stole and silver dress between mirrors' },
    size: 'M',
    description: 'Project description goes here.',
    credits: [['Design', 'Alessia Scarpelli'], ['Photo', 'Name Surname']],
    images: [],
  },
];

/* =====================================================================
   HOME (desktop) — the four category spines, in order, and the photos that
   slide out when one opens (3–4 each is ideal).
   (label colours are automatic: the open one is pink with white text,
    the others white with black text and a black border)
   photos   a project id from WORKS above (opens that project), or
            { src, w, h, alt } for any other photo (opens the category page)
   TODO: Pattern Making and Clo 3D use About-page photos for now — swap in their own.
   ===================================================================== */
window.HOME = [
  { id: 'fashion-design', label: 'Fashion Designer', look: 'pink',
    photos: ['work-02', 'work-04', 'work-06'] },
  { id: 'styling-art-direction', label: 'Stylist & Art Director', look: 'outline',
    photos: ['work-03', 'work-01', 'work-05'] },
  { id: 'pattern-making', label: 'Pattern Maker', look: 'black',
    photos: [
      { src: 'images/about-02b.jpg', w: 1326, h: 1618, alt: 'Choosing fabric rolls' },
      { src: 'images/about-02a.jpg', w: 546, h: 809, alt: 'Collection overview moodboard' },
      { src: 'images/about-05b.jpg', w: 672, h: 803, alt: 'Fitting a top made of recycled plastic' },
    ] },
  { id: 'clo3d', label: 'Clo 3D Designer', look: 'pink-ink',
    photos: [
      { src: 'images/about-03a.jpg', w: 395, h: 701, alt: '3D garment: pink faux-fur coat' },
      { src: 'images/about-03b.jpg', w: 393, h: 701, alt: '3D garment: black tee and metallic trousers' },
      { src: 'images/about-03c.jpg', w: 395, h: 701, alt: '3D garment: long grey faux-fur coat' },
    ] },
];

/* Phone home page: photos in this order, laid out as
   one full-width photo, then two side by side, then full width, then two … and repeat. */
window.MOBILE_HOME = ['work-01', 'work-02', 'work-04', 'work-06', 'work-05', 'work-03'];

/* =====================================================================
   CATEGORIES — the Work menu, in order.
   id      used in the link: category.html#<id>
   title   the big heading on the category page
   menu    how it is written in the Work menu
   subs    optional sub-pages (Fashion Design). Each sub can list its
           projects in order with  works: [ids…]; otherwise every project
           with that  sub  is shown, in the WORKS order above.
   ===================================================================== */
window.CATEGORIES = [
  {
    id: 'fashion-design', title: 'Fashion design', menu: 'Fashion Design',
    subs: [
      { id: 'selected-works', title: 'Selected Works',
        works: ['stacy-15-winter', 'work-05', 'work-03', 'work-01', 'work-02', 'work-04', 'work-06'] },
      { id: 'concept-lookbook', title: 'Concept & Lookbook' },
      { id: 'technical-development', title: 'Technical Development' },
      { id: 'fashion-illustration', title: 'Fashion Illustration' },
    ],
  },
  { id: 'pattern-making', title: 'Pattern making', menu: 'Pattern Making' },
  { id: 'clo3d', title: 'Clo3d', menu: 'Clo3d' },
  { id: 'styling-art-direction', title: 'Styling & Art Direction', menu: 'Styling & Art Direction' },
];

/* helpers shared by the pages */
window.findPlace = (hash) => {
  const C = window.CATEGORIES;
  for (const c of C) {
    if (c.id === hash) return { cat: c, sub: (c.subs || [])[0] || null };
    for (const s of c.subs || []) if (s.id === hash) return { cat: c, sub: s };
  }
  return { cat: C[0], sub: (C[0].subs || [])[0] || null };
};
window.worksIn = (place) => {
  const W = window.WORKS;
  if (place.sub && place.sub.works) return place.sub.works.map((id) => W.find((w) => w.id === id)).filter(Boolean);
  return W.filter((w) => w.category === place.cat.id && (!place.sub || w.sub === place.sub.id));
};
