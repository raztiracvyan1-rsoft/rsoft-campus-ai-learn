import type { AttendanceRecord, CalendarEvent, Announcement, Notification, ScheduleClass, ActivityItem, AttendanceStatus } from "@/types";

// Attendance — generated deterministic history for Aug–Sep 2026
const pattern: AttendanceStatus[] = ["present", "present", "present", "late", "present", "present", "absent", "present", "present", "excused", "present", "present", "present", "late", "present"];
const classDays = ["2026-08-03","2026-08-05","2026-08-10","2026-08-12","2026-08-17","2026-08-19","2026-08-24","2026-08-26","2026-08-31","2026-09-02","2026-09-07","2026-09-09","2026-09-14","2026-09-16","2026-09-21"];

export const attendance: AttendanceRecord[] = [];
const studentIds = ["s1","s2","s3","s4","s5","s6","s7","s8"];
const studentCourses: Record<string, string[]> = { s1: ["c2","c3","c1"], s2: ["c2","c5"], s3: ["c3","c4"], s4: ["c2","c6"], s5: ["c1","c2"], s6: ["c5","c6"], s7: ["c4"], s8: ["c1","c3"] };
let ai = 0;
for (const sid of studentIds) {
  const sIdx = studentIds.indexOf(sid);
  for (const cid of studentCourses[sid]) {
    classDays.forEach((date, i) => {
      if (date > "2026-09-13") return;
      const status = pattern[(i + sIdx * 3 + Number(cid.slice(1))) % pattern.length];
      attendance.push({ id: `att${++ai}`, studentId: sid, courseId: cid, date, status });
    });
  }
}

export const calendarEvents: CalendarEvent[] = [
  { id: "e1", title: "JavaScript — Array Methods", type: "lesson", date: "2026-09-14", startTime: "18:30", endTime: "20:00", courseId: "c2", location: "Էջմիածին, Լսարան 2", description: "Զանգվածների մեթոդների գործնական դաս։" },
  { id: "e2", title: "React — State", type: "lesson", date: "2026-09-15", startTime: "17:00", endTime: "18:30", courseId: "c3", location: "Էջմիածին, Լսարան 1" },
  { id: "e3", title: "Arrays Practice — վերջնաժամկետ", type: "homework", date: "2026-09-16", courseId: "c2", description: "JavaScript — Arrays Practice տնային աշխատանքի վերջնաժամկետ։" },
  { id: "e4", title: "Web Dev — CSS Selectors", type: "lesson", date: "2026-09-16", startTime: "16:00", endTime: "17:30", courseId: "c1", location: "Արմավիր, Լսարան 3" },
  { id: "e5", title: "JavaScript թեստ — Module 2", type: "test", date: "2026-09-18", startTime: "18:30", endTime: "19:30", courseId: "c2", location: "Էջմիածին, Լսարան 2", description: "Զանգվածների թեմայի կարճ թեստ։" },
  { id: "e6", title: "JavaScript — Practice", type: "lesson", date: "2026-09-21", startTime: "18:30", endTime: "20:00", courseId: "c2", location: "Էջմիածին, Լսարան 2" },
  { id: "e7", title: "R'SOFT Hackathon 2026", type: "event", date: "2026-09-26", startTime: "10:00", endTime: "18:00", location: "Էջմիածին", description: "Ամենամյա 8-ժամյա հաքաթոն բոլոր ուսանողների համար։ Թիմերը՝ 3-4 հոգի։" },
  { id: "e8", title: "Objects Mini Project — վերջնաժամկետ", type: "homework", date: "2026-09-24", courseId: "c2" },
  { id: "e9", title: "JavaScript միջանկյալ քննություն", type: "exam", date: "2026-09-30", startTime: "18:00", endTime: "20:00", courseId: "c2", location: "Էջմիածին, Լսարան 2", description: "Module 1–3 ամբողջական քննություն։" },
  { id: "e10", title: "React — useEffect", type: "lesson", date: "2026-09-22", startTime: "17:00", endTime: "18:30", courseId: "c3", location: "Էջմիածին, Լսարան 1" },
  { id: "e11", title: "Ծնողական ժողով", type: "event", date: "2026-09-19", startTime: "12:00", endTime: "13:30", location: "Արմավիր" },
  { id: "e12", title: "JavaScript — Array Methods", type: "lesson", date: "2026-09-09", startTime: "18:30", endTime: "20:00", courseId: "c2", location: "Էջմիածին, Լսարան 2" },
  { id: "e13", title: "React — Props", type: "lesson", date: "2026-09-08", startTime: "17:00", endTime: "18:30", courseId: "c3" },
  { id: "e14", title: "Web Dev — Semantic HTML", type: "lesson", date: "2026-09-02", startTime: "16:00", endTime: "17:30", courseId: "c1" },
  { id: "e15", title: "Props Card — վերջնաժամկետ", type: "homework", date: "2026-09-12", courseId: "c3" },
];

