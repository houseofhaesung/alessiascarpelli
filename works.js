/* =====================================================================
   WORKS — one entry per project. Used by the home page (index.html),
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
   cover        the main photo (used on the home page, the category pages and the project page)
   subtitle     optional line under the heading (e.g. the collection name)
   subtitleLink optional web address: the subtitle becomes a pink link (opens in a new tab)
   coverInset   true = the cover sits smaller on white with a line before the text
                (for photos on a white background); leave out for a full-height cover
   description  one or more paragraphs (a list of strings); <b>bold</b> is allowed
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
    subtitle: 'Under a Punk Equinox',
    year: '2026',
    heading: ['2026', 'Stacy Wear', '15 Winter'],
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-02.jpg', w: 1067, h: 1600, alt: 'Model in mauve cargo jacket against a wall' },
    description: [
      'Under a Punk Equinox explores the coexistence of opposing worlds: underground culture and nature, rebellion and craftsmanship, distortion and harmony. Rooted in rave culture and underground aesthetics, the collection translates these contrasts into unconventional silhouettes, experimental volumes, and distinctive garment constructions. Pattern making lies at the heart of the creative process, shaping the body through geometric lines and unexpected proportions. Each piece combines a bold visual language with Italian artisanal manufacturing, reclaimed fabrics, deadstock materials, and natural fibres.',
      'Rather than following predefined trends, the collection emerges from a personal and emotional response to the world. It reflects the social and cultural transformations that shape our lives, questioning the expectations and labels through which we define ourselves. For Stacy Wear, fashion becomes a space for political and personal expression, where refusing to fit into a single category is an act of freedom. We should not have to choose between different parts of ourselves to be accepted; our contradictions are a source of strength, not a weakness.',
    ],
    credits: [],
    // TODO: these two were cut from the mockup — replace with the original files
    images: [
      { src: 'images/work/stacy-15-winter-02.jpg', w: 505, h: 758, alt: 'Two models in black denim with pink stitching' },
      { src: 'images/work/stacy-15-winter-03.jpg', w: 633, h: 948, alt: 'Model in black denim and pink faux-fur coat in a garage' },
    ],
  },
  {
    id: 'work-01',
    title: 'Title',
    heading: ['20XX', 'Title'],
    year: '2024',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-01.jpg', w: 1067, h: 1600, alt: 'Model in chain bra lying on black vinyl' },
    description: ['Description'],
    credits: [],
    images: [],
  },
  {
    id: 'work-03',
    title: 'Title',
    heading: ['20XX', 'Title'],
    year: '2023',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-03.jpg', w: 1279, h: 1600, alt: 'Model in knitted balaclava holding flowers' },
    description: ['Description'],
    credits: [],
    images: [],
  },
  {
    id: 'work-04',
    title: 'Title',
    heading: ['20XX', 'Title'],
    year: '2023',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-04.jpg', w: 1066, h: 1600, alt: 'Three models in black vinyl on a faux-fur rug' },
    description: ['Description'],
    credits: [],
    images: [],
  },
  {
    id: 'work-05',
    title: 'Stacy Wear for Anetha',
    subtitle: 'METAL Magazine',
    subtitleLink: 'https://metalmagazine.eu/en/post/anetha',
    year: '2022',
    heading: ['2022', 'Stacy Wear', 'for Anetha'],
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-05.jpg', w: 1280, h: 1600, alt: 'Anetha in a white puffer and Stacy Wear hipless pants' },
    coverInset: true,
    description: [
      'Stacy Wear was featured in a fashion editorial for METAL Magazine, starring Anetha, the French DJ and electronic music producer known for her influence on the international techno scene. The shoot was styled by Clelia Cazals and photographed by Maud Rallière, with production by Subete Agency. Anetha wore Stacy Wear’s signature genderless hipless pants, reflecting the brand’s experimental approach to silhouette, body proportions, and gender-fluid design.',
      'The collaboration brought together fashion and electronic music culture through a shared interest in pushing creative boundaries and challenging conventional aesthetics. Anetha’s artistic vision, which embraces eclecticism, individuality, and sustainability, resonates with Stacy Wear’s commitment to more conscious and unconventional design.',
      'Featured in an editorial that explores her identity as an artist beyond music alone, the project highlights the dialogue between underground culture, fashion, and personal expression.',
    ],
    credits: [],
    images: [],
  },
  {
    id: 'work-06',
    title: 'Title',
    heading: ['20XX', 'Title'],
    year: '2023',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-06.jpg', w: 1068, h: 1600, alt: 'Model in lilac faux-fur stole and silver dress between mirrors' },
    description: ['Description'],
    credits: [],
    images: [],
  },
];

/* =====================================================================
   HOME — the four categories on the home page (desktop spines and phone bands), in order, and the photos that
   slide out when one opens (3–4 each is ideal).
   (label colours are automatic: the open one is pink with white text,
    the others white with black text and a black border)
   photos   a project id from WORKS above (opens that project), or
            { src, w, h, alt } for any other photo (opens the category page)
   TODO: Pattern Making and Clo 3D photos were cut from the mockups — swap in the originals.
   ===================================================================== */
