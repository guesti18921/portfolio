import iqnixPreview from "../assets/iqnix-resources.png";
import iqnixOverview from "../assets/iqnix-overview.png";

export const uiText = {
  ru: {
    worksTitle: "Работы",
    contactTitle: "Связаться",
    emailLabel: "Написать на почту",
    telegramLabel: "Написать в Telegram",
    repoLabel: "Открыть репозиторий",
    liveLabel: "Открыть проект",
    detailsLabel: "Подробнее о проекте",
    openProjectLabel: "Открыть живое демо",
    backLabel: "Все работы",
    notFoundLabel: "Проект не найден.",
  },
  en: {
    worksTitle: "Selected work",
    contactTitle: "Get in touch",
    emailLabel: "Send an email",
    telegramLabel: "Message on Telegram",
    repoLabel: "View repository",
    liveLabel: "Open project",
    detailsLabel: "View project details",
    openProjectLabel: "Open live demo",
    backLabel: "All work",
    notFoundLabel: "Project not found.",
  },
};

export const projectsData = {
  ru: [
    {
      id: "iqnix-ptm",
      accent: "business",
      tag: "Внутренняя система · Fullstack",
      title: "IQNIX PTM",
      subtitle: "Project Total Manager",
      description:
                 "Веб-приложение для планирования стоимости IT-проектов: работы сотрудников и подрядчиков, оборудования и услуг субподрядчиков. Рассчитывает себестоимость, наценку и итоговую стоимость с учётом заданного налога. Формирует документы НМА и коммерческие предложения в PDF, Excel и Word.",
      facts: [
  {
    label: "Организация",
    value: "проекты, объединённые в рабочие области",
  },
  {
    label: "Роли",
    value: "администратор, коммерческий директор, бухгалтер, кадровик",
  },
  {
    label: "Расчёт",
    value: "по количеству дней или по будням выбранного периода",
  },
  {
    label: "Документы",
    value: "НМА и коммерческие предложения: PDF, Excel, Word",
  },
],
      formula: "total = cost + (cost × margin / 100)",
      stack: ["PHP 8.2", "Laravel 12", "MySQL 8", "React 19", "MUI 9"],
      image: iqnixPreview,
      screenshots: [iqnixPreview, iqnixOverview],
      liveUrl: "https://iqnix.up.railway.app/",
      demoNote: null,
      repoUrl: null,
    },
    {
      id: "perceptron",
      accent: "ai",
      tag: "Machine Learning · Учебный проект",
      title: "Многослойный перцептрон",
      subtitle: "Нейросеть с нуля",
      description:
        "Реализация многослойного перцептрона: прямое распространение, обратное распространение ошибки и обучение на наборе данных без готовых ML-фреймворков.",
      facts: [
        { label: "Слои", value: "входной, скрытые, выходной" },
        { label: "Обучение", value: "градиентный спуск + backpropagation" },
      ],
      formula: null,
      stack: ["JavaScript"],
      image: null,
      liveUrl: null,
      demoNote: "Демо появится позже.",
      repoUrl: null,
    },
    {
      id: "geralt-world",
      accent: "game",
      tag: "Веб-сайт · Фан-проект",
      title: "Мир Геральта",
      subtitle: "Фан-сайт по вселенной «Ведьмака»",
      description:
        "Тематический сайт о Геральте из Ривии и мире «Ведьмака»: история персонажа, локации, бестиарий и пять ведьмачьих знаков. Галерея и карточки существ позволяют рассмотреть изображения подробнее.",
      facts: [
        { label: "Разделы", value: "Геральт, мир Ведьмака, бестиарий, знаки" },
        { label: "Возможности", value: "галерея и просмотр изображений существ" },
      ],
      formula: null,
      stack: ["PHP", "HTML", "CSS", "JavaScript"],
      image: null,
      liveUrl: "https://geralt-world.up.railway.app/",
      demoNote: "Геральт из Ривии · Мир Ведьмака",
      repoUrl: "https://github.com/guesti18921/geralt-fan-site",
    },
  ],
  en: [
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
      image: iqnixPreview,
      screenshots: [iqnixPreview, iqnixOverview],
      liveUrl: "https://iqnix.up.railway.app/",
      demoNote: null,
      repoUrl: null,
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
        { label: "Features", value: "gallery and creature image viewer" },
      ],
      formula: null,
      stack: ["PHP", "HTML", "CSS", "JavaScript"],
      image: null,
      liveUrl: "https://geralt-world.up.railway.app/",
      demoNote: "Geralt of Rivia · The Witcher world",
      repoUrl: "https://github.com/guesti18921/geralt-fan-site",
    },
  ],
};

export const profileData = {
  ru: {
    name: "Артём Краснослободцев",
    role: "Начинающий fullstack-разработчик",
    bio: "Учусь на IT-специальности и создаю рабочие системы — от внутренних бизнес-инструментов до нейросетей с нуля.",
    facts: [
      { label: "Стек", value: "PHP · Laravel · JavaScript · React · MySQL" },
      { label: "Статус", value: "открыт к стажировкам и первым проектам" },
    ],
  },
  en: {
    name: "Artem Krasnoslobodtsev",
    role: "Aspiring fullstack developer",
    bio: "Studying IT and building working systems — from internal business tools to neural networks from scratch.",
    facts: [
      { label: "Stack", value: "PHP · Laravel · JavaScript · React · MySQL" },
      { label: "Status", value: "open to internships and first projects" },
    ],
  },
};

export const contactInfo = {
  email: "guesti18921@gmail.com",
  telegram: "m1strell",
  github: "guesti18921",
};
