import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaUser,
  FaProjectDiagram,
  FaNetworkWired,
  FaNodeJs,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaReact
} from "react-icons/fa"
import { SiCsharp, SiJavascript, SiMysql, SiPrisma, SiExpress, SiArduino, SiPython, SiElectron } from "react-icons/si"

export const profileData = {
  name: "Mateo Moreira",
  role: "Full Stack Developer",
  education: "Técnico Informático & Estudiante de Ingeniería",
  email: "mateoivanmoreira@gmail.com",
  phone: "+54 11 2374-1777",
  whatsapp: "https://api.whatsapp.com/send/?phone=541123741777&text=Hola+Mateo+estoy+interesado+en+tu+perfil%21&type=phone_number&app_absent=0",
  birthDate: "3 de Enero, 2007",
  location: "Ituzaingó, Buenos Aires, Argentina",
  github: "https://github.com/matuqqq",
  linkedin: "https://www.linkedin.com/in/mateo-moreira-6a5b4b2ba/",
  cv: "https://drive.google.com/file/d/1FoqOkRQsAekIT54XjaxwDxqdI3HmUFCC/view?usp=sharing",
  profileImage: "https://i.imgur.com/YtCh020.png"
}

export const aboutMe = [
  "Soy Desarrollador con una sólida base en Frontend y en constante formación en Backend. Mi perfil es autodidacta y me motiva el aprendizaje continuo, lo cual me permite estar al día con las últimas tecnologías y mejores prácticas del desarrollo web.",
]

export const softSkills = ["Clean Code", "Liderazgo", "Manejo de equipos", "Adaptabilidad", "Ética profesional", "Docencia", "Gestión de proyectos"]

export const experiences = [
  {
    title: "Profesor de informática extra programática",
    company: "Colegio Parroquial San Judas Tadeo",
    type: "Jornada parcial",
    period: "Marzo 2026 — Actualidad",
    location: "Ituzaingó, Buenos Aires, Argentina",
    description: "Docencia y programación orientada a la formación técnica de alumnos.",
    skills: ["Docencia", "Programación"]
  },
  {
    title: "Desarrollador de software",
    company: "SEGURIDAD SISIN",
    type: "Jornada completa",
    period: "Febrero 2026 — Actualidad",
    location: "Buenos Aires, Argentina (Híbrido)",
    description: "Desarrollo de software y gestión de proyectos de programas de software.",
    skills: ["Desarrollo de software", "Gestión de proyectos"]
  },
  {
    title: "Desarrollador de software",
    company: "Hard Stack",
    type: "Autónomo",
    period: "Diciembre 2023 — Actualidad",
    location: "Ituzaingó, Buenos Aires, Argentina (Híbrido)",
    description: "Consultora freelance. Desarrollo de aplicaciones y soluciones en lenguajes variados (React, React Native, Electron, C#, Express, SQL).",
    skills: ["Atención al cliente", "Facilidad de adaptación", "Full Stack Development"]
  },
  {
    title: "Desarrollador de front-end",
    company: "E.E.S.N 5",
    type: "Contrato de prácticas",
    period: "Abril 2025 — Octubre 2025",
    location: "Ituzaingó, Buenos Aires, Argentina (Remoto)",
    description: "Desarrollo de sitio web institucional según requerimientos. Gestión de Google for Educators.",
    skills: ["React.js", "Atención al cliente"]
  },
  {
    title: "Soporte técnico",
    company: "Santa Maria De Guadalupe",
    type: "Contrato de prácticas",
    period: "Abril 2025 — Octubre 2025",
    location: "Argentina (Presencial)",
    description: "Mantenimiento de infraestructura tecnológica. Creación de scripts para gestión de permisos en terminales.",
    skills: ["Gestión de redes", "Programación", "Soporte Técnico"]
  }
]

export const education = [
  {
    school: "Universidad Nacional de La Matanza",
    degree: "Ingeniería en Informática / Computer Science",
    period: "Julio 2025 — 2030",
    description: "Carrera de grado enfocada en fundamentos de computación, desarrollo de software y gestión de sistemas."
  },
  {
    school: "Universidad FASTA",
    degree: "Profesorado de Nivel Medio, Computer Teacher Education",
    period: "Febrero 2026 — Junio 2027",
    description: "Formación pedagógica y didáctica orientada a la enseñanza técnica en contextos educativos formales.",
    skills: ["Prácticas pedagógicas", "Proyectos educativos"]
  },
  {
    school: "Técnica Informática San Judas Tadeo",
    degree: "Técnico en Informática Profesional y Personal",
    period: "2019 — 2025",
    description: "Especialización en POO, redes y servidores Linux.",
    skills: ["Administración de servidores", "Software empresarial"]
  }
]

