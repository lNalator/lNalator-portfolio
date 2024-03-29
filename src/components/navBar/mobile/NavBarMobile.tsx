import { Center } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import classes from "../../../styles/Navbar.module.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectsPage from "../components/ProjectsPage";
import HomePage from "../components/HomePage";
import { variants } from "../settings/variants";
import NavPath from "../settings/NavPath";
import ContactPage from "../components/ContactPage";

export function NavBarMobile() {
  const router = useRouter();
  const pathName = usePathname();
  const swipeConfidenceThreshold = 10000;

  const [[page, direction], setPage] = useState([0, 0]);

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <IconChevronLeft
          className={classes.link}
          onClick={() => {
            paginate(-1);
            router.push(NavPath(pathName).prevLink);
          }}
        />
        <Center>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className={classes.textContainer}
              key={page}
              custom={direction}
              variants={variants.mobile}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              dragPropagation={true}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                  router.push(NavPath(pathName).nextLink);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                  router.push(NavPath(pathName).prevLink);
                }
              }}
            >
              {(pathName === "/contact" && <ContactPage/>) ||
                (pathName === "/projects" && <ProjectsPage />) ||
                (pathName === "/" && <HomePage />)}
            </motion.div>
          </AnimatePresence>
        </Center>
        <IconChevronRight
          className={classes.link}
          onClick={() => {
            paginate(1);
            router.push(NavPath(pathName).nextLink);
          }}
        />{" "}
      </div>
    </div>
  );
}
