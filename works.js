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
    title: 'Stacy Wear 15th F/W',
    year: '2026',
    heading: ['2026', 'Stacy Wear', '15th F/W'],
    subtitle: 'Under a Punk Equinox',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-02.jpg', w: 1067, h: 1600, alt: 'Model in mauve cargo jacket against a wall' },
    description: ['Under a Punk Equinox celebrates the freedom to be many things at once, embracing complexity rather than seeking a single definition. It proposes a vision of fashion that goes beyond appearance, becoming a way to challenge rigid identities and claim the space to exist freely, authentically, and without compromise.'],
    panels: [
      { src: 'images/work/stacy-15-winter-01.jpg', w: 593, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { text: ['Under a Punk Equinox explores the coexistence of opposing worlds: underground culture and nature, rebellion and craftsmanship, distortion and harmony. Rooted in rave culture and underground aesthetics, the collection translates these contrasts into unconventional silhouettes, experimental volumes, and distinctive garment constructions. Pattern making lies at the heart of the creative process, shaping the body through geometric lines and unexpected proportions. Each piece combines a bold visual language with Italian artisanal manufacturing, reclaimed fabrics, deadstock materials, and natural fibres.', 'Rather than following predefined trends, the collection emerges from a personal and emotional response to the world. It reflects the social and cultural transformations that shape our lives, questioning the expectations and labels through which we define ourselves. For Stacy Wear, fashion becomes a space for political and personal expression, where refusing to fit into a single category is an act of freedom. We should not have to choose between different parts of ourselves to be accepted; our contradictions are a source of strength, not a weakness.'] },
      { src: 'images/work/stacy-15-winter-02.jpg', w: 507, h: 760, box: [6.58, 10.17, 85.5, 79.66] },
      { src: 'images/work/stacy-15-winter-03.jpg', w: 634, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-15-winter-04.jpg', w: 507, h: 760, box: [6.58, 11.43, 85.5, 79.66] },
      { src: 'images/work/stacy-15-winter-05.jpg', w: 634, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
    ],
  },
  {
    id: 'stacy-13',
    title: 'Stacy Wear 13th S/S',
    year: '2024',
    heading: ['2024', 'Stacy Wear', '13th S/S'],
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/work/stacy-13-01.jpg', w: 646, h: 954, alt: 'Stacy Wear 13th S/S' },
    description: ['Created the collection using reclaimed materials, including surplus fabrics from companies and old jeans cut apart and reconstructed into new shapes. I chose to photograph the campaign during Florence’s Wish Parade, a music street parade advocating against the city’s over-commercialisation and for the public’s right to shared urban space. The project reflected the brand’s ongoing commitment to freedom of expression, inclusivity, resistance and hope.'],
    panels: [
      { src: 'images/work/stacy-13-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { video: 'images/work/wab-video.mp4', src: 'images/work/wab-video-poster.jpg', w: 720, h: 1280, box: [2.97, 3.14, 93.74, 93.61], alt: 'Patchwork denim mermaid skirt at a fountain' },
      { src: 'images/work/stacy-13-03.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-13-04.jpg', w: 588, h: 785, box: [3.6, 9.22, 92.02, 82.29] },
      { src: 'images/work/stacy-13-05.jpg', w: 588, h: 785, box: [3.41, 9.22, 91.02, 82.29] },
      { src: 'images/work/stacy-13-06.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-13-07.jpg', w: 646, h: 865, box: [0.0, 4.61, 100.0, 90.67] },
      { src: 'images/work/stacy-13-08.jpg', w: 639, h: 865, box: [0.0, 4.61, 100.0, 90.67] },
    ],
  },
  {
    id: 'stacy-12',
    title: 'Stacy Wear 12th F/W',
    year: '2023',
    heading: ['2023', 'Stacy Wear', '12th F/W'],
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/work/stacy-12-01.jpg', w: 646, h: 954, alt: 'Stacy Wear 12th F/W' },
    description: ['Developed the twelfth Stacy Wear collection, overseeing design, pattern making, sewing and art direction. Reflective, high-shine materials were central to the collection, bringing a distinctive, unconventional aesthetic together with an elegant, precious finish.'],
    panels: [
      { src: 'images/work/stacy-12-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-12-02.jpg', w: 639, h: 801, box: [0.0, 7.97, 100.0, 83.96] },
      { src: 'images/work/stacy-12-03.jpg', w: 646, h: 801, box: [0.0, 7.97, 100.0, 83.96] },
      { src: 'images/work/stacy-12-04.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-12-05.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-12-06.jpg', w: 639, h: 801, box: [0.0, 7.97, 100.0, 83.96] },
    ],
  },
  {
    id: 'stacy-11',
    title: 'Stacy Wear 11th S/S',
    year: '2023',
    heading: ['2023', 'Stacy Wear', '11th S/S'],
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/work/stacy-11-01.jpg', w: 646, h: 954, alt: 'Stacy Wear 11th S/S' },
    description: ['Developed the eleventh Stacy Wear collection, overseeing design, pattern making, sewing and art direction.'],
    panels: [
      { src: 'images/work/stacy-11-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-11-02.jpg', w: 599, h: 893, box: [2.97, 3.14, 93.74, 93.61] },
      { src: 'images/work/stacy-11-03.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-11-04.jpg', w: 599, h: 893, box: [2.97, 3.14, 93.74, 93.61] },
      { src: 'images/work/stacy-11-05.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-11-06.jpg', w: 639, h: 900, box: [0.0, 0.0, 100.0, 94.34] },
    ],
  },
  {
    id: 'stacy-10',
    title: 'Stacy Wear 10th S/S',
    year: '2022',
    heading: ['2022', 'Stacy Wear', '10th S/S'],
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/work/stacy-10-01.jpg', w: 646, h: 954, alt: 'Stacy Wear 10th S/S' },
    description: ['Developed the collection entirely in CLO3D, from concept and art direction to garment design and digital pattern making. Working digitally allowed me to assess the patterns’ appearance and fit early in the process. For the campaign, I collaborated with students from IED in Rome. The collection explored the coexistence of opposites through black and white, and a contrast between rounded, regular shapes and bold, irregular forms.'],
    panels: [
      { src: 'images/work/stacy-10-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-10-02.jpg', w: 325, h: 829, box: [23.0, 6.6, 50.86, 86.9] },
      { src: 'images/work/stacy-10-03.jpg', w: 293, h: 881, box: [25.85, 3.46, 45.36, 92.35] },
      { src: 'images/work/stacy-10-04.jpg', w: 462, h: 847, box: [9.86, 5.56, 72.3, 88.78] },
      { src: 'images/work/stacy-10-05.jpg', w: 1243, h: 635, box: [1.94, 18.24, 96.58, 66.56], wide: true },
    ],
  },
  {
    id: 'work-05',
    title: 'Stacy Wear for Anetha',
    year: '2022',
    heading: ['2022', 'Stacy Wear', 'for Anetha'],
    subtitle: 'METAL Magazine',
    subtitleLink: 'https://metalmagazine.eu/en/post/anetha',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-05.jpg', w: 1280, h: 1600, alt: 'Anetha in a white puffer and Stacy Wear hipless pants' },
    description: ['Stacy Wear was featured in a fashion editorial for METAL Magazine, starring Anetha, the French DJ and electronic music producer known for her influence on the international techno scene. The shoot was styled by Clelia Cazals and photographed by Maud Rallière, with production by Subete Agency.'],
    panels: [
      { src: 'images/work/work-05-01.jpg', w: 646, h: 800, box: [0.0, 7.97, 100.0, 83.86] },
      { text: ['Stacy Wear was featured in a fashion editorial for METAL Magazine, starring Anetha, the French DJ and electronic music producer known for her influence on the international techno scene. The shoot was styled by Clelia Cazals and photographed by Maud Rallière, with production by Subete Agency. Anetha wore Stacy Wear’s signature genderless hipless pants, reflecting the brand’s experimental approach to silhouette, body proportions, and gender-fluid design.', 'The collaboration brought together fashion and electronic music culture through a shared interest in pushing creative boundaries and challenging conventional aesthetics. Anetha’s artistic vision, which embraces eclecticism, individuality, and sustainability, resonates with Stacy Wear’s commitment to more conscious and unconventional design.', 'Featured in an editorial that explores her identity as an artist beyond music alone, the project highlights the dialogue between underground culture, fashion, and personal expression.'] },
    ],
  },
  {
    id: 'stacy-9',
    title: 'Stacy Wear 9th F/W',
    year: '2021',
    heading: ['2021', 'Stacy Wear', '9th F/W'],
    subtitle: 'Lasciare',
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-06.jpg', w: 1068, h: 1600, alt: 'Model in lilac faux-fur stole and silver dress between mirrors' },
    description: ['Created a seven-look Autumn/Winter collection inspired by the idea of letting go in order to rediscover oneself. “Lasciare” is about letting go of security, trust, work, social expectations, prejudice, judgement and rational thought, and allowing yourself to listen, feel and be free.'],
    panels: [
      { src: 'images/work/stacy-9-01.jpg', w: 646, h: 866, box: [0.0, 9.22, 100.0, 90.78] },
      { text: ['The collection represents the leap into the unknown that is sometimes necessary to move away from what is conventional, safe or limiting, and to rediscover a more personal and intimate sense of identity without preconceptions. It is about leaving behind the burdens imposed by society and moving lightly along uncharted, instinctive and wild paths, while remaining connected to nature.', 'The concept is expressed through the tension between revealing and reflecting. Sheer iridescent organza and tulle contrast with chains that, once released, fall and adapt to the body beneath them, transforming from symbols of constraint into symbols of freedom. Identity is also explored through reflection: an eco-friendly mirror-effect coated fabric catches the light and reflects it back, suggesting how looking at oneself can bring clarity to one’s inner self and place in the world. Sustainable faux fur and fully vegan faux-leather garments complete the collection, reinforcing its themes of rebirth and connection between the self and the world, with respect for the planet. I developed the seven winter outfits from the initial concept and design through pattern making and final garment construction. I also collaborated with a DJ to create the music for the show, selected the models, directed the makeup and coordinated the runway presentation. The collection was presented in my first runway show in Florence, in the beautiful setting of Giardino dell’Orticoltura.'] },
      { src: 'images/work/stacy-9-02.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-9-03.jpg', w: 558, h: 831, box: [5.63, 7.02, 87.32, 87.11] },
      { src: 'images/work/stacy-9-04.jpg', w: 554, h: 831, box: [6.19, 7.02, 85.76, 87.11] },
      { src: 'images/work/stacy-9-05.jpg', w: 558, h: 831, box: [5.63, 7.02, 87.32, 87.11] },
    ],
  },
  {
    id: 'stacy-8',
    title: 'Stacy Wear 8th S/S',
    year: '2021',
    heading: ['2021', 'Stacy Wear', '8th S/S'],
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/home/home-04.jpg', w: 1066, h: 1600, alt: 'Three models in black vinyl on a faux-fur rug' },
    description: ['Developed the eighth Stacy Wear collection, overseeing design, pattern making, sewing and art direction.'],
    panels: [
      { src: 'images/work/stacy-8-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-8-02.jpg', w: 599, h: 893, box: [2.97, 3.14, 93.74, 93.61] },
      { src: 'images/work/stacy-8-03.jpg', w: 646, h: 432, box: [0.0, 0.0, 100.0, 45.28] },
      { src: 'images/work/stacy-8-04.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-8-05.jpg', w: 1287, h: 857, box: [0.0, 5.03, 100.0, 89.83], wide: true },
    ],
  },
  {
    id: 'stacy-7',
    title: 'Stacy Wear 7th F/W',
    year: '2020',
    heading: ['2020', 'Stacy Wear', '7th F/W'],
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/work/stacy-7-01.jpg', w: 646, h: 954, alt: 'Stacy Wear 7th F/W' },
    description: ['Developed the seventh Stacy Wear collection, overseeing design, pattern making, sewing and art direction.'],
    panels: [
      { src: 'images/work/stacy-7-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-7-02.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-7-03.jpg', w: 593, h: 885, box: [3.87, 3.46, 91.8, 92.77] },
      { src: 'images/work/stacy-7-04.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-7-05.jpg', w: 593, h: 823, box: [3.87, 9.96, 91.8, 86.27] },
      { src: 'images/work/stacy-7-06.jpg', w: 279, h: 831, box: [23.47, 8.49, 43.66, 87.11] },
      { src: 'images/work/stacy-7-07.jpg', w: 593, h: 885, box: [3.87, 3.46, 91.8, 92.77] },
      { src: 'images/work/stacy-7-08.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
    ],
  },
  {
    id: 'stacy-6',
    title: 'Stacy Wear 6th S/S',
    year: '2020',
    heading: ['2020', 'Stacy Wear', '6th S/S'],
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/work/stacy-6-01.jpg', w: 646, h: 954, alt: 'Stacy Wear 6th S/S' },
    description: ['Developed the sixth Stacy Wear collection, overseeing design, pattern making, sewing and art direction.'],
    panels: [
      { src: 'images/work/stacy-6-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-6-02.jpg', w: 599, h: 893, box: [2.97, 3.14, 93.74, 93.61] },
      { src: 'images/work/stacy-6-03.jpg', w: 646, h: 921, box: [0.0, 3.46, 100.0, 96.54] },
      { src: 'images/work/stacy-6-04.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-6-05.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-6-06.jpg', w: 599, h: 893, box: [2.97, 3.14, 93.74, 93.61] },
      { src: 'images/work/stacy-6-07.jpg', w: 482, h: 719, box: [12.54, 12.26, 74.61, 75.37] },
      { src: 'images/work/stacy-6-08.jpg', w: 488, h: 727, box: [11.74, 12.26, 76.37, 76.21] },
    ],
  },
  {
    id: 'stacy-4',
    title: 'Stacy Wear 4th F/W',
    year: '2018',
    heading: ['2018', 'Stacy Wear', '4th F/W'],
    category: 'fashion-design', sub: 'selected-works',
    cover: { src: 'images/work/stacy-4-01.jpg', w: 423, h: 908, alt: 'Stacy Wear 4th F/W' },
    description: ['Developed the fourth Stacy Wear collection, overseeing design, pattern making, sewing and art direction.'],
    panels: [
      { src: 'images/work/stacy-4-01.jpg', w: 423, h: 908, box: [15.02, 2.2, 65.48, 95.18] },
      { src: 'images/work/stacy-4-02.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-4-03.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-4-04.jpg', w: 456, h: 922, box: [15.18, 1.78, 71.36, 96.65] },
      { src: 'images/work/stacy-4-05.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-4-06.jpg', w: 556, h: 831, box: [6.42, 6.39, 87.01, 87.11] },
    ],
  },
  {
    id: 'stacy-1',
    title: 'Stacy Wear 1st S/S',
    year: '2017',
    heading: ['2017', 'Stacy Wear', '1st S/S'],
    category: 'fashion-design', sub: 'concept-lookbook',
    cover: { src: 'images/work/stacy-1-01.jpg', w: 1287, h: 857, alt: 'Stacy Wear 1st S/S' },
    description: ['Created the first mini-collection for my independent brand, Stacy Wear, as a way to explore a more personal creative vision. I developed the concept and designs, created the patterns, selected and cut fabrics, and made the garments, considering potential prints and embroidery. I also selected the models, collaborated with makeup artists and photographers, and led the creative direction of the campaign. The online launch was well received and encouraged me to continue developing the brand.'],
    panels: [
      { src: 'images/work/stacy-1-01.jpg', w: 1287, h: 857, box: [0.0, 5.03, 100.0, 89.83], wide: true },
      { src: 'images/work/stacy-1-02.jpg', w: 1287, h: 857, box: [0.0, 5.03, 100.0, 89.83], wide: true },
      { src: 'images/work/stacy-1-03.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-1-04.jpg', w: 599, h: 893, box: [2.97, 3.14, 93.74, 93.61] },
      { src: 'images/work/stacy-1-05.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-1-06.jpg', w: 599, h: 893, box: [2.97, 3.14, 93.74, 93.61] },
    ],
  },
  {
    id: 'keira',
    title: 'Keira',
    year: '2026',
    heading: ['2026', 'Keira'],
    subtitle: 'Fashion Design',
    category: 'fashion-design', sub: 'technical-development',
    cover: { src: 'images/work/keira-01.jpg', w: 566, h: 858, alt: 'Keira' },
    description: ['Develop seasonal Spring/Summer and Autumn/Winter collections for Keira, working with the company over the past year. Starting from the target customer, I design collections that balance the brand’s creative direction with commercial feasibility.'],
    panels: [
      { src: 'images/work/keira-01.jpg', w: 566, h: 858, box: [5.88, 5.97, 87.62, 89.94] },
      { src: 'images/work/keira-02.jpg', w: 553, h: 856, box: [7.36, 6.18, 86.54, 89.73] },
      { src: 'images/work/keira-03.jpg', w: 568, h: 832, box: [5.88, 6.08, 87.93, 87.21] },
      { src: 'images/work/keira-04.jpg', w: 540, h: 840, box: [7.67, 6.08, 84.51, 88.05] },
      { src: 'images/work/keira-05.jpg', w: 538, h: 861, box: [8.05, 5.66, 83.28, 90.25] },
      { src: 'images/work/keira-06.jpg', w: 541, h: 855, box: [7.51, 6.29, 84.66, 89.62] },
      { src: 'images/work/keira-07.jpg', w: 558, h: 867, box: [5.88, 3.88, 86.38, 90.88] },
      { src: 'images/work/keira-08.jpg', w: 558, h: 883, box: [5.48, 3.88, 87.32, 92.56] },
    ],
  },
  {
    id: 'layla',
    title: 'Layla',
    year: '2023',
    heading: ['2023', 'Layla'],
    subtitle: 'Fashion Design',
    category: 'fashion-design', sub: 'technical-development',
    cover: { src: 'images/work/layla-01.jpg', w: 579, h: 902, alt: 'Layla' },
    description: ['Managed the brand’s design direction, starting from its existing target customer and broadening its appeal. I designed the main collection, selected fabrics, prints and accessories, fit-tested samples, and guided the other stages of sample development. I also occasionally worked directly with clients.'],
    panels: [
      { src: 'images/work/layla-01.jpg', w: 579, h: 902, box: [3.87, 3.77, 89.63, 94.55] },
      { src: 'images/work/layla-02.jpg', w: 577, h: 893, box: [3.44, 3.77, 90.3, 93.61] },
      { src: 'images/work/layla-03.jpg', w: 589, h: 897, box: [3.87, 3.77, 91.18, 94.03] },
      { src: 'images/work/layla-04.jpg', w: 576, h: 894, box: [2.97, 3.77, 90.14, 93.71] },
    ],
  },
  {
    id: 'llonde',
    title: 'LLonde',
    year: '2026',
    heading: ['2026', 'LLonde'],
    subtitle: 'Bag Design & Development',
    category: 'fashion-design', sub: 'technical-development',
    cover: { src: 'images/work/llonde-01.jpg', w: 526, h: 954, alt: 'LLonde' },
    description: ['Worked on the development of a bag inspired by a vintage wooden tennis racket, for a project initiated by an American investor. I oversaw sample development and prepared tech packs with images, measurements and production instructions. The design featured a light wooden base produced through 3D printing and strung like a real racket, combined with a bag made from canvas or stingray leather. We developed several versions in different sizes and also worked together on the packaging concept.'],
    panels: [
      { src: 'images/work/llonde-01.jpg', w: 526, h: 954, box: [9.6, 0.0, 81.42, 100.0] },
      { src: 'images/work/llonde-02.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/llonde-03.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/llonde-04.jpg', w: 599, h: 893, box: [2.97, 3.14, 93.74, 93.61] },
      { src: 'images/work/llonde-05.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/llonde-06.jpg', w: 587, h: 899, box: [3.91, 3.67, 91.86, 94.23] },
    ],
  },
  {
    id: 'mmstudio',
    title: 'MMstudio',
    year: '2017–2021',
    heading: ['2017-2021', 'MMstudio'],
    subtitle: 'Pattern Making',
    category: 'pattern-making',
    cover: { src: 'images/work/mmstudio-01.jpg', w: 573, h: 852, alt: 'MMstudio' },
    description: [],
    panels: [
      { src: 'images/work/mmstudio-01.jpg', w: 573, h: 852, box: [5.57, 6.08, 88.7, 89.31] },
      { text: ['Worked for four years as the company’s sole pattern maker, developing patterns for outerwear, trousers and sportswear for both menswear and womenswear. I used CAD software for pattern development, grading and marker making, and managed the sample workflow according to client requirements. I also prepared production markers and managed relationships with selected clients, including Dolly Noire, Nohow, Scorpion Bay and Suburbia. Some clients also involved me in design and styling decisions. I collaborated with companies across Europe, North America, South America, South Korea and China, and worked with a broad archive of garment types, from tailored coats and Neapolitan-inspired outerwear to casualwear, shirts, tracksuits and sweatshirts.'] },
      { src: 'images/work/mmstudio-02.jpg', w: 573, h: 764, box: [5.57, 10.69, 88.7, 80.08] },
      { src: 'images/work/mmstudio-03.jpg', w: 573, h: 764, box: [5.01, 10.69, 89.67, 80.08] },
      { src: 'images/work/mmstudio-04.jpg', w: 573, h: 764, box: [5.57, 10.69, 88.7, 80.08] },
      { src: 'images/work/mmstudio-05.jpg', w: 573, h: 764, box: [5.01, 10.69, 89.67, 80.08] },
    ],
  },
  {
    id: 'clo3d-instructor',
    title: 'CLO3D Instructor',
    year: '2026',
    heading: ['2026', 'CLO3D', 'Instructor'],
    subtitle: 'MARE3D',
    category: 'clo3d',
    cover: { src: 'images/work/clo3d-instructor-01.jpg', w: 646, h: 954, alt: 'CLO3D Instructor' },
    description: ['Developed a structured lesson plan to teach students how to use CLO3D, guiding them from the fundamentals of the software through to the creation of professional-quality renderings and animations.'],
    panels: [
      { src: 'images/work/clo3d-instructor-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { text: ['I teach CLO3D on the MARE3D platform, guiding students through the software from the basics to more advanced garment development. I’ve developed a structured teaching programme that takes students step by step through the interface, essential tools, pattern creation, garment construction, sewing, fabric properties, and 3D simulation.', 'My approach combines technical knowledge with practical exercises, helping students understand the software’s workflow and apply it independently to their own projects. The aim is to give them the skills and confidence to use CLO3D as a tool for both creative exploration and professional garment development.'] },
      { video: 'images/fashion/clo3d-instructor.mp4', src: 'images/fashion/clo3d-instructor-poster.jpg', w: 1280, h: 720, box: [6.35, 33.7, 87.3, 32.6], alt: 'CLO3D lesson: building a heart-print blouse' },
      { src: 'images/work/clo3d-instructor-03.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
    ],
  },
  {
    id: 'stacy-clo3d',
    title: 'Stacy Wear CLO3D',
    year: '2026',
    heading: ['2026', 'Stacy Wear', 'CLO3D'],
    category: 'clo3d',
    cover: { src: 'images/work/stacy-clo3d-01.jpg', w: 537, h: 954, alt: 'Stacy Wear CLO3D' },
    description: ['CLO3D is a 3D garment design software that combines digital pattern making, fabric simulation, and realistic garment visualisation in a virtual environment. It allows designers to develop, test, and refine garments in three dimensions, connecting technical construction with creative experimentation.'],
    panels: [
      { src: 'images/work/stacy-clo3d-01.jpg', w: 537, h: 954, box: [7.74, 0.0, 83.13, 100.0] },
      { text: ['I have been using CLO3D for seven years, and it has become an essential part of my creative and technical process. I use it to explore the connection between fashion design and pattern making, bringing creative ideas and technical development together in a single digital environment. Its garment-focused approach allows me to experiment with shapes, volumes, fit, and construction while visualising how a design translates into a three-dimensional garment. This makes it possible to refine ideas and reduce the need for multiple physical samples, supporting a more sustainable approach to product development.', 'For me, CLO3D is not simply a visualisation tool, but a way of thinking and working that connects creativity with technical precision. After exploring different design and pattern-making software, I chose to teach CLO3D because I believe in its potential to transform the way garments are developed. My teaching focuses on sharing a practical, structured working method rather than simply explaining commands, empowering students to understand the software and use it independently to develop their own creative ideas.'] },
      { src: 'images/work/stacy-clo3d-02.jpg', w: 537, h: 954, box: [7.74, 0.0, 83.13, 100.0] },
      { src: 'images/work/stacy-clo3d-03.jpg', w: 537, h: 954, box: [7.82, 0.0, 84.04, 100.0] },
    ],
  },
  {
    id: 'gg',
    title: 'G&G',
    year: '2023',
    heading: ['2023', 'G&G'],
    subtitle: 'CLO3D Workwear Project',
    category: 'clo3d',
    cover: { src: 'images/work/gg-01.jpg', w: 646, h: 954, alt: 'G&G' },
    description: ['Designed workwear garments using CLO3D for a company that needed to present products to customers before physical samples were available. I developed the garments and patterns, prepared size charts and graded measurements, and delivered high-quality visualisations showing how the finished products would look. The measurement specifications were then sent to China for production.'],
    panels: [
      { src: 'images/work/gg-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/gg-02.jpg', w: 558, h: 652, box: [5.79, 16.25, 87.32, 68.34] },
      { src: 'images/work/gg-03.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/gg-04.jpg', w: 558, h: 652, box: [5.79, 16.25, 87.32, 68.34] },
    ],
  },
  {
    id: 'serena-brancale',
    title: 'Stacy Wear x Serena Brancale',
    year: '2025',
    heading: ['2025', 'Stacy Wear', 'x Serena', 'Brancale'],
    subtitle: 'Sanremo',
    category: 'press', sub: 'brand-collaboration',
    cover: { src: 'images/work/serena-brancale-01.jpg', w: 1, h: 1, alt: 'Stacy Wear x Serena Brancale' },
    description: ['Collaborated with stylist Ylenia Puglia, who selected Stacy Wear accessories for Serena Brancale’s official music video for her Sanremo song. She also chose a Stacy Wear fur garment and multicoloured leg warmers for Serena Brancale’s performance with Alessandra Amoroso at the Sanremo Festival.'],
    panels: [
      { src: 'images/work/serena-brancale-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { text: ['In 2025, Stacy Wear collaborated with stylist Ylenia Puglia, bringing the brand’s distinctive aesthetic to Serena Brancale’s Sanremo experience. For the official music video of Anema e Core, Serena wore a Stacy Wear hat crafted from faux fur, from the brand’s latest collection.', 'The collaboration continued on the stage of the Sanremo Music Festival, where she performed alongside Alessandra Amoroso wearing a Stacy Wear faux-fur coat and brightly coloured leg warmers, also from the collection. The bold, playful outfit created a striking visual contrast, blending exaggerated volumes, vibrant colours, and an unconventional attitude. During the performance, the presenter described the look as a “yeti sotto acido” (“a yeti on acid”), a memorable expression that captured its eccentric and irreverent spirit. This collaboration brought Stacy Wear’s experimental approach to fashion into the spotlight, connecting its underground influences with the expressive world of music and live performance.'] },
      { src: 'images/work/serena-brancale-02.jpg', w: 445, h: 954, box: [15.48, 0.0, 68.89, 100.0] },
      { src: 'images/work/serena-brancale-03.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/serena-brancale-04.jpg', w: 560, h: 747, box: [6.5, 11.22, 86.69, 78.3] },
      { src: 'images/work/serena-brancale-05.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
    ],
  },
  {
    id: 'roll-up',
    title: 'Stacy Wear x Roll Up Magazine',
    year: '2023',
    heading: ['2023', 'Stacy Wear', 'x Roll Up', 'Magazine'],
    category: 'press', sub: 'brand-collaboration',
    cover: { src: 'images/work/roll-up-01.jpg', w: 1, h: 1, alt: 'Stacy Wear x Roll Up Magazine' },
    description: [],
    panels: [
      { src: 'images/work/roll-up-01.jpg', w: 541, h: 760, box: [8.05, 8.91, 83.75, 79.66] },
      { src: 'images/work/roll-up-02.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/roll-up-03.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/roll-up-04.jpg', w: 639, h: 835, box: [0.0, 6.18, 100.0, 87.53] },
      { src: 'images/work/roll-up-05.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
    ],
  },
  {
    id: 'axel',
    title: 'Stacy Wear x Axel',
    year: '2021',
    heading: ['2021', 'Stacy Wear', 'x Axel'],
    category: 'press', sub: 'brand-collaboration',
    cover: { src: 'images/work/axel-01.jpg', w: 1, h: 1, alt: 'Stacy Wear x Axel' },
    description: [],
    panels: [
      { src: 'images/work/axel-01.jpg', w: 611, h: 954, box: [5.42, 0.0, 94.58, 100.0] },
      { src: 'images/work/axel-02.jpg', w: 578, h: 865, box: [4.69, 4.51, 90.45, 90.67] },
      { src: 'images/work/axel-03.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/axel-04.jpg', w: 578, h: 865, box: [4.69, 4.51, 90.45, 90.67] },
    ],
  },
  {
    id: 'rosabell',
    title: 'Stacy Wear for Rosabell Laurenti Sellers',
    year: '2023',
    heading: ['2023', 'Stacy Wear', 'for Rosabell', 'Laurenti Sellers'],
    subtitle: 'Berlinale',
    category: 'press', sub: 'brand-collaboration',
    cover: { src: 'images/work/rosabell-01.jpg', w: 1, h: 1, alt: 'Stacy Wear for Rosabell Laurenti Sellers' },
    description: ['Designed a bespoke outfit for actor Rosabell Laurenti Sellers to wear at the Berlinale for the presentation of a new film. Inspired by the clothing worn by voguing dancers, I reworked the concept into a more elegant look suitable for the event. The outfit paired a silk chiffon top with handmade embroidered details created by heat-processing pieces of recycled plastic bottles, and satin palazzo trousers. I developed the pattern to the actor’s measurements.'],
    panels: [
      { src: 'images/work/rosabell-01.jpg', w: 538, h: 954, box: [8.82, 0.0, 83.28, 100.0] },
      { text: ['For the 2023 Berlinale, I designed a bespoke outfit for actress Rosabell Laurenti Sellers, known for her role as Tyene Sand in Game of Thrones, for the presentation of the miniseries The Swarm (Der Schwarm).', 'The project drew inspiration from the expressive silhouettes and bold attitude of voguing dancers, reinterpreted through a more elegant and sophisticated aesthetic suited to the occasion. The look featured a silk chiffon top with handcrafted embroidered details made from recycled plastic bottles, transformed through heat processing into distinctive decorative elements. The top was paired with satin palazzo trousers, creating a balance between fluidity, structure, and movement. I developed the garment patterns specifically to the actress’s measurements, ensuring a personalised fit and a coherent silhouette. Sustainability and experimentation were central to the project, combining unconventional materials with artisanal craftsmanship.'] },
      { src: 'images/work/rosabell-02.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/rosabell-03.jpg', w: 526, h: 788, box: [8.76, 8.6, 82.32, 82.6] },
      { src: 'images/work/rosabell-04.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/rosabell-05.jpg', w: 580, h: 388, box: [4.54, 27.67, 90.77, 40.67] },
    ],
  },
  {
    id: 'nasty',
    title: 'Stacy Wear x Nasty Magazine',
    year: '2024',
    heading: ['2024', 'Stacy Wear', 'x Nasty', 'Magazine'],
    category: 'press', sub: 'features',
    cover: { src: 'images/work/nasty-01.jpg', w: 1, h: 1, alt: 'Stacy Wear x Nasty Magazine' },
    description: [],
    panels: [
      { src: 'images/work/nasty-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/nasty-02.jpg', w: 551, h: 826, box: [6.73, 6.6, 86.23, 86.58] },
    ],
  },
  {
    id: 'kaltbult',
    title: 'Stacy Wear x Kaltbult Magazine',
    year: '2021',
    heading: ['2021', 'Stacy Wear', 'x Kaltbult', 'Magazine'],
    subtitle: 'Altered perception',
    category: 'press', sub: 'features',
    cover: { src: 'images/work/kaltbult-01.jpg', w: 1, h: 1, alt: 'Stacy Wear x Kaltbult Magazine' },
    description: [],
    panels: [
      { src: 'images/work/kaltbult-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/kaltbult-02.jpg', w: 566, h: 844, box: [5.63, 5.45, 88.58, 88.47] },
      { src: 'images/work/kaltbult-03.jpg', w: 566, h: 844, box: [6.04, 5.45, 87.62, 88.47] },
      { src: 'images/work/kaltbult-04.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
    ],
  },
  {
    id: 'biondo',
    title: 'Stacy Wear x Biondo',
    year: '2021',
    heading: ['2021', 'Stacy Wear', 'x Biondo'],
    subtitle: 'Man In Town',
    category: 'press', sub: 'features',
    cover: { src: 'images/work/biondo-01.jpg', w: 1, h: 1, alt: 'Stacy Wear x Biondo' },
    description: [],
    panels: [
      { src: 'images/work/biondo-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/biondo-02.jpg', w: 566, h: 844, box: [5.63, 5.45, 88.58, 88.47] },
    ],
  },
  {
    id: 'contributor',
    title: 'Stacy Wear x Contributor Magazine',
    year: '2022',
    heading: ['2022', 'Stacy Wear', 'x Contributor', 'Magazine'],
    category: 'press', sub: 'features',
    cover: { src: 'images/work/contributor-01.jpg', w: 1, h: 1, alt: 'Stacy Wear x Contributor Magazine' },
    description: [],
    panels: [
      { src: 'images/work/contributor-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/contributor-02.jpg', w: 566, h: 844, box: [5.63, 5.45, 88.58, 88.47] },
    ],
  },
  {
    id: 'speaker',
    title: 'Speaker',
    year: '2026',
    heading: ['2026', 'Speaker'],
    subtitle: 'European Project on Fashion, Politics and Sociology',
    category: 'press', sub: 'shows',
    cover: { src: 'images/work/speaker-01.jpg', w: 1, h: 1, alt: 'Speaker' },
    description: ['Participated in a European project exploring the relationship between fashion, politics and sociology. I prepared and delivered a talk introducing fashion to audiences unfamiliar with the industry, focusing on fashion as a way to bring art and personal expression into everyday life. I also discussed the environmental and social impact of the sector and the importance of making conscious choices.'],
    panels: [
      { src: 'images/work/speaker-01.jpg', w: 1286, h: 581, box: [0.0, 19.92, 100.0, 60.9], wide: true },
      { src: 'images/work/speaker-02.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/speaker-03.jpg', w: 496, h: 662, box: [10.49, 15.41, 77.62, 69.39] },
    ],
  },
  {
    id: 'white-radio',
    title: 'Guest — White Radio',
    year: '2026',
    heading: ['2026', 'Guest'],
    subtitle: 'White Radio, Prato',
    category: 'press', sub: 'shows',
    cover: { src: 'images/work/white-radio-01.jpg', w: 1, h: 1, alt: 'Guest — White Radio' },
    description: ['Joined a radio programme in Prato to discuss fashion and make the industry more accessible to a wider audience. I spoke about fashion as a form of everyday artistic and personal expression, addressed its environmental and social impact, and introduced my brand, Stacy Wear.'],
    panels: [
      { src: 'images/work/white-radio-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/white-radio-02.jpg', w: 566, h: 844, box: [5.63, 5.45, 88.58, 88.47] },
    ],
  },
  {
    id: 'wab',
    title: 'Stacy Wear — WAB Concept Store',
    year: '2024',
    heading: ['2024', 'Stacy Wear'],
    subtitle: 'WAB Concept Store, Paris',
    category: 'press', sub: 'shows',
    cover: { src: 'images/work/wab-01.jpg', w: 1, h: 1, alt: 'Stacy Wear — WAB Concept Store' },
    description: ['Stacy Wear was presented in a Parisian retail space for the first time through a pop-up at WAB Concept Store.'],
    panels: [
      { src: 'images/work/wab-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { video: 'images/work/wab-video.mp4', src: 'images/work/wab-video-poster.jpg', w: 720, h: 1280, box: [0, 0, 100, 100], alt: 'Stacy Wear at the WAB pop-up' },
    ],
  },
  {
    id: 'echoes',
    title: 'Styling Project — Echoes of Euphoria',
    year: '2024',
    heading: ['2024', 'Styling Project'],
    subtitle: 'Echoes of Euphoria, 33 Magazine',
    subtitleLink: 'https://33magazine.com/2024/11/20/echoes-of-euphoria/',
    category: 'styling-art-direction',
    cover: { src: 'images/work/echoes-01.jpg', w: 1, h: 1, alt: 'Styling Project — Echoes of Euphoria' },
    description: ['Co-created the styling for an editorial set in an 1980s-inspired living room, where two figures dance among golden reflections. The imagery explores vulnerability and the desire for authenticity, using shimmering drapery, soft lilac and white tones, and a dreamlike domestic setting to contrast the pressure to appear strong with the need for emotional refuge.'],
    panels: [
      { src: 'images/work/echoes-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { text: ['Echoes of Euphoria is a fashion editorial published by 33 Magazine in November 2024, photographed by Gaia Serru and styled by Alessia Scarpelli. Set in an 80s-inspired living room, the project explores the tension between the toughness demanded by everyday life and the desire to embrace vulnerability and emotional authenticity.', 'Through shimmering drapery, golden reflections, and dreamlike interiors, fashion becomes a means of shedding the mask of strength and reconnecting with intimate softness. A bouquet of lilac and white flowers embodies the fragility of a dreamlike refuge, offering comfort in a world that often overlooks vulnerability. The styling translates this emotional narrative into a visual dialogue between strength and delicacy, reality and fantasy. Blending expressive fashion with a nostalgic atmosphere, the editorial celebrates the freedom to embrace sensitivity as an essential part of human identity.'] },
      { src: 'images/work/echoes-02.jpg', w: 646, h: 809, box: [0.0, 7.97, 100.0, 84.8] },
      { src: 'images/work/echoes-03.jpg', w: 639, h: 809, box: [0.0, 7.97, 100.0, 84.8] },
      { src: 'images/work/echoes-04.jpg', w: 646, h: 809, box: [0.0, 7.97, 100.0, 84.8] },
      { src: 'images/work/echoes-05.jpg', w: 639, h: 809, box: [0.0, 7.97, 100.0, 84.8] },
    ],
  },
  {
    id: 'black-white',
    title: '“Black & White” Photoshoot',
    year: '2016',
    heading: ['2016', '“Black & White”', 'Photoshoot'],
    category: 'styling-art-direction',
    cover: { src: 'images/work/black-white-01.jpg', w: 1, h: 1, alt: '“Black & White” Photoshoot' },
    description: ['Developed the concept and art direction for a photoshoot inspired by the duality of yin and yang. I designed and made two bespoke outfits, one entirely black and one entirely white, featuring semicircular panels made from tulle and boning that could interlock to form a single, unified shape. I created the patterns, selected and cut the fabrics, sewed and fitted the garments on the models, and developed the styling, makeup and accessories. I also selected the outdoor setting and collaborated with professional photographers to produce the shoot.'],
    panels: [
      { src: 'images/work/black-white-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/black-white-02.jpg', w: 513, h: 769, box: [9.7, 9.64, 80.28, 80.61] },
      { src: 'images/work/black-white-03.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/black-white-04.jpg', w: 512, h: 769, box: [9.86, 9.64, 80.13, 80.61] },
    ],
  },
  {
    id: 'stacy-for-love',
    title: 'Stacy for Love',
    year: '2020',
    heading: ['2020', 'Stacy for Love'],
    subtitle: 'Editorial Photoshoot',
    category: 'styling-art-direction',
    cover: { src: 'images/work/stacy-for-love-01.jpg', w: 1, h: 1, alt: 'Stacy for Love' },
    description: ['Created a photoshoot exploring gender, inclusivity and different ideas of beauty and relationships. The use of fur garments brought together a diverse cast, while a glittering set and softly blurred atmosphere referenced the dreamlike visual language of the 1980s. Blue and pink, reality and fantasy, and other contrasting elements coexist throughout the imagery.'],
    panels: [
      { src: 'images/work/stacy-for-love-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-for-love-02.jpg', w: 639, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-for-love-03.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/stacy-for-love-04.jpg', w: 532, h: 374, box: [8.14, 30.29, 83.26, 39.2] },
    ],
  },
  {
    id: 'aku',
    title: 'Stacy Wear x AKU Body Jewellery',
    year: '2025',
    heading: ['2025', 'Stacy Wear', 'x AKU Body', 'Jewellery'],
    category: 'styling-art-direction',
    cover: { src: 'images/work/aku-01.jpg', w: 1, h: 1, alt: 'Stacy Wear x AKU Body Jewellery' },
    description: ['Collaborated on a photoshoot combining Stacy Wear garments, primarily fur pieces, with Carmela’s body-chain designs. I contributed the garments and was responsible for styling and art direction.'],
    panels: [
      { src: 'images/work/aku-01.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/aku-02.jpg', w: 558, h: 831, box: [5.63, 7.02, 87.32, 87.11] },
      { src: 'images/work/aku-03.jpg', w: 646, h: 954, box: [0.0, 0.0, 100.0, 100.0] },
      { src: 'images/work/aku-04.jpg', w: 558, h: 831, box: [5.63, 7.02, 87.32, 87.11] },
    ],
  },
  {
    id: 'work-03', link: 'echoes',
    title: 'Title',
    heading: ['20XX', 'Title'],
    year: '20XX',
    category: 'styling-art-direction',
    cover: { src: 'images/home/home-03.jpg', w: 1279, h: 1600, alt: 'Model in knitted balaclava holding flowers' },
    description: ['Description'],
    panels: [],
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
        layout: [[0, 356, 576, 647], [593, 447, 322, 482], [932, 390, 434, 579], [1382, 356, 537, 647]] },
      { id: 'concept-lookbook', title: 'Concept & Lookbook', mobileWide: true,
        photos: [
          { src: 'images/fashion/concept-02.jpg', w: 2000, h: 1333, alt: 'Group of six models in black and white under arches' },
          { src: 'images/fashion/concept-01.jpg', w: 471, h: 706, alt: 'Model in black vinyl and lilac faux-fur sleeves' },
          { src: 'images/fashion/concept-03.jpg', w: 419, h: 626, alt: 'Model in denim corset in a garden' },
        ],
        layout: [[0, 381, 924, 619], [943, 451, 332, 497], [1289, 383, 631, 627]] },
      // TODO: Keira, Layla, the vinyl wrap top and the line-up were cut from the mockups — replace with the originals
      { id: 'technical-development', title: 'Technical Development',
        photos: [
          { src: 'images/fashion/technical-01.jpg', w: 465, h: 697, alt: 'Technical sheet: Keira lace blouse' },
          { src: 'images/fashion/technical-02.jpg', w: 488, h: 358, alt: 'Technical sheet: Layla sequin halter gown' },
          { src: 'images/fashion/technical-03.jpg', w: 477, h: 706, alt: 'Model in black vinyl wrap top and iridescent trousers' },
          { src: 'images/fashion/technical-04.jpg', w: 724, h: 1299, alt: 'Model in a black slip dress on a sofa with a white bag' },
        ],
        layout: [[0, 393, 402, 603], [424, 459, 672, 491], [1103, 388, 413, 611], [1532, 389, 388, 610]] },
      { id: 'fashion-illustration', title: 'Fashion Illustration', mobileWide: true,
        photos: [
          { src: 'images/fashion/illustration-01.jpg', w: 966, h: 323, alt: 'Line-up illustration of ten looks' },
          { src: 'images/fashion/illustration-02.jpg', w: 430, h: 572, alt: 'Watercolour sketch of a purple look' },
          { src: 'images/fashion/illustration-03.jpg', w: 458, h: 694, alt: 'Illustration: faux-fur jacket and denim skirt' },
        ],
        layout: [[0, 534, 966, 322], [1001, 431, 430, 572], [1484, 408, 411, 615]] },
    ],
  },
  { id: 'pattern-making', title: 'Pattern making', menu: 'Pattern Making',
    photos: [
      { src: 'images/fashion/pattern-01.jpg', w: 384, h: 512, alt: 'Bouclé double-breasted coat on a dress form' },
      { src: 'images/fashion/pattern-02.jpg', w: 1067, h: 1600, alt: 'Iridescent snakeskin bomber jacket' },
      { src: 'images/fashion/pattern-03.jpg', w: 1067, h: 1600, alt: 'Model in a purple vinyl corset and skirt' },
      'stacy-9',
    ],
    layout: [[0, 387, 461, 598], [476, 362, 440, 661], [930, 371, 570, 632], [1511, 431, 409, 554]] },
  { id: 'clo3d', title: 'Clo 3D', menu: 'Clo3d',
    photos: [
      { video: 'images/fashion/clo3d-rotation.mp4', src: 'images/fashion/clo3d-rotation-poster.jpg', w: 926, h: 1200, alt: '3D garment turning: checked corset and skirt' },
      { video: 'images/fashion/clo3d-instructor.mp4', src: 'images/fashion/clo3d-instructor-poster.jpg', w: 1280, h: 720, alt: 'CLO3D lesson: building a heart-print blouse' },
      { src: 'images/fashion/clo3d-01.jpg', w: 900, h: 1600, alt: '3D garment: pink faux-fur coat' },
      { src: 'images/fashion/clo3d-02.jpg', w: 468, h: 720, alt: '3D garment: black polo on a mannequin' },
    ],
    layout: [[0, 347, 578, 647], [584, 344, 558, 652], [1156, 348, 362, 645], [1532, 347, 388, 647]] },
  // TODO: photos cut from the mockup — replace with the original files
  { id: 'styling-art-direction', title: 'Styling & Art Direction', menu: 'Styling & Art Direction',
    photos: [
      { src: 'images/fashion/styling-01.jpg', w: 547, h: 709, alt: 'Two women in faux-fur coats before a sequin curtain' },
      'work-03',
      { src: 'images/fashion/styling-04.jpg', w: 1044, h: 1305, alt: 'Close-up of glossy lips with silver grills' },
      { src: 'images/fashion/styling-03.jpg', w: 681, h: 1021, alt: 'Two models in white and black head wraps in a forest' },
    ],
    layout: [[4, 364, 500, 647], [519, 392, 474, 594], [1009, 348, 527, 660], [1546, 391, 374, 593]] },
];

/* PRESS — the Press page (category.html#brand-collaboration …), same layout as the Work pages.
   It is not listed in the Work menu (inMenu: false); the header's PRESS opens it. */
window.CATEGORIES.push({
  id: 'press', title: 'Press', menu: 'Press', inMenu: false,
  subs: [
    { id: 'brand-collaboration', title: 'Brand Collaboration',
      photos: [
          { src: 'images/press/brand-04.jpg', w: 878, h: 1097, alt: 'Host in a multicoloured faux-fur coat on stage' },
          { src: 'images/press/brand-03.jpg', w: 902, h: 1600, alt: 'Actress on the red carpet in a sheer embellished top and wide satin trousers' },
          { src: 'images/press/brand-01.jpg', w: 1066, h: 1600, alt: 'Model with arms raised in a black and white op-art crop top and skirt' },
          { src: 'images/press/brand-02.jpg', w: 1066, h: 1600, alt: 'Model in a black vinyl cropped jacket and cut-out trousers' },
      ],
      layout: [[0, 359, 646, 649], [659, 359, 365, 649], [1040, 359, 433, 649], [1485, 359, 435, 649]] },
    { id: 'features', title: 'Features',
      photos: [
          { src: 'images/press/features-01.jpg', w: 1067, h: 1600, alt: 'Model in a chain bra lying on black vinyl' },
          { src: 'images/press/features-02.jpg', w: 1066, h: 1600, alt: 'Model in a black pinstripe jacket with ruffled sleeves on yellow' },
          { src: 'images/press/features-03.jpg', w: 1066, h: 1600, alt: 'Model in silver cargo trousers on a beach' },
          { src: 'images/press/features-04.jpg', w: 1143, h: 1600, alt: 'Model in a sheer lilac organza shirt and trousers' },
      ],
      layout: [[0, 366, 608, 652], [622, 400, 391, 586], [1032, 366, 435, 652], [1482, 396, 435, 613]] },
    { id: 'shows', title: 'Shows', mobileWide: true,
      photos: [
          { src: 'images/press/shows-01.jpg', w: 2000, h: 903, alt: 'Talk in a community space, audience listening' },
          { src: 'images/press/shows-02.jpg', w: 1200, h: 1600, alt: 'Alessia smiling at a podcast microphone' },
          { src: 'images/press/shows-03.jpg', w: 1280, h: 1600, alt: 'Poster: Once in Paris pop-up event' },
      ],
      layout: [[0, 474, 1010, 456], [1024, 442, 365, 543], [1400, 388, 520, 626]] },
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
  /* pictures that belong to a project: the picture stays, and it opens that project's page */
  const LINK = {
    'selected-02': 'stacy-7', 'selected-03': 'stacy-13',
    'concept-01': 'stacy-11', 'concept-02': 'stacy-1', 'concept-03': 'stacy-6',
    'illustration-01': 'stacy-10', 'illustration-02': 'stacy-6', 'illustration-03': 'stacy-4',
    'technical-01': 'keira', 'technical-02': 'layla', 'technical-03': 'stacy-7', 'technical-04': 'llonde',
    'pattern-01': 'mmstudio', 'pattern-02': 'stacy-10', 'pattern-03': 'stacy-12',
    'styling-01': 'stacy-for-love', 'styling-03': 'black-white', 'styling-04': 'aku',
    'brand-01': 'roll-up', 'brand-02': 'axel', 'brand-03': 'rosabell', 'brand-04': 'serena-brancale',
    'features-01': 'nasty', 'features-02': 'kaltbult', 'features-03': 'biondo', 'features-04': 'contributor',
    'shows-01': 'speaker', 'shows-02': 'white-radio', 'shows-03': 'wab',
    'clo3d-01': 'stacy-clo3d', 'clo3d-02': 'gg', 'clo3d-instructor': 'clo3d-instructor', 'clo3d-rotation': 'clo3d-instructor',
  };
  const make = (ph, cat, sub) => {
    if (!ph || typeof ph === 'string') return ph;
    const file = (ph.video || ph.src).split('/').pop().replace(/\.[^.]+$/, '');
    const id = 'p-' + file;
    const to = ph.work || LINK[file];
    const target = to && W.find((w) => w.id === to);
    if (target && !W.some((w) => w.id === id)) {
      W.push({ id, link: target.id, title: target.title, category: cat, sub: sub || undefined, cover: ph, panels: [] });
    }
    if (!W.some((w) => w.id === id)) {
      W.push({ id, title: 'Title', heading: ['20XX', 'Title'], year: '20XX',
               category: cat, sub: sub || undefined, cover: ph, description: ['Description'], panels: [] });
    }
    return id;
  };
  for (const c of window.CATEGORIES) {
    if (c.photos) c.photos = c.photos.map((p) => make(p, c.id));
    for (const s of c.subs || []) if (s.photos) s.photos = s.photos.map((p) => make(p, c.id, s.id));
  }
  for (const h of window.HOME) h.photos = h.photos.map((p) => make(p, h.id));
})();
