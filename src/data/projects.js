import todoApp from "../assets/todo-app.png";
import todoLogin from "../assets/todo-login.png";
import tallynOverview from "../assets/tallyn-overview.png";
import tallynAnalysis from "../assets/tallyn-analysis.png";
import geraltHome from "../assets/geralt-home.png";
import geraltAbout from "../assets/geralt-about.png";
import geraltGallery from "../assets/geralt-gallery.png";
import geraltWorld from "../assets/geralt-world.png";
import iqnixProject from "../assets/iqnix-project.png";
import iqnixUsers from "../assets/iqnix-users.png";
import iqnixSettings from "../assets/iqnix-settings.png";

const tallyn = {
  id: "tallyn",
  accent: "business",
  title: "Tallyn",
  stack: ["React", "TypeScript", "Capacitor", "Supabase"],
  image: tallynOverview,
  liveUrl: "https://tallyn.m1strell.com/",
  downloadUrl: "https://tallyn.m1strell.com/download/Tallyn-android.apk",
};

export const uiText = {
  worksTitle: "Selected work",
  contactTitle: "Get in touch",
  repoLabel: "View repository",
  detailsLabel: "View project details",
  backLabel: "All work",
  notFoundLabel: "Project not found.",
};

export const projectsData = [
  {
    id: "iqnix-ptm",
    accent: "business",
    tag: "Internal system · Fullstack",
    title: "IQNIX PTM",
    subtitle: "Project Total Manager",
    description:
      "A web application for estimating IT project costs: employee and contractor work, equipment, and subcontracted services. Calculates costs, markup, and totals using a configurable tax rate. Exports intangible asset cost reports and commercial proposals as PDF, Excel, and Word documents.",
    facts: [
      {
        label: "Organization",
        value: "projects grouped into workspaces",
      },
      {
        label: "Roles",
        value: "administrator, commercial director, accountant, HR",
      },
      {
        label: "Calculation",
        value: "by day count or weekdays within a date range",
      },
      {
        label: "Documents",
        value: "cost reports and proposals: PDF, Excel, Word",
      },
    ],
    formula: "total = cost + (cost × margin / 100)",
    stack: ["PHP 8.2", "Laravel 12", "MySQL 8", "React 19", "MUI 9"],
    image: iqnixProject,
    screenshots: [iqnixProject, iqnixUsers, iqnixSettings],
    liveUrl: null,
    demoNote: "Public demo offline.",
    repositories: [
      {
        label: "Frontend source",
        url: "https://github.com/guesti18921/iqnix-ptm-frontend",
      },
      {
        label: "Backend source",
        url: "https://github.com/guesti18921/iqnix-ptm-backend",
      },
    ],
  },
  {
    id: "todo-personal",
    accent: "business",
    tag: "Web app · Personal organizer",
    title: "TO-DO",
    subtitle: "Tasks and notes across devices",
    description:
      "An app for managing tasks, projects, and notes. It supports account registration, sign-in, and syncing data across devices.",
    facts: [
      { label: "Data", value: "personal tasks and notes in an account" },
      { label: "Access", value: "from desktop and phone" },
    ],
    formula: null,
    stack: ["JavaScript", "HTML", "CSS", "Supabase"],
    image: todoLogin,
    screenshots: [todoApp, todoLogin],
    liveUrl: "https://todo.m1strell.com/",
    demoNote: null,
    repoUrl: "https://github.com/guesti18921/todo-personal",
  },
  {
    ...tallyn,
    tag: "Web and Android app · Personal finance",
    subtitle: "Income and expense tracking",
    description:
      "Tallyn helps you manage a personal budget. Record income and expenses, track account balances in different currencies, and plan recurring payments.",
    facts: [
      { label: "Currencies", value: "Russian ruble, US dollar, and euro" },
      { label: "Data", value: "cross-device sync and encrypted backups" },
    ],
    liveLabel: "Open web app",
    previews: [
      { src: tallynOverview, alt: "Tallyn overview with an N26 card", width: 758, height: 1301 },
      { src: tallynAnalysis, alt: "Tallyn monthly spending breakdown", width: 798, height: 1299 },
    ],
  },
  {
    id: "perceptron",
    accent: "ai",
    tag: "Machine Learning · Learning project",
    title: "Multilayer Perceptron",
    subtitle: "Neural network from scratch",
    description:
      "A multilayer perceptron implemented from scratch: forward pass, backpropagation, and training on a dataset without any ML framework.",
    facts: [
      { label: "Layers", value: "input, hidden, output" },
      { label: "Training", value: "gradient descent + backpropagation" },
    ],
    formula: null,
    stack: ["JavaScript"],
    image: null,
    liveUrl: null,
    demoNote: "Live demo coming soon.",
    repoUrl: null,
  },
  {
    id: "geralt-world",
    accent: "game",
    tag: "Website · Fan project",
    title: "Geralt's World",
    subtitle: "The Witcher fan site",
    description:
      "A fan site about Geralt of Rivia and the world of The Witcher, featuring the character's story, locations, a bestiary, and the five witcher signs. Galleries and creature cards let visitors inspect images in detail.",
    facts: [
      { label: "Sections", value: "Geralt, the Witcher world, bestiary, signs" },
      {
        label: "Features",
        value: "gallery and creature image viewer",
      },
    ],
    formula: null,
    stack: ["PHP", "HTML", "CSS", "JavaScript"],
    image: geraltHome,
    screenshots: [geraltHome, geraltAbout, geraltGallery, geraltWorld],
    liveUrl: null,
    demoNote: "Public demo offline.",
    repoUrl: "https://github.com/guesti18921/geralt-fan-site",
  },
];

export const profileData = {
  name: "Artem Krasnoslobodtsev",
  role: "Aspiring fullstack developer",
  bio: "Studying IT and building working systems — from internal business tools to neural networks from scratch.",
  facts: [
    { label: "Stack", value: "PHP · Laravel · JavaScript · React · MySQL" },
    { label: "Status", value: "open to internships and first projects" },
  ],
};

export const contactInfo = {
  email: "guesti18921@gmail.com",
  telegram: "m1strell",
  github: "guesti18921",
};
