export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface TechnologyCategory {
  title: string;
  description: string;
  items: Technology[];
  lang: 'es' | 'en';
}

export const technologyCategories: TechnologyCategory[] = [
  // Spanish Categories
  {
    title: "IA & Aprendizaje Automático",
    description: "Modelos de lenguaje, agentes autónomos y visión computacional.",
    lang: "es",
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
    lang: "es",
    items: [
      { name: "FastAPI", icon: "fastapi", color: "#009688" },
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Docker", icon: "docker", color: "#2496ED" }
    ]
  },
  {
    title: "Bases de Datos",
    description: "Almacenamiento relacional, no relacional y bases vectoriales.",
    lang: "es",
    items: [
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "Chroma / VectorDB", icon: "vectordb", color: "#FF9800" }
    ]
  },
  {
    title: "Frontend & Herramientas",
    description: "Desarrollo de interfaces de usuario y control de versiones.",
    lang: "es",
    items: [
      { name: "Astro", icon: "astro", color: "#FF5D01" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Git", icon: "git", color: "#F05032" }
    ]
  },

  // English Categories
  {
    title: "AI & Machine Learning",
    description: "Language models, autonomous agents, and computer vision.",
    lang: "en",
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
    description: "Development of robust services, APIs, and containerization.",
    lang: "en",
    items: [
      { name: "FastAPI", icon: "fastapi", color: "#009688" },
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Docker", icon: "docker", color: "#2496ED" }
    ]
  },
  {
    title: "Databases",
    description: "Relational, non-relational, and vector database storage.",
    lang: "en",
    items: [
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "Chroma / VectorDB", icon: "vectordb", color: "#FF9800" }
    ]
  },
  {
    title: "Frontend & Tools",
    description: "User interface development and version control.",
    lang: "en",
    items: [
      { name: "Astro", icon: "astro", color: "#FF5D01" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Git", icon: "git", color: "#F05032" }
    ]
  }
];
