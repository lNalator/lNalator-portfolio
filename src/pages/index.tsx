import { Anchor, Container, Image, Text, Title } from "@mantine/core";
import classes from "../styles/home.module.css";

import { Parallax } from "react-scroll-parallax";
export default function Home(props: any) {
  return (
    <Container className={classes.container}>
      <Parallax speed={-20} className={classes.imageContainer}>
        <Image
          src={"./Images/Samurai.png"}
          radius={"100%"}
          className={classes.image}
        />
      </Parallax>

      <Parallax speed={1} className={classes.textContainerTitle}>
        <Title order={1} className={classes.title}>
          ENZO MIDONET
        </Title>
        <Title order={2} className={classes.text}>
          Développeur Informatique Fullstack
        </Title>
      </Parallax>

      <Parallax speed={-10} className={classes.textContainerYears}>
        <Title order={1} className={classes.title}>
          2
        </Title>
        <Title order={2} className={classes.text}>
          Années
          <br />
          d'expérience
        </Title>
      </Parallax>

      <Parallax speed={-5} className={classes.textContainerLocalisation}>
        <Title order={2} className={classes.text}>
          Actuellement sur
        </Title>
        <Title order={1} className={classes.title}>
          BORDEAUX
        </Title>
      </Parallax>

      <Parallax speed={10} className={classes.presentationSign}>
        <svg
          width="195"
          height="198"
          viewBox="0 0 195 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 197V112.715L194 1V85.7837L1 197Z"
            fill="black"
            stroke="black"
          />
        </svg>
      </Parallax>

      <Parallax speed={0} className={classes.titleContainerPresentation}>
        <Title order={1} className={classes.titlePresentation}>
          Expérience <br />
          Professionnelle
        </Title>
      </Parallax>

      <Parallax speed={-10} className={classes.textContainerPresentation}>
        <Text className={classes.textPresentation}>
          J'ai pu travailler 2 ans en tant que Développeur Informatique
          FullStack chez l'entreprise Ventoris pour valider mon cursus en
          alternance. J'ai également eu l'occasion de travailler sur de nombreux
          projets académique et personnel, notamment, en tant qu'Intégrateur Web
          bénévole pour l'association Croquette et macadam.
        </Text>
      </Parallax>

      <Parallax speed={10} className={classes.searchSign}>
        <svg
          width="195"
          height="198"
          viewBox="0 0 195 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M194 197V112.715L1 1V85.7837L194 197Z"
            fill="black"
            stroke="black"
          />
        </svg>
      </Parallax>

      <Parallax speed={0} className={classes.titleContainerSearch}>
        <Title order={1} className={classes.titlePresentation}>
          Aujourd'hui ?
        </Title>
      </Parallax>

      <Parallax speed={-10} className={classes.textContainerSearch}>
        <Text className={classes.textPresentation}>
          Je suis actuellement à la recherche d'une nouvelle opportunité
          d'emploi en tant que développeur informatique, je suis donc ouvert à
          toutes propositions de travail.
        </Text>
      </Parallax>
      <Anchor
        className={classes.textPresentationA}
        href="./CV-FRANCAIS.pdf"
        target="_blank"
      >
        Téléchargez mon CV
      </Anchor>
    </Container>
  );
}
