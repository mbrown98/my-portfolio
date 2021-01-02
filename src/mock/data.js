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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dispatch.jpg',
    title: 'dispatch.',
    info: 'Real-Time Chat Application',
    info2: 'Tech Used: React (ES6, Hooks), Express, Node, socket.io',
    url: 'https://fervent-jang-00d3ca.netlify.app/',
    repo: 'https://github.com/mbrown98/dispatch', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'variant.jpg',
    title: 'variant.',
    info: 'Custom Playlist Generator',
    info2: 'Tech Used: React (ES6, Hooks), Spotify Developer API, Bootstrap',
    url: 'https://www.thevariantmusic.com/',
    repo: 'https://github.com/mbrown98/variant', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'slice.jpg',
    title: 'slice.',
    info: 'Voice Powered Expense Tracker',
    info2:
      'Tech Used: React (ES6, Hooks, Context API), Speechly Voice Recognition API, Material UI',
    url: 'https://www.slicebudget.com/',
    repo: 'https://github.com/mbrown98/sliceTracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'elif.',
    info: 'Social Media Site',
    info2: 'Tech Used: React, Express, Node, MongoDB',
    url: 'https://www.slicebudget.com/',
    repo: 'https://github.com/mbrown98/sliceTracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'not.',
    info: 'Sustainable Meat Alternative Meals',
    info2: 'Tech Used: React, GraphQL, Apollo, Express, MongoDB',
    url: 'https://www.slicebudget.com/',
    repo: 'https://github.com/mbrown98/sliceTracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
