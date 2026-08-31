export default {
  meta: { name: 'English' },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Badr Dakir',
    title: 'Junior Web Developer',
    tagline:
      'Based in Brussels — I build clean, responsive web experiences and learn fast by doing.',
    availability: 'Available immediately for an internship or a junior position',
    ctaProjects: 'View my projects',
    ctaContact: 'Get in touch',
  },
  about: {
    eyebrow: 'About me',
    heading: 'Who I am',
    p1: "I'm currently training as a Full Stack Web Developer at CF2M in Brussels. I learn mostly by building — turning small ideas into working projects, then digging into whatever breaks along the way.",
    p2: "I'm looking for an internship or a first junior position, and I'm available immediately.",
    aiHeading: 'AI-assisted workflow',
    aiText:
      "I use Claude as part of my daily workflow — to generate and review code, debug faster, and explore new libraries. It helps me ship better code while I keep building strong fundamentals underneath.",
  },
  projects: {
    eyebrow: 'Portfolio',
    heading: 'Projects',
    subtitle: "A few things I've built while learning.",
    demo: 'Demo',
    code: 'Code',
    imagePlaceholder: 'Screenshot coming soon',
    items: [
      {
        title: 'Interactive map — geolocation',
        description:
          'An interactive map displaying geolocated places with clickable markers, plus a dynamic coordinates table (latitude/longitude, in decimal degrees and DMS). Built with the Leaflet API and OpenStreetMap tiles.',
      },
      {
        title: 'Personal portfolio',
        description:
          'A mockup designed in Figma, then built into a fully responsive site with plain HTML, CSS and JavaScript, and deployed online via FTP.',
      },
      {
        title: 'Dynamic guestbook',
        description:
          'A PHP form that saves visitor messages to a MySQL database, with a responsive interface, deployed online.',
      },
    ],
  },
  skills: {
    eyebrow: 'Toolbox',
    heading: 'Skills',
    subtitle: 'Technologies and tools I use and am comfortable with.',
    qualifiers: { basics: 'basics', cli: 'command line' },
  },
  education: {
    eyebrow: 'Background',
    heading: 'Education',
    subtitle: "Where I trained, and where I'm training right now.",
    locationHeading: 'Where I trained',
    locationNote: 'CF2M — Saint-Gilles, Brussels',
    items: [
      {
        title: 'Web Developer Full Stack',
        place: 'CF2M, Saint-Gilles (Brussels)',
        period: '2026 — in progress',
        description:
          'Front-end & back-end: HTML/CSS, JavaScript, PHP, databases, responsive design. Custom-built sites, client/server workflow, Git, teamwork.',
      },
      {
        title: 'Self-taught HTML / CSS / JS',
        place: 'Online courses',
        period: '2023 — 2025',
        description: 'Learned the fundamentals of front-end development through online courses and personal projects.',
      },
    ],
  },
  contact: {
    eyebrow: 'Get in touch',
    heading: 'Contact',
    subtitle: "Let's talk — I'm open to internship and junior opportunities.",
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    githubPlaceholder: 'Add your GitHub URL',
    linkedinPlaceholder: 'Add your LinkedIn URL',
  },
  footer: {
    rights: 'All rights reserved.',
  },
  theme: {
    toggleToDark: 'Switch to dark mode',
    toggleToLight: 'Switch to light mode',
  },
}
