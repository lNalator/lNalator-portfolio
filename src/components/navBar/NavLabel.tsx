import { Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import classes from "../../styles/Navbar.module.css";
import { useLang } from "../../i18n/LangContext";

export default function NavLabel() {
  const pathName = usePathname();
  const { t } = useLang();
  const segments = t.nav[pathName as keyof typeof t.nav] ?? t.nav["/"];

  return (
    <>
      {segments.map(({ s, bc }, i) => (
        <Text
          key={i}
          size="xl"
          className={bc ? classes.textBarcode : classes.text}
        >
          {s}
        </Text>
      ))}
    </>
  );
}
