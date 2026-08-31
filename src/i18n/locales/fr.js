export default {
  meta: { name: "Français" },
  nav: {
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    skills: "Compétences",
    education: "Formation",
    contact: "Contact",
  },
  hero: {
    greeting: "Bonjour, je suis",
    name: "Badr Dakir",
    title: "Développeur Web Junior",
    tagline:
      "Basé à Bruxelles — je construis des expériences web sobres et responsives, et j'apprends surtout en construisant.",
    availability: "Disponible immédiatement pour un stage ou un poste junior",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
  },
  about: {
    eyebrow: "À propos de moi",
    heading: "Qui je suis",
    p1: "Je suis actuellement en formation Web Developer Full Stack au CF2M, à Bruxelles. J'apprends surtout en construisant : je transforme de petites idées en projets fonctionnels, puis je creuse ce qui casse en cours de route.",
    p2: "Je cherche un stage ou un premier poste junior, et je suis disponible immédiatement.",
    aiHeading: "Un flux de travail assisté par l'IA",
    aiText:
      "J'intègre Claude dans mon workflow quotidien : génération et relecture de code, débogage plus rapide, exploration de nouvelles librairies. Cela m'aide à produire du meilleur code, tout en continuant à consolider mes fondamentaux.",
  },
  projects: {
    eyebrow: "Portfolio",
    heading: "Projets",
    subtitle: "Quelques réalisations faites en apprenant.",
    demo: "Démo",
    code: "Code",
    imagePlaceholder: "Capture d'écran à venir",
    items: [
      {
        title: "Carte interactive — géolocalisation",
        description:
          "Une carte interactive affichant des lieux géolocalisés avec des marqueurs cliquables, accompagnée d'un tableau dynamique des coordonnées (latitude/longitude, en degrés décimaux et DMS). Réalisée avec l'API Leaflet et les tuiles OpenStreetMap.",
      },
      {
        title: "Portfolio personnel",
        description:
          "Une maquette réalisée sur Figma, puis intégrée en un site entièrement responsive en HTML, CSS et JavaScript, et mise en ligne via FTP.",
      },
      {
        title: "Livre d'or dynamique",
        description:
          "Un formulaire PHP qui enregistre les messages des visiteurs dans une base de données MySQL, avec une interface responsive, déployée en ligne.",
      },
    ],
  },
  skills: {
    eyebrow: "Boîte à outils",
    heading: "Compétences",
    subtitle: "Technologies et outils que j'utilise et que je maîtrise.",
    qualifiers: { basics: "bases", cli: "ligne de commande" },
  },
  education: {
    eyebrow: "Parcours",
    heading: "Formation",
    subtitle: "Où je me suis formé, et où je me forme actuellement.",
    locationHeading: "Où je me suis formé",
    locationNote: "CF2M — Saint-Gilles, Bruxelles",
    items: [
      {
        title: "Web Developer Full Stack",
        place: "CF2M, Saint-Gilles (Bruxelles)",
        period: "2026 — en cours",
        description:
          "Front-end & back-end : HTML/CSS, JavaScript, PHP, bases de données, responsive. Sites sur mesure, gestion client/serveur, Git, travail en équipe.",
      },
      {
        title: "Autoformation HTML / CSS / JS",
        place: "Cours en ligne",
        period: "2023 — 2025",
        description: "Apprentissage des fondamentaux du développement front-end via des cours en ligne et des projets personnels.",
      },
    ],
  },
  contact: {
    eyebrow: "Me contacter",
    heading: "Contact",
    subtitle: "Discutons — je suis ouvert aux stages et aux opportunités junior.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    githubPlaceholder: "Ajoute ton URL GitHub",
    linkedinPlaceholder: "Ajoute ton URL LinkedIn",
  },
  footer: {
    rights: "Tous droits réservés.",
  },
  theme: {
    toggleToDark: "Passer en mode sombre",
    toggleToLight: "Passer en mode clair",
  },
}
