import { Center, Image } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  let imageUrl: string;
  console.log(pathName);
  if (pathName === "/about") {
    imageUrl = "Contact.svg";
  } else if (pathName === "/projects") {
    imageUrl = "Projets.svg";
  } else {
    imageUrl = "Acceuil.svg";
  }

  return (
    <nav className={classes.navbar}>
      <IconChevronUp className={classes.link} />
      <Center>
        <Image src={imageUrl as unknown as string} />
      </Center>
      <IconChevronDown className={classes.link} />
    </nav>
  );
}
