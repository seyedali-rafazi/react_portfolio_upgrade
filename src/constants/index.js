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
  meta,
  starbucks,
  tesla,
  shopify,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];



const experiences = [
  {
    title: "Basic Web Developer",
    company_name: "HTML & CSS",
    icon: html,
    iconBg: "#383E56",
    date: "Nov 2022 - Dec 2022",
    points: [
      "Proficient in HTML5 and CSS3, with experience in designing and developing responsive websites.",
      "Built and maintained several websites using HTML and CSS, including a personal website, a portfolio website, and a website for a small business.",
      "Developed a responsive website for a local coffee shop using HTML5 and CSS3. The website was designed to be mobile-friendly and to be accessible to users with disabilities.",
    ],
  },
  {
    title: "Intermediate Web Developer",
    company_name: "JavaScript",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Feb 2o023 - Mar 2023",
    points: [
      "Proficient in JavaScript, with experience in developing interactive web applications and user interfaces.",
      "Built a JavaScript-based game using the Phaser framework. The game was a simple platformer that was played in the browser.",
    ],
  },
  {
    title: "Intermediate Web Developer",
    company_name: "Bootstrap",
    icon: css,
    iconBg: "#E6DEDD",
    date: "Jan 2o023 - Feb 2023",
    points: [
      "Proficient in Bootstrap, with experience in developing responsive web pages and user interfaces.",
      "Built a Bootstrap-based portfolio website using the HTML5 and CSS3 standards. The website was designed to be mobile-friendly and to be accessible to users with disabilities.",
    ],
  },
  {
    title: "Pre-Intermediate Web Developer",
    company_name: "React.js",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Proficient in React.js, with experience in developing interactive web applications and user interfaces.",
      "Developed portfolios website based on React.js for my student customers",
    ],
  },
  {
    title: "Pre-Intermediate Web Developer",
    company_name: "Tailwind",
    icon: tailwind,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Proficient in Tailwind, with experience in developing responsive web pages and user interfaces.",
      "Built a Tailwind-based portfolio website using the HTML5 and CSS3 standards. The website was designed to be mobile-friendly and to be accessible to users with disabilities.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara ",
    designation: "Customer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Amir ",
    designation: "Customer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Tina ",
    designation: "Customer",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "He was very knowledgeable about the latest trends in social media and real world.",
    name: "Paniz ",
    designation: "Customer",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "Thanks Ali! Your product descriptions are amazing and your service is wonderful , definitely recommend .",
    name: "Paria ",
    designation: "Customer",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    testimonial:
      "He was able to take my ideas and turn them into a beautiful , functional website and responsive website.",
    name: "Parisa ",
    designation: "Customer",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  
];



export { services, experiences, testimonials };
