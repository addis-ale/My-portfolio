import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealApp,
  rollApp,
  linkedIn,
  github,
  dms,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
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
    name: "Next JS",
    icon: nextJs,
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
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Hero Education & Job Consultancy",
    company_website: "https://heroconsultancy-kcip.vercel.app/",
    icon: nickelfox, // Replace with your project logo or icon
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Developing and maintaining web applications using Next.js, TypeScript, and MongoDB.",
      "Implementing user authentication and authorization flows using NextAuth.js, including email and Google sign-in.",
      "Building job and scholarship application tracking systems with real-time notifications for admins and users.",
      "Creating admin dashboards to manage user applications and statuses, improving data visibility and decision-making.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Newgen Software",
    company_website: "https://newgensoft.com/home-india/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Dec 2021",
    points: [
      "Developed a groundbreaking banking product for a Singapore-based firm, improved transaction management.",
      "Developed a dynamic dashboard for efficient transaction management, resulting in a 30% increase in productivity.",
      "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
      "Created a transaction report generator, reducing report generation time by 50% and enhancing data analysis.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Skillrisers",
    company_website: "https://www.skillrisers.com/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Jul 2020",
    points: [
      "Contributed to the development of a Test Engine Application, empowering users to create and conduct tests seamlessly.",
      "Built three essential modules: Teacher, Student, and Admin, ensuring comprehensive functionality for all user roles.",
      "Collaborated effectively with the development team, actively participating in code reviews and resolving technical challenges.",
      "Demonstrated strong problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    company_website: "https://proximus.surge.sh/index.html",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Jan 2021",
    points: [
      "Spearheaded the development of a fully responsive website for the college coding society.",
      "Led coding sessions, actively sharing knowledge and insights to enrich members' programming skills and understanding.",
      "Organized informative sessions on cutting-edge technologies, including JavaScript and ReactJs.",
      "Curated and designed challenging coding problems for college competitions.",
    ],
  },
];

const projects = [
  {
    name: "Hero Educational and Job Consultancy Web",
    description:
      "Hero Education & Job Consultancy is a web application designed to streamline the process of applying for jobs and scholarships. It provides users with a platform to search for and apply to various educational and career opportunities while tracking their application status.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NextAuth.js",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "React-framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://heroconsultancy-kcip.vercel.app/",
  },
  {
    name: "Fast Pizza Web App",
    description:
      "The Fast Pizza Ordering Web App is a user-friendly platform that enables customers to easily browse through a variety of pizzas, customize their orders, and place them for quick delivery. With a smooth and intuitive interface, the app ensures a fast and efficient pizza ordering experience, perfect for pizza lovers on the go.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://fastpixxa.netlify.app/",
  },
  {
    name: "Document Management System (DMS)",
    description:
      "The Document Management System (DMS) is a full-stack application designed to manage categorized project reports such as monthly, weekly, quarterly, and annual reports. It enables admins to upload, update, and organize documents efficiently for construction and engineering projects. Built with React and Express.js, the system ensures smooth handling of documents with a scalable and maintainable structure.",
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
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "pink-text-gradient",
      },
    ],
    image: dms,
    hosted_link: "https://dms-prod-e3ds.vercel.app/",
  },
  {
    name: "Brainwave Web",
    description:
      "Brain Wave is a project designed to master Tailwind CSS by building a responsive and visually appealing web interface. The project focuses on utilizing Tailwind’s utility-first classes to create clean, customizable layouts, ensuring fast development and a seamless user experience.",
    tags: [
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link: "https://brainwavecss.netlify.app/",
  },

  {
    name: "Shopsy web App",
    description:
      "Shopsy Web App is focused on creating an intuitive and visually appealing interface for users to browse, shop, and manage their orders.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link: "https://taupe-monstera-6efdc8.netlify.app/",
  },
];

const personalInfo = {
  name: "Addis",
  fullName: "Addis Alemayehu",
  email: "addisale0727@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in TypeScript and
  JavaScript, and expertise in frameworks like React.Js
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://github.com/addis-ale/addis-ale/raw/main/Addis_Alemayehu_Resume.pdf",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "www.linkedin.com/in/addis-alemayehu-440942332",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/addis-ale",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
