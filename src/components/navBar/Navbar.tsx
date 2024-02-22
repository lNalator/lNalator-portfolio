import { Center, Image } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

function NavPath(pathName: string) {
  if (pathName === "/about") {
    return {
      image: "Contact.svg",
      prevLink: "/projects",
      nextLink: "/",
    };
  } else if (pathName === "/projects") {
    return {
      image: "Projets.svg",
      prevLink: "/",
      nextLink: "/about",
    };
  } else {
    return {
      image: "Acceuil.svg",
      prevLink: "/about",
      nextLink: "/projects",
    };
  }
}

export default function Navbar() {
  const route = useRouter();
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className={classes.navbar}>
      <IconChevronUp
        className={classes.link}
        onClick={() => route.push(NavPath(pathName).prevLink)}
      />
      <Center>
        <Image src={NavPath(pathName).image} />
      </Center>
      <IconChevronDown
        className={classes.link}
        onClick={() => route.push(NavPath(pathName).nextLink)}
      />
    </nav>
  );
}
