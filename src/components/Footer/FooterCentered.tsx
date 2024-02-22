import { Anchor, Group, ActionIcon, rem, Image } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import classes from "./FooterCentered.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { link: "/about", label: "Contact" },
  { link: "#", label: "Blog" },
];

export function FooterCentered() {
  const router = useRouter();
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      lh={1}
      onClick={() => router.push(link.link)}
      className={classes.link}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Image src="Samurai.png" mah={"3.7rem"} maw={"3.7rem"} radius={"100%"} />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandLinkedin
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandGithub
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
