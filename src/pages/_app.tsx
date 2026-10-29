import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import { AppShell, MantineProvider } from "@mantine/core";
import classes from "../styles/_main.module.css";
import "../styles/global.css";
// keep page styles loaded: the exiting page stays mounted during the slide and would lose its CSS
import "../styles/home.module.css";
import "../styles/contact.module.css";
import "../components/articleCards/ArticleCard.module.css";
import Navbar from "../components/navBar/Navbar";
import { NavBarMobile } from "../components/navBar/mobile/NavBarMobile";
import Parallax from "../components/bg-Parallax/Parallax";
import TogglerButton from "../components/ThemeToggler/togglerButton";
import LangToggler from "../components/ThemeToggler/langToggler";
import { LangProvider } from "../i18n/LangContext";
import useWindowSize from "../helpers/useWindowSize";
import { ParallaxProvider, useParallaxController } from "react-scroll-parallax";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, type ReactNode } from "react";
import NavPath from "../components/navBar/settings/NavPath";

const SLIDE = 0.8;

// parallax measures elements while the page is still offset by the slide; re-measure once it lands
function ParallaxSync({ children }: { children: ReactNode }) {
  const controller = useParallaxController();
  useEffect(() => {
    const id = setTimeout(() => controller?.update(), SLIDE * 1000 + 50);
    return () => clearTimeout(id);
  }, [controller]);
  return <>{children}</>;
}

const pageVariants = {
  enter: (d: number) => ({ y: `${d * 100}vh`, opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (d: number) => ({ y: `${-d * 100}vh`, opacity: 0 }),
};

export default function App({ Component, pageProps }: AppProps) {
  const window = useWindowSize();
  const { pathname } = useRouter();

  // +1 when moving "down" the nav order (next), -1 when moving up; pages slide that way
  const prevPath = useRef(pathname);
  const direction = useRef(1);
  if (prevPath.current !== pathname) {
    direction.current = NavPath(prevPath.current).nextLink === pathname ? 1 : -1;
    prevPath.current = pathname;
  }

  return (
    <MantineProvider>
      <LangProvider>
      <AppShell className={classes.root}>
        <AppShell.Navbar bg={"unset"} withBorder={false}>
          <Navbar />
        </AppShell.Navbar>

        <Parallax isMobile={window.isMobile} />

        <AppShell.Main className={classes.main}>
          <LangToggler />
          <TogglerButton />
          <AnimatePresence mode="popLayout" custom={direction.current} initial={false}>
            <motion.div
              key={pathname}
              custom={direction.current}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: SLIDE, ease: [0.65, 0, 0.35, 1] }}
            >
              <ParallaxProvider>
                <ParallaxSync>
                  <Component {...pageProps} window={window} />
                </ParallaxSync>
              </ParallaxProvider>
            </motion.div>
          </AnimatePresence>
        </AppShell.Main>

        <AppShell.Footer hiddenFrom="sm" bg={"unset"} withBorder={false}>
          <NavBarMobile />
        </AppShell.Footer>
      </AppShell>
      </LangProvider>
    </MantineProvider>
  );
}
