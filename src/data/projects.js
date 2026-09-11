export const projects = [
  {
    id: "iqnix-ptm",
    accent: "business",
    tag: "Внутренняя система · Fullstack",
    title: "IQNIX PTM",
    subtitle: "Project Total Manager",
    description:
      "Система для расчёта стоимости IT-проектов: считает себестоимость разработки, стоимость нематериального актива и итоговую цену коммерческого предложения. Учитывает сотрудников, исполнителей, оборудование и субподрядчиков, скрывает маржинальность по ролям и генерирует готовые документы.",
    facts: [
      { label: "Роли", value: "admin, коммерческий директор, бухгалтер, HR" },
      { label: "Расчёт", value: "упрощённый и по производственному календарю" },
      { label: "Документы", value: "PDF, Excel, Word — с логотипом и ТЗ" },
    ],
    formula: "total = cost + (cost × margin / 100)",
    stack: ["PHP", "Laravel", "MySQL", "React", "MUI"],
    demoUrl: null,
    demoNote: "Внутренний проект компании — публичное демо не разворачивается по соображениям безопасности данных.",
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
    demoUrl: null,
    demoNote: "Демо появится позже.",
    repoUrl: null,
  },
  {
    id: "game-character",
    accent: "game",
    tag: "Веб-сайт · Фан-проект",
    title: "Сайт персонажа игры",
    subtitle: "Character showcase",
    description:
      "Тематический сайт, посвящённый персонажу видеоигры: история, характеристики и визуальное оформление в стиле самой игры.",
    facts: [{ label: "Формат", value: "одностраничный сайт" }],
    formula: null,
    stack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: null,
    demoNote: "Демо появится позже.",
    repoUrl: null,
  },
];

export const profile = {
  name: "Артём Краснослободцев",
  role: "Начинающий fullstack-разработчик",
  bio: "Учусь на IT-специальности и создаю рабочие системы — от внутренних бизнес-инструментов до нейросетей с нуля.",
  facts: [
    { label: "Стек", value: "PHP · Laravel · JavaScript · React · MySQL" },
    { label: "Статус", value: "открыт к стажировкам и первым проектам" },
  ],
  email: "guesti18921@gmail.com",
  telegram: "m1strell",
};