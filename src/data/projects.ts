export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export const projects: Project[] = [
  {
    title: "Emova",
    description: "Sistema de Apoyo al Análisis Emocional en Pruebas de Usabilidad, el sistema permite capturar y analizar las reacciones emocionales espontáneas de los usuarios durante la interacción con sitios web, complementando las técnicas tradicionales de usabilidad como encuestas y entrevistas.",
    image: "/projects/emova.png",
    tags: ["Python", "Pytorch", "CNN", "FastAPI", "MongoDB", "OpenCV", "Google Cloud", "Docker"],
    githubUrl: "https://github.com/soyisuss/emova",
    status: "completed"
  },
  {
    title: "Ciceron",
    description: "Sistema RAG Agentico para el apoyo en la creacion de discursos y oratoria, permite crear discursos o mejorarlos basado en información de expertos mediante un MCP",
    tags: ["Python", "MCP", "Go", "Google Cloud", "Agente", "Qdrant", "Embeddings", "Docker"],
    githubUrl: "https://github.com/soyisuss/ciceron",
    status: "in-progress"
  },
];
