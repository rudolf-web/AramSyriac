// Tiny shared language context for the Learn Syriac bilingual UI.
//
// App.tsx owns the UI_STRINGS dictionary and the `t()` helper; it provides
// `{ lang, t }` through this context so every component can translate its
// visible text without prop-drilling. One approach only: context everywhere
// (except <AIAssistant/>, which takes an explicit `lang` prop per its own API).
import { createContext, useContext } from "react";

export type Lang = "id" | "en";

export interface LangValue {
  lang: Lang;
  /** Translate a UI_STRINGS key; falls back to the key itself if missing. */
  t: (key: string) => string;
}

export const LangContext = createContext<LangValue>({
  lang: "id",
  t: (key: string) => key,
});

export const useLang = () => useContext(LangContext);
