export const MEMBERSHIP_FEE_KES = 100;
export const CURRENT_SEMESTER = "2026-1";
export const CLUB_WHATSAPP_CONTACT = "+254 700 000 000";
export const CLUB_EMAIL_CONTACT = "hello@meruinnovators.ke";

export type GroupSlug =
  | "android"
  | "cyber-security"
  | "web-development"
  | "data-science"
  | "robotics-iot"
  | "ui-ux-design";

export type Group = {
  slug: GroupSlug;
  name: string;
  description: string;
  whatsappLink: string;
};

export const GROUPS: Group[] = [
  {
    slug: "android",
    name: "Android",
    description: "Mobile development with Kotlin & Jetpack Compose.",
    whatsappLink: "https://chat.whatsapp.com/xxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    slug: "cyber-security",
    name: "Cyber Security",
    description: "Security fundamentals, CTFs, and hands-on labs.",
    whatsappLink: "https://chat.whatsapp.com/yyyyyyyyyyyyyyyyyyyyyy",
  },
  {
    slug: "web-development",
    name: "Web Development",
    description: "Modern frontend & backend, from HTML to APIs.",
    whatsappLink: "https://chat.whatsapp.com/wwwwwwwwwwwwwwwwwwwwww",
  },
  {
    slug: "data-science",
    name: "Data Science",
    description: "Python, data analysis, and machine learning basics.",
    whatsappLink: "https://chat.whatsapp.com/dddddddddddddddddddddd",
  },
  {
    slug: "robotics-iot",
    name: "Robotics & IoT",
    description: "Arduino, sensors, and embedded systems projects.",
    whatsappLink: "https://chat.whatsapp.com/rrrrrrrrrrrrrrrrrrrrrr",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    description: "Product thinking, prototyping, and design systems.",
    whatsappLink: "https://chat.whatsapp.com/uuuuuuuuuuuuuuuuuuuuuu",
  },
];

export const WAITING_GROUP_LINK = "https://chat.whatsapp.com/zzzzzzzzzzzzzzzzzzzzzz";
