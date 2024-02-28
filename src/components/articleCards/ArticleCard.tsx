import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem,
} from "@mantine/core";
import classes from "./ArticleCard.module.css";

export function ArticleCard(props: any) {
  const linkProps = {
    href: props.projectLink,
    target: "_blank",
    rel: "noopener noreferrer",
  };
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          <Image src={props.image} height={180} />
        </a>
      </Card.Section>

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        {props.title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={3}>
        {props.description}
      </Text>
      <Text fz="sm" c="dimmed" lineClamp={1}>
        {props.date}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar src="./Images/Samurai.png" size={24} radius="xl" mr="xs" />
          <Text fz="sm" inline>
            {props.projectType}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.red[6]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[6]}
            />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