export const announcements: Announcement[] = [
  { id: "an1", title: "Նոր JavaScript քննություն", authorId: "t3", date: "2026-09-12", courseId: "c2", important: true, message: "Հարգելի ուսանողներ, սեպտեմբերի 30-ին կանցկացվի JavaScript միջանկյալ քննությունը։ Քննությունն ընդգրկում է Module 1–3 թեմաները։ Խնդրում եմ կրկնել զանգվածների մեթոդները և ֆունկցիաները։", attachment: { id: "an1a", name: "Քննության թեմաներ.pdf", size: "180 KB", type: "pdf" } },
  { id: "an2", title: "Դասաժամի փոփոխություն", authorId: "t1", date: "2026-09-11", courseId: "c3", important: true, message: "React-ի երկուշաբթի օրվա դասը տեղափոխվում է 17:00-ից 18:00։ Լսարանը մնում է նույնը։" },
  { id: "an3", title: "R'SOFT Hackathon 2026", authorId: "a1", date: "2026-09-10", important: false, message: "Սեպտեմբերի 26-ին կայանալու է R'SOFT-ի ամենամյա հաքաթոնը։ Գրանցվեք մինչև սեպտեմբերի 20-ը։ Հաղթող թիմը կստանա անվճար դասընթաց և մրցանակներ։", attachment: { id: "an3a", name: "Hackathon-rules.pdf", size: "420 KB", type: "pdf" } },
  { id: "an4", title: "Նոր դասընթաց՝ Vibe Coding with AI", authorId: "a1", date: "2026-09-08", important: false, message: "Փետրվարից մեկնարկում է նոր 8-շաբաթյա դասընթաց՝ Vibe Coding with AI։ Սովորեք կառուցել արտադրանք AI գործիքներով։ Տեղերը սահմանափակ են։" },
  { id: "an5", title: "Հաճախումների կանոններ", authorId: "a1", date: "2026-09-01", important: false, message: "Հիշեցնում ենք, որ 3 անհարգելի բացակայության դեպքում ուսանողը ստանում է նախազգուշացում։" },
  { id: "an6", title: "Python նախագծերի ներկայացում", authorId: "t2", date: "2026-08-29", courseId: "c5", important: false, message: "Հոկտեմբերի 3-ին բոլոր Python ուսանողները ներկայացնում են իրենց mini-project-ները։" },
];

