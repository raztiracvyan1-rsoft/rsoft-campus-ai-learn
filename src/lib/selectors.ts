import { courses, lessons, modules } from "@/data/courses";
import { homeworks } from "@/data/homework";
import { users } from "@/data/users";
import { attendance } from "@/data/misc";
import type { Submission, User } from "@/types";

export const getUser = (id?: string) => users.find((u) => u.id === id);
export const getCourse = (id?: string) => courses.find((c) => c.id === id);
export const getLesson = (id?: string) => lessons.find((l) => l.id === id);
export const getHomework = (id?: string) => homeworks.find((h) => h.id === id);
export const courseLessons = (courseId: string) =>
  lessons.filter((l) => l.courseId === courseId).sort((a, b) => a.order - b.order);
export const courseModules = (courseId: string) =>
  modules.filter((m) => m.courseId === courseId).sort((a, b) => a.order - b.order);

export const studentCourses = (user: User) =>
  courses.filter((c) => user.courseIds.includes(c.id));
export const teacherCourses = (user: User) => courses.filter((c) => c.teacherId === user.id);

export const courseProgress = (courseId: string) => {
  const ls = courseLessons(courseId);
  if (!ls.length) return 0;
  return Math.round((ls.filter((l) => l.status === "completed").length / ls.length) * 100);
};

export const studentHomeworks = (user: User) =>
  homeworks.filter((h) => user.courseIds.includes(h.courseId));

export const findSubmission = (subs: Submission[], homeworkId: string, studentId: string) =>
  subs.find((s) => s.homeworkId === homeworkId && s.studentId === studentId);

export const gradedSubmissions = (subs: Submission[], studentId: string) =>
  subs.filter((s) => s.studentId === studentId && typeof s.teacherGrade === "number");

export const averageGrade = (subs: Submission[], studentId: string) => {
  const g = gradedSubmissions(subs, studentId);
  if (!g.length) return 0;
  return Math.round((g.reduce((a, s) => a + (s.teacherGrade ?? 0), 0) / g.length) * 10) / 10;
};

export const attendanceRate = (studentId: string, courseId?: string) => {
  const recs = attendance.filter(
    (a) => a.studentId === studentId && (!courseId || a.courseId === courseId),
  );
  if (!recs.length) return 0;
  const ok = recs.filter((a) => a.status === "present" || a.status === "excused").length;
  return Math.round((ok / recs.length) * 100);
};

export const studentsOf = (user: User) => {
  const ids = new Set<string>();
  teacherCourses(user).forEach((c) => c.studentIds.forEach((s) => ids.add(s)));
  return users.filter((u) => ids.has(u.id));
};

export const allStudents = () => users.filter((u) => u.role === "student");
export const allTeachers = () => users.filter((u) => u.role === "teacher");
