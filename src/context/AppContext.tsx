"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { AppState, AppAction, MetaTagData } from "@/types";

function createDefaultMeta(): MetaTagData {
  return {
    id: "",
    url: "https://example.com",
    title: "My Awesome Website",
    description:
      "A brief description of my website that will appear in search results and social media previews.",
    ogImageUrl: "https://placehold.co/1200x630/6366f1/ffffff?text=OG+Image",
    twitterCardType: "summary_large_image",
    createdAt: Date.now(),
    name: "",
  };
}

const initialState: AppState = {
  meta: createDefaultMeta(),
  savedSets: [],
  theme: "light",
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SET_URL":
      return { ...state, meta: { ...state.meta, url: action.payload } };
    case "SET_TITLE":
      return { ...state, meta: { ...state.meta, title: action.payload } };
    case "SET_DESCRIPTION":
      return {
        ...state,
        meta: { ...state.meta, description: action.payload },
      };
    case "SET_OG_IMAGE":
      return {
        ...state,
        meta: { ...state.meta, ogImageUrl: action.payload },
      };
    case "SET_TWITTER_CARD_TYPE":
      return {
        ...state,
        meta: { ...state.meta, twitterCardType: action.payload },
      };
    case "SET_META":
      return { ...state, meta: action.payload };
    case "SET_SAVED_SETS":
      return { ...state, savedSets: action.payload };
    case "SAVE_SET": {
      const named: MetaTagData = {
        ...state.meta,
        id: state.meta.id || crypto.randomUUID(),
        name: action.payload,
        createdAt: Date.now(),
      };
      const existing = state.savedSets.find((s) => s.name === action.payload);
      const updated = existing
        ? state.savedSets.map((s) => (s.name === action.payload ? named : s))
        : [...state.savedSets, named];
      return { ...state, savedSets: updated, meta: named };
    }
    case "LOAD_SET":
      return {
        ...state,
        meta:
          state.savedSets.find((s) => s.id === action.payload) || state.meta,
      };
    case "DELETE_SET":
      return {
        ...state,
        savedSets: state.savedSets.filter((s) => s.id !== action.payload),
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}

interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  generateCode: () => string;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("metatag-preview-state");
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<AppState>;
        if (parsed.meta) dispatch({ type: "SET_META", payload: parsed.meta });
        if (parsed.savedSets) dispatch({ type: "SET_SAVED_SETS", payload: parsed.savedSets });
        if (parsed.theme)
          dispatch({ type: "SET_THEME", payload: parsed.theme });
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("metatag-preview-state", JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  // Apply dark class
  useEffect(() => {
    const root = document.documentElement;
    if (state.theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [state.theme]);

  const generateCode = useCallback(() => {
    const { meta } = state;
    const tags = [
      `<meta property="og:url" content="${meta.url}" />`,
      `<meta property="og:title" content="${meta.title}" />`,
      `<meta property="og:description" content="${meta.description}" />`,
      `<meta property="og:image" content="${meta.ogImageUrl}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta name="twitter:card" content="${meta.twitterCardType}" />`,
      `<meta name="twitter:title" content="${meta.title}" />`,
      `<meta name="twitter:description" content="${meta.description}" />`,
      `<meta name="twitter:image" content="${meta.ogImageUrl}" />`,
      `<meta name="description" content="${meta.description}" />`,
      `<title>${meta.title}</title>`,
    ];
    return tags.join("\n");
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch, generateCode }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
