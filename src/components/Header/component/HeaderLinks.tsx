import {
  UnstyledButton,
  Group,
  ThemeIcon,
  rem,
  useMantineTheme,
  Text,
} from "@mantine/core";
import classes from "../HeaderMegaMenu.module.css";
import { IconBone, IconCode, IconDeviceGamepad2 } from "@tabler/icons-react";

const mockdata = [
  {
    icon: IconDeviceGamepad2,
    title: "Arcade Runnin'",
    description:
      "Un jeu créé sous Unity pendant 1 semaine après 2 ans sans avoir programmé en C# - 2020",
  },
  {
    icon: IconCode,
    title: "Code Wars",
    description:
      "Les exercices de programmation réalisé pour m'entrainer en C#",
  },
  {
    icon: IconBone,
    title: "Croquette & Macadam",
    description: "Site que j'ai réalisé pour l'association croquette & macadam",
  },
];

export default function HeaderLinks() {
  const theme = useMantineTheme();

  return mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
}
