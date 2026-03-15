import { TbWorldWww } from "react-icons/tb"
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"
import React from "react"

function ExperienceItem({ title, company, type, period, location, description, skills, link, linktag, link2, link2tag }) {
  return (
    <div className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 last:pb-0 group">
      
      {/* Timeline Line */}
      <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500/50 to-transparent group-last:bg-transparent transition-all duration-500"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-[20px] h-[20px] sm:w-6 sm:h-6 rounded-full bg-gray-900 border-2 border-yellow-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.3)] group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300 z-10">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400 scale-100 group-hover:scale-150 transition-transform duration-300"></div>
      </div>

      <div className="glass-card glass-card-hover p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl relative ml-2 sm:ml-4">
        
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 mb-4">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-100 leading-tight mb-2 group-hover:text-yellow-400 transition-colors">{title}</h4>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-yellow-500 font-bold text-sm sm:text-base tracking-wide">{company}</span>
                {type && (
                  <>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <span className="text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">{type}</span>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-medium text-gray-400">
              <div className="flex items-center gap-2 bg-gray-950/60 px-3 py-1.5 rounded-lg border border-white/5 shadow-inner">
                <FaCalendarAlt className="text-yellow-500/80" />
                <span>{period}</span>
              </div>
              {location && (
                <div className="flex items-center gap-2 bg-gray-950/60 px-3 py-1.5 rounded-lg border border-white/5 shadow-inner">
                  <FaMapMarkerAlt className="text-yellow-500/80" />
                  <span className="truncate max-w-[150px] sm:max-w-none">{location}</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
            {description}
          </p>

          {skills && (
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, idx) => (
                <span key={idx} className="text-[10px] sm:text-xs uppercase tracking-wider font-bold bg-yellow-500/10 text-yellow-400 px-3 py-1.5 rounded-lg border border-yellow-500/20 hover:bg-yellow-500/20 hover:border-yellow-500/40 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          )}

          {(link || link2) && (
            <div className="flex flex-wrap gap-3 pt-5 border-t border-white/5">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-yellow-500 rounded-xl text-gray-300 hover:text-gray-900 transition-all duration-300 border border-white/5 hover:border-yellow-500"
                >
                  <TbWorldWww className="group-hover/link:rotate-12 transition-transform" />
                  <span className="text-xs sm:text-sm font-bold">{linktag || "Ver Credencial"}</span>
                </a>
              )}
              {link2 && (
                <a
                  href={link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-yellow-500 rounded-xl text-gray-300 hover:text-gray-900 transition-all duration-300 border border-white/5 hover:border-yellow-500"
                >
                  <TbWorldWww className="group-hover/link:rotate-12 transition-transform" />
                  <span className="text-xs sm:text-sm font-bold">{link2tag || "Ver Proyecto"}</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
