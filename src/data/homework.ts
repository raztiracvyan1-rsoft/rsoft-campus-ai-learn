import type { Homework, Submission } from "@/types";

export const homeworks: Homework[] = [
  {
    id: "h1", title: "JavaScript — Arrays Practice", courseId: "c2", lessonId: "l6", teacherId: "t3",
    assignedAt: "2026-09-08", deadline: "2026-09-16T23:59", difficulty: "medium", maxGrade: 10,
    description: "Զանգվածների մեթոդների գործնական կիրառություն։ Կատարիր բոլոր առաջադրանքները մեկ JavaScript ֆայլում։",
    instructions: ["Օգտագործիր միայն ES6+ սինտաքս", "Յուրաքանչյուր առաջադրանքի համար գրիր առանձին ֆունկցիա", "Կոդը պետք է լինի մեկնաբանված", "Խուսափիր var-ի օգտագործումից"],
    tasks: ["Ստեղծիր 10 թիվ պարունակող զանգված։", "Գտիր ամենամեծ թիվը։", "Հաշվիր գումարը։", "Հեռացրու կրկնվող արժեքները։"],
    attachments: [{ id: "h1a1", name: "arrays-starter.zip", size: "8 KB", type: "zip" }, { id: "h1a2", name: "Պահանջներ.pdf", size: "320 KB", type: "pdf" }],
    resources: [{ title: "MDN — Array", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }, { title: "JavaScript.info — Array methods", url: "https://javascript.info/array-methods" }],
    answerTypes: ["code", "text", "file", "github"], aiEnabled: true,
    aiCriteria: [{ name: "Correctness", weight: 40 }, { name: "Code Quality", weight: 20 }, { name: "Logic", weight: 25 }, { name: "Completion", weight: 15 }],
  },
  {
    id: "h2", title: "React — Props Card Component", courseId: "c3", lessonId: "l12", teacherId: "t1",
    assignedAt: "2026-09-03", deadline: "2026-09-12T23:59", difficulty: "easy", maxGrade: 10,
    description: "Ստեղծիր վերաօգտագործելի Card component, որը ստանում է title, description և image props։",
    instructions: ["Օգտագործիր functional component", "Props-ը պետք է ունենան default արժեքներ"],
    tasks: ["Ստեղծիր Card component", "Ավելացրու PropTypes կամ TypeScript տիպեր", "Ցուցադրիր 3 քարտ App-ում"],
    attachments: [], resources: [{ title: "React Docs — Passing Props", url: "https://react.dev/learn/passing-props-to-a-component" }],
    answerTypes: ["github", "code"], aiEnabled: true,
    aiCriteria: [{ name: "Correctness", weight: 50 }, { name: "Code Quality", weight: 30 }, { name: "Completion", weight: 20 }],
  },
  {
    id: "h3", title: "HTML — Semantic Page Layout", courseId: "c1", lessonId: "l17", teacherId: "t1",
    assignedAt: "2026-08-28", deadline: "2026-09-05T23:59", difficulty: "easy", maxGrade: 10,
    description: "Կառուցիր բլոգի էջ՝ օգտագործելով սեմանտիկ HTML տեգեր։",
    instructions: ["Օգտագործիր header, nav, main, article, aside, footer"],
    tasks: ["Ստեղծիր index.html", "Ավելացրու նավիգացիա", "Ավելացրու 2 հոդված"],
    attachments: [], resources: [], answerTypes: ["file", "github"], aiEnabled: true,
    aiCriteria: [{ name: "Correctness", weight: 60 }, { name: "Completion", weight: 40 }],
  },
  {
    id: "h4", title: "JavaScript — Conditions Quiz", courseId: "c2", lessonId: "l3", teacherId: "t3",
    assignedAt: "2026-08-20", deadline: "2026-08-27T23:59", difficulty: "easy", maxGrade: 10,
    description: "Պայմանական օպերատորների վարժություններ։",
    instructions: [], tasks: ["Գրիր տարիքը ստուգող ֆունկցիա", "Գրիր գնահատականը տառի փոխակերպող ֆունկցիա"],
    attachments: [], resources: [], answerTypes: ["code"], aiEnabled: true,
    aiCriteria: [{ name: "Correctness", weight: 70 }, { name: "Code Quality", weight: 30 }],
  },
  {
    id: "h5", title: "JavaScript — Loops Challenge", courseId: "c2", lessonId: "l4", teacherId: "t3",
    assignedAt: "2026-08-27", deadline: "2026-09-03T23:59", difficulty: "medium", maxGrade: 10,
    description: "Ցիկլերի օգտագործմամբ խնդիրների լուծում։",
    instructions: [], tasks: ["FizzBuzz 1-100", "Բազմապատկման աղյուսակ", "Պարզ թվերի որոնում"],
    attachments: [], resources: [], answerTypes: ["code", "github"], aiEnabled: true,
    aiCriteria: [{ name: "Correctness", weight: 50 }, { name: "Logic", weight: 30 }, { name: "Code Quality", weight: 20 }],
  },
  {
    id: "h6", title: "JavaScript — Objects Mini Project", courseId: "c2", lessonId: "l9", teacherId: "t3",
    assignedAt: "2026-09-12", deadline: "2026-09-24T23:59", difficulty: "hard", maxGrade: 10,
    description: "Ստեղծիր գրադարանի կառավարման փոքր համակարգ օբյեկտներով։",
    instructions: ["Օգտագործիր օբյեկտներ և մեթոդներ"], tasks: ["Book օբյեկտ", "Library զանգված", "Ավելացնել/հեռացնել/որոնել ֆունկցիաներ"],
    attachments: [], resources: [], answerTypes: ["github", "code", "text"], aiEnabled: true,
    aiCriteria: [{ name: "Correctness", weight: 40 }, { name: "Code Quality", weight: 20 }, { name: "Logic", weight: 25 }, { name: "Completion", weight: 15 }],
  },
  {
    id: "h7", title: "Express — Hello API", courseId: "c4", lessonId: "l22", teacherId: "t1",
    assignedAt: "2026-09-09", deadline: "2026-09-18T23:59", difficulty: "medium", maxGrade: 10,
    description: "Ստեղծիր Express սերվեր 3 endpoint-ով։",
    instructions: [], tasks: ["GET /", "GET /users", "POST /users"],
    attachments: [], resources: [], answerTypes: ["github"], aiEnabled: true,
    aiCriteria: [{ name: "Correctness", weight: 50 }, { name: "Code Quality", weight: 50 }],
  },
  {
    id: "h8", title: "Python — Lists Practice", courseId: "c5", lessonId: "l25", teacherId: "t2",
    assignedAt: "2026-09-10", deadline: "2026-09-19T23:59", difficulty: "easy", maxGrade: 10,
    description: "Ցուցակների հետ աշխատանք Python-ում։",
    instructions: [], tasks: ["Ստեղծիր ցուցակ", "Դասավորիր", "Զտիր զույգ թվերը"],
    attachments: [], resources: [], answerTypes: ["code", "file"], aiEnabled: false, aiCriteria: [],
  },
];

