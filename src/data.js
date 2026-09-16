import hardstackPreview from "../media/hardstack-preview.png"
import gustavoPreview from "../media/gustavo-encina-preview.webp"
import peakmindPreview from "../media/peakmind-preview.jpeg"
import cvUrl from "../Cv.pdf"

export const profileData = {
  name: "Mateo Moreira",
  location: "Ituzaingó, Buenos Aires",
  email: "mateoivanmoreira@gmail.com",
  phone: "+54 11 2374-1777",
  github: "https://github.com/matuqqq",
  linkedin: "https://www.linkedin.com/in/mateo-moreira-dev/",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=541123741777&text=Hola+Mateo+estoy+interesado+en+tu+perfil%21&type=phone_number&app_absent=0",
  cv: cvUrl,
  availability: "Disponible para nuevos desafíos",
  summary:
    "Conecto producto, arquitectura y equipos para convertir problemas reales en software que se puede usar, medir y mantener: web, mobile, desktop y sistemas en tiempo real.",
}

export const proofPoints = [
  { value: "4+", label: "reconocimientos", detail: "ONIET · Expo · InnovaTech" },
  { value: "3+", label: "años construyendo", detail: "producto y software" },
  { value: "3", label: "superficies", detail: "web · mobile · desktop" },
  { value: "∞", label: "curiosidad", detail: "aprendizaje continuo" },
]

export const services = [
  {
    number: "01",
    title: "Producto que llega a puerto",
    description:
      "Ordeno problemas, priorizo entregas y alineo producto, arquitectura y equipo para que las ideas lleguen a una versión útil.",
    icon: "layers",
  },
  {
    number: "02",
    title: "Full stack sin silos",
    description:
      "Construyo interfaces, APIs, datos e integraciones entendiendo el recorrido completo y el costo real de cada decisión.",
    icon: "code",
  },
  {
    number: "03",
    title: "Tiempo real con contexto",
    description:
      "Trabajo con IoT, GPS, mapas, protocolos y eventos en vivo cuando el sistema tiene que reflejar lo que pasa afuera.",
    icon: "users",
  },
]

export const featuredProject = {
  title: "PeakMind",
  category: "EdTech · Producto digital",
  description:
    "Aplicación web y móvil para aprendizaje y productividad. Lideré el ciclo completo y construí soluciones frontend escalables con React y TypeScript, combinando gamificación y psicología cognitiva.",
  role: "Project Manager & Líder de Desarrollo",
  period: "Mar 2025 — Ene 2026",
  tags: ["React", "TypeScript", "React Native", "SDLC"],
  awards: ["Oro · ONIET 2024", "Oro · SysApp 2025", "Impacto Social · Expo Proyecto"],
  preview: peakmindPreview,
  previewAlt: "Pantalla de ranking y lección completada de PeakMind",
  site: "https://peakmind.com.ar",
  repository: "https://github.com/matuqqq/landing-PeakMind",
}

export const projects = [
  {
    title: "SenyDrop",
    category: "Empresa actual · Producto & operaciones",
    description:
      "Plataforma de comercio y logística con órdenes, stock, carriers, partners e integraciones. Coordino producto y desarrollo entre API, dashboard, jobs y datos.",
    tags: ["TypeScript", "Fastify", "Prisma", "MySQL", "Redis"],
    label: "Empresa actual",
    tone: "signal",
    mark: "SENY / DROP",
    visualLabel: "PRODUCT · OPS",
    visualDetail: "API · dashboard · workers",
  },
  {
    title: "HardStack",
    category: "Consultora · Web & sistemas",
    description:
      "Consultora de software que cofundé con dos amigos para entregar soluciones web, infraestructura y sistemas a medida.",
    tags: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
    link: "https://hardstack.netlify.app/",
    label: "Visitar sitio",
    preview: hardstackPreview,
    previewAlt: "Logotipo de HardStack",
    tone: "visual",
    imageWidth: 279,
    imageHeight: 279,
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
    tone: "visual",
    imageWidth: 980,
    imageHeight: 675,
  },
]

export const experiences = [
  {
    date: "Actualidad",
    title: "Project Manager & Tech Lead",
    company: "SenyDrop",
    location: "Buenos Aires · Argentina",
    description:
      "Lidero la planificación y entrega de productos digitales, alineando decisiones de producto, arquitectura y desarrollo para convertir operaciones complejas en software útil y mantenible.",
    tags: ["Producto", "Arquitectura", "Liderazgo", "TypeScript"],
  },
  {
    date: "Mar 2026 — Actualidad",
    title: "Profesor de Programación",
    company: "Instituto Técnico Industrial San Judas Tadeo",
    location: "Ituzaingó · Presencial",
    description:
      "Dicto programación a estudiantes técnicos de 6.º año y creo contenido sobre JavaScript avanzado, arquitectura de software, Git/GitHub, Docker y servidores HTTP.",
    tags: ["Docencia", "JavaScript", "Git", "Docker"],
  },
  {
    date: "Feb 2026 — Sep 2026",
    title: "Frontend & Backend Developer",
    company: "SISIN Seguridad",
    location: "GBA Oeste · Híbrido",
    description:
      "Como parte de un servicio profesional para SISIN Seguridad, desarrollé APIs y servicios para plataformas de seguridad, integré dispositivos IoT y rastreadores mediante TCP/UDP, serial y WebSockets, y conecté GPS, geocercas, alertas y eventos en tiempo real. También construí interfaces web, desktop y mobile.",
    tags: ["Backend", "IoT", "TCP / UDP", "WebSockets", "Electron"],
  },
  {
    date: "Mar 2025 — Ene 2026",
    title: "Project Manager & Líder de Desarrollo",
    company: "PeakMind",
    location: "Remoto · Argentina",
    description:
      "Lideré el ciclo de vida completo del desarrollo de software para aplicaciones web y móviles. Construí frontend escalable con React y TypeScript y apliqué gamificación para mejorar el compromiso.",
    tags: ["SDLC", "React", "TypeScript", "Producto"],
  },
  {
    date: "Ene 2023 — Dic 2025",
    title: "Desarrollador Full Stack & Socio",
    company: "HardStack",
    location: "Remoto · Argentina",
    description:
      "Junto a dos amigos, cofundé una consultora desde la que diseñamos y entregamos soluciones de ciclo completo: desarrollo web, infraestructura, APIs RESTful y servicios backend con Node.js, Express y PostgreSQL.",
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
    title: "Producto & liderazgo",
    caption: "Del problema a la entrega",
    skills: ["Product thinking", "SDLC", "Planificación", "Arquitectura", "Tech leadership", "Mentoría", "Scrum"],
  },
  {
    title: "Frontend & mobile",
    caption: "Interfaces que explican",
    skills: ["React", "React Native", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Accesibilidad"],
  },
  {
    title: "Backend & datos",
    caption: "Sistemas que sostienen",
    skills: ["Node.js", "Express", "Fastify", "NestJS", "REST APIs", "Prisma", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Sistemas & plataforma",
    caption: "Cuando el software toca el mundo",
    skills: ["WebSockets", "Socket.IO", "TCP / UDP", "IoT", "GPS & geofences", "Electron", "Docker", "Keycloak", "Playwright", "Leaflet", "Java / Spring Boot", "Python"],
  },
]

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Competencia profesional completa" },
]