window.HOME = [
  { id: 'fashion-design', label: 'Fashion Design',
    photos: [
      'stacy-15-winter',
      { src: 'images/fashion/selected-03.jpg', w: 1200, h: 1600, alt: 'Model lying on asphalt in a patchwork denim dress and fur boots' },
      { src: 'images/fashion/selected-02.jpg', w: 1068, h: 1600, alt: 'Model in a burgundy faux-fur top and skirt at night' },
      'work-05',
    ] },
  { id: 'styling-art-direction', label: 'Styling & Art Direction',
    photos: [
      'work-03',
      { src: 'images/fashion/styling-03.jpg', w: 681, h: 1021, alt: 'Two models in white and black head wraps in a forest' },
      { src: 'images/fashion/styling-04.jpg', w: 1044, h: 1305, alt: 'Close-up of glossy lips with silver grills' },
    ] },
  { id: 'pattern-making', label: 'Pattern Making',
    photos: [
      { src: 'images/fashion/pattern-02.jpg', w: 1067, h: 1600, alt: 'Iridescent snakeskin bomber jacket' },
      { src: 'images/fashion/pattern-03.jpg', w: 1067, h: 1600, alt: 'Model in a purple vinyl corset and skirt' },
    ] },
  { id: 'clo3d', label: 'Clo 3D',
    photos: [
      { src: 'images/fashion/clo3d-01.jpg', w: 900, h: 1600, alt: '3D garment: pink faux-fur coat' },
      { video: 'images/fashion/clo3d-rotation.mp4', src: 'images/fashion/clo3d-rotation-poster.jpg', w: 926, h: 1200, alt: '3D garment turning: checked corset and skirt' },
    ] },
];

/* =====================================================================
   CATEGORIES — the Work menu, in order.
   id      used in the link: category.html#<id>
   title   the big heading on the category page
   menu    how it is written in the Work menu
   subs    optional sub-pages (Fashion Design). Each sub can list its
           projects in order with  works: [ids…]  (they open the project page),
           or plain pictures with  photos: [{ src, w, h, alt }…]
           (a project id in that list shows the project's cover and opens it).
           layout: where each picture sits on the desktop page, as
           [x, y, width, height] in pixels of the 1920×1080 design
           (the photo area runs from y 336 to 1096).
           Scrolling moves from one sub-page to the next.
   mobileWide  true = on phones the first picture spans both columns (the rest are
               cropped to the same size in two columns)
   ===================================================================== */
