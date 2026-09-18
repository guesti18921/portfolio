import iqnixPreview from "../assets/iqnix-resources.png";
import iqnixOverview from "../assets/iqnix-overview.png";
import iqnixDocument from "../assets/iqnix-document.png";
import geraltHome from "../assets/geralt-home.png";
import geraltSigns from "../assets/geralt-signs.png";
import geraltBestiary from "../assets/geralt-bestiary.png";

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
        { label: "Архитектура", value: "проекты, организованные по рабочим областям" },
        { label: "Роли", value: "admin, коммерческий директор, бухгалтер, HR" },
        { label: "Расчёт", value: "по количеству дней или по будням выбранного периода" },
        { label: "Документы", value: "НМА и коммерческие предложения: PDF, Excel, Word" },
      ],
      formula: null,
      stack: ["PHP 8.2", "Laravel 12", "MySQL 8", "React 19", "MUI 9"],
      image: iqnixPreview,
      screenshots: [iqnixPreview, iqnixOverview, iqnixDocument],
      liveUrl: null,
      demoNote: "Онлайн-версия приложения. Для работы требуется вход.",
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
      id: "game-character",
      accent: "game",
      tag: "Многостраничный сайт · Фан-проект",
      title: "Геральт из Ривии",
      subtitle: "Интерактивный путеводитель по миру Ведьмака",
      description:
        "Двуязычный адаптивный сайт о Геральте и вселенной «Ведьмака». В проекте собраны биография героя, интерактивная галерея, справочник ведьмачьих знаков, локации и бестиарий с подробными досье существ.",
      facts: [
        { label: "Разделы", value: "биография, галерея, мир Ведьмака и бестиарий" },
        { label: "Интерактив", value: "модальные изображения, карусели и раскрывающиеся досье" },
        { label: "Языки", value: "русский и английский" },
        { label: "Адаптивность", value: "компьютеры, планшеты и телефоны" },
      ],
      formula: null,
      stack: ["PHP", "HTML5", "CSS3", "JavaScript"],
      image: geraltHome,
      screenshots: [geraltHome, geraltSigns, geraltBestiary],
      liveUrl: "https://geralt-fan-site-production.up.railway.app/",
      demoNote: null,
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
        { label: "Architecture", value: "projects organized into workspaces" },
        { label: "Roles", value: "admin, commercial director, accountant, HR" },
        { label: "Calculation", value: "by day count or weekdays within a date range" },
        { label: "Documents", value: "cost reports and proposals: PDF, Excel, Word" },
      ],
      formula: null,
      stack: ["PHP 8.2", "Laravel 12", "MySQL 8", "React 19", "MUI 9"],
      image: iqnixPreview,
      screenshots: [iqnixPreview, iqnixOverview, iqnixDocument],
      liveUrl: null,
      demoNote: "The application is available online. Sign-in is required.",
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
      id: "game-character",
      accent: "game",
      tag: "Multi-page website · Fan project",
      title: "Geralt of Rivia",
      subtitle: "An interactive guide to the Witcher world",
      description:
        "A bilingual responsive website about Geralt and The Witcher universe. It brings together the character biography, an interactive gallery, a Witcher signs guide, locations, and a bestiary with detailed creature dossiers.",
      facts: [
        { label: "Sections", value: "biography, gallery, Witcher world, and bestiary" },
        { label: "Interaction", value: "image viewers, carousels, and expandable dossiers" },
        { label: "Languages", value: "Russian and English" },
        { label: "Responsive", value: "desktop, tablet, and mobile layouts" },
      ],
      formula: null,
      stack: ["PHP", "HTML5", "CSS3", "JavaScript"],
      image: geraltHome,
      screenshots: [geraltHome, geraltSigns, geraltBestiary],
      liveUrl: "https://geralt-fan-site-production.up.railway.app/",
      demoNote: null,
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
