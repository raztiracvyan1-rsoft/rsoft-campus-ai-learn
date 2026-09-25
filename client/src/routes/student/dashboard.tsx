import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import {
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  ArrowRight,
  Clock3,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import { users, fullName } from "@/data/users";
import { courses, lessons } from "@/data/courses";
import { homeworks, submissions } from "@/data/homework";

import type { User } from "@/types";

import { StudentLayout } from "@/components/layout/StudentLayout";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute(
  "/student/dashboard"
)({
  component: StudentDashboard,
});

function StudentDashboard() {
  const defaultStudent = users.find(
    (u) => u.id === "s1"
  ) as User;

  const [student, setStudent] =
    useState<User>(defaultStudent);

  useEffect(() => {
    const savedId =
      localStorage.getItem("rsoft_current_user");

    if (!savedId) return;

    const found = users.find(
      (u) =>
        u.id === savedId &&
        u.role === "student"
    );

    if (found) {
      setStudent(found);
    }
  }, []);

  const studentCourses = useMemo(
    () =>
      courses.filter((course) =>
        student.courseIds.includes(course.id)
      ),
    [student]
  );

  const studentLessons = lessons.filter(
    (lesson) =>
      student.courseIds.includes(
        lesson.courseId
      )
  );

  const completedLessons =
    studentLessons.filter(
      (lesson) =>
        lesson.status === "completed"
    ).length;

  const studentSubmissions =
    submissions.filter(
      (submission) =>
        submission.studentId === student.id
    );

  const gradedSubmissions =
    studentSubmissions.filter(
      (submission) =>
        typeof submission.teacherGrade ===
        "number"
    );

  const averageGrade =
    gradedSubmissions.length > 0
      ? gradedSubmissions.reduce(
          (sum, item) =>
            sum +
            (item.teacherGrade ?? 0),
          0
        ) / gradedSubmissions.length
      : 0;

  const pendingHomeworks =
    homeworks
      .filter((homework) =>
        student.courseIds.includes(
          homework.courseId
        )
      )
      .filter((homework) => {
        const submission =
          studentSubmissions.find(
            (sub) =>
              sub.homeworkId === homework.id
          );

        return (
          !submission ||
          submission.status !==
            "teacher_checked"
        );
      })
      .sort(
        (a, b) =>
          new Date(a.deadline).getTime() -
          new Date(b.deadline).getTime()
      )
      .slice(0, 4);

  const latestAI =
    [...studentSubmissions]
      .filter((sub) => sub.ai)
      .sort(
        (a, b) =>
          new Date(
            b.ai?.analyzedAt ?? 0
          ).getTime() -
          new Date(
            a.ai?.analyzedAt ?? 0
          ).getTime()
      )[0];

  const latestAIHomework =
    homeworks.find(
      (h) =>
        h.id === latestAI?.homeworkId
    );

  const getCourseProgress = (
    courseId: string
  ) => {
    const courseLessons =
      lessons.filter(
        (lesson) =>
          lesson.courseId === courseId
      );

    if (!courseLessons.length) return 0;

    const done =
      courseLessons.filter(
        (lesson) =>
          lesson.status === "completed"
      ).length;

    return Math.round(
      (done / courseLessons.length) * 100
    );
  };

  const statusLabel = (
    homeworkId: string
  ) => {
    const submission =
      studentSubmissions.find(
        (item) =>
          item.homeworkId === homeworkId
      );

    if (!submission) {
      return "Չսկսված";
    }

    switch (submission.status) {
      case "in_progress":
        return "Ընթացքի մեջ";

      case "submitted":
        return "Ուղարկված";

      case "ai_checked":
        return "AI ստուգված";

      case "teacher_checked":
        return "Ստուգված";

      case "overdue":
        return "Ժամկետանց";

      default:
        return "Չսկսված";
    }
  };

  return (
    <StudentLayout user={student}>
      {/* WELCOME */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Բարի գալուստ, {student.firstName} 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Ահա քո ուսումնական առաջընթացը և
          առաջիկա աշխատանքները։
        </p>
      </div>

      {/* STATS */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Իմ դասընթացները"
          value={studentCourses.length}
          subtitle="ակտիվ դասընթաց"
          icon={BookOpen}
        />

        <StatCard
          title="Ավարտված դասեր"
          value={completedLessons}
          subtitle={`${studentLessons.length} դասից`}
          icon={CheckCircle2}
        />

        <StatCard
          title="Ստուգված տնայիններ"
          value={gradedSubmissions.length}
          subtitle={`${studentSubmissions.length} աշխատանքից`}
          icon={ClipboardCheck}
        />

        <StatCard
          title="Միջին գնահատական"
          value={
            averageGrade
              ? averageGrade.toFixed(1)
              : "—"
          }
          subtitle="10 բալանոց համակարգ"
          icon={GraduationCap}
        />
      </div>

      {/* MAIN GRID */}

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        {/* COURSES */}

        <Card className="rounded-2xl border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>
                Իմ դասընթացները
              </CardTitle>

              <p className="mt-1 text-sm text-slate-500">
                Շարունակիր այնտեղից, որտեղ
                կանգնել ես։
              </p>
            </div>

            <Button
              variant="ghost"
              className="text-[#019FE2]"
            >
              Դիտել բոլորը
              <ArrowRight
                size={17}
                className="ml-2"
              />
            </Button>
          </CardHeader>

          <CardContent className="space-y-4">
            {studentCourses.map(
              (course) => {
                const teacher =
                  users.find(
                    (u) =>
                      u.id ===
                      course.teacherId
                  );

                const progress =
                  getCourseProgress(
                    course.id
                  );

                return (
                  <div
                    key={course.id}
                    className="rounded-2xl border bg-white p-5 transition hover:border-[#019FE2]/40 hover:shadow-sm"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#019FE2]/10 text-[#019FE2]">
                        <BookOpen size={22} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-semibold">
                              {course.name}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                              {fullName(
                                teacher
                              )}
                            </p>
                          </div>

                          <span className="text-sm font-semibold text-[#019FE2]">
                            {progress}%
                          </span>
                        </div>

                        <Progress
                          value={progress}
                          className="mt-4 h-2"
                        />

                        <div className="mt-3 flex justify-between text-xs text-slate-500">
                          <span>
                            {course.level}
                          </span>

                          <span>
                            {
                              course.totalLessons
                            }{" "}
                            դաս
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </CardContent>
        </Card>

        {/* AI */}

        <Card className="overflow-hidden rounded-2xl border-slate-200">
          <div className="bg-gradient-to-br from-[#019FE2] to-blue-600 p-6 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
              <BrainCircuit size={26} />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              R'SOFT AI
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/80">
              Քո վերջին աշխատանքի AI
              վերլուծությունը։
            </p>
          </div>

          <CardContent className="p-6">
            {latestAI?.ai ? (
              <>
                <p className="font-semibold">
                  {latestAIHomework?.title}
                </p>

                <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <div>
                    <p className="text-sm text-slate-500">
                      AI գնահատում
                    </p>

                    <p className="mt-1 text-3xl font-bold">
                      {
                        latestAI.ai
                          .estimate
                      }
                      /10
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFDF59]">
                    <Sparkles
                      size={25}
                      className="text-slate-900"
                    />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <Metric
                    title="Կատարում"
                    value={
                      latestAI.ai
                        .completion
                    }
                  />

                  <Metric
                    title="Կոդի որակ"
                    value={
                      latestAI.ai
                        .codeQuality * 10
                    }
                  />

                  <Metric
                    title="Ճշտություն"
                    value={
                      latestAI.ai
                        .correctness * 10
                    }
                  />
                </div>

                <Button
                  className="mt-6 w-full rounded-xl bg-[#019FE2]"
                >
                  Դիտել AI Feedback-ը
                </Button>

                <p className="mt-3 text-center text-xs text-slate-400">
                  AI գնահատականը նախնական է։
                  Վերջնական գնահատականը տալիս է
                  ուսուցիչը։
                </p>
              </>
            ) : (
              <p className="text-sm text-slate-500">
                AI ստուգված աշխատանք դեռ չկա։
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* BOTTOM */}

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        {/* HOMEWORK */}

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              Առաջիկա տնային աշխատանքներ
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            {pendingHomeworks.map(
              (homework) => {
                const course =
                  courses.find(
                    (c) =>
                      c.id ===
                      homework.courseId
                  );

                return (
                  <div
                    key={homework.id}
                    className="flex items-center justify-between gap-4 rounded-xl border p-4"
                  >
                    <div className="min-w-0">
                      <p className="truncate font-medium">
                        {homework.title}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <span>
                          {course?.name}
                        </span>

                        <span className="flex items-center gap-1">
                          <Clock3 size={13} />

                          {new Date(
                            homework.deadline
                          ).toLocaleDateString(
                            "hy-AM"
                          )}
                        </span>
                      </div>
                    </div>

                    <Badge variant="secondary">
                      {statusLabel(
                        homework.id
                      )}
                    </Badge>
                  </div>
                );
              }
            )}
          </CardContent>
        </Card>

        {/* GRADES */}

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              Վերջին գնահատականները
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            {[...gradedSubmissions]
              .reverse()
              .slice(0, 4)
              .map((submission) => {
                const homework =
                  homeworks.find(
                    (h) =>
                      h.id ===
                      submission.homeworkId
                  );

                return (
                  <div
                    key={submission.id}
                    className="flex items-center justify-between rounded-xl border p-4"
                  >
                    <div>
                      <p className="font-medium">
                        {homework?.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Ուսուցչի վերջնական
                        գնահատական
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-lg font-bold text-emerald-600">
                      {
                        submission.teacherGrade
                      }
                    </div>
                  </div>
                );
              })}
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: {
  title: string;
  value: string | number;
  subtitle: string;
  icon: any;
}) {
  return (
    <Card className="rounded-2xl border-slate-200">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-slate-500">
              {title}
            </p>

            <p className="mt-2 text-3xl font-bold">
              {value}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              {subtitle}
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#019FE2]/10 text-[#019FE2]">
            <Icon size={21} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs">
        <span className="text-slate-500">
          {title}
        </span>

        <span className="font-medium">
          {value}%
        </span>
      </div>

      <Progress value={value} />
    </div>
  );
}