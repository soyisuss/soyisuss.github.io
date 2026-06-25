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
    image: "/projects/emova.png",
    tags: ["Python", "Pytorch", "CNN", "FastAPI", "MongoDB", "OpenCV"],
    githubUrl: "https://github.com/soyisuss/emova",
    status: "completed",
    lang: "es"
  },
  {
    title: "Ciceron",
    description: "Sistema RAG Agentico para el apoyo en la creación de discursos y oratoria, permite crearlos o mejorarlos basado en información de expertos mediante un MCP. Presente en todo el flujo, desde la extración de información, vecotorización y consumo mediante un Agente.",
    tags: ["Python", "MCP", "Go", "Google Cloud", "Agente", "Qdrant", "Embeddings", "Docker"],
    githubUrl: "https://github.com/soyisuss/ciceron",
    status: "in-progress",
    lang: "es"
  },

  // English Projects
  {
    title: "Emova",
    description: "Agentic RAG System for supporting speechwriting and public speaking. It allows creating or improving them based on expert information through an MCP. Present throughout the entire pipeline, from information extraction and vectorization to consumption by an Agent.",
    image: "/projects/emova.png",
    tags: ["Python", "Pytorch", "CNN", "FastAPI", "MongoDB", "OpenCV"],
    githubUrl: "https://github.com/soyisuss/emova",
    status: "completed",
    lang: "en"
  },
  {
    title: "Ciceron",
    description: "Intelligent agent capable of translating natural language queries into executable SQL code, automatically plotting results, and performing quantitative database analysis.",
    tags: ["Python", "MCP", "Go", "Google Cloud", "Agent", "Qdrant", "Embeddings", "Docker"],
    githubUrl: "https://github.com/soyisuss",
    status: "in-progress",
    lang: "en"
  }
];
