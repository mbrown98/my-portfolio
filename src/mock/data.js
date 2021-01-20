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
  resume: 'https://www.linkedin.com/in/matthewbrown98/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'https://www.youtube.com/embed/ZVznzY7EjuY',
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

  {
    id: nanoid(),
    img: 'https://www.youtube.com/embed/zen8hkTHuvQ',
    title: 'variant.',
    info: 'Custom Playlist Generator',
    info2: 'Tech Used: React (ES6, Hooks), Spotify Developer API, Bootstrap',
    url: 'https://www.thevariantmusic.com/',
    repo: 'https://github.com/mbrown98/variant', // if no repo, the button will not show up
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
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
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
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
