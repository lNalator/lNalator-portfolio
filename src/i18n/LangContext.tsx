import { createContext, useContext, useEffect, useState } from "react";
import { dict, Lang } from "./dict";

const STORAGE_KEY = "lang";

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof dict)["fr"];
}>({ lang: "fr", setLang: () => {}, t: dict.fr });

export function LangProvider({ children }: { children: React.ReactNode }) {
  // "fr" on first render so server and client markup match
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") setLangState(saved);
    else if (navigator.language.startsWith("en")) setLangState("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
