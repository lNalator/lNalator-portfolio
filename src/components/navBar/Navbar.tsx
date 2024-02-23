import { Center } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import classes from "../../styles/Navbar.module.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AboutPage from "./component/AboutPage";
import ProjectsPage from "./component/ProjectsPage";
import HomePage from "./component/HomePage";

const variants = {
  enter: (direction: number) => {
    return {
      zIndex: -1,
      y: direction > 0 ? 700 : -700,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 700 : -700,
      opacity: 0,
    };
  },
};

function NavPath(pathName: string) {
  if (pathName === "/about") {
    return {
      prevLink: "/projects",
      nextLink: "/",
    };
  } else if (pathName === "/projects") {
    return {
      prevLink: "/",
      nextLink: "/about",
    };
  } else {
    return {
      prevLink: "/about",
      nextLink: "/projects",
    };
  }
}

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
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "tween", duration: 0.5 },
              opacity: { duration: 0.55 },
              ease: "easeInOut",
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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
