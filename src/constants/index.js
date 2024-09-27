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
  nq7,
  unicom,
  meem,
  blackgem,
  nerdo,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Responsive Design",
    icon: mobile,
  },
  {
    title: "Front End Optimization",
    icon: backend,
  },
  {
    title: "Web Animation",
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
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "NQ7 Group",
    icon: nq7,
    iconBg: "#b69859",
    date: "10/2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company_name: "Unicom Group",
    icon: unicom,
    iconBg: "#3996c6",
    date: "11/2022 - 02/2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Meem Graphics",
    icon: meem,
    iconBg: "#343537",
    date: "06/2022 - 10/2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Blackgem Company",
    icon: blackgem,
    iconBg: "#fcf2e6",
    date: "11/2021 - 09/2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer Remotely",
    company_name: "Nerdo Yemen",
    icon: nerdo,
    iconBg: "#f6a019",
    date: "05/2021 - 06/2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Simply the best! Anas Naser turned our website dreams into reality. Fast, efficient, and a coding wizard. Recommend them for any web project!",
    name: "Ibrahim Taha",
    designation: "General Manager",
    company: "Nerdo Yemen",
    image: "/client-2.jpg",
  },
  {
    testimonial:
      "Anas Naser is a coding maestro! They crafted a sleek website for us, and we couldn't be happier. Quick, precise, and a pleasure to work with.",
    name: "Himyar Al-Jedri",
    designation: "Product Manager",
    company: "BlackGem",
    image: "/client-1.jpg",
  },
  {
    testimonial:
      "Outstanding work! Anas Naser elevated our website to new heights. Professional, efficient, and a pleasure to work with.",
    name: "Mohammed Aghbari",
    designation: "General Manager",
    company: "Meem Graphics",
    image: "/client-3.jpg",
  },
];

const projects = [
  {
    name: "China Masdar",
    description:
      "Is a leading provider of sourcing and manufacturing solutions, helping businesses find, produce, and import products...",

    image: carrent,
    source_code_link: "https://chinamasdar.com/",
  },
  {
    name: "Salla Ecommerce",
    description:
      "Alayana is a Saudi brand specializing in designing luxurious abayas. Our abayas stand out with unique designs, diverse cuts...",

    image: jobit,
    source_code_link: "https://eliana.sa/ar/",
  },
  {
    name: "3D Portfolio in React",
    description:
      "A portfolio with fun interactive parts, like a floating island and a fox that moves when you type.",

    image: tripguide,
    source_code_link:
      "https://portofolio-with-react-js-and-three-js-one.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
