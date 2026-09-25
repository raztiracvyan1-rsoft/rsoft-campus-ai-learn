import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";

import {
  ArrowRight,
  GraduationCap,
  LockKeyhole,
  Mail,
} from "lucide-react";

import { users } from "@/data/users";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(
    "aram.sargsyan@rsoft.am"
  );

  const [password, setPassword] = useState("123456");

  const [error, setError] = useState("");

  const login = (e: FormEvent) => {
    e.preventDefault();

    const user = users.find(
      (item) =>
        item.email.toLowerCase() ===
        email.toLowerCase().trim()
    );

    if (!user) {
      setError("Այս էլ․ հասցեով օգտատեր չի գտնվել։");
      return;
    }

    if (user.status !== "active") {
      setError("Այս հաշիվը ակտիվ չէ։");
      return;
    }

    if (user.role !== "student") {
      setError(
        "Teacher և Admin համակարգերը կավելացնենք հաջորդ փուլում։"
      );

      return;
    }

    localStorage.setItem(
      "rsoft_current_user",
      user.id
    );

    navigate({
      to: "/student/dashboard",
    });
  };

  const demoStudent = () => {
    setEmail("aram.sargsyan@rsoft.am");
    setPassword("123456");
  };

  return (
    <div className="grid min-h-screen bg-slate-50 lg:grid-cols-2">
      {/* LEFT */}

      <div className="relative hidden overflow-hidden bg-[#019FE2] p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-white/10" />

        <div className="absolute -bottom-44 right-[-80px] h-[500px] w-[500px] rounded-full bg-[#FFDF59]/20" />

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl font-bold text-[#019FE2]">
              R
            </div>

            <div>
              <p className="text-xl font-bold">
                R'SOFT
              </p>

              <p className="text-sm text-white/80">
                Campus
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-xl">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <GraduationCap size={30} />
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Քո ուսումը՝
            <br />
            մեկ հարթակում։
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
            Դասեր, տնային աշխատանքներ, AI ստուգում,
            գնահատականներ և քո ամբողջ առաջադիմությունը՝
            մեկ վայրում։
          </p>
        </div>

        <p className="relative z-10 text-sm text-white/70">
          © 2026 R'SOFT Campus
        </p>
      </div>

      {/* RIGHT */}

      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#019FE2] font-bold text-white">
                R
              </div>

              <div>
                <p className="font-bold">R'SOFT</p>
                <p className="text-xs text-slate-500">
                  Campus
                </p>
              </div>
            </div>
          </div>

          <Card className="rounded-3xl border-0 shadow-xl shadow-slate-200/60">
            <CardContent className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold">
                  Բարի վերադարձ
                </h2>

                <p className="mt-2 text-slate-500">
                  Մուտք գործիր քո R'SOFT հաշիվ։
                </p>
              </div>

              <form
                onSubmit={login}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <Label>Էլ․ հասցե</Label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <Input
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      className="h-12 rounded-xl pl-10"
                      placeholder="student@rsoft.am"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Գաղտնաբառ</Label>

                  <div className="relative">
                    <LockKeyhole
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <Input
                      type="password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      className="h-12 rounded-xl pl-10"
                    />
                  </div>
                </div>

                {error && (
                  <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-[#019FE2] text-base hover:bg-[#019FE2]/90"
                >
                  Մուտք գործել

                  <ArrowRight
                    size={18}
                    className="ml-2"
                  />
                </Button>
              </form>

              <div className="mt-7 border-t pt-6">
                <p className="mb-3 text-center text-xs text-slate-400">
                  DEMO ACCOUNT
                </p>

                <button
                  type="button"
                  onClick={demoStudent}
                  className="w-full rounded-xl bg-slate-50 p-3 text-sm transition hover:bg-slate-100"
                >
                  👨‍🎓 Արամ Սարգսյան — Student
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}