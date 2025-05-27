import { useState } from "react"
import ExperienceItem from "./experience-item"
import TabSection from "./tab-section"
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaUser,
  FaProjectDiagram,
  FaNetworkWired,
  FaNodeJs,
  SiNestjs,
  FaLinux,
} from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"
import { SiCsharp, SiJavascript, SiMysql, SiReact, SiPrisma } from "react-icons/si"
import { IoLogoElectron } from "react-icons/io5"

function ResumeSection() {
  const [activeTab, setActiveTab] = useState("about")

  const experiences = [
    {
      title: "Desarrollo FullStack en HardStack",
      period: "2023 — Presente",
      description:
        "Desarrollo de aplicaciones y soluciones en lenguajes variados, incluyendo React (con Electron), C#, Express, Manejo de bases de datos relacionales y ORM como prisma.",
    },
    {
      title: "Soporte Técnico a distintas pymes",
      period: "2022 — 2024",
      description:
        "Experiencia en armado, limpieza y optimización de redes en entornos empresariales, con un enfoque en estudios jurídicos y escuelas de cocina. He trabajado en la mejora del rendimiento y seguridad de infraestructuras de red en organizaciones como GCRYDB, Gestoría Judicial Morón, el Estudio Jurídico de la Dra. Ángela Leo y la escuela de cocina Qker de San Justo, asegurando conectividad eficiente y confiable.",
    },
  ]

  const projects = [
    {
      title: "Security Focus",
      tech: ["NodeJs", "Express", "React", "Electron", "Prisma", "Arduino", "WindowsForms"],
      description:
        "Proyecto para lograr la mejor y más fácil administración de un barrio privado, facilitando tanto el acceso como la gestión diaria para propietarios, administradores y personal de seguridad. Buscamos implementar soluciones tecnológicas avanzadas que permitan una administración eficiente y segura del barrio, haciendo que el ingreso y egreso de personas sea un proceso sencillo y rápido.",
      link: "http://security-focus.netlify.app",
    },
    {
      title: "HardShop",
      tech: ["NodeJs", "NestJs", "React", "Electron", "Prisma", "MySQL"],
      description:
        "Proyecto para lograr interconectar un panel administrativo sobre un comercio comun y corriente con el ecomerce, el cual integra la pasarela de pagos de MercadoPago, y en el panel lograr correctamente la gestion de inventario, vendedores, proveedores, ventas y demas.",  
      link: "http://hardshop.netlify.app",
    },
    {
      title: "Landing-Page para HardStack",
      tech: ["HTML", "CSS"],
      description: "Sitio web de portafolio para mi equipo.",
      link: "https://hardstack.netlify.app",
    },
    {
      title: "Generador de Libro diario desde base DBF a PDF",
      tech: ["Python"],
      description:
        "Desarrollo de un generador de PDFs a partir de bases de datos DBF, permitiendo la automatización de la creación del libro diario en un sistema de gestión.",
      link: "https://github.com/matuqqq/DBFtoPDF",
    },
  ]

  const skills = [
    { name: "Entornos Linux", icon: FaLinux },
    { name: "Redes Informáticas", icon: FaNetworkWired },
    { name: "C#", icon: SiCsharp },
    { name: "React", icon: SiReact },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: SiJavascript },
    { name: "NestJs", icon: SiNestjs },
    { name: "NodeJs", icon: FaNodeJs },
    { name: "MySQL", icon: SiMysql },
    { name: "Prisma", icon: SiPrisma },
    { name: "GitHub", icon: FaGithub },
    { name: "Electron", icon: IoLogoElectron },
  ]

  const tabs = [
    { id: "about", name: "Sobre mí", icon: FaUser },
    { id: "education", name: "Educación", icon: FaGraduationCap },
    { id: "experience", name: "Experiencia", icon: FaBriefcase },
    { id: "projects", name: "Proyectos", icon: FaProjectDiagram },
    { id: "skills", name: "Habilidades", icon: FaCode },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-500 text-center mb-4 lg:mb-6">
              Sobre Mí
            </h1>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Soy Desarrollador con una sólida base en Frontend y en constante formación en Backend. Mi perfil es
                autodidacta y me motiva el aprendizaje continuo, lo cual me permite estar al día con las últimas
                tecnologías y mejores prácticas del desarrollo web. Recién empiezo pero, he trabajado en proyectos en
                equipo que me ayudaron y me ayudan a crecer dia a dia.
              </p>
              <p>
                Además de mis habilidades en desarrollo, ofrezco servicios de soporte técnico, armado y reparación de
                computadoras y notebooks. Gracias a mi experiencia en distintos entornos, como estudios jurídicos y
                empresas gastronómicas, he desarrollado la capacidad de adaptarme a diferentes sectores, brindando un
                servicio de calidad en instalación y mantenimiento de hardware y software.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
              {["Clean Code", "Liderazgo", "Manejo de equipos", "Adaptabilidad", "Ética profesional"].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 text-yellow-500 px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )
      case "education":
        return (
          <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg space-y-4">
            <ExperienceItem
              title="Técnica Informática"
              period="2019 — presente"
              description="Especialización en POO, manejo de redes y servidores en linux"
            />
            <ExperienceItem
              title="Participación en ONIET 2024 en Universidad BlasPascal"
              period="2024"
              description="Participación en la Olimpiada Nacional de Innovación, Electrónica y Tecnología (ONIET) 2024 en la Universidad Blas Pascal, donde obtuve la medalla de oro en Desarrollo de Sistemas y en el módulo SYSApp con el proyecto Security Focus. Este reconocimiento destaca mis habilidades en innovación, desarrollo de software y soluciones tecnológicas aplicadas a la adaptabilidad y gestión"
              linktag="SysApp"
              link="https://drive.google.com/file/d/1yj1VjcItRc76os4Gycb_0ff5Vj5TjJzL/view?usp=sharing"
              link2tag="Sistemas"
              link2="https://drive.google.com/file/d/1L-wlEvazTLYYsxPc1BI9lynHK2jqAjVX/view?usp=sharing"
            />
          </div>
        )
      case "experience":
        return (
          <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} title={exp.title} period={exp.period} description={exp.description} />
            ))}
          </div>
        )
      case "projects":
        return (
          <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg">
            <div className="grid gap-4 lg:gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 sm:p-5 lg:p-6 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-yellow-500">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-500 transition-colors self-start sm:self-center"
                    >
                      <TbWorldWww size={20} />
                    </a>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-900 text-yellow-500 px-2 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case "skills":
        return (
          <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 bg-gray-800 p-3 sm:p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <Icon className="text-lg sm:text-xl lg:text-2xl text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-200 text-xs sm:text-sm lg:text-base truncate">{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-xl">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 lg:mb-6 border-b border-yellow-500 pb-2">
        Resumen Profesional
      </h2>

      <TabSection activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

      <div className="min-h-[300px] sm:min-h-[400px]">{renderTabContent()}</div>
    </div>
  )
}

export default ResumeSection