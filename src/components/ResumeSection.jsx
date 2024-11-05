import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem';
import TabSection from './TabSection';
import { FaGraduationCap, FaBriefcase, FaCode, FaGithub, FaHtml5, FaCss3Alt, FaUser, FaProjectDiagram, FaNetworkWired, FaNodeJs, FaLinux } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { SiDotnet, SiCsharp, SiJavascript, SiTypescript, SiNextdotjs, SiMicrosoftsqlserver, SiC, SiPrisma } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { VscAzureDevops } from 'react-icons/vsc';

function ResumeSection() {
  const [activeTab, setActiveTab] = useState('about');

  const experiences = [
    {
      title: "Desarrollo FullStack en HardStack",
      period: "2023 — Presente",
      description: "Desarrollo de aplicaciones de escritorio  utilizando WindowsForms, Node.js y bases de datos relacionales. Ademas me encargue de hablar con clientes y venderles lo que necesitaron."
    },
    {
      title: "Soporte Tecnico a distintas pymes",
      period: "2022 — 2024",
      description: "Armado, limpieza e optimizacion de redes en distintos Estudios Juridicos y escuelas de Cocina. Estudios Juridicos(GCRYDB, Gestoria Judicial Moron y Estudio Jurídico de la Dra. Ángela Leo) Escuela de Cocina: (Qker de San Justo)."
    }
  ];

  const projects = [
    {
      title: "Security Focus",
      tech: ["WindowsForms", "Express", "Prisma", "Arduino"],
      description: "Proyecto para lograr la mejor y más fácil administración de un barrio privado, facilitando tanto el acceso como la gestión diaria para propietarios, administradores y personal de seguridad. Buscamos implementar soluciones tecnológicas avanzadas que permitan una administración eficiente y segura del barrio, haciendo que el ingreso y egreso de personas sea un proceso sencillo y rápido.",
      link: "http://security-focus.netlify.app"
    },
    {
      title: "Landing-Page para HardStack",
      tech: ["HTML", "CSS"],
      description: "Sitio web de portafolio para mi equipo con diseño futurista y responsive.",
      link: "https://hardstack.netlify.app"
    },
    {
      title: "TerrAPI",
      tech: ["Express", "Html", "Css"],
      description: "Servidor y sitio web de API al estilo de pokemon pero para Terraria.",
      link: "https://github.com/matuqqq/TerrApi"
    }
  ];

  const skills = [
    { name: 'C', icon: SiC },
    { name: 'C#', icon: SiCsharp },
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Node Js', icon: FaNodeJs },
    { name: 'SQL Server', icon: SiMicrosoftsqlserver },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Redes Informaticas', icon: FaNetworkWired },
    { name: 'Entornos Linux', icon: FaLinux }
  ];

  const tabs = [
    { id: 'about', name: 'Sobre mí', icon: FaUser },
    { id: 'education', name: 'Educación', icon: FaGraduationCap },
    { id: 'experience', name: 'Experiencia', icon: FaBriefcase },
    { id: 'projects', name: 'Proyectos', icon: FaProjectDiagram },
    { id: 'skills', name: 'Habilidades', icon: FaCode },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">
                Sobre Mí
              </h1>
              <p className="text-gray-300 leading-relaxed">
                Soy Desarrollador con una sólida base en Frontend y en constante formación en Backend. Mi perfil es autodidacta y me motiva el aprendizaje
                continuo, lo cual me permite estar al día con las últimas tecnologías y mejores prácticas del desarrollo web. Recien empiezo pero, he trabajado
                en proyectos en equipo que me ayudaron y me ayudan a crecer.
              </p>

              <p className="text-gray-300 leading-relaxed mt-4">
                Además de mis habilidades en desarrollo, ofrezco servicios de soporte técnico, armado y reparación de computadoras y notebooks. Gracias a mi
                experiencia en distintos entornos, como estudios jurídicos y empresas gastronómicas, he desarrollado la capacidad de adaptarme a diferentes
                sectores, brindando un servicio de calidad en instalación y mantenimiento de hardware y software.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="bg-gray-800 text-yellow-500 px-3 py-1 rounded-full text-sm">Clean Code</span>
              <span className="bg-gray-800 text-yellow-500 px-3 py-1 rounded-full text-sm">Liderazgo</span>
              <span className="bg-gray-800 text-yellow-500 px-3 py-1 rounded-full text-sm">Manejo de equipos</span>
              <span className="bg-gray-800 text-yellow-500 px-3 py-1 rounded-full text-sm">Adaptabilidad</span>
              <span className="bg-gray-800 text-yellow-500 px-3 py-1 rounded-full text-sm">Ética profesional</span>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="bg-gray-900 h100 p-6 rounded-lg">
            <ExperienceItem
              title="Tecnica Informatica"
              period="2018 — presente"
              description="Especialización en POO y manejo de redes y servidores en linux"
              link="https://github.com/matuqqq/"

            />
            <ExperienceItem
              title="Participacion en ONIET 2024 en Universidad BlasPascal"
              period="2024"
              description="Medalla de oro en Desarrollo de Sistemas y en el modulo SYSapp con el proyecto Security Focus"
              link="https://github.com/matuqqq/"
            />
          </div>
        );
      case 'experience':
        return (
          <div className="bg-gray-900 p-6 rounded-lg space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                title={exp.title}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </div>
        );
      case 'projects':
        return (
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 p-5 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-yellow-500">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      <TbWorldWww size={25} />
                    </a>
                  </div>
                  <p className="text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-900 text-yellow-500 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <Icon className="text-2xl text-yellow-500" />
                    <span className="text-gray-200">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 border-b border-yellow-500 pb-2">
        Resumen Profesional
      </h2>

      <TabSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />

      <div className="min-h-[400px]">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default ResumeSection;