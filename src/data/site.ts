// Everything site-wide that you will want to change lives here.
// Square brackets mark placeholders to fill in.

export const site = {
  name: 'DAISI',
  fullName: 'Dartmouth AI Safety Initiative for Students',
  tagline: "Dartmouth's student organization dedicated to reducing catastrophic risks from AI.",
  description:
    'DAISI runs a reading group, hosts speakers, and helps Dartmouth students find their way into AI safety. No prerequisites; everyone at Dartmouth is welcome.',

  // Contact. The email is used in the footer and as the fallback for "email us" links.
  email: '[daisi@dartmouth.edu]',
  groupMeUrl: '#',
  calendarUrl: '#',
  // Where "Chat with us" and "Book a time" go: a Calendly link, a mailto:, whatever you like.
  chatUrl: '#',

  // The expression-of-interest form posts here. Easiest option: make a free form at
  // https://formspree.io, paste its endpoint (https://formspree.io/f/xxxxxxxx) below,
  // and responses arrive by email. See README.md for the Netlify Forms alternative.
  formEndpoint: '',

  // The current term, used in headings and the notice bar.
  term: '[Winter 2027]',

  // The green bar at the top of every page. Set `show: false` to hide it between terms.
  notice: {
    show: true,
    text: '[Winter 2027] reading group: expressions of interest open until [date]',
    href: '/get-involved/#express-interest',
  },

  nav: [
    { label: 'resources', href: '/resources/' },
    { label: 'mission', href: '/mission/' },
    { label: 'get involved', href: '/get-involved/', cta: true },
  ],
};
