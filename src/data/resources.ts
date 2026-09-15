// The resources page, and the "Start here" list on the home page (the first `startHere` entries).
// Keep it short. Every entry links out.

export type Resource = {
  title: string;
  source: string;
  blurb: string;
  href: string;
};

export type ResourceGroup = {
  heading: string;
  note?: string;
  items: Resource[];
};

export const groups: ResourceGroup[] = [
  {
    heading: 'Start here',
    note: 'Three things. Read them in this order',
    items: [
      {
        title: 'The OpenAI/Hugging Face attack, clearly explained',
        source: 'Dwarkesh Patel',
        blurb:
          "What happened when agents inside OpenAI's training runs coordinated to game an eval and cover their tracks. Read this first.",
        href: 'https://www.dwarkesh.com/p/openai-huggingface',
      },
      {
        title: 'AI 2027',
        source: 'Kokotajlo, Alexander, Larsen, Lifland, Dean',
        blurb:
          'A month-by-month scenario for how the next few years could go, written by people who forecast this for a living. The single most-discussed piece on where this is heading.',
        href: 'https://ai-2027.com/',
      },
      {
        title: 'AI could defeat all of us combined',
        source: 'Holden Karnofsky',
        blurb:
          "The plain-language case for why systems that are merely as capable as humans, but far more numerous, could be a problem we can't recover from. Short, and hard to argue with.",
        href: 'https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/',
      },
    ],
  },
  {
    heading: 'Go deeper',
    note: 'A course, a book, the classic paper, and where the discussion happens',
    items: [
      {
        title: 'AI Safety Fundamentals',
        source: 'BlueDot',
        blurb:
          'Free online course, and the closest thing to a standard introduction. Our reading group adapts it.',
        href: 'https://aisafetyfundamentals.com/',
      },
      {
        title: 'The Alignment Problem',
        source: 'Brian Christian',
        blurb:
          "The best book-length introduction, and the one to hand to a friend who isn't sure any of this is real.",
        href: 'https://brianchristian.org/the-alignment-problem/',
      },
      {
        title: 'Concrete Problems in AI Safety',
        source: 'Amodei et al., 2016',
        blurb: 'The paper that set out the technical agenda, and still the cleanest statement of it.',
        href: 'https://arxiv.org/abs/1606.06565',
      },
      {
        title: 'Alignment Forum',
        source: 'LessWrong',
        blurb: 'Where much of the research discussion happens. Start with the curated posts, not the front page.',
        href: 'https://www.alignmentforum.org/',
      },
      {
        title: 'LessWrong',
        source: 'LessWrong',
        blurb:
          "The wider forum the Alignment Forum grew out of: rationality, forecasting, and much of the field's history.",
        href: 'https://www.lesswrong.com/',
      },
    ],
  },
  {
    heading: 'Programs',
    note: 'The standard routes in; all take undergraduates',
    items: [
      {
        title: 'SPAR',
        source: 'Kairos',
        blurb:
          'Part-time, remote research with a mentor over a semester. Fits alongside classes, and the natural next step after the reading group.',
        href: 'https://sparai.org/',
      },
      {
        title: 'ARENA',
        source: 'ARENA',
        blurb:
          'Hands-on alignment engineering: transformers, interpretability, RL. The materials are free online; the in-person bootcamp is in London.',
        href: 'https://www.arena.education/',
      },
      {
        title: 'AI Safety Camp',
        source: 'AI Safety Camp',
        blurb: 'Remote, part-time, project-based. A low-barrier first research experience.',
        href: 'https://aisafety.camp/',
      },
      {
        title: 'MATS',
        source: 'MATS',
        blurb:
          'Full-time research with a mentor at a lab or academic group. Competitive; the standard route into technical safety research once you have some experience.',
        href: 'https://www.matsprogram.org/',
      },
    ],
  },
  {
    heading: 'Careers',
    items: [
      {
        title: '80,000 Hours job board',
        source: '80,000 Hours',
        blurb: 'The main list of open roles in AI safety and governance, filterable by role and location.',
        href: 'https://jobs.80000hours.org/',
      },
      {
        title: 'AISafety.com',
        source: 'AISafety.com',
        blurb: 'A community-maintained map of the field: jobs, courses, communities, funding.',
        href: 'https://www.aisafety.com/',
      },
    ],
  },
  {
    heading: 'Ours',
    items: [
      {
        title: 'Interest meeting slides',
        source: 'DAISI',
        blurb: 'What we said at the first meeting, [date].',
        href: '#',
      },
      {
        title: 'Reading group syllabus',
        source: 'DAISI',
        blurb: 'The week-by-week reading list for the [Winter 2027] group.',
        href: '#',
      },
    ],
  },
];

// The home page shows the "Start here" group.
export const startHere: Resource[] = groups[0].items;
