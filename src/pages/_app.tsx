import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import {
  AppShell,
  createTheme,
  MantineProvider,
  MantineColorsTuple,
} from "@mantine/core";
import classes from "./_main.module.css";
import Navbar from "../components/navBar/Navbar";

const myColor: MantineColorsTuple = [
  "#ffeaec",
  "#fdd4d6",
  "#f4a7ac",
  "#ec777e",
  "#e64f57",
  "#e3353f",
  "#e22732",
  "#c91a25",
  "#b31220",
  "#9e0419",
];

const theme = createTheme({
  colors: {
    myColor,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <AppShell className={classes.root}>
        <AppShell.Navbar bg={"unset"}>
          <Navbar />
        </AppShell.Navbar>
        <AppShell.Main>
          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
