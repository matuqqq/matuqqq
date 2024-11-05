import React from 'react';
import { TbWorldWww } from "react-icons/tb";

function ExperienceItem({ title, period, description, link}) {
  return (
    <div className="hover:bg-gray-800 p-4 rounded-lg transition-colors">
      <h4 className="font-medium text-lg text-yellow-500">{title}</h4>
      <p className="text-sm text-gray-400">{period}</p>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
}

export default ExperienceItem;