import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem';
import TabSection from './TabSection';
import { FaGraduationCap, FaBriefcase, FaCode, FaGithub, FaHtml5, FaCss3Alt, FaUser, FaProjectDiagram, FaNetworkWired, FaNodeJs, FaLinux } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { SiDotnet, SiCsharp, SiJavascript, SiTypescript , SiMysql, SiC,SiReact , SiPrisma } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { VscAzureDevops } from 'react-icons/vsc';
import { IoLogoElectron } from "react-icons/io5";

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
      title: "Soporte Tecnico a distintas pymes",
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
      title: "Landing-Page para HardStack",
      tech: ["HTML", "CSS"],
      description: "Sitio web de portafolio para mi equipo.",
      link: "https://hardstack.netlify.app",
    },
    {
      title: "Generador de Libro diario desde base DBF a PDF",
      tech: ["Python"],
      description: "Desarrollo de un generador de PDFs a partir de bases de datos DBF, permitiendo la automatización de la creación del libro diario en un sistema de gestión.", 
      link: "https://github.com/matuqqq/DBFtoPDF",
    }
  ]

  const skills = [
    { name: "Entornos Linux", icon: FaLinux },
    { name: "Redes Informaticas", icon: FaNetworkWired },
    { name: "C#", icon: SiCsharp },
    { name: "React", icon: SiReact }, 
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Node Js", icon: FaNodeJs },
    { name: "MySQL", icon: SiMysql},
    { name: "Prisma", icon: SiPrisma },
    { name: "GitHub", icon: FaGithub },
    { name: "Electron", icon: IoLogoElectron }

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
          <div className="bg-gray-900 p-4 md:p-6 rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-500 text-center mb-4 md:mb-6">Sobre Mí</h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Soy Desarrollador con una sólida base en Frontend y en constante formación en Backend. Mi perfil es
              autodidacta y me motiva el aprendizaje continuo, lo cual me permite estar al día con las últimas
              tecnologías y mejores prácticas del desarrollo web. Recien empiezo pero, he trabajado en proyectos en
              equipo que me ayudaron y me ayudan a crecer.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-4">
              Además de mis habilidades en desarrollo, ofrezco servicios de soporte técnico, armado y reparación de
              computadoras y notebooks. Gracias a mi experiencia en distintos entornos, como estudios jurídicos y
              empresas gastronómicas, he desarrollado la capacidad de adaptarme a diferentes sectores, brindando un
              servicio de calidad en instalación y mantenimiento de hardware y software.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2 md:gap-7">
              <span className="bg-gray-800 text-yellow-500 px-2 py-1 rounded-full text-xs md:text-sm">Clean Code</span>
              <span className="bg-gray-800 text-yellow-500 px-2 py-1 rounded-full text-xs md:text-sm">Liderazgo</span>
              <span className="bg-gray-800 text-yellow-500 px-2 py-1 rounded-full text-xs md:text-sm">Manejo de equipos</span>
              <span className="bg-gray-800 text-yellow-500 px-2 py-1 rounded-full text-xs md:text-sm">Adaptabilidad </span>
              <span className="bg-gray-800 text-yellow-500 px-2 py-1 rounded-full text-xs md:text-sm">Ética profesional</span>
            </div>
          </div>
        )
      case "education":
        return (
          <div className="bg-gray-900 p-4 md:p-6 rounded-lg space-y-4">
            <ExperienceItem
              title="Tecnica Informatica"
              period="2019 — presente"
              description="Especialización en POO, manejo de redes y servidores en linux"
            />
            <ExperienceItem
              title="Participacion en ONIET 2024 en Universidad BlasPascal"
              period="2024"
              description="Participación en la Olimpiada Nacional de Innovación, Electrónica y Tecnología (ONIET) 2024 en la Universidad Blas Pascal,
               donde obtuve la medalla de oro en Desarrollo de Sistemas y en el módulo SYSApp con el proyecto Security Focus. Este reconocimiento destaca mis habilidades en
               innovación, desarrollo de software y soluciones tecnológicas aplicadas a la adaptabilidad y gestión"
              linktag="SysApp"
              link="${process.env.PUBLIC_URL}/media/sysApp.pdf"
              link2tag="SysApp"
              link2="${process.env.PUBLIC_URL}/media/sistemas.pdf"
            />
          </div>
        )
      case "experience":
        return (
          <div className="bg-gray-900 p-4 md:p-6 rounded-lg space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} title={exp.title} period={exp.period} description={exp.description} />
            ))}
          </div>
        )
      case "projects":
        return (
          <div className="bg-gray-900 p-4 md:p-6 rounded-lg">
            <div className="grid gap-4 md:gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 p-4 md:p-5 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base md:text-lg font-semibold text-yellow-500">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      <TbWorldWww size={20} />
                    </a>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-900 text-yellow-500 px-2 py-1 rounded-full text-xs">
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
          <div className="bg-gray-900 p-4 md:p-6 rounded-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-800 p-2 md:p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <Icon className="text-xl md:text-2xl text-yellow-500" />
                    <span className="text-gray-200 text-sm md:text-base">{skill.name}</span>
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
    <div className="bg-gray-800 p-4 md:p-8 rounded-lg shadow-xl">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 border-b border-yellow-500 pb-2">
        Resumen Profesional
      </h2>

      <TabSection activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

      <div className="min-h-[400px]">{renderTabContent()}</div>
    </div>
  )
}

export default ResumeSection