export const submissions: Submission[] = [
  // Aram — h1 in progress (main demo)
  { id: "sub1", homeworkId: "h1", studentId: "s1", status: "in_progress", attempt: 0 },
  // Aram — h2 AI checked, awaiting teacher
  {
    id: "sub2", homeworkId: "h2", studentId: "s1", status: "ai_checked", attempt: 1, submittedAt: "2026-09-11T20:14",
    githubUrl: "https://github.com/aram-sargsyan/react-card",
    codeAnswer: `export function Card({ title, description, image }) {\n  return (\n    <div className="card">\n      <img src={image} alt={title} />\n      <h3>{title}</h3>\n      <p>{description}</p>\n    </div>\n  );\n}`,
    ai: { completion: 90, codeQuality: 8, correctness: 9, logic: 9, estimate: 9, analyzedAt: "2026-09-11T20:15",
      correct: ["Card component-ը ճիշտ է ստանում props-ը", "JSX կառուցվածքը մաքուր է", "3 քարտ ցուցադրվում է App-ում"],
      errors: ["Default props բացակայում են", "alt տեքստը կարող է դատարկ լինել, եթե title չկա"],
      suggestions: ["Ավելացրու TypeScript interface Props-ի համար", "Օգտագործիր destructuring default արժեքներով"],
      fixes: ["function Card({ title = 'Untitled', description = '', image }) { ... }"] },
  },
  // Aram — h3 teacher checked
  {
    id: "sub3", homeworkId: "h3", studentId: "s1", status: "teacher_checked", attempt: 1, submittedAt: "2026-09-04T18:30",
    githubUrl: "https://github.com/aram-sargsyan/semantic-blog", files: ["index.html", "styles.css"],
    ai: { completion: 88, codeQuality: 8, correctness: 9, logic: 8, estimate: 8, analyzedAt: "2026-09-04T18:31",
      correct: ["Բոլոր սեմանտիկ տեգերը օգտագործված են", "Նավիգացիան աշխատում է"], errors: ["Երկրորդ article-ը չունի heading"], suggestions: ["Ավելացրու meta description"], fixes: ["<article><h2>Վերնագիր</h2>...</article>"] },
    teacherGrade: 9, teacherFeedback: "Շատ լավ կառուցվածք։ Ուշադրություն դարձրու heading հիերարխիային։", reviewedAt: "2026-09-06T10:00",
  },
  // Aram — h4 teacher checked
  {
    id: "sub4", homeworkId: "h4", studentId: "s1", status: "teacher_checked", attempt: 2, submittedAt: "2026-08-26T21:00",
    codeAnswer: `function checkAge(age) {\n  if (age >= 18) return "adult";\n  return "minor";\n}`,
    ai: { completion: 95, codeQuality: 9, correctness: 9, logic: 9, estimate: 9, analyzedAt: "2026-08-26T21:01", correct: ["Բոլոր ֆունկցիաները աշխատում են"], errors: [], suggestions: ["Ավելացրու edge case-երի ստուգում"], fixes: [] },
    teacherGrade: 9, teacherFeedback: "Գերազանց։", reviewedAt: "2026-08-28T12:00",
  },
  // Aram — h5 teacher checked (classic demo: 82%, 8/10 AI, 9/10 teacher)
  {
    id: "sub5", homeworkId: "h5", studentId: "s1", status: "teacher_checked", attempt: 1, submittedAt: "2026-09-02T19:45",
    githubUrl: "https://github.com/aram-sargsyan/js-loops",
    codeAnswer: `for (let i = 1; i <= 100; i++) {\n  if (i % 15 === 0) console.log("FizzBuzz");\n  else if (i % 3 === 0) console.log("Fizz");\n  else if (i % 5 === 0) console.log("Buzz");\n  else console.log(i);\n}`,
    ai: { completion: 82, codeQuality: 8, correctness: 7, logic: 9, estimate: 8, analyzedAt: "2026-09-02T19:46",
      correct: ["FizzBuzz-ը ճիշտ է իրականացված", "Բազմապատկման աղյուսակը ձևաչափված է", "Օգտագործված են let/const"],
      errors: ["Պարզ թվերի ֆունկցիան 1-ը համարում է պարզ", "Ցիկլը ստուգում է մինչև n, ոչ թե √n"],
      suggestions: ["Օգտագործիր Math.sqrt օպտիմալացման համար", "Առանձնացրու տրամաբանությունը ֆունկցիաների"],
      fixes: ["if (n < 2) return false;", "for (let i = 2; i * i <= n; i++)"] },
    teacherGrade: 9, teacherFeedback: "Լավ աշխատանք է։ Ուշադրություն դարձրու array մեթոդների ճիշտ ընտրությանը։", reviewedAt: "2026-09-04T11:20",
  },
  // Aram — h6 not started
  { id: "sub6", homeworkId: "h6", studentId: "s1", status: "not_started", attempt: 0 },
  // Other students
  { id: "sub7", homeworkId: "h1", studentId: "s2", status: "ai_checked", attempt: 1, submittedAt: "2026-09-12T17:00", codeAnswer: "const arr = [3,1,2];\nconst max = Math.max(...arr);", ai: { completion: 60, codeQuality: 6, correctness: 6, logic: 7, estimate: 6, analyzedAt: "2026-09-12T17:01", correct: ["Զանգվածը ստեղծված է", "Մաքսիմումը գտնված է"], errors: ["Գումարը հաշված չէ", "Կրկնվողները չեն հեռացված"], suggestions: ["Օգտագործիր reduce և Set"], fixes: ["[...new Set(arr)]"] } },
  { id: "sub8", homeworkId: "h1", studentId: "s4", status: "submitted", attempt: 1, submittedAt: "2026-09-13T09:30", githubUrl: "https://github.com/ani-p/arrays" },
  { id: "sub9", homeworkId: "h1", studentId: "s5", status: "overdue", attempt: 0 },
  { id: "sub10", homeworkId: "h2", studentId: "s3", status: "teacher_checked", attempt: 1, submittedAt: "2026-09-10T15:00", githubUrl: "https://github.com/davit-m/card", ai: { completion: 96, codeQuality: 10, correctness: 9, logic: 9, estimate: 10, analyzedAt: "2026-09-10T15:01", correct: ["Ամեն ինչ կատարված է"], errors: [], suggestions: [], fixes: [] }, teacherGrade: 10, teacherFeedback: "Անթերի։", reviewedAt: "2026-09-11T09:00" },
  { id: "sub11", homeworkId: "h2", studentId: "s8", status: "ai_checked", attempt: 2, submittedAt: "2026-09-12T22:10", codeAnswer: "function Card(props){ return <div>{props.title}</div> }", ai: { completion: 55, codeQuality: 5, correctness: 6, logic: 6, estimate: 6, analyzedAt: "2026-09-12T22:11", correct: ["Component-ը ստեղծված է"], errors: ["description և image չեն օգտագործվում"], suggestions: ["Օգտագործիր բոլոր props-երը"], fixes: [] } },
  { id: "sub12", homeworkId: "h7", studentId: "s3", status: "ai_checked", attempt: 1, submittedAt: "2026-09-13T11:00", githubUrl: "https://github.com/davit-m/express-hello", ai: { completion: 85, codeQuality: 8, correctness: 9, logic: 8, estimate: 8, analyzedAt: "2026-09-13T11:01", correct: ["Բոլոր endpoint-ները աշխատում են"], errors: ["POST-ը չի վալիդացնում body-ն"], suggestions: ["Ավելացրու express.json() middleware ստուգում"], fixes: [] } },
  { id: "sub13", homeworkId: "h5", studentId: "s2", status: "teacher_checked", attempt: 1, submittedAt: "2026-09-03T20:00", codeAnswer: "// fizzbuzz", ai: { completion: 70, codeQuality: 7, correctness: 7, logic: 7, estimate: 7, analyzedAt: "2026-09-03T20:01", correct: ["FizzBuzz"], errors: ["Պարզ թվեր բացակայում են"], suggestions: [], fixes: [] }, teacherGrade: 7, teacherFeedback: "Ավարտիր երրորդ առաջադրանքը։", reviewedAt: "2026-09-05T10:00" },
  { id: "sub14", homeworkId: "h4", studentId: "s4", status: "teacher_checked", attempt: 1, submittedAt: "2026-08-27T10:00", codeAnswer: "//", ai: { completion: 90, codeQuality: 9, correctness: 9, logic: 8, estimate: 9, analyzedAt: "2026-08-27T10:01", correct: [], errors: [], suggestions: [], fixes: [] }, teacherGrade: 8, teacherFeedback: "Լավ է։", reviewedAt: "2026-08-29T10:00" },
  { id: "sub15", homeworkId: "h8", studentId: "s2", status: "in_progress", attempt: 0 },
];
