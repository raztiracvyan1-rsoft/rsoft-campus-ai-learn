import type { Course, Module, Lesson } from "@/types";

export const courses: Course[] = [
  { id: "c1", name: "Web Development", slug: "web-development", description: "HTML, CSS և ժամանակակից վեբ-կայքերի կառուցման հիմունքներ։ Սովորիր ստեղծել արձագանքող (responsive) կայքեր զրոյից։", category: "Web Development", teacherId: "t1", color: "primary", icon: "Globe", durationWeeks: 16, startDate: "2025-09-08", endDate: "2025-12-26", maxStudents: 15, studentIds: ["s1", "s5", "s8"], status: "active", totalLessons: 32, level: "Beginner" },
  { id: "c2", name: "JavaScript", slug: "javascript", description: "JavaScript ծրագրավորման լեզվի խորացված դասընթաց՝ փոփոխականներից մինչև ասինխրոն ծրագրավորում և DOM։", category: "Web Development", teacherId: "t3", color: "yellow", icon: "Braces", durationWeeks: 20, startDate: "2025-09-10", endDate: "2026-01-30", maxStudents: 15, studentIds: ["s1", "s2", "s4", "s5"], status: "active", totalLessons: 40, level: "Intermediate" },
  { id: "c3", name: "React.js", slug: "react", description: "Ժամանակակից React՝ components, hooks, state management և իրական նախագծերի կառուցում։", category: "Web Development", teacherId: "t1", color: "primary", icon: "Atom", durationWeeks: 14, startDate: "2025-10-01", endDate: "2026-01-15", maxStudents: 12, studentIds: ["s1", "s3", "s8"], status: "active", totalLessons: 28, level: "Intermediate" },
  { id: "c4", name: "Node.js", slug: "nodejs", description: "Backend ծրագրավորում Node.js և Express.js-ով, REST API-ներ և MongoDB տվյալների բազա։", category: "Web Development", teacherId: "t1", color: "success", icon: "Server", durationWeeks: 12, startDate: "2025-11-03", endDate: "2026-02-13", maxStudents: 12, studentIds: ["s3", "s7"], status: "active", totalLessons: 24, level: "Advanced" },
  { id: "c5", name: "Python", slug: "python", description: "Python ծրագրավորում սկսնակների համար՝ հիմունքներից մինչև տվյալների մշակում և ավտոմատացում։", category: "Python", teacherId: "t2", color: "purple", icon: "Code2", durationWeeks: 16, startDate: "2025-09-15", endDate: "2026-01-09", maxStudents: 15, studentIds: ["s2", "s6"], status: "active", totalLessons: 32, level: "Beginner" },
  { id: "c6", name: "Graphic Design", slug: "graphic-design", description: "Գրաֆիկական դիզայնի հիմունքներ՝ Figma, կոմպոզիցիա, գունային տեսություն և բրենդինգ։", category: "Graphic Design", teacherId: "t2", color: "orange", icon: "Palette", durationWeeks: 12, startDate: "2025-10-06", endDate: "2025-12-29", maxStudents: 10, studentIds: ["s4", "s6"], status: "active", totalLessons: 24, level: "Beginner" },
  { id: "c7", name: "Vibe Coding with AI", slug: "vibe-coding", description: "AI գործիքներով արագ նախատիպավորում և արտադրանքի կառուցում։", category: "Vibe Coding", teacherId: "t3", color: "primary", icon: "Sparkles", durationWeeks: 8, startDate: "2026-02-02", endDate: "2026-03-27", maxStudents: 12, studentIds: [], status: "upcoming", totalLessons: 16, level: "Intermediate" },
  { id: "c8", name: "Scratch for Kids", slug: "scratch-kids", description: "Ծրագրավորում երեխաների համար Scratch-ով։", category: "Children Programming", teacherId: "t2", color: "orange", icon: "Blocks", durationWeeks: 10, startDate: "2025-03-03", endDate: "2025-05-09", maxStudents: 10, studentIds: [], status: "archived", totalLessons: 20, level: "Beginner" },
];

