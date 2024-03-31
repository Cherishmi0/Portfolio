import {
  
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  responsive,
  portfolio,
  fitness,
  dashboard,
  netflix
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Junior Frontend Developer",
    company_name: "10th Dan, Melbourne, VIC",
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
     
      "Utlised a diverse set of technologies including React, JavaScript, TypeScript, Angular, and .NET Core.",
      "Worked on various React projects, showcasing versatility in frontend development.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Ensured system reliability, scalability, and user-friendly interface through cutting-edge technologies.",
      "Worked in an agile environment with weekly meetings, kept track of user stories/bugs in GitHub projects, conducted sprint planning and sprint retrospectives",
    ],
  },
  
  {
    title: "Junior android Developer",
    company_name: "GrandM, Vietnam",
    iconBg: "#383E56",
    date: "October 2021 - January 2023",
    points: [
    
      "Developed mobile applica4ons utlising Kotlin.",
      "Designed and Developed High performance Database using MySQL.",
      "Working closely with the team members and assisting them.",
      "Implement new features, tes4ng, debugging, diagnosing, and correcting errors in applications.",
    ],
  },
  
];



const projects = [
  {
    name: "Portfolio website",
    description:
      "Crafted with ReactJS and threeJS, this portfolio website is designed to highlight my projects and professional journey.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "React admin-dashboard",
    description:
      "This is a  web based- application built on the robust foundation of React, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid. This comprehensive platform boasts a seamless user experience with features including Light and Dark Mode toggles.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
     
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fitness application",
    description:
      "A web based fitness application that Offers unparalleled functionality using advanced React Best Practices such as file structure and hooks, creating a Beautiful User Interface using the Material UI and fetching data from unlimited sources using RapidAPI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
     
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/",
  },
  {
    name: "Netflix clone",
    description:
      " Netflix clone web based application made using ReactJS and TMDB API. Firebase is used for authentication and back-end. Firestore is used for cloud storage and Tailwind CSS for styling.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/",
  },
  {
    name: "Responsive website",
    description:
      "A responsive website with modern UI/UX using ReactJS and TailwindCSS, with high quality sections and gradients.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
   
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: responsive,
    source_code_link: "https://github.com/",
  },
];

export { technologies, experiences, projects };
