import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  iiitdmj,
  purpletutor,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  mui,
  cpp,
  mysql,
  python,
  firebase,
  twitterClone,
  amazonClone,
  medigram,
  netflixClone,
  samuraiKill,
  quizbuzz,
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

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: creator,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mui",
    icon: mui,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  // {
  //   name: "python",
  //   icon: python,
  // },
  {
    name: "MySql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Purpletutor",
    icon: purpletutor,
    iconBg: "#ffffff",
    date: "July 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Building reusable components and front-end libraries for future use.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Engaging in code reviews and offering valuable feedback to fellow developers to promote growth and improvement.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "IIITDM Jabalpur",
    icon: iiitdmj,
    iconBg: "#ffffff",
    date: "Jan 2023 - April 2023",
    points: [
      "Led the Internal Works Department team in the development and maintenance of the Fusion project.",
      "Oversaw project planning, code reviews, and testing to ensure the timely delivery of high-quality features and functionality.",
      "Restructured the communication flow among 23 modules, resulting in a significant reduction of paperwork by 65 percent.",
      "Implemented effective project management strategies to streamline processes and optimize team performance.",
      "Demonstrated strong leadership skills by effectively coordinating and guiding the team to achieve project milestones and objectives.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Jitter",
    description:
      "Jitter is a social media app inspired by Twitter, offering a character-limited platform for users to share thoughts, ideas, and updates. It fosters lively connections, lets users follow influencers, join trending discussions, and discover fresh content. With an intuitive interface and real-time updates, Jitter keeps users connected, informed, and engaged in the digital realm.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "versel",
        color: "red-text-gradient",
      },
      {
        name: "prisma",
        color: "grey-text-gradient",
      },
    ],
    image: twitterClone,
    source_code_link: "https://github.com/anishwar-007/twitter-clone",
    project_link: "https://jitter-clone.vercel.app/",
  },
  {
    name: "Amazon Clone",
    description:
      "Our Amazon-like e-commerce website offers a complete shopping experience. Users can create accounts, browse products, add items to their carts, and securely checkout. Integrated with a reliable payment gateway, our platform ensures safe transactions. Enjoy convenient and trustworthy online shopping on our user-friendly website.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "grey-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: amazonClone,
    source_code_link: "https://github.com/anishwar-007/amazon-clone",
    project_link: "https://clone2434.web.app/",
  },
  {
    name: "Medigram",
    description:
      "Our hospital-specific medical pager website facilitates secure direct messaging (DMs) for healthcare professionals. It also includes a GIF feature, enabling effective communication and visual sharing. Enhance collaboration and streamline workflows with our efficient medical pager designed for hospitals.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "grey-text-gradient",
      },
    ],
    image: medigram,
    source_code_link: "https://github.com/anishwar-007/medigram",
  },
  {
    name: "Samurai Kill",
    description:
      "Embark on an epic duel in our 2-player samurai game. Unleash your sword skills, engage in intense combat, and experience the art of bushido. With strategic gameplay and immersive graphics, channel your inner warrior and engage in thrilling battles with a friend.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "canvas",
        color: "green-text-gradient",
      },
      {
        name: "netlify",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "grey-text-gradient",
      },
    ],
    image: samuraiKill,
    source_code_link: "https://github.com/anishwar-007/Samurai-Kill",
    project_link: "https://samurai-kill.netlify.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "Our Netflix clone brings the excitement of streaming right to your fingertips. Explore an extensive library of shows and movies, and click on any title to instantly watch its captivating trailer. Discover new favorites, preview gripping content, and immerse yourself in a world of cinematic entertainment with our user-friendly platform.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "grey-text-gradient",
      },
    ],
    image: netflixClone,
    source_code_link: "https://github.com/anishwar-007/netflix-clone",
    project_link: "https://netflix-clone-2434.web.app/",
  },
  {
    name: "Quizbuzz",
    description:
      "Experience the ultimate quiz app where you can select topics and difficulty levels. Test your knowledge with engaging quizzes, compete with friends, and expand your expertise. Choose your preferred challenge and embark on a fun and educational journey of discovery with our interactive and customizable quiz application.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "netlify",
        color: "pink-text-gradient",
      },
    ],
    image: quizbuzz,
    source_code_link: "https://github.com/anishwar-007/Quizbuzz",
    project_link: "https://quizbuzz-anishwar-sharma.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
