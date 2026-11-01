export const personalInfo = {
  name: "Rodrigo",
  role: "Ingeniero en Sistemas",
  subtitle: "Construyo software y soluciones para la web.",
  description:
    "Especializado en desarrollo full-stack, arquitecturas de software escalables, diseño de bases de datos relacionales y soluciones tecnológicas de alto rendimiento.",
  location: "El Salvador",
  experienceYears: "+2",
  completedProjects: "15+",
  satisfiedClients: "100%",
  codeSnippet: `const desarrollador = {
  nombre: "Rodrigo",
  titulo: "Ingeniero en Sistemas",
  stack: ["React", "Node.js", "PostgreSQL", "Supabase"],
  pasion: "Crear software eficiente y escalable",
  disponible: true
};`,
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:tu-correo@example.com"
  }
};

export const techIcons = [
  { name: "HTML5", symbol: "5", bg: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { name: "CSS3", symbol: "3", bg: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "JavaScript", symbol: "JS", bg: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  { name: "TypeScript", symbol: "TS", bg: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
  { name: "React", symbol: "⚛", bg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  { name: "Node.js", symbol: "Node", bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  { name: "PostgreSQL", symbol: "SQL", bg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" }
];

export const skillsData = [
  { name: "JavaScript / ES6+", percentage: 92 },
  { name: "React.js", percentage: 90 },
  { name: "Node.js & Express", percentage: 85 },
  { name: "Bases de Datos (PostgreSQL / MySQL)", percentage: 88 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "Arquitectura RESTful & APIs", percentage: 86 }
];

export const projectsData = [
  {
    id: 1,
    number: "01",
    title: "MiTiendita POS & Control de Inventario",
    subtitle: "Sistema de ventas en tiempo real, arqueos de caja y control de inventario.",
    category: "Full-Stack Web App",
    tags: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    imageGradient: "from-purple-900/60 via-indigo-900/40 to-zinc-950",
    repoUrl: "https://github.com",
    liveUrl: "https://ejemplo-mitiendita.vercel.app"
  },
  {
    id: 2,
    number: "02",
    title: "API Modular de Gestión y Facturación",
    subtitle: "Servicio backend desacoplado con autenticación segura y persistencia relacional.",
    category: "Backend & Base de Datos",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    imageGradient: "from-blue-900/60 via-sky-900/40 to-zinc-950",
    repoUrl: "https://github.com",
    liveUrl: null
  },
  {
    id: 3,
    number: "03",
    title: "Panel Analítico & Métricas en Vivo",
    subtitle: "Dashboard administrativo para supervisión de ventas, cierres y reportes visuales.",
    category: "Frontend Architecture",
    tags: ["React", "Tailwind CSS", "REST API"],
    imageGradient: "from-emerald-900/60 via-teal-900/40 to-zinc-950",
    repoUrl: "https://github.com",
    liveUrl: "https://ejemplo-dashboard.vercel.app"
  }
];

export const testimonialData = {
  quote: "Rodrigo demuestra un nivel técnico sólido y una gran capacidad para resolver problemas complejos de backend y frontend con arquitectura ordenada y entregas a tiempo.",
  author: "Ingeniería de Software",
  role: "Revisión de Código & Calidad Técnica"
};