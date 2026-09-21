import type { AIFeedback, Homework } from "@/types";

/**
 * Mock AI checking engine. Later this is replaced by a POST to
 * /api/homework/:id/ai-check on the Node.js/Express backend — the returned
 * shape is intentionally identical to AIFeedback.
 */
export function runMockAICheck(
  homework: Homework,
  answer: { textAnswer?: string; codeAnswer?: string; githubUrl?: string; files?: string[] },
): AIFeedback {
  const code = answer.codeAnswer ?? "";
  const len = code.length + (answer.textAnswer?.length ?? 0);
  const hasGithub = Boolean(answer.githubUrl);
  const hasFiles = (answer.files?.length ?? 0) > 0;

  const base = Math.min(95, 45 + Math.round(len / 12) + (hasGithub ? 18 : 0) + (hasFiles ? 8 : 0));
  const completion = Math.max(35, Math.min(98, base));
  const scale = (n: number) => Math.max(4, Math.min(10, Math.round(n / 10)));

  const codeQuality = scale(completion - 6 + (code.includes("const") ? 8 : 0));
  const correctness = scale(completion + (code.includes("function") || code.includes("=>") ? 5 : -4));
  const logic = scale(completion + (code.includes("for") || code.includes("map") ? 6 : 0));
  const estimate = Math.round((codeQuality + correctness + logic) / 3);

  const correct: string[] = [];
  const errors: string[] = [];
  const suggestions: string[] = [];
  const fixes: string[] = [];

  homework.tasks.forEach((task, i) => {
    if (i < Math.round((completion / 100) * homework.tasks.length)) {
      correct.push(`«${task}» առաջադրանքը կատարված է։`);
    } else {
      errors.push(`«${task}» առաջադրանքը ամբողջական չէ կամ բացակայում է։`);
    }
  });

  if (code && !code.includes("const") && !code.includes("let")) {
    errors.push("Փոփոխականները հայտարարված չեն ES6+ ձևով (const / let)։");
    fixes.push("const result = [];  // var-ի փոխարեն");
  }
  if (code && !code.includes("//")) {
    suggestions.push("Ավելացրու մեկնաբանություններ՝ կոդի տրամաբանությունը բացատրելու համար։");
  }
  if (!hasGithub && homework.answerTypes.includes("github")) {
    suggestions.push("Ավելացրու GitHub հղում՝ ուսուցչին կոդը ամբողջությամբ տեսնելու համար։");
  }
  suggestions.push("Ստուգիր եզրային դեպքերը (դատարկ զանգված, բացակայող արժեքներ)։");
  if (errors.length === 0) errors.push("Կրիտիկական սխալներ չեն հայտնաբերվել։");

  return {
    completion,
    codeQuality,
    correctness,
    logic,
    estimate,
    correct,
    errors,
    suggestions,
    fixes,
    analyzedAt: new Date().toISOString(),
  };
}

export const AI_STEPS = [
  "Կոդի կարդացում...",
  "Կառուցվածքի վերլուծություն...",
  "Առաջադրանքների ստուգում...",
  "Սխալների հայտնաբերում...",
  "Գնահատականի ձևավորում...",
];
