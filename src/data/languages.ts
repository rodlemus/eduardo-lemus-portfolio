interface Language {
  name: string;
  level: string;
  description: string;
  show: boolean;
}

const languages: Language[] = [
  {
    name: "Español",
    level: "Nativo",
    description: "",
    show: true,
  },
  {
    name: "Inglés",
    level:
      "Básico: A nivel técnico puede comprender cualquier documentación técnica en inglés.",
    description:
      "A nivel técnico puede comprender cualquier documentación técnica en inglés",
    show: true,
  },
];

export default languages;
