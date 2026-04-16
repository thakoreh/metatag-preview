export interface MetaTagData {
  id: string;
  url: string;
  title: string;
  description: string;
  ogImageUrl: string;
  twitterCardType: "summary_large_image" | "summary";
  createdAt: number;
  name?: string;
}

export interface AppState {
  meta: MetaTagData;
  savedSets: MetaTagData[];
  theme: "light" | "dark";
}

export type AppAction =
  | { type: "SET_URL"; payload: string }
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_DESCRIPTION"; payload: string }
  | { type: "SET_OG_IMAGE"; payload: string }
  | { type: "SET_TWITTER_CARD_TYPE"; payload: "summary_large_image" | "summary" }
  | { type: "SET_META"; payload: MetaTagData }
  | { type: "SET_SAVED_SETS"; payload: MetaTagData[] }
  | { type: "SAVE_SET"; payload: string }
  | { type: "LOAD_SET"; payload: string }
  | { type: "DELETE_SET"; payload: string }
  | { type: "TOGGLE_THEME" }
  | { type: "SET_THEME"; payload: "light" | "dark" };
