const hyMonths = [
  "հունվարի", "փետրվարի", "մարտի", "ապրիլի", "մայիսի", "հունիսի",
  "հուլիսի", "օգոստոսի", "սեպտեմբերի", "հոկտեմբերի", "նոյեմբերի", "դեկտեմբերի",
];
const hyMonthsShort = ["հնվ", "փտր", "մրտ", "ապր", "մյս", "հնս", "հլս", "օգս", "սեպ", "հոկ", "նոյ", "դեկ"];
export const hyWeekdays = ["Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ", "Կիր"];

export const TODAY = "2026-09-13";

export function parse(dateStr: string) {
  return new Date(dateStr.length <= 10 ? `${dateStr}T00:00:00` : dateStr);
}

export function formatDate(dateStr?: string) {
  if (!dateStr) return "—";
  const d = parse(dateStr);
  return `${d.getDate()} ${hyMonthsShort[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatLongDate(dateStr?: string) {
  if (!dateStr) return "—";
  const d = parse(dateStr);
  return `${d.getDate()} ${hyMonths[d.getMonth()]}, ${d.getFullYear()}`;
}

export function formatTime(dateStr?: string) {
  if (!dateStr) return "";
  const d = parse(dateStr);
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

export function formatDateTime(dateStr?: string) {
  if (!dateStr) return "—";
  return `${formatDate(dateStr)}, ${formatTime(dateStr)}`;
}

export function daysLeft(deadline: string) {
  const ms = parse(deadline).getTime() - parse(TODAY).getTime();
  return Math.ceil(ms / 86_400_000);
}

export function deadlineLabel(deadline: string) {
  const d = daysLeft(deadline);
  if (d < 0) return `${Math.abs(d)} օր ուշացում`;
  if (d === 0) return "Այսօր է վերջնաժամկետը";
  if (d === 1) return "Մնացել է 1 օր";
  return `Մնացել է ${d} օր`;
}

export function toISODate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function monthTitle(d: Date) {
  return `${hyMonths[d.getMonth()].replace("ի", "")} ${d.getFullYear()}`;
}

export function initials(first: string, last: string) {
  return `${first.charAt(0)}${last.charAt(0)}`;
}
