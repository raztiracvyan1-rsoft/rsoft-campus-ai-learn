import { Bot, CheckCircle2, Lightbulb, TriangleAlert, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { AIFeedback } from "@/types";
import { formatDateTime } from "@/lib/format";

function Metric({ label, value, max = 10 }: { label: string; value: number; max?: number }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-xl font-bold text-foreground">
        {value}
        <span className="text-sm font-medium text-muted-foreground">/{max}</span>
      </p>
      <Progress value={(value / max) * 100} className="mt-2 h-1.5" />
    </div>
  );
}

function List({
  title,
  items,
  icon: Icon,
  tone,
  mono,
}: {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
  tone: string;
  mono?: boolean;
}) {
  if (!items.length) return null;
  return (
    <div>
      <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
        <Icon className={`size-4 ${tone}`} />
        {title}
      </p>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li
            key={i}
            className={`rounded-lg bg-muted/60 px-3 py-2 text-sm text-muted-foreground ${mono ? "font-mono text-xs" : ""}`}
          >
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AIFeedbackPanel({ ai }: { ai: AIFeedback }) {
  return (
    <Card className="overflow-hidden border-primary/30 shadow-card">
      <div className="flex items-center gap-3 border-b border-border bg-primary-soft px-5 py-4">
        <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
          <Bot className="size-5" />
        </span>
        <div>
          <p className="font-display font-semibold text-foreground">AI ստուգման արդյունք</p>
          <p className="text-xs text-muted-foreground">
            Վերլուծված է՝ {formatDateTime(ai.analyzedAt)}
          </p>
        </div>
        <span className="ml-auto rounded-xl bg-card px-3 py-2 text-center">
          <span className="font-display text-xl font-bold text-primary">{ai.estimate}</span>
          <span className="text-sm text-muted-foreground">/10</span>
        </span>
      </div>
      <CardContent className="space-y-5 p-5">
        <div>
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">Կատարվածություն</span>
            <span className="font-semibold text-primary">{ai.completion}%</span>
          </div>
          <Progress value={ai.completion} className="h-2" />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Metric label="Կոդի որակ" value={ai.codeQuality} />
          <Metric label="Ճշտություն" value={ai.correctness} />
          <Metric label="Տրամաբանություն" value={ai.logic} />
        </div>
        <List title="Ճիշտ կատարված" items={ai.correct} icon={CheckCircle2} tone="text-success" />
        <List title="Սխալներ" items={ai.errors} icon={TriangleAlert} tone="text-destructive" />
        <List
          title="Բարելավման առաջարկներ"
          items={ai.suggestions}
          icon={Lightbulb}
          tone="text-brand-yellow-foreground"
        />
        <List title="Ուղղման օրինակներ" items={ai.fixes} icon={Wrench} tone="text-primary" mono />
      </CardContent>
    </Card>
  );
}
