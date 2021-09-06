import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Abhijith Ravindran | Java Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Abhijith Ravindran',
  subtitle: 'A Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_bmw.png',
    title: 'BMW Online Sales Web Application (Global)',
    info: '',
    info2: '',
    url: 'https://www.bmw.in/en/index.html',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_rnet.jpg',
    title: 'R·NET | Public Transport in Randstad (Netherlands) ',
    info: '',
    info2: '',
    url: 'https://www.rnet.nl/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_kidversity.png',
    title: 'Kidversity | Child Education Service (Hong Kong)',
    info: '',
    info2: '',
    url: 'https://www.kidversity.com.hk/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in touch with me @',
  btn: '',
  email: 'contactme.abhijith@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abhijithravindran94/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Abhijith-Ravindran',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
