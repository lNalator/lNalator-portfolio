import { Text } from "@mantine/core";
import classes from "../../../styles/Navbar.module.css";

export default function HomePage() {
  return (
    <>
      <Text size="xl" className={classes.text}>
        IL
      </Text>
      <Text size="xl" className={classes.textBarcode}>
        E
      </Text>
      <Text size="xl" className={classes.text}>
        ACCU
      </Text>
    </>
  );
}
