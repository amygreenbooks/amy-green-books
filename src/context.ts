import { createContext } from "@builder.io/qwik";
import type { MenuItem } from "./siteConfig";

export interface SiteStore {
  mainMenu: MenuItem[];
}

export const GlobalStore = createContext<SiteStore>("site-store");
