import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Matthew Brown | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi my name is, ',
  name: 'Matthew Brown',
  subtitle: 'I am a JS Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'mattPic.jpg',
  paragraphOne:
    'Hello, my name is Matthew. I have been coding for over 3 years, working independently on small projects, and in teams on expansive full stack applications.',
  paragraphTwo:
    'I attended the University of Maryland, where I pursued my passion of politics, and doubled majored in Economics and Political Science. Living with computer science students I became fascinated by the power and impact of code. After college I attended Hack Reactor, an advanced Software Engineering Immersive Program in New York City. While there I advanced my knowledge of data structures, design patterns, and of well-known frameworks.',
  paragraphThree:
    'After graduation I accepted a position at Anchor Technologies, where with a team of developers we built the myCYPR platform. For my next step, I am seeking an opportunity where I can continue to grow and contribute as a developer. Have a great day, and I hope you enjoy some of the cool projects I have built.',
  resume: 'https://www.linkedin.com/in/matthewbrown98/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'char.jpg',
    title: 'char.',
    info: "Fully Featured Shopping Site for my sister's small business",
    info2: 'Tech Used: React (ES6, Hooks), Redux, Express, MongoDB, Paypal',
    url: 'https://www.char.shop',
    repo: 'https://github.com/mbrown98/charShop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://www.youtube.com/embed/3nxT96zp7q4',
    title: 'laces.',
    info: 'Social Site for Bootcamp Grads/Developers',
    info2: 'Tech Used: React, Redux, Express, Node, MongoDB',
    url: 'https://damp-badlands-65898.herokuapp.com/',
    repo: 'https://github.com/mbrown98/laces', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'snapTest.jpg',
    title: 'mattsApp. (TBD)',
    info: 'whatsApp Clone',
    info2: 'TBD',
    url: 'https://www.slicebudget.com/',
    repo: 'https://github.com/mbrown98/sliceTracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://www.youtube.com/embed/zen8hkTHuvQ',
    title: 'variant.',
    info: 'Custom Playlist Generator',
    info2: 'Tech Used: React (ES6, Hooks), Spotify Developer API, Bootstrap',
    url: 'https://www.thevariantmusic.com/',
    repo: 'https://github.com/mbrown98/variant', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://www.youtube.com/embed/UAqiS3FwwyE',
    title: 'forever404.',
    info: 'Front End E-Commerce Site for mock Back-End API',
    info2: 'Completed at Hack Reactor as part of a four engineer team',
    url: 'http://ec2-18-223-0-140.us-east-2.compute.amazonaws.com/products',
    repo: 'https://github.com/Acadia-Team/Project-Greenfield', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'snapTest.jpg',
    title: 'mfilms.',
    info: 'Netflix Clone',
    info2: 'TBD',
    url: 'https://www.slicebudget.com/',
    repo: 'https://github.com/mbrown98/sliceTracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'snapTest.jpg',
    title: 'mattChat.',
    info: 'Snapchat Clone',
    info2: 'Tech Used: React (ES6, Hooks), Redux, Camera, Firebase ',
    url: 'https://www.slicebudget.com/',
    repo: 'https://github.com/mbrown98/sliceTracker', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'https://www.youtube.com/embed/1vDlynD4UIc',
    title: 'slice.',
    info: 'Voice Powered Expense Tracker',
    info2:
      'Tech Used: React (ES6, Hooks, Context API), Speechly Voice Recognition API, Material UI',
    url: 'https://www.slicebudget.com/',
    repo: 'https://github.com/mbrown98/sliceTracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'matthewbrown0798@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/matthewbrown98/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mbrown98',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UC-8bR4aeft2cBax7Kpv-2jw',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