export const notifications: Notification[] = [
  { id: "n1", type: "grade", title: "Ձեր տնային աշխատանքը ստուգվել է։", message: "HTML — Semantic Page Layout · Ուսուցիչ՝ Տիգրան Հարությունյան", date: "2026-09-13T10:12", read: false, link: "/student/homework/h3" },
  { id: "n2", type: "homework", title: "Նոր տնային աշխատանք է ավելացվել։", message: "JavaScript — Objects Mini Project · Վերջնաժամկետ՝ 24 սեպտ.", date: "2026-09-12T14:30", read: false, link: "/student/homework/h6" },
  { id: "n3", type: "lesson", title: "JavaScript դասը վաղը ժամը 18:30-ին է։", message: "Array Methods · Էջմիածին, Լսարան 2", date: "2026-09-13T09:00", read: false, link: "/student/calendar" },
  { id: "n4", type: "ai", title: "AI ստուգումը ավարտված է։", message: "React — Props Card Component · AI գնահատում՝ 9/10", date: "2026-09-11T20:15", read: true, link: "/student/homework/h2" },
  { id: "n5", type: "grade", title: "Դուք ստացել եք 9/10 գնահատական։", message: "JavaScript — Loops Challenge", date: "2026-09-04T11:20", read: true, link: "/student/grades" },
  { id: "n6", type: "announcement", title: "Նոր հայտարարություն", message: "Նոր JavaScript քննություն — սեպտեմբերի 30", date: "2026-09-12T09:00", read: true, link: "/student/announcements" },
];

export const schedule: ScheduleClass[] = [
  { id: "sc1", courseId: "c2", teacherId: "t3", classroom: "Լսարան 2", office: "Էջմիածին", date: "2026-09-14", startTime: "18:30", endTime: "20:00" },
  { id: "sc2", courseId: "c3", teacherId: "t1", classroom: "Լսարան 1", office: "Էջմիածին", date: "2026-09-15", startTime: "17:00", endTime: "18:30" },
  { id: "sc3", courseId: "c1", teacherId: "t1", classroom: "Լսարան 3", office: "Արմավիր", date: "2026-09-16", startTime: "16:00", endTime: "17:30" },
  { id: "sc4", courseId: "c5", teacherId: "t2", classroom: "Լսարան 1", office: "Արմավիր", date: "2026-09-16", startTime: "18:00", endTime: "19:30" },
  { id: "sc5", courseId: "c6", teacherId: "t2", classroom: "Դիզայն ստուդիա", office: "Էջմիածին", date: "2026-09-17", startTime: "15:00", endTime: "16:30" },
  { id: "sc6", courseId: "c4", teacherId: "t1", classroom: "Լսարան 1", office: "Էջմիածին", date: "2026-09-17", startTime: "19:00", endTime: "20:30" },
  { id: "sc7", courseId: "c2", teacherId: "t3", classroom: "Լսարան 2", office: "Էջմիածին", date: "2026-09-18", startTime: "18:30", endTime: "20:00" },
  { id: "sc8", courseId: "c3", teacherId: "t1", classroom: "Լսարան 1", office: "Էջմիածին", date: "2026-09-18", startTime: "17:00", endTime: "18:30" },
  { id: "sc9", courseId: "c1", teacherId: "t1", classroom: "Լսարան 3", office: "Արմավիր", date: "2026-09-13", startTime: "16:00", endTime: "17:30" },
  { id: "sc10", courseId: "c5", teacherId: "t2", classroom: "Լսարան 1", office: "Արմավիր", date: "2026-09-13", startTime: "18:00", endTime: "19:30" },
];

