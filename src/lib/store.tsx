import * as React from "react";
import type { Lang } from "./i18n";
import { translate } from "./i18n";
import { users } from "@/data/users";
import { submissions as seedSubmissions } from "@/data/homework";
import { notifications as seedNotifications } from "@/data/misc";
import type { Notification, Role, Submission, User } from "@/types";

interface AppState {
  user: User | null;
  ready: boolean;
  lang: Lang;
  theme: "light" | "dark";
  submissions: Submission[];
  notifications: Notification[];
  login: (email: string) => User | null;
  loginAs: (role: Role) => User;
  logout: () => void;
  setLang: (l: Lang) => void;
  toggleTheme: () => void;
  upsertSubmission: (s: Submission) => void;
  markAllRead: () => void;
  t: (key: string) => string;
}

const Ctx = React.createContext<AppState | null>(null);

const STORAGE_KEY = "rsoft-campus-state";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [lang, setLangState] = React.useState<Lang>("hy");
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const [ready, setReady] = React.useState(false);
  const [submissions, setSubmissions] = React.useState<Submission[]>(seedSubmissions);
  const [notifications, setNotifications] = React.useState<Notification[]>(seedNotifications);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { userId?: string; lang?: Lang; theme?: "light" | "dark" };
        if (parsed.userId) setUser(users.find((u) => u.id === parsed.userId) ?? null);
        if (parsed.lang) setLangState(parsed.lang);
        if (parsed.theme) setTheme(parsed.theme);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  React.useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ userId: user?.id, lang, theme }));
  }, [user, lang, theme, ready]);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const value: AppState = {
    user,
    ready,
    lang,
    theme,
    submissions,
    notifications,
    login: (email) => {
      const found = users.find((u) => u.email.toLowerCase() === email.trim().toLowerCase()) ?? null;
      if (found) setUser(found);
      return found;
    },
    loginAs: (role) => {
      const found = users.find((u) => u.role === role)!;
      setUser(found);
      return found;
    },
    logout: () => setUser(null),
    setLang: setLangState,
    toggleTheme: () => setTheme((p) => (p === "light" ? "dark" : "light")),
    upsertSubmission: (s) =>
      setSubmissions((prev) => {
        const i = prev.findIndex((x) => x.id === s.id);
        if (i === -1) return [...prev, s];
        const next = [...prev];
        next[i] = s;
        return next;
      }),
    markAllRead: () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true }))),
    t: (key) => translate(key, lang),
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp() {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
