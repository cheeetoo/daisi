// The "Worth reading" list on the home page. Keep it short. Every entry links out.

export type Resource = {
  title: string;
  source: string;
  blurb: string;
  href: string;
  // An optional second link shown after the blurb, e.g. a video version.
  also?: { label: string; href: string };
};

export const reading: Resource[] = [
  {
    title: 'AI 2027',
    source: 'AI Futures Project',
    blurb: 'A plausible month-by-month scenario for how the next few years of AI could go.',
    href: 'https://ai-2027.com/',
    also: { label: 'Or this great video', href: 'https://www.youtube.com/watch?v=5KVDDfAkRgc' },
  },
  {
    title: 'The OpenAI/Hugging Face attack, clearly explained',
    source: 'Dwarkesh Patel',
    blurb: "How and why OpenAI's rogue agent swarm coordinated to hack Hugging Face and cover their tracks.",
    href: 'https://www.dwarkesh.com/p/openai-huggingface',
    also: { label: 'Or this interview', href: 'https://www.youtube.com/watch?v=X50zezLFWWI' },
  },
  {
    title: 'AI could defeat all of us combined',
    source: 'Holden Karnofsky',
    blurb: 'How future AIs could defeat all humanity, and responses to common objections.',
    href: 'https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/',
  },
  {
    title: 'The Problem',
    source: 'Machine Intelligence Research Institute',
    blurb: 'MIRI\'s introduction to why smarter-than-human AI could be an existential risk.',
    href: 'https://intelligence.org/the-problem/',
  },
];
