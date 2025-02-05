interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "NodeJS",
    description:
      "Mi ecosistema más fuerte para el desarrollo backend, utilizándolo desde 2018.",
    icon: "nodejs-skl",
  },
  {
    name: "NestJS",
    description:
      "Mi framework favorito para construir APIs escalables y eficientes en NodeJS.",
    icon: "nestjs-icon",
  },
  {
    name: "Angular",
    description:
      "He trabajado con Angular en proyectos de frontend desde 2022, incluyendo aplicaciones bancarias.",
    icon: "angular-icon",
  },
  {
    name: "ReactJS",
    description:
      "Utilicé React.js y Next.js en SupereaSV en 2021 y en proyectos freelance.",
    icon: "react-icon",
  },
];

export default hardSkills;
