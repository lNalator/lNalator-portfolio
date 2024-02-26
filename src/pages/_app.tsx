import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import { AppShell, MantineProvider } from "@mantine/core";
import classes from "../styles/_main.module.css";
import "../styles/global.css";
import Navbar from "../components/navBar/Navbar";
import { NavBarMobile } from "../components/navBar/mobile/NavBarMobile";
import Parallax from "../components/bg-Parallax/Parallax";
import TogglerButton from "../components/ThemeToggler/togglerButton";
import useWindowSize from "../helpers/useWindowSize";

export default function App({ Component, pageProps }: AppProps) {
  const window = useWindowSize();

  return (
    <MantineProvider>
      <AppShell className={classes.root}>
        <AppShell.Navbar bg={"unset"} withBorder={false}>
          <Navbar />
        </AppShell.Navbar>

        <Parallax />

        <AppShell.Main className={classes.main}>
          <TogglerButton />

          <Component {...pageProps} window={window} />
        </AppShell.Main>

        <AppShell.Footer hiddenFrom="sm" bg={"unset"} withBorder={false}>
          <NavBarMobile />
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
