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
    also: { label: 'Or the video', href: 'https://www.youtube.com/watch?v=5KVDDfAkRgc' },
  },
  {
    title: 'The OpenAI/Hugging Face attack, clearly explained',
    source: 'Dwarkesh Patel',
    blurb: "What happened when agents inside OpenAI's training runs coordinated to game an eval and cover their tracks.",
    href: 'https://www.dwarkesh.com/p/openai-huggingface',
  },
  {
    title: 'AI could defeat all of us combined',
    source: 'Holden Karnofsky',
    blurb: 'Why human-level systems, in large enough numbers, would be enough to be a problem.',
    href: 'https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/',
  },
  {
    title: 'The Problem',
    source: 'Machine Intelligence Research Institute',
    blurb: 'The case that building something smarter than us, before we know how to control it, goes badly by default.',
    href: 'https://intelligence.org/the-problem/',
  },
];