window.CATEGORIES = [
  {
    id: 'fashion-design', title: 'Fashion design', menu: 'Fashion Design',
    subs: [
      { id: 'selected-works', title: 'Selected Works',
        photos: [
          'stacy-15-winter',
          { src: 'images/fashion/selected-02.jpg', w: 1068, h: 1600, alt: 'Model in a burgundy faux-fur top and skirt at night' },
          { src: 'images/fashion/selected-03.jpg', w: 1200, h: 1600, alt: 'Model lying on asphalt in a patchwork denim dress and fur boots' },
          'work-05',
        ],
        layout: [[0, 356, 548, 710], [557, 450, 352, 526], [919, 394, 486, 649], [1421, 365, 498, 702]] },
      { id: 'concept-lookbook', title: 'Concept & Lookbook', mobileWide: true,
        photos: [
          { src: 'images/fashion/concept-02.jpg', w: 2000, h: 1333, alt: 'Group of six models in black and white under arches' },
          { src: 'images/fashion/concept-01.jpg', w: 471, h: 706, alt: 'Model in black vinyl and lilac faux-fur sleeves' },
          { src: 'images/fashion/concept-03.jpg', w: 419, h: 626, alt: 'Model in denim corset in a garden' },
        ],
        layout: [[0, 405, 1010, 674], [1022, 494, 363, 543], [1400, 428, 520, 626]] },
      // TODO: Keira, Layla, the vinyl wrap top and the line-up were cut from the mockups — replace with the originals
      { id: 'technical-development', title: 'Technical Development',
        photos: [
          { src: 'images/fashion/technical-01.jpg', w: 465, h: 697, alt: 'Technical sheet: Keira lace blouse' },
          { src: 'images/fashion/technical-02.jpg', w: 488, h: 358, alt: 'Technical sheet: Layla sequin halter gown' },
          { src: 'images/fashion/technical-03.jpg', w: 477, h: 706, alt: 'Model in black vinyl wrap top and iridescent trousers' },
          { src: 'images/fashion/technical-04.jpg', w: 724, h: 1299, alt: 'Model in a black slip dress on a sofa with a white bag' },
        ],
        layout: [[0, 393, 465, 697], [483, 561, 488, 358], [973, 388, 477, 706], [1472, 388, 448, 706]] },
      { id: 'fashion-illustration', title: 'Fashion Illustration', mobileWide: true,
        photos: [
          { src: 'images/fashion/illustration-01.jpg', w: 966, h: 323, alt: 'Line-up illustration of ten looks' },
          { src: 'images/fashion/illustration-02.jpg', w: 430, h: 572, alt: 'Watercolour sketch of a purple look' },
          { src: 'images/fashion/illustration-03.jpg', w: 458, h: 694, alt: 'Illustration: faux-fur jacket and denim skirt' },
        ],
        layout: [[0, 580, 966, 323], [1001, 475, 430, 572], [1438, 395, 458, 694]] },
    ],
  },
  { id: 'pattern-making', title: 'Pattern making', menu: 'Pattern Making',
    photos: [
      { src: 'images/fashion/pattern-01.jpg', w: 384, h: 512, alt: 'Bouclé double-breasted coat on a dress form' },
      { src: 'images/fashion/pattern-02.jpg', w: 1067, h: 1600, alt: 'Iridescent snakeskin bomber jacket' },
      { src: 'images/fashion/pattern-03.jpg', w: 1067, h: 1600, alt: 'Model in a purple vinyl corset and skirt' },
      'work-06',
    ],
    layout: [[0, 340, 550, 713], [574, 392, 402, 601], [985, 359, 441, 660], [1434, 404, 486, 655]] },
  { id: 'clo3d', title: 'Clo 3D', menu: 'Clo3d',
    photos: [
      { src: 'images/fashion/clo3d-01.jpg', w: 900, h: 1600, alt: '3D garment: pink faux-fur coat' },
      { src: 'images/fashion/clo3d-02.jpg', w: 468, h: 720, alt: '3D garment: black polo on a mannequin' },
      { src: 'images/fashion/clo3d-04.jpg', w: 1066, h: 1600, alt: 'White faux-fur hoodie' },
      { video: 'images/fashion/clo3d-rotation.mp4', src: 'images/fashion/clo3d-rotation-poster.jpg', w: 926, h: 1200, alt: '3D garment turning: checked corset and skirt' },
    ],
    layout: [[0, 348, 405, 718], [420, 416, 388, 598], [820, 389, 452, 651], [1288, 347, 632, 720]] },
  // TODO: photos cut from the mockup — replace with the original files
  { id: 'styling-art-direction', title: 'Styling & Art Direction', menu: 'Styling & Art Direction',
    photos: [
      { src: 'images/fashion/styling-01.jpg', w: 547, h: 709, alt: 'Two women in faux-fur coats before a sequin curtain' },
      'work-03',
      { src: 'images/fashion/styling-03.jpg', w: 681, h: 1021, alt: 'Two models in white and black head wraps in a forest' },
      { src: 'images/fashion/styling-04.jpg', w: 1044, h: 1305, alt: 'Close-up of glossy lips with silver grills' },
    ],
    layout: [[4, 344, 547, 709], [569, 435, 405, 508], [987, 361, 420, 666], [1417, 343, 503, 710]] },
];