export const modules: Module[] = [
  { id: "m1", courseId: "c2", title: "Module 1 — JavaScript Basics", order: 1 },
  { id: "m2", courseId: "c2", title: "Module 2 — Arrays", order: 2 },
  { id: "m3", courseId: "c2", title: "Module 3 — Functions & Objects", order: 3 },
  { id: "m4", courseId: "c3", title: "Module 1 — React Fundamentals", order: 1 },
  { id: "m5", courseId: "c3", title: "Module 2 — Hooks", order: 2 },
  { id: "m6", courseId: "c1", title: "Module 1 — HTML", order: 1 },
  { id: "m7", courseId: "c1", title: "Module 2 — CSS", order: 2 },
  { id: "m8", courseId: "c4", title: "Module 1 — Node Basics", order: 1 },
  { id: "m9", courseId: "c5", title: "Module 1 — Python Basics", order: 1 },
  { id: "m10", courseId: "c6", title: "Module 1 — Design Foundations", order: 1 },
];

const att = (id: string, name: string, size: string, type: "pdf" | "zip" | "png" | "doc" | "link" = "pdf") => ({ id, name, size, type });

const simpleLesson = (id: string, courseId: string, moduleId: string, title: string, order: number, status: Lesson["status"], homeworkId?: string): Lesson => ({
  id, courseId, moduleId, title, order, durationMin: 60, status, published: true, homeworkId,
  description: `${title} թեմայի մանրամասն ուսումնասիրություն՝ գործնական օրինակներով։`,
  blocks: [
    { type: "text", content: `Այս դասում մենք կուսումնասիրենք «${title}» թեման։ Դասն ընդգրկում է տեսական մաս, գործնական օրինակներ և ինքնուրույն վարժություններ։` },
    { type: "heading", content: "Հիմնական գաղափարներ" },
    { type: "list", content: "", items: ["Թեմայի հիմնական սահմանումները", "Գործնական կիրառությունը իրական նախագծերում", "Հաճախ հանդիպող սխալները"] },
    { type: "code", language: "javascript", content: `// Օրինակ\nconsole.log("Hello, R'SOFT Campus!");` },
    { type: "note", content: "Դասը ավարտելուց հետո անպայման կատարիր գործնական վարժությունները։" },
  ],
  attachments: [att(`${id}-a1`, "Դասի սլայդներ.pdf", "2.4 MB")],
});

