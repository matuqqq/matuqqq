import { useState } from "react"
import React from "react"
import ExperienceItem from "./ExperienceItem"
import TabSection from "./TabSection"
import {
  experiences,
  education,
  projects,
  skills,
  tabs,
  aboutMe,
  softSkills,
  certifications,
  languages
} from "../data"
import { TbWorldWww } from "react-icons/tb"
import { FaAward, FaLanguage, FaLightbulb, FaRocket } from "react-icons/fa"

function ResumeSection() {
  const [activeTab, setActiveTab] = useState("about")

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* About Me Card */}
            <div className="glass-card p-6 sm:p-8 rounded-[2rem] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-100 flex items-center gap-3">
                <div className="p-3 bg-yellow-500/10 rounded-2xl text-yellow-400">
                  <FaLightbulb size={24} />
                </div>
                Sobre Mí
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed text-base sm:text-lg font-light">
                {aboutMe.map((paragraph, idx) => (
                  <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-yellow-500 first-letter:mr-1 float-none">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                  <FaRocket className="text-yellow-500" /> Soft Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-800/40 text-gray-300 rounded-xl text-sm font-medium border border-white/5 hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all cursor-default hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Languages */}
              <div className="glass-card p-6 rounded-[2rem] border border-white/5 h-full">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-100">
                  <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
                    <FaLanguage size={20} />
                  </div>
                  Idiomas
                </h4>
                <div className="space-y-4">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-gray-950/40 p-4 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group">
                      <span className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">{lang.name}</span>
                      <span className="text-xs font-bold uppercase tracking-wide bg-white/5 px-3 py-1.5 rounded-lg text-gray-400 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Certs */}
              <div className="glass-card p-6 rounded-[2rem] border border-white/5 h-full">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-100">
                  <div className="p-2 bg-yellow-500/10 rounded-xl text-yellow-400">
                    <FaAward size={20} />
                  </div>
                  Certificaciones
                </h4>
                <div className="space-y-3">
                  {certifications.slice(0, 3).map((cert, idx) => (
                    <div key={idx} className="bg-gray-950/40 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all group cursor-default">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <p className="text-sm font-bold text-gray-200 line-clamp-1 group-hover:text-yellow-400 transition-colors">{cert.title}</p>
                          <p className="text-xs text-gray-500 mt-1 font-medium">{cert.issuer}</p>
                        </div>
                        <span className="text-[10px] text-gray-600 font-mono bg-black/30 px-2 py-1 rounded border border-white/5 whitespace-nowrap">{cert.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      case "experience":
        return (
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        )
      case "education":
        return (
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {education.map((edu, index) => (
              <ExperienceItem 
                key={index} 
                title={edu.degree} 
                company={edu.school} 
                period={edu.period} 
                description={edu.description}
                skills={edu.skills}
              />
            ))}
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-8 text-gray-100 flex items-center gap-3 pl-4">
                <div className="w-10 h-1 bg-yellow-500 rounded-full"></div>
                Logros Destacados
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="glass-card hover:bg-gray-800/80 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all group border-l-4 border-l-transparent hover:border-l-yellow-500">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-200 group-hover:text-white mb-1">{cert.title}</h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                        <span className="text-yellow-500 font-medium">{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                      {cert.id && <p className="text-[10px] font-mono text-gray-600 mt-2 uppercase tracking-widest">ID: {cert.id}</p>}
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-950 text-gray-400 p-3 rounded-xl border border-white/10 hover:bg-yellow-500 hover:text-gray-900 hover:border-yellow-500 transition-all shadow-lg"
                        title="Ver certificado"
                      >
                        <TbWorldWww size={20} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case "projects":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-[2rem] flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-yellow-500/10 rounded-2xl text-yellow-400 group-hover:bg-yellow-500 group-hover:text-gray-900 transition-all duration-300">
                    <FaRocket size={24} />
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/50 p-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700 transition-all border border-white/5 hover:border-white/20"
                  >
                    <TbWorldWww size={20} />
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-yellow-400 transition-colors">{project.title}</h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                  {project.description}
                </p>
                
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-950/30 text-gray-300 px-3 py-1 rounded-lg text-xs font-medium border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      case "skills":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className="glass-card glass-card-hover p-6 rounded-3xl flex flex-col items-center justify-center text-center gap-4 group cursor-default transition-all duration-300 hover:bg-gray-800/90"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-950/50 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/10 group-hover:scale-110 transition-all duration-300 shadow-inner">
                    <Icon className="text-4xl text-gray-600 group-hover:text-yellow-400 transition-colors duration-300" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-gray-400 group-hover:text-gray-100 transition-colors">{skill.name}</span>
                </div>
              )
            })}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <TabSection activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      
      <div className="min-h-[500px]">
        {renderTabContent()}
      </div>
    </div>
  )
}

export default ResumeSection
