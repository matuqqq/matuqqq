import React from 'react';
import { TbWorldWww } from "react-icons/tb";
function ExperienceItem({ title, period, description, link,linktag, link2, link2tag }) { 
  return (
    <div className="hover:bg-gray-800 p-3 md:p-4 rounded-lg transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h4 className="font-medium text-base md:text-lg text-yellow-500">{title}</h4>
        <p className="text-xs md:text-sm text-gray-400 mt-1 sm:mt-0">{period}</p>
      </div>
      <p className="text-gray-300 text-sm md:text-base mt-2 mb-3">{description}</p>
      <div className="flex space-x-2 mt-2">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center"
          >
            <TbWorldWww size={16} className="mr-1" />
            <span className="text-xs md:text-sm">{linktag}</span>
          </a>
        )}
        {link2 && (
          <a
            href={link2}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center"
          >
            <TbWorldWww size={16} className="mr-1" />
            <span className="text-xs md:text-sm">{link2tag}</span>
          </a>
        )}
      </div>
    </div>
  );
}
export default ExperienceItem

