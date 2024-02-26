import { Center } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import classes from "../../styles/Navbar.module.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import { variants } from "./components/variants";
import NavPath from "./components/NavPath";

export default function Navbar() {
  const router = useRouter();
  const pathName = usePathname();

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <nav className={classes.navbar}>
      <IconChevronUp
        className={classes.link}
        onClick={() => {
          paginate(-1);
          router.push(NavPath(pathName).prevLink);
        }}
      />
      <Center>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            className={classes.textContainer}
            custom={direction}
            variants={variants.desktop}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "tween", duration: 0.5 },
              opacity: { duration: 0.55 },
            }}
          >
            {(pathName === "/about" && <AboutPage />) ||
              (pathName === "/projects" && <ProjectsPage />) ||
              (pathName === "/" && <HomePage />)}
          </motion.div>
        </AnimatePresence>
      </Center>
      <IconChevronDown
        className={classes.link}
        onClick={() => {
          paginate(1);
          router.push(NavPath(pathName).nextLink);
        }}
      />
    </nav>
  );
}
