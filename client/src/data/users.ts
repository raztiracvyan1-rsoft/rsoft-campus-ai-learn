import type { User } from "@/types";

const av = (seed: string) => `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}&backgroundColor=e0f2fe`;

export const users: User[] = [
  // Students
  { id: "s1", firstName: "Արամ", lastName: "Սարգսյան", email: "aram.sargsyan@rsoft.am", phone: "+374 91 123 456", role: "student", avatar: av("Aram"), level: "Intermediate", studentId: "RS-2024-0117", joinedAt: "2024-09-02", status: "active", courseIds: ["c2", "c3", "c1"] },
  { id: "s2", firstName: "Մարիամ", lastName: "Գրիգորյան", email: "mariam.grigoryan@rsoft.am", phone: "+374 93 234 567", role: "student", avatar: av("Mariam"), level: "Beginner", studentId: "RS-2024-0132", joinedAt: "2024-10-14", status: "active", courseIds: ["c2", "c5"] },
  { id: "s3", firstName: "Դավիթ", lastName: "Մկրտչյան", email: "davit.mkrtchyan@rsoft.am", phone: "+374 94 345 678", role: "student", avatar: av("Davit"), level: "Advanced", studentId: "RS-2023-0089", joinedAt: "2023-11-20", status: "active", courseIds: ["c3", "c4"] },
  { id: "s4", firstName: "Անի", lastName: "Պետրոսյան", email: "ani.petrosyan@rsoft.am", phone: "+374 95 456 789", role: "student", avatar: av("Ani"), level: "Intermediate", studentId: "RS-2024-0121", joinedAt: "2024-09-02", status: "active", courseIds: ["c2", "c6"] },
  { id: "s5", firstName: "Նարեկ", lastName: "Հովհաննիսյան", email: "narek.h@rsoft.am", phone: "+374 96 567 890", role: "student", avatar: av("Narek"), level: "Beginner", studentId: "RS-2025-0204", joinedAt: "2025-01-13", status: "active", courseIds: ["c1", "c2"] },
  { id: "s6", firstName: "Լիլիթ", lastName: "Ավետիսյան", email: "lilit.a@rsoft.am", phone: "+374 97 678 901", role: "student", avatar: av("Lilit"), level: "Intermediate", studentId: "RS-2024-0155", joinedAt: "2024-11-04", status: "active", courseIds: ["c5", "c6"] },
  { id: "s7", firstName: "Գոռ", lastName: "Խաչատրյան", email: "gor.kh@rsoft.am", phone: "+374 98 789 012", role: "student", avatar: av("Gor"), level: "Advanced", studentId: "RS-2023-0071", joinedAt: "2023-09-11", status: "inactive", courseIds: ["c4"] },
  { id: "s8", firstName: "Սոնա", lastName: "Մանուկյան", email: "sona.m@rsoft.am", phone: "+374 99 890 123", role: "student", avatar: av("Sona"), level: "Beginner", studentId: "RS-2025-0211", joinedAt: "2025-02-03", status: "active", courseIds: ["c1", "c3"] },
  // Teachers
  { id: "t1", firstName: "Տիգրան", lastName: "Հարությունյան", email: "tigran.h@rsoft.am", phone: "+374 91 111 222", role: "teacher", avatar: av("Tigran"), joinedAt: "2022-03-01", status: "active", courseIds: ["c1", "c3", "c4"] },
  { id: "t2", firstName: "Աննա", lastName: "Մարտիրոսյան", email: "anna.m@rsoft.am", phone: "+374 93 333 444", role: "teacher", avatar: av("Anna"), joinedAt: "2022-09-05", status: "active", courseIds: ["c5", "c6"] },
  { id: "t3", firstName: "Արման", lastName: "Սարգսյան", email: "arman.s@rsoft.am", phone: "+374 94 555 666", role: "teacher", avatar: av("Arman"), joinedAt: "2023-01-16", status: "active", courseIds: ["c2"] },
  // Admin
  { id: "a1", firstName: "Ռուզաննա", lastName: "Ասատրյան", email: "admin@rsoft.am", phone: "+374 10 200 300", role: "admin", avatar: av("Ruzanna"), joinedAt: "2021-06-01", status: "active", courseIds: [] },
];

export const fullName = (u?: User | null) => (u ? `${u.firstName} ${u.lastName}` : "");