/* PRESS — the Press page (category.html#brand-collaboration …), same layout as the Work pages.
   It is not listed in the Work menu (inMenu: false); the header's PRESS opens it. */
window.CATEGORIES.push({
  id: 'press', title: 'Press', menu: 'Press', inMenu: false,
  subs: [
    { id: 'brand-collaboration', title: 'Brand Collaboration',
      photos: [
          { src: 'images/press/brand-01.jpg', w: 1066, h: 1600, alt: 'Model with arms raised in a black and white op-art crop top and skirt' },
          { src: 'images/press/brand-02.jpg', w: 1066, h: 1600, alt: 'Model in a black vinyl cropped jacket and cut-out trousers' },
          { src: 'images/press/brand-03.jpg', w: 902, h: 1600, alt: 'Actress on the red carpet in a sheer embellished top and wide satin trousers' },
          { src: 'images/press/brand-04.jpg', w: 878, h: 1097, alt: 'Host in a multicoloured faux-fur coat on stage' },
      ],
      layout: [[0, 356, 548, 710], [581, 423, 366, 580], [958, 356, 410, 725], [1380, 379, 539, 674]] },
    { id: 'features', title: 'Features',
      photos: [
          { src: 'images/press/features-01.jpg', w: 1067, h: 1600, alt: 'Model in a chain bra lying on black vinyl' },
          { src: 'images/press/features-02.jpg', w: 1066, h: 1600, alt: 'Model in a black pinstripe jacket with ruffled sleeves on yellow' },
          { src: 'images/press/features-03.jpg', w: 1066, h: 1600, alt: 'Model in silver cargo trousers on a beach' },
          { src: 'images/press/features-04.jpg', w: 1143, h: 1600, alt: 'Model in a sheer lilac organza shirt and trousers' },
      ],
      layout: [[0, 356, 548, 710], [557, 450, 352, 526], [920, 356, 484, 725], [1421, 365, 498, 702]] },
    { id: 'shows', title: 'Shows', mobileWide: true,
      photos: [
          { src: 'images/press/shows-01.jpg', w: 2000, h: 903, alt: 'Talk in a community space, audience listening' },
          { src: 'images/press/shows-02.jpg', w: 1200, h: 1600, alt: 'Alessia smiling at a podcast microphone' },
          { src: 'images/press/shows-03.jpg', w: 1280, h: 1600, alt: 'Poster: Once in Paris pop-up event' },
      ],
      layout: [[0, 514, 1010, 456], [1024, 482, 365, 543], [1400, 428, 520, 626]] },
  ],
});

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

/* Every picture gets a project page. Pictures listed above as { src, … } that are not
   a project yet become a placeholder project (heading "20XX / Title", text "Description"),
   named after the file: work.html#p-<file name>. To fill one in, copy it into WORKS
   with the same id and replace the placeholders. */
(() => {
  const W = window.WORKS;
  const make = (ph, cat, sub) => {
    if (!ph || typeof ph === 'string') return ph;
    const id = 'p-' + (ph.video || ph.src).split('/').pop().replace(/\.[^.]+$/, '');
    if (!W.some((w) => w.id === id)) {
      W.push({ id, title: 'Title', heading: ['20XX', 'Title'], year: '20XX',
               category: cat, sub: sub || undefined, cover: ph, description: ['Description'], credits: [], images: [] });
    }
    return id;
  };
  for (const c of window.CATEGORIES) {
    if (c.photos) c.photos = c.photos.map((p) => make(p, c.id));
    for (const s of c.subs || []) if (s.photos) s.photos = s.photos.map((p) => make(p, c.id, s.id));
  }
  for (const h of window.HOME) h.photos = h.photos.map((p) => make(p, h.id));
})();
