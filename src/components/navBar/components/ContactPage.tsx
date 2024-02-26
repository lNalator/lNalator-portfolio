import { Text } from "@mantine/core";
import classes from "../../../styles/Navbar.module.css";

export default function ContactPage() {
  return (
    <>
      <Text size="xl" className={classes.text}>
        NTACT
      </Text>
      <Text size="xl" className={classes.textBarcode}>
        O
      </Text>
      <Text size="xl" className={classes.text}>
        C
      </Text>
    </>
  );
}
