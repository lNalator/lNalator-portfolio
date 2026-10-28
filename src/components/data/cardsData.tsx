import { Lang } from "../../i18n/dict";

type Text = Record<Lang, string>;

// Keep this list ordered most recent first: the Projects page renders it as is.
export const cardData: {
  projectLink?: string;
  title: string;
  image: string;
  description: Text;
  date: Text;
  projectType: Text;
}[] = [
  {
    projectLink:
      "https://www.curseforge.com/minecraft/mc-mods/cultivationcraft-re",
    title: "CultivationCraft: Re",
    image: "/Images/CultivationCraft.png",
    description: {
      fr: "Mod Minecraft de cultivation inspiré des novels xianxia 2 chemins de cultivation, tribulations célestes, compétences, alchimie... Il est actuellement en bêta.",
      en: "A Minecraft cultivation mod inspired by xianxia novels: 2 cultivation paths, heavenly tribulations, skills, alchemy...  It is currently in beta.",
    },
    date: { fr: "Mars 2024 - Au présent", en: "March 2024 - Present" },
    projectType: { fr: "Personel - En Equipe", en: "Personal - Team" },
  },
  {
    projectLink: "https://github.com/lNalator/ToASCII",
    title: "Media to ASCII",
    image: "/Images/ASCII.png",
    description: {
      fr: "Mon projet 'Media to ASCII' convertit des images, des vidéos et des live en art ASCII en utilisant C# et le package Emgu pour la gestion vidéo et live.",
      en: "My 'Media to ASCII' project converts images, videos and live streams into ASCII art using C# and the Emgu package for video and live handling.",
    },
    date: { fr: "Mai 2024", en: "May 2024" },
    projectType: { fr: "Personel - Solo", en: "Personal - Solo" },
  },
  {
    title: "Corquette et Macadam",
    image: "/Images/croquettemacadam.png",
    description: {
      fr: "Projet réalisé en parallèle de mon alternance : la création du site d'une association. L'association n'entretient plus le site sur lequel j'ai travaillé, c'est pourquoi le lien a été retiré.",
      en: "A project I built alongside my work-study contract: the website of an association. The association no longer maintains the site I worked on, which is why the link has been removed.",
    },
    date: { fr: "Avril 2021 - Septembre 2023", en: "April 2021 - September 2023" },
    projectType: { fr: "Bénévole - Client", en: "Volunteer - Client" },
  },
  {
    projectLink: "/Arcade Runnin.zip",
    title: "Arcade Runnin'",
    image: "/Images/Arcade Runnin.png",
    description: {
      fr: "Un  projet challenge que je m'était lancé après mon bac:\nCréer un jeu Unity en 1 semaine après 2 ans sans avoir programmé en C#.",
      en: "A challenge project I set myself after high school:\nBuild a Unity game in 1 week after 2 years without writing any C#.",
    },
    date: { fr: "Janvier 2020", en: "January 2020" },
    projectType: { fr: "Personel - Solo", en: "Personal - Solo" },
  },
];
