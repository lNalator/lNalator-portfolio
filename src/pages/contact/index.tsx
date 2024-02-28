import {
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Flex,
  Input,
  ActionIcon,
  rem,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "../../styles/contact.module.css";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

export default function Contact(props: any) {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Flex justify={"center"} align={"center"} w={"100%"} h={"100vh"}>
      <form onSubmit={form.onSubmit(() => {})} className={classes.root}>
        <Title order={3} ta="center" className={classes.text}>
          N'hésitez pas à me contacter
        </Title>
        <Group gap="xs" justify="center" wrap="nowrap" m={"sm"}>
          <ActionIcon
            autoContrast
            size="xl"
            radius="xl"
            variant="default"
            classNames={{ root: classes.aiButton, icon: classes.icons }}
          >
            <IconBrandLinkedin
              style={{ width: rem(25), height: rem(25) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            autoContrast
            size="xl"
            radius="xl"
            variant="default"
            classNames={{ root: classes.aiButton, icon: classes.icons }}
          >
            <IconBrandGithub
              style={{ width: rem(25), height: rem(25) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
        <Title order={2} ta="center" className={classes.text}>
          enzomidonetpro@gmail.com
        </Title>
        <Title order={2} ta="center" className={classes.text}>
          +33 6 03 22 47 69
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <Input
            classNames={{ wrapper: classes.wrapper, input: classes.input }}
            placeholder="NOM"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <Input
            classNames={{ wrapper: classes.wrapper, input: classes.input }}
            placeholder="EMAIL"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <Input
          classNames={{ wrapper: classes.wrapper, input: classes.input }}
          placeholder="SUJET"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps("subject")}
        />
        <Textarea
          classNames={{ wrapper: classes.wrapper, input: classes.input }}
          mt="md"
          placeholder="MESSAGE"
          maxRows={props.window.isMobile ? 5 : 15}
          minRows={props.window.isMobile ? 5 : 13}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
        />

        <Group justify="center" mt="xl">
          <Button
            type="submit"
            size="md"
            className={classes.button}
            autoContrast
          >
            Send message
          </Button>
        </Group>
      </form>
    </Flex>
  );
}
