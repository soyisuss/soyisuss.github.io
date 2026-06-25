export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  lang: 'es' | 'en';
}

export const projects: Project[] = [
  // Spanish Projects
  {
    title: "Emova",
    description: "Sistema de Apoyo al Análisis Emocional en Pruebas de Usabilidad, el sistema permite capturar y analizar las reacciones emocionales espontáneas de los usuarios durante la interacción con sitios web, complementando las técnicas tradicionales de usabilidad como encuestas y entrevistas.",
    tags: ["Python", "Pytorch", "CNN", "FastAPI", "MongoDB", "OpenCV"],
    githubUrl: "https://github.com/soyisuss/emova",
    status: "completed",
    lang: "es"
  },
  {
    title: "Agente de Análisis de Datos SQL",
    description: "Agente inteligente capaz de traducir consultas en lenguaje natural a código SQL ejecutable, graficar resultados automáticamente y realizar un análisis cuantitativo de la base de datos.",
    tags: ["Python", "LlamaIndex", "PostgreSQL", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/soyisuss",
    status: "in-progress",
    lang: "es"
  },
  
  // English Projects
  {
    title: "Emova",
    description: "Emotional Analysis Support System in Usability Testing. The system captures and analyzes spontaneous emotional reactions of users during website interactions, complementing traditional usability techniques such as surveys and interviews.",
    tags: ["Python", "Pytorch", "CNN", "FastAPI", "MongoDB", "OpenCV"],
    githubUrl: "https://github.com/soyisuss/emova",
    status: "completed",
    lang: "en"
  },
  {
    title: "SQL Data Analysis Agent",
    description: "Intelligent agent capable of translating natural language queries into executable SQL code, automatically plotting results, and performing quantitative database analysis.",
    tags: ["Python", "LlamaIndex", "PostgreSQL", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/soyisuss",
    status: "in-progress",
    lang: "en"
  }
];