export const lessons: Lesson[] = [
  // JavaScript — Module 1
  simpleLesson("l1", "c2", "m1", "Lesson 1 — Variables", 1, "completed"),
  simpleLesson("l2", "c2", "m1", "Lesson 2 — Data Types", 2, "completed"),
  simpleLesson("l3", "c2", "m1", "Lesson 3 — Conditions", 3, "completed", "h4"),
  simpleLesson("l4", "c2", "m1", "Lesson 4 — Loops", 4, "completed", "h5"),
  // JavaScript — Module 2
  simpleLesson("l5", "c2", "m2", "Lesson 5 — Arrays Basics", 5, "completed"),
  {
    id: "l6", courseId: "c2", moduleId: "m2", title: "Lesson 6 — Array Methods", order: 6, durationMin: 75, status: "current", published: true, homeworkId: "h1",
    description: "JavaScript-ի զանգվածների (arrays) ամենակարևոր մեթոդները՝ map, filter, reduce, find և այլն։",
    blocks: [
      { type: "text", content: "Զանգվածների մեթոդները JavaScript-ի ամենահզոր գործիքներից են։ Դրանք թույլ են տալիս տվյալները վերափոխել, զտել և ամփոփել առանց ձեռքով ցիկլեր գրելու։" },
      { type: "heading", content: "map() — յուրաքանչյուր տարրի վերափոխում" },
      { type: "text", content: "map() մեթոդը ստեղծում է նոր զանգված՝ սկզբնական զանգվածի յուրաքանչյուր տարրի վրա կիրառելով տրված ֆունկցիան։" },
      { type: "code", language: "javascript", content: `const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map((n) => n * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]` },
      { type: "heading", content: "filter() — տարրերի զտում" },
      { type: "code", language: "javascript", content: `const scores = [8, 5, 9, 6, 10];\nconst passed = scores.filter((s) => s >= 7);\nconsole.log(passed); // [8, 9, 10]` },
      { type: "heading", content: "reduce() — ամփոփում մեկ արժեքի" },
      { type: "code", language: "javascript", content: `const prices = [1200, 850, 3400];\nconst total = prices.reduce((sum, p) => sum + p, 0);\nconsole.log(total); // 5450` },
      { type: "video", content: "Array Methods — տեսադաս (18:42)" },
      { type: "note", content: "Կարևոր․ map(), filter() և reduce() ՉԵՆ փոխում սկզբնական զանգվածը։ Դրանք վերադարձնում են նոր արժեք։" },
      { type: "heading", content: "Հաճախ օգտագործվող մեթոդներ" },
      { type: "list", content: "", items: ["find() — առաջին համապատասխան տարրը", "some() / every() — պայմանի ստուգում", "includes() — տարրի առկայություն", "sort() — դասավորում (փոխում է սկզբնականը)", "Set — կրկնվող արժեքների հեռացում"] },
      { type: "image", content: "Array methods cheat sheet" },
    ],
    attachments: [att("l6-a1", "Array Methods — սլայդներ.pdf", "3.1 MB"), att("l6-a2", "practice-arrays.zip", "12 KB", "zip"), att("l6-a3", "cheat-sheet.png", "540 KB", "png")],
  },
  simpleLesson("l7", "c2", "m2", "Lesson 7 — Practice", 7, "locked"),
  simpleLesson("l8", "c2", "m3", "Lesson 8 — Functions Deep Dive", 8, "locked"),
  simpleLesson("l9", "c2", "m3", "Lesson 9 — Objects", 9, "locked", "h6"),
  simpleLesson("l10", "c2", "m3", "Lesson 10 — Scope & Closures", 10, "locked"),
  // React
  simpleLesson("l11", "c3", "m4", "Lesson 1 — JSX & Components", 1, "completed"),
  simpleLesson("l12", "c3", "m4", "Lesson 2 — Props", 2, "completed", "h2"),
  simpleLesson("l13", "c3", "m4", "Lesson 3 — State", 3, "current"),
  simpleLesson("l14", "c3", "m5", "Lesson 4 — useEffect", 4, "locked"),
  simpleLesson("l15", "c3", "m5", "Lesson 5 — Custom Hooks", 5, "locked"),
  // Web Dev
  simpleLesson("l16", "c1", "m6", "Lesson 1 — HTML Structure", 1, "completed"),
  simpleLesson("l17", "c1", "m6", "Lesson 2 — Semantic HTML", 2, "completed", "h3"),
  simpleLesson("l18", "c1", "m7", "Lesson 3 — CSS Selectors", 3, "current"),
  simpleLesson("l19", "c1", "m7", "Lesson 4 — Flexbox", 4, "locked"),
  simpleLesson("l20", "c1", "m7", "Lesson 5 — Grid", 5, "locked"),
  // Node
  simpleLesson("l21", "c4", "m8", "Lesson 1 — Node Runtime", 1, "completed"),
  simpleLesson("l22", "c4", "m8", "Lesson 2 — Express Basics", 2, "current", "h7"),
  simpleLesson("l23", "c4", "m8", "Lesson 3 — REST API", 3, "locked"),
  // Python
  simpleLesson("l24", "c5", "m9", "Lesson 1 — Python Syntax", 1, "completed"),
  simpleLesson("l25", "c5", "m9", "Lesson 2 — Lists & Dicts", 2, "current", "h8"),
  // Design
  simpleLesson("l26", "c6", "m10", "Lesson 1 — Color Theory", 1, "completed"),
  simpleLesson("l27", "c6", "m10", "Lesson 2 — Typography", 2, "current"),
];
