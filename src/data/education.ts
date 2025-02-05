interface Education {
  title: string;
  startDate: string;
  endDate?: string;
  school: string;
  location: string;
  description: string;
  currentUni: boolean;
}

const education: Education[] = [
  {
    title: "Técnico en Ingeniería en Sistemas Informáticos",
    startDate: "2024-01-01",
    endDate: "",
    school: "Universidad Don Bosco",
    location: "El Salvador",
    description:
      "Retomé mis estudios en el área de sistemas informáticos para fortalecer mis conocimientos en desarrollo de software y tecnologías emergentes.",
    currentUni: true,
  },
  {
    title: "Ingeniería en Sistemas Informáticos",
    startDate: "2018-01-01",
    endDate: "2019-12-31",
    school: "Universidad José Simeón Cañas (UCA)",
    location: "El Salvador",
    description:
      "Cursé 2 años en la carrera de Ingeniería en Sistemas Informáticos, adquiriendo conocimientos en desarrollo de software, bases de datos y arquitectura de sistemas antes de pausar mis estudios.",
    currentUni: false,
  },
  {
    title: "Técnico en Sistemas Informáticos",
    startDate: "2015-01-01",
    endDate: "2017-12-31",
    school: "Colegio Don Bosco",
    location: "El Salvador",
    description:
      "Formación técnica enfocada en desarrollo de software, redes y administración de sistemas informáticos.",
    currentUni: false,
  },
];

export default education;