export const projects = [
  {
    title: "Security Focus",
    tech: ["NodeJs", "Express", "React", "React Native", "Electron", "Prisma", "Arduino"],
    description: "Sistema avanzado de administración para barrios cerrados, facilitando el acceso y la gestión diaria. Ganador de medalla de oro en ONIET 2024 y 2025.",
    link: "http://security-focus.netlify.app"
  },
  {
    title: "Freeflix.NET.WinForms",
    tech: ["C#", ".NET", "WinForms"],
    description: "Aplicación de escritorio para la gestión y visualización de contenido multimedia desarrollada en .NET.",
    link: "https://github.com/matuqqq/Freeflix.NET.WinForms"
  },
  {
    title: "PeakMind",
    tech: ["React Native", "JavaScript", "Mobile Development"],
    description: "Liderazgo técnico y desarrollo de aplicación móvil para gestión y productividad.",
    link: "https://github.com/matuqqq/landing-PeakMind"
  },
  {
    title: "HardShop",
    tech: ["React", "Electron", "Prisma", "MySQL"],
    description: "E-commerce integrado con panel administrativo para gestión de inventario, ventas y proveedores, con pasarela de MercadoPago.",
    link: "http://hardshop.netlify.app"
  },
  {
    title: "DBFtoPDF",
    tech: ["Python"],
    description: "Automatización de la creación de libros diarios contables a partir de bases de datos DBF.",
    link: "https://github.com/matuqqq/DBFtoPDF"
  }
]

export const certifications = [
  {
    title: "ONIET Certificado de ganadores SysApp",
    issuer: "Universidad Blas Pascal",
    date: "Octubre 2025",
    id: "28C7-351F-45F9-494D-9BFE-BFD7-438A-638F",
    link: "https://drive.google.com/file/d/1yj1VjcItRc76os4Gycb_0ff5Vj5TjJzL/view?usp=sharing"
  },
  {
    title: "ONIET Certificado de ganadores Desarrollo de Sistemas",
    issuer: "Universidad Blas Pascal",
    date: "Octubre 2025",
    id: "4A88-3A52-A055-45BC-B0BD-BC84-5BAB-A4A9",
    link: "https://drive.google.com/file/d/1L-wlEvazTLYYsxPc1BI9lynHK2jqAjVX/view?usp=sharing"
  },
  {
    title: "ONIET Certificado de ganadores SysApp",
    issuer: "Universidad Blas Pascal",
    date: "Octubre 2024",
    id: "4F84-5445-1546-4525-BA1C-6CA1-655D-7EB2"
  },
  {
    title: "ONIET Certificado de ganadores Desarrollo de Sistemas",
    issuer: "Universidad Blas Pascal",
    date: "Octubre 2024",
    id: "0A61-1D10-19BD-4F4B-AAC5-F92C-32C1-5A60"
  }
]

export const skills = [
  { name: "React", icon: FaReact },
  { name: "React Native", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "C# / .NET", icon: SiCsharp },
  { name: "Python", icon: SiPython },
  { name: "Electron", icon: SiElectron },
  { name: "JavaScript", icon: SiJavascript },
  { name: "MySQL / Prisma", icon: SiMysql },
  { name: "Linux", icon: FaLinux },
  { name: "Redes", icon: FaNetworkWired },
  { name: "Arduino", icon: SiArduino },
  { name: "Git / GitHub", icon: FaGithub }
]

export const languages = [
  { name: "Español", level: "Nativo / Bilingüe" },
  { name: "Inglés", level: "Básico Profesional" }
]

export const tabs = [
  { id: "about", name: "Sobre mí", icon: FaUser },
  { id: "experience", name: "Experiencia", icon: FaBriefcase },
  { id: "projects", name: "Proyectos", icon: FaProjectDiagram },
  { id: "education", name: "Educación", icon: FaGraduationCap },
  { id: "skills", name: "Habilidades", icon: FaCode }
]
