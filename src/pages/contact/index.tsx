import {
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Flex,
  Input,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "../../styles/contact.module.css";

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
        <br />
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
          <Button type="submit" size="md" className={classes.button}>
            Send message
          </Button>
        </Group>
      </form>
    </Flex>
  );
}
