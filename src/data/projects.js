/*
 * Language-independent project data. Text (title/description) lives in
 * src/i18n/locales/*.js under `projects.items`, matched here by array index.
 *
 * PERSONALIZE ME:
 * - image: path to a screenshot in /public/images (e.g. '/images/geo-map.png'), or null for a placeholder
 * - demoUrl: link to your live demo
 * - githubUrl: link to the GitHub repository
 */
export const projects = [
  {
    id: 'geo-map',
    techs: ['JavaScript', 'Leaflet', 'OpenStreetMap'],
    image: null, // TODO: add a screenshot of the interactive map
    demoUrl: '', // TODO: add your live demo URL
    githubUrl: '', // TODO: add your GitHub repo URL
  },
  {
    id: 'personal-portfolio',
    techs: ['HTML', 'CSS', 'JavaScript'],
    image: null, // TODO: add a screenshot of this portfolio
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
