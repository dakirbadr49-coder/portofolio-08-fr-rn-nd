/*
 * Language-independent project data. Text (title/description) lives in
 * src/i18n/locales/*.js under `projects.items`, matched here by array index.
 * Projects with a real screenshot/demo are listed first; placeholders last.
 *
 * PERSONALIZE ME:
 * - image: path to a screenshot in /public/images (e.g. '/images/geo-map.png'), or null for a placeholder
 * - demoUrl: link to your live demo
 * - githubUrl: link to the GitHub repository
 */
export const projects = [
  {
    id: 'personal-portfolio',
    techs: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/personal-portfolio.png',
    demoUrl: 'https://2026.webdev-cf2m.be/Stagiaires/badr/T.I./portofolio-php/Portofolio-php/',
    githubUrl: '', // TODO: add your GitHub repo URL
  },
  {
    id: 'solar-system-3d',
    techs: ['JavaScript', 'Three.js', 'WebGL'],
    image: '/images/solar-system-3d.png',
    demoUrl: '/demos/planet-3d/index.html',
    githubUrl: 'https://github.com/dakirbadr49-coder/planets-3d',
  },
  {
    id: 'neural-city',
    techs: ['JavaScript', 'Three.js', 'WebGL'],
    image: '/images/neural-city.png',
    demoUrl: 'https://dakirbadr49-coder.github.io/neutral-city/',
    githubUrl: 'https://github.com/dakirbadr49-coder/neutral-city',
  },
  {
    id: 'bnetwork-landing',
    techs: ['Next.js', 'React', 'Stripe'],
    image: '/images/bnetwork-studio.png',
    demoUrl: 'https://my-app-git-main-dakir.vercel.app',
    githubUrl: '', // TODO: add your GitHub repo URL
  },
  {
    id: 'geo-map',
    techs: ['JavaScript', 'Leaflet', 'OpenStreetMap'],
    image: null, // TODO: add a screenshot of the interactive map
    demoUrl: '', // TODO: add your live demo URL
    githubUrl: '', // TODO: add your GitHub repo URL
  },
  {
    id: 'guestbook',
    techs: ['PHP', 'MySQL'],
    image: null, // TODO: add a screenshot of the guestbook
    demoUrl: '', // TODO: add your live demo URL
    githubUrl: '', // TODO: add your GitHub repo URL
  },
]
