/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
  title: string;
  startDate: string;
  endDate?: string;
  company: string;
  location: string;
  description: string;
  goals: string[];
  currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
  {
    title: "Servicio Al Cliente & Software Innovador",
    startDate: "2023-01-01",
    company: "Call Center (Empresa actual)",
    location: "El Salvador",
    description:
      "Aunque mi rol principal no es de desarrollador, identifiqué una problemática en el departamento y diseñé e implementé un software para optimizar procesos, el cual sigue en uso y ha mejorado la eficiencia del equipo.",
    goals: [
      "Detecté una ineficiencia en los procesos internos del departamento.",
      "Diseñé y desarrollé un software para optimizar el trabajo del equipo.",
      "Implementé la solución y capacité al equipo en su uso, logrando mejoras en la productividad.",
    ],
    currentJob: true,
  },
  {
    title: "Freelance Software Developer",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    company: "Proyectos Freelance",
    location: "Remoto",
    description:
      "Desarrollé soluciones personalizadas para clientes en el sector bancario y empresarial, utilizando Angular y React. También participé en proyectos pequeños implementando soluciones con Odoo.",
    goals: [
      "Desarrollé aplicaciones web en Angular y React para una empresa de banca en línea.",
      "Colaboré en la implementación de soluciones con Odoo para automatizar procesos empresariales.",
      "Brindé soporte y mantenimiento a las aplicaciones desarrolladas.",
    ],
    currentJob: false,
  },
  {
    title: "Software Developer",
    startDate: "2021-01-01",
    endDate: "2021-12-31",
    company: "SupereaSV",
    location: "El Salvador",
    description:
      "Mantenimiento y mejora del sitio web de SupereaSV utilizando React.js y Next.js. Además, desarrollé APIs internas en NestJS para mejorar la eficiencia de las operaciones.",
    goals: [
      "Brindé mantenimiento y optimización al sitio web utilizando React.js y Next.js.",
      "Desarrollé APIs internas con NestJS para mejorar la comunicación entre servicios.",
      "Colaboré con el equipo para implementar nuevas funcionalidades en la plataforma.",
    ],
    currentJob: false,
  },
];

export default workExperience;
