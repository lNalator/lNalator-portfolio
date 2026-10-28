export type Lang = "fr" | "en";

// Nav labels are split into vertical segments; `bc: true` renders in the barcode font.
// Segments are listed in reverse reading order (the label is rotated 180°).
type Segment = { s: string; bc?: boolean };

const fr = {
  nav: {
    "/": [{ s: "IL" }, { s: "E", bc: true }, { s: "ACCU" }] as Segment[],
    "/projects": [
      { s: "TS" },
      { s: "E", bc: true },
      { s: "J" },
      { s: "O", bc: true },
      { s: "PR" },
    ] as Segment[],
    "/contact": [{ s: "NTACT" }, { s: "O", bc: true }, { s: "C" }] as Segment[],
  },
  home: {
    role: "Développeur Informatique Fullstack",
    years: "4",
    yearsLabel: ["Années", "d'expérience"],
    locationLabel: "Actuellement sur",
    location: "BORDEAUX",
    experienceTitle: ["Expérience", "Professionnelle"],
    experienceText:
      "Développeur FullStack depuis 4 ans, j'entame ma 5e année. J'ai commencé par 2 ans chez Ventoris en tant qu'apprenti développeur FullStack, puis je poursuis depuis 3 ans chez Trizzy en tant que développeur FullStack en alternance (3e année en cours). J'ai également mené de nombreux projets académiques et personnels, notamment en tant qu'intégrateur web bénévole pour l'association Croquette et Macadam.",
    todayTitle: "Aujourd'hui ?",
    todayText:
      "Je ne cherche pas de nouvelle opportunité pour le moment, mais je continue de travailler sur mes projets. Vous pouvez les retrouver sur la page Projets, les plus récents en premier. Je suis ouvert à tout projet ou toute demande, car je suis avant tout passionné par ce métier.",
    projects: "Voir mes projets",
    cv: "Téléchargez mon CV",
    cvFile: "/CV Enzo Midonet - FRANCAIS.pdf",
  },
  contact: {
    title: "N'hésitez pas à me contacter",
    name: "NOM",
    email: "EMAIL",
    subject: "SUJET",
    message: "MESSAGE",
    send: "Envoyer",
    thanks: (name: string) =>
      `Merci de m'avoir contacté ${name}!\nJe vous répondrai sous peu!`,
    retry: "Réessayez dans quelques secondes.",
    error: "Une erreur est survenue, réessayez dans quelques secondes.",
  },
  toggleLang: "Switch to English",
};

const en: typeof fr = {
  nav: {
    "/": [{ s: "ME" }, { s: "O", bc: true }, { s: "H" }],
    "/projects": [{ s: "JECTS" }, { s: "O", bc: true }, { s: "PR" }],
    "/contact": fr.nav["/contact"],
  },
  home: {
    role: "Fullstack Software Developer",
    years: "4",
    yearsLabel: ["Years of", "experience"],
    locationLabel: "Currently in",
    location: "BORDEAUX",
    experienceTitle: ["Professional", "Experience"],
    experienceText:
      "A Fullstack developer for 4 years, I am starting my 5th. I began with 2 years at Ventoris as a Fullstack apprentice developer, and for the past 3 years I have been at Trizzy as a Fullstack developer on a work-study contract (3rd year in progress). I have also worked on many academic and personal projects, including volunteering as a web integrator for the association Croquette et Macadam.",
    todayTitle: "Today?",
    todayText:
      "I am not looking for a new opportunity right now, but I keep working on my projects. You can find them on the Projects page, most recent first. I am open to any project or request, because above all I am passionate about this job.",
    projects: "See my projects",
    cv: "Download my CV",
    cvFile: "/CV Enzo Midonet - FRANCAIS.pdf", // ponytail: no English CV yet, add one and point here
  },
  contact: {
    title: "Feel free to contact me",
    name: "NAME",
    email: "EMAIL",
    subject: "SUBJECT",
    message: "MESSAGE",
    send: "Send message",
    thanks: (name: string) =>
      `Thank you for contacting me ${name}!\nI will get back to you soon!`,
    retry: "Please try again in a few seconds.",
    error: "An error occurred, please try again in a few seconds.",
  },
  toggleLang: "Passer en français",
};

export const dict = { fr, en };
