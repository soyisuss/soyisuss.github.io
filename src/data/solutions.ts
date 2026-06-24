export interface Solution {
  title: string;
  description: string;
  icon: 'ai' | 'rag' | 'vision' | 'mlops';
}

export const solutions: Solution[] = [
  {
    title: "Agentes de IA y Automatización",
    description: "Diseño de flujos de trabajo autónomos basados en agentes que toman decisiones dinámicas y ejecutan tareas complejas de principio a fin.",
    icon: "ai"
  },
  {
    title: "RAG y Búsqueda Semántica",
    description: "Conexión segura de modelos de lenguaje con bases de conocimiento privadas para responder consultas con alta precisión y contexto.",
    icon: "rag"
  },
  {
    title: "Visión Artificial",
    description: "Procesamiento inteligente de imágenes, detección de objetos y extracción estructurada de información visual.",
    icon: "vision"
  },
  {
    title: "Despliegue y MLOps",
    description: "Puesta en producción y empaquetado de modelos sobre infraestructura en la nube, asegurando endpoints estables y escalables.",
    icon: "mlops"
  }
];