export const activity: ActivityItem[] = [
  { id: "ac1", studentId: "s1", type: "grade", text: "Ստացել է 9/10 «HTML — Semantic Page Layout»-ի համար", date: "2026-09-13T10:12" },
  { id: "ac2", studentId: "s1", type: "ai", text: "AI-ը ստուգել է «React — Props Card Component»", date: "2026-09-11T20:15" },
  { id: "ac3", studentId: "s1", type: "homework", text: "Ուղարկել է «React — Props Card Component»", date: "2026-09-11T20:14" },
  { id: "ac4", studentId: "s1", type: "lesson", text: "Ավարտել է «Lesson 5 — Arrays Basics»", date: "2026-09-09T20:00" },
  { id: "ac5", studentId: "s1", type: "attendance", text: "Ներկա է եղել JavaScript դասին", date: "2026-09-09T18:30" },
  { id: "ac6", studentId: "s1", type: "grade", text: "Ստացել է 9/10 «JavaScript — Loops Challenge»-ի համար", date: "2026-09-04T11:20" },
  { id: "ac7", studentId: "s1", type: "attendance", text: "Ուշացել է Web Development դասից", date: "2026-09-02T16:10" },
  { id: "ac8", studentId: "s2", type: "ai", text: "AI-ը ստուգել է «JavaScript — Arrays Practice»", date: "2026-09-12T17:01" },
  { id: "ac9", studentId: "s2", type: "attendance", text: "Բացակայել է JavaScript դասից", date: "2026-09-09T18:30" },
  { id: "ac10", studentId: "s3", type: "grade", text: "Ստացել է 10/10 «React — Props Card Component»-ի համար", date: "2026-09-11T09:00" },
  { id: "ac11", studentId: "s4", type: "homework", text: "Ուղարկել է «JavaScript — Arrays Practice»", date: "2026-09-13T09:30" },
];

// Analytics series
export const weeklyActivity = [
  { day: "Երկ", hours: 1.5, lessons: 1, homework: 1 },
  { day: "Երք", hours: 2.2, lessons: 2, homework: 0 },
  { day: "Չրք", hours: 0.8, lessons: 0, homework: 1 },
  { day: "Հնգ", hours: 2.6, lessons: 2, homework: 1 },
  { day: "Ուրբ", hours: 1.2, lessons: 1, homework: 0 },
  { day: "Շբթ", hours: 3.1, lessons: 1, homework: 2 },
  { day: "Կիր", hours: 0.5, lessons: 0, homework: 0 },
];

export const gradeProgression = [
  { label: "Հլս", grade: 7.2 }, { label: "Օգս", grade: 7.9 }, { label: "Սեպ", grade: 8.7 },
];
export const gradeProgressionWeekly = [
  { label: "Շ1", grade: 7.5 }, { label: "Շ2", grade: 8 }, { label: "Շ3", grade: 8.2 }, { label: "Շ4", grade: 9 }, { label: "Շ5", grade: 8.5 }, { label: "Շ6", grade: 9 },
];

export const skills = [
  { name: "HTML", value: 95 }, { name: "CSS", value: 89 }, { name: "JavaScript", value: 76 }, { name: "React", value: 45 }, { name: "Git", value: 68 }, { name: "Node.js", value: 22 },
];

export const studentGrowth = [
  { month: "Հնվ", students: 42 }, { month: "Փտր", students: 48 }, { month: "Մրտ", students: 55 }, { month: "Ապր", students: 61 }, { month: "Մյս", students: 66 }, { month: "Հնս", students: 70 }, { month: "Հլս", students: 74 }, { month: "Օգս", students: 89 }, { month: "Սեպ", students: 112 },
];
export const coursePopularity = [
  { name: "JavaScript", students: 38 }, { name: "Web Dev", students: 31 }, { name: "React.js", students: 22 }, { name: "Python", students: 26 }, { name: "Node.js", students: 14 }, { name: "Design", students: 18 },
];
export const monthlyActivity = [
  { month: "Ապր", lessons: 84, homework: 120 }, { month: "Մյս", lessons: 92, homework: 138 }, { month: "Հնս", lessons: 76, homework: 101 }, { month: "Հլս", lessons: 60, homework: 88 }, { month: "Օգս", lessons: 98, homework: 150 }, { month: "Սեպ", lessons: 110, homework: 172 },
];
export const performanceDistribution = [
  { range: "9-10", count: 34 }, { range: "8-9", count: 41 }, { range: "7-8", count: 22 }, { range: "6-7", count: 10 }, { range: "<6", count: 5 },
];
export const teacherWorkload = [
  { name: "Տ. Հարությունյան", lessons: 14, reviews: 38 }, { name: "Ա. Մարտիրոսյան", lessons: 10, reviews: 22 }, { name: "Ա. Սարգսյան", lessons: 8, reviews: 31 },
];
