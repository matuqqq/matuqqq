import profileImage from "../media/profile-linkedin.jpg"
import cvUrl from "../Cv.pdf"

export const profileData = {
  name: "Mateo Moreira",
  role: "PM & Tech Lead en Senydrop",
  title: "Frontend Developer",
  location: "Ituzaingó, Buenos Aires",
  email: "mateoivanmoreira@gmail.com",
  phone: "+54 11 2374-1777",
  github: "https://github.com/matuqqq",
  linkedin: "https://www.linkedin.com/in/mateo-moreira-dev/",
  whatsapp: "https://api.whatsapp.com/send/?phone=541123741777&text=Hola+Mateo+estoy+interesado+en+tu+perfil%21&type=phone_number&app_absent=0",
  cv: cvUrl,
  profileImage,
  availability: "Abierto a nuevos desafíos",
}

export const proofPoints = [
  { value: "4", label: "medallas ONIET", detail: "2024 — 2025" },
  { value: "3+", label: "años creando", detail: "producto y software" },
  { value: "2", label: "roles actuales", detail: "desarrollo y docencia" },
  { value: "∞", label: "curiosidad", detail: "aprendizaje continuo" },
]

export const services = [
  {
    number: "01",
    title: "Frontend con intención",
    description: "Interfaces claras, responsive y mantenibles, con foco en arquitectura, accesibilidad y experiencia.",
    icon: "code",
  },
  {
    number: "02",
    title: "Producto de punta a punta",
    description: "Del primer flujo al deploy: APIs, datos, integraciones y decisiones técnicas que sostienen el producto.",
    icon: "layers",
  },
  {
    number: "03",
    title: "Liderazgo que comparte",
    description: "Organizo el trabajo, acompaño equipos y enseño programación con herramientas de entorno real.",
    icon: "users",
  },
]

export const featuredProject = {
  title: "PeakMind",
  category: "EdTech · Producto digital",
  description:
    "Aplicación web y móvil para aprendizaje y productividad. Lideré el SDLC y construí soluciones frontend escalables con React y TypeScript, combinando gamificación y psicología cognitiva.",
  role: "Project Manager & Líder de Desarrollo",
  period: "Mar 2025 — Ene 2026",
  tags: ["React", "TypeScript", "React Native", "Producto"],
  awards: ["Oro · ONIET 2024", "Oro · SysApp 2025", "Impacto Social · Expo Proyecto"],
  site: "https://peakmind.com.ar",
  repository: "https://github.com/matuqqq/landing-PeakMind",
}

export const projects = [
  {
    title: "Security Focus",
    category: "Gestión y seguridad",
    description: "Sistema de administración para barrios cerrados, pensado para simplificar accesos y operaciones diarias.",
    tags: ["Node.js", "React", "Electron", "Prisma"],
    link: "https://security-focus.netlify.app",
    label: "Visitar proyecto",
    tone: "blue",
  },
  {
    title: "HardShop",
    category: "E-commerce de escritorio",
    description: "E-commerce con panel administrativo para inventario, ventas, proveedores y pagos con Mercado Pago.",
    tags: ["React", "Electron", "MySQL", "Prisma"],
    link: "https://hardshop.netlify.app",
    label: "Visitar proyecto",
    tone: "lime",
  },
  {
    title: "Freeflix.NET.WinForms",
    category: "Aplicación desktop",
    description: "Aplicación de escritorio para gestionar y visualizar contenido multimedia usando el ecosistema .NET.",
    tags: ["C#", ".NET", "WinForms"],
    link: "https://github.com/matuqqq/Freeflix.NET.WinForms",
    label: "Ver repositorio",
    tone: "violet",
  },
  {
    title: "DBFtoPDF",
    category: "Automatización",
    description: "Herramienta en Python que automatiza la creación de libros diarios contables desde bases DBF.",
    tags: ["Python", "Automatización"],
    link: "https://github.com/matuqqq/DBFtoPDF",
    label: "Ver repositorio",
    tone: "orange",
  },
]

export const experiences = [
  {
    date: "Feb 2026 — Actualidad",
    title: "Frontend Developer Junior",
    company: "SISIN Seguridad",
    location: "GBA Oeste · Híbrido",
    description:
      "Desarrollo aplicaciones de escritorio multiplataforma con Electron y paneles de administración y tableros de control con React.js. Colaboro en infraestructura web segura y paneles de monitoreo responsive.",
    tags: ["Electron", "React.js", "Monitoreo", "Infraestructura"],
  },
  {
    date: "Mar 2026 — Actualidad",
    title: "Profesor de Programación",
    company: "Instituto Técnico Industrial San Judas Tadeo",
    location: "Ituzaingó · Presencial",
    description:
      "Dicto programación a estudiantes técnicos de 6.º año y creo contenido pedagógico sobre JavaScript avanzado, arquitectura de software, Git/GitHub, Docker y servidores HTTP.",
    tags: ["Docencia", "JavaScript", "Git", "Docker"],
  },
  {
    date: "Mar 2025 — Ene 2026",
    title: "Project Manager & Líder de Desarrollo",
    company: "PeakMind",
    location: "Remoto · Argentina",
    description:
      "Lideré el ciclo de vida completo del desarrollo de software para aplicaciones web y móviles. Construí frontend escalable con React y TypeScript y apliqué gamificación para mejorar el compromiso y la retención.",
    tags: ["SDLC", "React", "TypeScript", "Producto"],
  },
  {
    date: "Ene 2023 — Dic 2025",
    title: "Desarrollador Full Stack",
    company: "HardStack Freelance",
    location: "Remoto · Argentina",
    description:
      "Entregué soluciones de software de ciclo completo: diseño, desarrollo, despliegue y mantenimiento. Construí APIs RESTful y servicios backend con Node.js, Express y PostgreSQL.",
    tags: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
]

export const education = [
  {
    date: "2025 — Actualidad",
    title: "Ingeniería en Informática",
    company: "Universidad Nacional de La Matanza",
    detail: "En curso · Argentina",
  },
  {
    date: "Feb 2026 — Actualidad",
    title: "Profesorado de Nivel Medio · Educación Tecnológica",
    company: "Universidad FASTA",
    detail: "En curso · Formación pedagógica y didáctica",
  },
  {
    date: "2019 — 2025",
    title: "Técnico en Informática · Desarrollador de Software",
    company: "Inst. Técnico Industrial San Judas Tadeo",
    detail: "Argentina",
  },
]

export const recognitions = [
  { year: "2025", title: "Medalla de Oro · SysApp", detail: "ONIET · Universidad Blas Pascal" },
  { year: "2025", title: "Medalla de Plata · Desarrollo de sistemas", detail: "ONIET · Universidad Blas Pascal" },
  { year: "2025", title: "2.º puesto · InnovaTech", detail: "Hackatón · Feria Provincial de Ciencias" },
  { year: "2024", title: "Dos medallas de Oro", detail: "SysApp y Desarrollo de sistemas · ONIET" },
]

export const skillGroups = [
  {
    title: "Frontend",
    caption: "Experiencias de usuario",
    skills: ["React.js", "React Native", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & datos",
    caption: "Sistemas que sostienen",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MySQL", "Prisma"],
  },
  {
    title: "Delivery & plataforma",
    caption: "Del código a producción",
    skills: ["Git / GitHub", "Docker", "Electron", "C# / .NET", "Python", "Linux", "Scrum"],
  },
]

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Competencia profesional completa" },
]
