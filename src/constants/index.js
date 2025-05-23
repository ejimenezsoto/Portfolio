import {
  web,
  mobile,
  backend,
  creator,
  iOS,
  camera,
  android,
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
  carrent,
  jobit,
  tripguide,
  threejs,
  liquidsports,
  pinterest
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
    id: "testimonials",
    title: "Testimonials",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: android,
  },
  {
    title: "iOS Developer",
    icon: iOS,
  },
  {
    title: "Photographer",
    icon: camera,
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
    name: "Kotlin",
    icon: android,
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
    title: "Android Developer",
    company_name: "Pinterest",
    icon: pinterest,
    iconBg: "#383E5d6",
    date: "March 2022 - November 2024",
    points: [
      "Worked closely with UI/UX designers to translate wireframes into fully functional features that met both design specifications and stakeholder requirements",
      "Developed features using MVVM architecture, resulting in a cleaner codebase that is easier to maintain and build upon",
      "Reduced application crashes by proactively monitoring crash analytics reports and addressing any issues found",
      "Provided ongoing support for existing features by addressing user feedback, resolving bugs, and implementing feature enhancements as needed",
    ],
  },
  {
    title: "VETERAN GLOBAL DIVERSITY & INCLUSION LEAD",
    company_name: "Pinterest",
    icon: pinterest,
    iconBg: "#E6DEDD",
    date: "January 2023 - November 2024",
    points: [
      "Collaborated with HR to revise recruitment strategies for attracting a diverse pool of candidates, ultimately increasing workforce diversity",
      "Spearheaded initiatives to promote diversity and inclusion for veterans and allies within Pinterest, fostering a culture ofbelonging and support",
      "Organized and managed volunteer opportunities across the San Francisco Bay Area, increasing employee engagement and community outreach",
      "Collaborated with cross-functional teams to develop impactful programs and events aligned with the organization's diversity and inclusion goals",
      "Mentored and supported members of the Vets group, driving professional development and community building"
    ],
  },
  {
    title: "Web Developer",
    company_name: "Self-Employed",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2020 - Jan 2024",
    points: [
      "Developed websites using HTML, CSS, JavaScript, and jQuery languages.",
      "Planned website development, converting mockups into usable web presence",
      "Provided front-end development support, creating visually appealing designs that aligned with brand standards",
      "Enhanced user experience by implementing responsive web design and optimizing website performance",
    ],
  },

  {
    title: "iOS Developer",
    company_name: "Liquid Sports",
    icon: liquidsports,
    iconBg: "#383E56",
    date: "Febuary 2021 - August 2021",
    points: [
      "Designed multiple iOS storyboard layouts using Swift and Objective-C",
      "Applied appealing user designs to build front-end applications",
      "Collaborated with cross-functional teams to develop high-quality iOS applications according to client requirements",
      "Ensured cross-platform optimizations for mobile usage",
      "Conducted testing validation procedures to ensure that requirement and performance standards were met, utilizing data to enhance applications"
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Enzo proved me wrong.",
    name: "Iris Rodriguez",
    designation: "Manager",
    company: "CBRE",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Enzo has a history of being a passionate employee who takes pride in projects. Enzo is self starter who uses challenging situations as learning opportunities for professional development.",
    name: "Brandon Garrett",
    designation: "Systems Analyst",
    company: "Truecomp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "He stops the moment from fleeting, making the photograph, not taking it.",
    name: "Vanessa Chavira",
    designation: "Manager",
    company: "CBRE",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
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
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
