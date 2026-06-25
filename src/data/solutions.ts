export interface Solution {
  title: string;
  description: string;
  icon: 'ai' | 'rag' | 'vision' | 'mlops';
  lang: 'es' | 'en';
}

export const solutions: Solution[] = [
  // Spanish Solutions
  {
    title: "Agentes de IA y Automatización",
    description: "Diseño de flujos de trabajo autónomos basados en agentes que toman decisiones dinámicas y ejecutan tareas complejas de principio a fin.",
    icon: "ai",
    lang: "es"
  },
  {
    title: "RAG y Búsqueda Semántica",
    description: "Conexión segura de modelos de lenguaje con bases de conocimiento privadas para responder consultas con alta precisión y contexto.",
    icon: "rag",
    lang: "es"
  },
  {
    title: "Visión Artificial",
    description: "Procesamiento inteligente de imágenes, detección de objetos y extracción estructurada de información visual.",
    icon: "vision",
    lang: "es"
  },
  {
    title: "Despliegue y MLOps",
    description: "Puesta en producción y empaquetado de modelos sobre infraestructura en la nube, asegurando endpoints estables y escalables.",
    icon: "mlops",
    lang: "es"
  },

  // English Solutions
  {
    title: "AI Agents & Automation",
    description: "Design of autonomous agent-based workflows that make dynamic decisions and execute complex tasks from start to finish.",
    icon: "ai",
    lang: "en"
  },
  {
    title: "RAG & Semantic Search",
    description: "Secure connection of language models with private knowledge bases to answer queries with high precision and context.",
    icon: "rag",
    lang: "en"
  },
  {
    title: "Computer Vision",
    description: "Intelligent image processing, object detection, and structured visual information extraction.",
    icon: "vision",
    lang: "en"
  },
  {
    title: "Deployment & MLOps",
    description: "Production deployment and packaging of models on cloud infrastructure, ensuring stable and scalable endpoints.",
    icon: "mlops",
    lang: "en"
  }
];
