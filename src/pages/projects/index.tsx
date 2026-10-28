import { Container, SimpleGrid } from "@mantine/core";
import { ArticleCard } from "../../components/articleCards/ArticleCard";
import { useLang } from "../../i18n/LangContext";
import { cardData } from "../../components/data/cardsData";

export default function Projects() {
  const { lang } = useLang();
  const cards = cardData.map((project) => (
    <ArticleCard
      projectLink={project.projectLink}
      key={project.title}
      title={project.title}
      description={project.description[lang]}
      image={project.image}
      date={project.date[lang]}
      projectType={project.projectType[lang]}
    />
  ));
  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
