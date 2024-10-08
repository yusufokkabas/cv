import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Yusuf Orhan Okkabas",
  initials: "YO",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about:
    "Detail-oriented Software Developer dedicated to building high-quality products.",
  summary:
    `I am a dedicated Software Developer with 3 years of hands-on experience about web development. My
responsibility is to develop robust, stable, flexible, high-quality software solutions both back-end and front-end. I also take part in the CI/CD phase, deployment process, and tracing
errors after development. I am continuously improving my skills on the professional field, including creating services, implementing Figma designs, and designing
software architecture.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/43817874?v=4",
  personalWebsiteUrl: "https://yusuforhan.com",
  contact: {
    email: "yusufokkabas@gmail.com",
    tel: "+905545061950",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yusufokkabas",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yusufokkabas/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/yusufokkabas",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Dokuz Eylul University ",
      degree: "Bachelor's Degree in Computer Engineering => GPA (3.02/4.00)",
      start: "2019",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Kentkart",
      link: "https://kentkart.com",
      badges: ["Angular","Node.js","SASS","Restful API","Oracle","Docker","CI/CD"],
      title: "Software Developer",
      start: "2022",
      end: null,
      description: [
        `Developing CRM product for cities public transportation system called GUI Kentkart. Project includes several
        modules for fleet management, card management, customer management, etc. My main responsibilities are designing user-friendly interfaces for end-users and developing robust, stable, and highly efficient services following
        SOLID principles.`,
        `Developing account management system. Project’s aim is the to allow our application such as GUI and mobile
        to access resources hosted by our account project on behalf of a user. My main responsibility involves creating
        software designs and implementing for screens where users manage informations and permissions.`,
      ],
    },
    {
      company: "Kentkart",
      link: "https://kentkart.com",
      badges: ["Angular","Node.js","MongoDB","WebSocket","PostgreSQL"],
      title: "Intern Software Developer",
      start: "2021",
      end: "2022",
      description: [
        `Worked on GUI design on hardware level. The device called OBU(On Board Unit) needed to redesign to provide
        easier access to emergency buttons in dangerous countries.`,
        `Developed a live GPS tracker for buses, which required reimplementing the project with NoSQL (MongoDB) and
        Websocket to achieve faster data flow. Collaborated with my teammates to build a prototype.`,
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Angular",
    "HTML",
    "CSS",
    "React/Next.js",
    "Node.js",
    "NoSQL",
    "SQL",
    "Docker",
    "CI/CD",
    "Git",
    "Agile"
  ],
  projects: [
    {
      title: "Horizon",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "React Hook Form",
        "Chart.js",
        "ShadCN"
      ],
      description: "Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users.",
      link: {
        href: "https://banking-app-chi-sooty.vercel.app/",
      },
      online: true,
    },
    {
      title: "IDSScout",
      techStack: [
        "Thesis Project",
        "React",
        "Node.js",
        "MySQL",
        "Python"
      ],
      description:
        `The goal is to predict football players’ market values based on their statistics.`,
      link: {
        href: "https://github.com/yusufokkabas/idssbackend",
      },
      online: false,
    },
    {
      title: "Conqueror",
      techStack: [
        "Side Project",
        "Node.js(Express)",
        "PostgreSQL",
        "ElasticSearch",
      ],
      description:
        `API for blog application. Users can create read update and delete blog posts as well as comment on others’ posts.`,
      link: {
        href: "https://github.com/yusufokkabas/conquerer",
      },
      online: false,
    },
    {
      title: "GUI Kentkart",
      techStack: ["Angular", "Node.js", "SASS", "Restful API", "Oracle", "Docker", "CI/CD"],
      description:
        "CRM product for cities public transportation system called GUI Kentkart.",
      online: false,
    },
    {
      title: "Account Kentkart",
      techStack: ["Angular", "Node.js", "SASS", "Restful API", "Oracle","Docker","CI/CD"],
      description:
        "Account management system for GUI Kentkart.",
      online: false,
    }
  ],
} as const;
