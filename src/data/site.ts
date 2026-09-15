// Everything site-wide that you will want to change lives here.

export const site = {
  name: 'DAISI',
  fullName: 'Dartmouth AI Safety Initiative for Students',
  url: 'https://dartmouthaisafety.org',
  tagline: "Dartmouth's student organization dedicated to reducing catastrophic risks from AI.",
  description:
    'DAISI runs a six-week AI safety reading group each term and helps Dartmouth students find their way into the field. No prerequisites; everyone at Dartmouth is welcome.',

  // Who runs it. Used in the footer and the "book a time" link.
  organizer: { name: 'Finn Cairns', short: 'Finn', year: "'29" },

  // Contact. Email links copy the address to the clipboard (see Base.astro).
  email: 'finnigan.cairns.29@dartmouth.edu',
  groupMeUrl: 'https://groupme.com/join_group/117505859/LufWp3ve',
  // Google Calendar appointment page, for one-on-one chats.
  bookingUrl: 'https://calendar.app.google/pEXY8EznBbkprutR6',

  // The sign-up form on the home page posts straight into this Google Form, so responses land
  // in its spreadsheet. `formUrl` is the public form, used as a fallback link. `formAction` is
  // the form's submit endpoint, and `fields` maps our inputs to its question ids.
  // If you edit the Google Form's questions, the ids change: re-run the parser in README.md.
  form: {
    formUrl: 'https://forms.gle/MR9FknDiiA8w3QXX8',
    formAction:
      'https://docs.google.com/forms/d/e/1FAIpQLSci4_2LxcMfvTIrfJdbs4O1F4uMb0dqD4zef9uQTeCrZURuHw/formResponse',
    fields: {
      name: 'entry.984512009',
      email: 'entry.35599285',
      why: 'entry.231264075',
      times: 'entry.1085424216',
      referrals: 'entry.500140258',
    },
    // Must match the Google Form's checkbox options exactly.
    timeOptions: ['5-6:30pm', '5:30-7pm', '6:00-7:30pm', '6:30-8pm', "None of these work, but I'm still interested"],
  },

  // The current reading group. The description itself is in src/pages/index.astro.
  term: 'Fall 2026',
  group: {
    interestMeeting: 'September 28',
    signupsClose: 'September 30',
    // Not shown on the site yet (still changing). Kept here for when it is.
    curriculum: [
      { week: '0', title: 'Introduction to machine learning', note: 'optional, self-paced' },
      { week: '1', title: 'Where AI is headed' },
      { week: '2', title: 'Fundamentals of misalignment' },
      { week: '3', title: 'Why would an AI want to do bad things?' },
      { week: '4', title: 'Threat models' },
      { week: '5', title: 'What success looks like' },
      { week: '6', title: 'Research, careers, and further involvement' },
    ],
  },

  // The green bar at the top of every page. Set `show: false` to hide it between terms.
  // It links straight to the Google Form.
  notice: {
    show: true,
    text: 'Reading group sign-ups close September 30',
    href: 'https://forms.gle/MR9FknDiiA8w3QXX8',
  },

  // `tone` picks the colour: 'gold' or 'green'. Plain items are ink.
  nav: [
    { label: 'GroupMe', href: 'https://groupme.com/join_group/117505859/LufWp3ve', tone: 'gold' },
    { label: 'Get involved', href: '/#reading-group', tone: 'green' },
  ],
};
