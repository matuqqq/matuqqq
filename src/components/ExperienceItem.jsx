import { TbWorldWww } from "react-icons/tb"
import React from "react"

function ExperienceItem({ title, period, description, link, linktag, link2, link2tag }) {
  return (
    <div className="hover:bg-gray-800 p-3 sm:p-4 lg:p-5 rounded-lg transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1 sm:gap-2">
        <h4 className="font-medium text-sm sm:text-base lg:text-lg text-yellow-500 leading-tight">{title}</h4>
        <p className="text-xs sm:text-sm text-gray-400 flex-shrink-0">{period}</p>
      </div>
      <p className="text-gray-300 text-xs sm:text-sm lg:text-base mt-2 mb-3 leading-relaxed">{description}</p>
      {(link || link2) && (
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center gap-1"
            >
              <TbWorldWww size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">{linktag}</span>
            </a>
          )}
          {link2 && (
            <a
              href={link2}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center gap-1"
            >
              <TbWorldWww size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">{link2tag}</span>
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default ExperienceItem