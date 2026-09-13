export type Role = "student" | "teacher" | "admin";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: Role;
  avatar: string;
  level?: string;
  studentId?: string;
  joinedAt: string;
  status: "active" | "inactive";
  courseIds: string[];
}

export type CourseCategory =
  | "Web Development"
  | "Python"
  | "Graphic Design"
  | "Children Programming"
  | "AI"
  | "Vibe Coding";

export interface Course {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: CourseCategory;
  teacherId: string;
  color: string; // token name: primary | yellow | success | purple | orange
  icon: string; // lucide icon name
  durationWeeks: number;
  startDate: string;
  endDate: string;
  maxStudents: number;
  studentIds: string[];
  status: "active" | "upcoming" | "archived";
  totalLessons: number;
  level: string;
}

export type LessonStatus = "completed" | "current" | "locked";

export interface Module {
  id: string;
  courseId: string;
  title: string;
  order: number;
}

export interface LessonContentBlock {
  type: "text" | "code" | "note" | "image" | "video" | "heading" | "list";
  content: string;
  language?: string;
  items?: string[];
}

export interface Lesson {
  id: string;
  courseId: string;
  moduleId: string;
  title: string;
  order: number;
  durationMin: number;
  status: LessonStatus;
  description: string;
  blocks: LessonContentBlock[];
  attachments: Attachment[];
  homeworkId?: string;
  published: boolean;
}

export interface Attachment {
  id: string;
  name: string;
  size: string;
  type: "pdf" | "zip" | "png" | "link" | "doc";
  url?: string;
}

export type HomeworkStatus =
  | "not_started"
  | "in_progress"
  | "submitted"
  | "ai_checked"
  | "teacher_checked"
  | "overdue";

export type Difficulty = "easy" | "medium" | "hard";
export type AnswerType = "text" | "code" | "file" | "github";

export interface Homework {
  id: string;
  title: string;
  courseId: string;
  lessonId?: string;
  teacherId: string;
  assignedAt: string;
  deadline: string;
  difficulty: Difficulty;
  maxGrade: number;
  description: string;
  instructions: string[];
  tasks: string[];
  attachments: Attachment[];
  resources: { title: string; url: string }[];
  answerTypes: AnswerType[];
  aiEnabled: boolean;
  aiCriteria: { name: string; weight: number }[];
}

export interface AIFeedback {
  completion: number;
  codeQuality: number;
  correctness: number;
  logic: number;
  estimate: number;
  correct: string[];
  errors: string[];
  suggestions: string[];
  fixes: string[];
  analyzedAt: string;
}

export interface Submission {
  id: string;
  homeworkId: string;
  studentId: string;
  status: HomeworkStatus;
  textAnswer?: string;
  codeAnswer?: string;
  files?: string[];
  githubUrl?: string;
  submittedAt?: string;
  attempt: number;
  ai?: AIFeedback;
  teacherGrade?: number;
  teacherFeedback?: string;
  reviewedAt?: string;
}

export type AttendanceStatus = "present" | "absent" | "late" | "excused";

export interface AttendanceRecord {
  id: string;
  studentId: string;
  courseId: string;
  date: string;
  status: AttendanceStatus;
}

export type CalendarEventType = "lesson" | "homework" | "test" | "exam" | "event";

export interface CalendarEvent {
  id: string;
  title: string;
  type: CalendarEventType;
  date: string;
  startTime?: string;
  endTime?: string;
  courseId?: string;
  location?: string;
  description?: string;
}

export interface Announcement {
  id: string;
  title: string;
  authorId: string;
  date: string;
  courseId?: string;
  message: string;
  important: boolean;
  attachment?: Attachment;
}

export type NotificationType = "homework" | "grade" | "lesson" | "ai" | "announcement";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  date: string;
  read: boolean;
  link?: string;
}

export interface ScheduleClass {
  id: string;
  courseId: string;
  teacherId: string;
  classroom: string;
  office: "Էջմիածին" | "Արմավիր";
  date: string;
  startTime: string;
  endTime: string;
}

export interface ActivityItem {
  id: string;
  studentId: string;
  type: "lesson" | "homework" | "grade" | "attendance" | "ai";
  text: string;
  date: string;
}
