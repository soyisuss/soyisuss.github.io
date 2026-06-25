export interface Technology {
  name: string;
  icon: string; // Identifier for the SVG icon
  color: string; // Glow color on hover
}

export interface TechnologyCategory {
  title: string;
  description: string;
  items: Technology[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    title: "IA & Aprendizaje Automático",
    description: "Modelos de lenguaje, agentes autónomos y visión computacional.",
    items: [
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "PyTorch", icon: "pytorch", color: "#EE4C2C" },
      { name: "LangChain", icon: "langchain", color: "#13C2C2" },
      { name: "LlamaIndex", icon: "llamaindex", color: "#FF5733" },
      { name: "OpenCV", icon: "opencv", color: "#5C3EE6" },
      { name: "Pandas", icon: "pandas", color: "#150458" }
    ]
  },
  {
    title: "Backend & APIs",
    description: "Desarrollo de servicios robustos, APIs y empaquetamiento.",
    items: [
      { name: "FastAPI", icon: "fastapi", color: "#009688" },
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Docker", icon: "docker", color: "#2496ED" }
    ]
  },
  {
    title: "Bases de Datos",
    description: "Almacenamiento relacional, no relacional y bases vectoriales.",
    items: [
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "Chroma / VectorDB", icon: "vectordb", color: "#FF9800" }
    ]
  },
  {
    title: "Frontend & Herramientas",
    description: "Desarrollo de interfaces de usuario y control de versiones.",
    items: [
      { name: "Astro", icon: "astro", color: "#FF5D01" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Git", icon: "git", color: "#F05032" }
    ]
  }
];
