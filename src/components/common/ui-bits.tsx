import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { AttendanceStatus, Difficulty, HomeworkStatus } from "@/types";
import { translate } from "@/lib/i18n";
import { useApp } from "@/lib/store";

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "primary",
  progress,
}: {
  label: string;
  value: React.ReactNode;
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  tone?: "primary" | "yellow" | "success" | "warning" | "destructive";
  progress?: number;
}) {
  const tones: Record<string, string> = {
    primary: "bg-primary-soft text-primary",
    yellow: "bg-brand-yellow-soft text-brand-yellow-foreground",
    success: "bg-success-soft text-success",
    warning: "bg-warning-soft text-warning-foreground",
    destructive: "bg-destructive-soft text-destructive",
  };
  return (
    <Card className="shadow-card transition-shadow hover:shadow-card-hover">
      <CardContent className="flex items-start gap-4 p-5">
        <span className={cn("grid size-11 shrink-0 place-items-center rounded-xl", tones[tone])}>
          <Icon className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {label}
          </p>
          <p className="mt-1 font-display text-2xl font-bold text-foreground">{value}</p>
          {typeof progress === "number" && <Progress value={progress} className="mt-2 h-1.5" />}
          {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
        </div>
      </CardContent>
    </Card>
  );
}

const hwTone: Record<HomeworkStatus, string> = {
  not_started: "bg-muted text-muted-foreground",
  in_progress: "bg-brand-yellow-soft text-brand-yellow-foreground",
  submitted: "bg-info-soft text-primary",
  ai_checked: "bg-primary-soft text-primary",
  teacher_checked: "bg-success-soft text-success",
  overdue: "bg-destructive-soft text-destructive",
};

export function StatusBadge({ status }: { status: HomeworkStatus }) {
  const { lang } = useApp();
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        hwTone[status],
      )}
    >
      {translate(status, lang)}
    </span>
  );
}

export function AttendanceBadge({ status }: { status: AttendanceStatus }) {
  const { lang } = useApp();
  const tone: Record<AttendanceStatus, string> = {
    present: "bg-success-soft text-success",
    absent: "bg-destructive-soft text-destructive",
    late: "bg-warning-soft text-warning-foreground",
    excused: "bg-muted text-muted-foreground",
  };
  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-medium", tone[status])}>
      {translate(status, lang)}
    </span>
  );
}

export function DifficultyBadge({ level }: { level: Difficulty }) {
  const { lang } = useApp();
  const tone: Record<Difficulty, string> = {
    easy: "bg-success-soft text-success",
    medium: "bg-brand-yellow-soft text-brand-yellow-foreground",
    hard: "bg-destructive-soft text-destructive",
  };
  return (
    <Badge variant="secondary" className={cn("border-0", tone[level])}>
      {translate(level, lang)}
    </Badge>
  );
}

export function EmptyState({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-14 text-center">
      {Icon && (
        <span className="mb-3 grid size-12 place-items-center rounded-2xl bg-muted text-muted-foreground">
          <Icon className="size-6" />
        </span>
      )}
      <p className="font-medium text-foreground">{title}</p>
      {description && <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>}
    </div>
  );
}

export function SectionCard({
  title,
  action,
  children,
  className,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("shadow-card", className)}>
      <CardContent className="p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-display text-base font-semibold text-foreground">{title}</h2>
          {action}
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
