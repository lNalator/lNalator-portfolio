import { Anchor, Container, Image, Text, Title } from "@mantine/core";
import classes from "../styles/home.module.css";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import { useLang } from "../i18n/LangContext";

const Sign = ({ flip }: { flip?: boolean }) => (
  <svg
    className={classes.sign}
    viewBox="0 0 195 198"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d={flip ? "M194 197V112.715L1 1V85.7837L194 197Z" : "M1 197V112.715L194 1V85.7837L1 197Z"} />
  </svg>
);

const Lines = ({ lines }: { lines: string[] }) => (
  <>
    {lines.map((line, i) => (
      <span key={i}>
        {i > 0 && <br />}
        {line}
      </span>
    ))}
  </>
);

export default function Home() {
  const { t } = useLang();

  return (
    <Container className={classes.container}>
      <section className={classes.hero}>
        <div className={classes.heroTitle}>
          <Title order={1} className={classes.title}>
            ENZO MIDONET
          </Title>
          <Title order={2} className={classes.subtitle}>
            {t.home.role}
          </Title>
        </div>

        <Parallax speed={-6} className={classes.heroImage}>
          <Image
            src={"/Images/Samurai.png"}
            alt="Enzo Midonet"
            radius={"100%"}
            className={classes.image}
          />
        </Parallax>

        <div className={classes.heroLocation}>
          <Title order={2} className={classes.subtitle}>
            {t.home.locationLabel}
          </Title>
          <Title order={1} className={classes.title}>
            {t.home.location}
          </Title>
        </div>

        <div className={classes.heroYears}>
          <Title order={1} className={classes.title}>
            {t.home.years}
          </Title>
          <Title order={2} className={classes.subtitle}>
            <Lines lines={t.home.yearsLabel} />
          </Title>
        </div>
      </section>

      {/* one Parallax per block: title and text move together so they can never overlap */}
      <Parallax speed={-3} className={classes.block}>
        <div className={classes.blockHead}>
          <Sign />
          <Title order={1} className={classes.titlePresentation}>
            <Lines lines={t.home.experienceTitle} />
          </Title>
        </div>
        <div className={classes.blockText}>
          <Text className={classes.textPresentation}>
            {t.home.experienceText}
          </Text>
        </div>
      </Parallax>

      <Parallax speed={-3} className={`${classes.block} ${classes.blockRight}`}>
        <div className={classes.blockHead}>
          <Sign flip />
          <Title order={1} className={classes.titlePresentation}>
            {t.home.todayTitle}
          </Title>
        </div>
        <div className={classes.blockText}>
          <Text className={classes.textPresentation}>{t.home.todayText}</Text>
        </div>
        <Anchor component={Link} href="/projects" className={classes.cv}>
          {t.home.projects}
        </Anchor>
        <Anchor
          className={classes.cvSecondary}
          href={t.home.cvFile}
          target="_blank"
        >
          {t.home.cv}
        </Anchor>
      </Parallax>
    </Container>
  );
}
