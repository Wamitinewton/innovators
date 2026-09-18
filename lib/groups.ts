export const MEMBERSHIP_FEE_KES = 100;
export const CURRENT_SEMESTER = "2026-1";
export const CLUB_WHATSAPP_CONTACT = "Newton Wamiti, 0792036343";
export const CLUB_EMAIL_CONTACT = "hello@meruinnovators.ke";

export type GroupSlug =
  | "android"
  | "cyber-security"
  | "web-development"
  | "machine-learning"
  | "robotics-iot"
  | "ui-ux-design"
  | "graphics-design"
  | "blockchain";

export type Group = {
  slug: GroupSlug;
  name: string;
  description: string;
  whatsappLink: string;
};

export const GROUPS: Group[] = [
  {
    slug: "android",
    name: "Android Development",
    description: "Mobile development with Kotlin & Jetpack Compose.",
    whatsappLink: "https://chat.whatsapp.com/FiyoCmQRLLV7G5doxuHglI?s=cl&p=a&mlu=4&ilr=4",
  },
  {
    slug: "cyber-security",
    name: "Cyber Security",
    description: "Security fundamentals, CTFs, and hands-on labs.",
    whatsappLink: "https://chat.whatsapp.com/F1PlJLOZohY6oKf23GMNfV",
  },
  {
    slug: "web-development",
    name: "Web Development",
    description: "Modern frontend & backend, from HTML to APIs.",
    whatsappLink: "https://chat.whatsapp.com/CbxCGyHlcCeLuymNnmD9wo",
  },
  {
    slug: "machine-learning",
    name: "Machine Learning",
    description: "Python, data analysis, and machine learning basics.",
    whatsappLink: "https://chat.whatsapp.com/CbxCGyHlcCeLuymNnmD9wo",
  },
  {
    slug: "robotics-iot",
    name: "Robotics and IoT",
    description: "Arduino, sensors, and embedded systems projects.",
    whatsappLink: "https://chat.whatsapp.com/0xZEGVxHf81A9QRiLX0cRu?s=cl&p=a&mlu=4&ilr=4",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX",
    description: "Product thinking, prototyping, and design systems.",
    whatsappLink: "https://chat.whatsapp.com/JXDo0oPk69qK1NtiraVNSP?s=sw&p=a&mlu=4&ilr=4",
  },
  {
    slug: "graphics-design",
    name: "Graphics Design",
    description: "Visual identity, branding, and creative design work.",
    whatsappLink: "https://chat.whatsapp.com/LUp3bAPNAAJK2a5QZ0EJw6?s=sw&p=a&mlu=4&ilr=4",
  },
  {
    slug: "blockchain",
    name: "BlockChain",
    description: "Smart contracts, dApps, and Web3 fundamentals.",
    whatsappLink: "https://chat.whatsapp.com/CbxCGyHlcCeLuymNnmD9wo",
  },
];

export const WAITING_GROUP_LINK = "https://chat.whatsapp.com/zzzzzzzzzzzzzzzzzzzzzz";
