import type { ReactNode } from "react";
import type { User } from "@/types";

import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  GraduationCap,
  TrendingUp,
  CalendarDays,
  Megaphone,
  UserRound,
  LogOut,
  Bell,
  Search,
  BrainCircuit,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  children: ReactNode;
  user: User;
};

const menu = [
  {
    title: "Գլխավոր",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Իմ դասընթացները",
    icon: BookOpen,
  },
  {
    title: "Տնային աշխատանքներ",
    icon: ClipboardList,
  },
  {
    title: "Գնահատականներ",
    icon: GraduationCap,
  },
  {
    title: "AI Feedback",
    icon: BrainCircuit,
  },
  {
    title: "Առաջադիմություն",
    icon: TrendingUp,
  },
  {
    title: "Օրացույց",
    icon: CalendarDays,
  },
  {
    title: "Հայտարարություններ",
    icon: Megaphone,
  },
  {
    title: "Պրոֆիլ",
    icon: UserRound,
  },
];

export function StudentLayout({ children, user }: Props) {
  const logout = () => {
    localStorage.removeItem("rsoft_current_user");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* SIDEBAR */}

      <aside className="fixed left-0 top-0 hidden h-screen w-[260px] border-r bg-white lg:flex lg:flex-col">
        <div className="border-b px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#019FE2] text-xl font-bold text-white">
              R
            </div>

            <div>
              <h1 className="text-lg font-bold leading-none">
                R'SOFT
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Campus
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Ուսուցում
          </p>

          <nav className="space-y-1">
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                    item.active
                      ? "bg-[#019FE2]/10 text-[#019FE2]"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Icon size={19} />

                  {item.title}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="border-t p-4">
          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            <LogOut size={19} />

            Դուրս գալ
          </button>
        </div>
      </aside>

      {/* PAGE */}

      <div className="lg:pl-[260px]">
        {/* HEADER */}

        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b bg-white/95 px-5 backdrop-blur md:px-8">
          <div className="hidden w-full max-w-md md:block">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <Input
                placeholder="Որոնել դաս, տնային..."
                className="h-10 rounded-xl bg-slate-50 pl-10"
              />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="relative rounded-xl"
            >
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </Button>

            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar} />

                <AvatarFallback>
                  {user.firstName[0]}
                  {user.lastName[0]}
                </AvatarFallback>
              </Avatar>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold">
                  {user.firstName} {user.lastName}
                </p>

                <p className="text-xs text-slate-500">
                  Ուսանող
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}