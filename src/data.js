import profileImage from "../media/profile-linkedin.jpg"
import hardstackPreview from "../media/hardstack-preview.png"
import gustavoPreview from "../media/gustavo-encina-preview.webp"
import peakmindPreview from "../media/peakmind-preview.jpeg"
import cvUrl from "../Cv.pdf"

export const profileData = {
  name: "Mateo Moreira",
  role: "PM & Tech Lead en SenyDrop",
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
  preview: peakmindPreview,
  previewAlt: "Pantalla de ranking y lección completada de PeakMind",
  site: "https://peakmind.com.ar",
  repository: "https://github.com/matuqqq/landing-PeakMind",
}

export const projects = [
  {
    title: "HardStack",
    category: "Desarrollo web · Infraestructura",
    description: "Landing para un estudio que combina hardware, software, infraestructura y desarrollo web a medida.",
    tags: ["Desarrollo web", "Infraestructura", "Sistemas"],
    link: "https://hardstack.netlify.app/",
    label: "Visitar sitio",
    preview: hardstackPreview,
    previewAlt: "Logotipo de HardStack",
    tone: "violet",
  },
  {
    title: "Gustavo Encina",
    category: "Arte · Ciencia · Portfolio",
    description: "Portfolio de arte, ciencia y creatividad que reúne obras, trayectoria y colaboraciones.",
    tags: ["Dirección creativa", "Arte & ciencia", "Portfolio"],
    link: "https://gustavo-encina.vercel.app/",
    label: "Visitar portfolio",
    preview: gustavoPreview,
    previewAlt: "Retrato en blanco y negro de Gustavo Encina",
    tone: "orange",
  },
]

export const experiences = [
  {
    date: "Actualidad",
    title: "Project Manager & Tech Lead",
    company: "SenyDrop",
    location: "Buenos Aires · Argentina",
    description:
      "Lidero la planificación y entrega de productos digitales, alineando decisiones de producto, arquitectura y desarrollo para convertir ideas en software útil y mantenible.",
    tags: ["Producto", "Arquitectura", "Liderazgo", "Desarrollo"],
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
    date: "Feb 2026 — Sep 2026",
    title: "Frontend & Backend Developer",
    company: "SISIN Seguridad",
    location: "GBA Oeste · Híbrido",
    description:
      "Evolucioné de frontend a una participación full stack: desarrollé APIs y servicios backend para plataformas de seguridad, integré dispositivos IoT y rastreadores mediante TCP/UDP, serial y WebSockets, y conecté datos de GPS, geocercas, alertas y eventos en tiempo real. También construí interfaces web, desktop y mobile para administración, monitoreo, accesos y operaciones.",
    tags: ["Backend", "IoT", "TCP / UDP", "WebSockets", "Electron"],
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
