import { ActionIcon } from "@mantine/core";
import classes from "../../styles/togglerButton.module.css";
import { useLang } from "../../i18n/LangContext";

export default function LangToggler() {
  const { lang, setLang, t } = useLang();

  return (
    <ActionIcon
      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
      variant="default"
      size="xl"
      aria-label={t.toggleLang}
      title={t.toggleLang}
      pos={"fixed"}
      right={76}
      top={20}
      className={classes.toggler}
      fw={600}
    >
      {lang === "fr" ? "EN" : "FR"}
    </ActionIcon>
  );
}
