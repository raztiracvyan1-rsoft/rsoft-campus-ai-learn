import * as React from "react";
import { Bot, Check, Loader2 } from "lucide-react";
import { AI_STEPS } from "@/lib/ai-mock";
import { Progress } from "@/components/ui/progress";

export function AICheckingOverlay({ onDone }: { onDone: () => void }) {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    if (step >= AI_STEPS.length) {
      const t = setTimeout(onDone, 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), 750);
    return () => clearTimeout(t);
  }, [step, onDone]);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md animate-scale-in rounded-3xl border border-border bg-card p-7 shadow-card-hover">
        <div className="flex items-center gap-3">
          <span className="relative grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <Bot className="size-6" />
            <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-primary/40" />
          </span>
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              AI-ը ստուգում է քո աշխատանքը
            </p>
            <p className="text-sm text-muted-foreground">Սովորաբար տևում է մի քանի վայրկյան</p>
          </div>
        </div>

        <Progress value={(step / AI_STEPS.length) * 100} className="my-5 h-2" />

        <ul className="space-y-2.5">
          {AI_STEPS.map((label, i) => (
            <li key={label} className="flex items-center gap-2.5 text-sm">
              {i < step ? (
                <Check className="size-4 text-success" />
              ) : i === step ? (
                <Loader2 className="size-4 animate-spin text-primary" />
              ) : (
                <span className="size-4 rounded-full border border-border" />
              )}
              <span className={i <= step ? "text-foreground" : "text-muted-foreground"}>
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
