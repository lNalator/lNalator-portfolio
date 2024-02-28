import { Container, SimpleGrid } from "@mantine/core";
import { ArticleCard } from "../../components/articleCards/ArticleCard";
import { cardData } from "../../components/data/cardsData";

export default function Projects() {
  const cards = cardData.map((project) => (
    <ArticleCard
      projectLink={project.projectLink}
      key={project.title}
      title={project.title}
      description={project.description}
      image={project.image}
      date={project.date}
      projectType={project.projectType}
    />
  ));
  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
