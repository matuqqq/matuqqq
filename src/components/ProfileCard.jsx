import React from 'react';
import { FaEnvelope, FaPhone, FaCalendar, FaGithub, FaLinkedin, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa';

function ProfileCard() {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 bg-gray-900 rounded-2xl mb-6 overflow-hidden shadow-lg border-2 border-yellow-500/20">
          <img 
            src="../src/media/yo.png" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold mb-1">Mateo Moreira</h1>
        <div className="space-y-1 text-center mb-6">
          <p className="text-yellow-500 font-medium">Full Stack Junior </p>
          <p className="text-gray-400 text-sm">Web Designer - Backend Learner - WForms</p>
        </div>

        <div className="flex space-x-4 mb-8">
          <a href="https://github.com/matuqqq" target="_blank" rel="noopener noreferrer" 
             className="bg-gray-900 p-2 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mateo-moreira-6a5b4b2ba/" target="_blank" rel="noopener noreferrer" 
             className="bg-gray-900 p-2 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all">
            <FaLinkedin size={20} />
          </a>
          <a href="./src/media/Cv.pdf" target="_blank" rel="noopener noreferrer" 
             className="bg-gray-900 p-2 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all">
            <FaFileDownload size={20} />
          </a>
        </div>

        <div className="w-full space-y-4 bg-gray-900 p-4 rounded-xl">
          <div className="flex items-center space-x-3 text-sm">
            <FaEnvelope className="text-yellow-500 min-w-[20px]" />
            <span className="text-gray-300 truncate">mateoivanmoreira@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <FaPhone className="text-yellow-500 min-w-[20px]" />
            <span className="text-gray-300">+54 11 2374-1777</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <FaCalendar className="text-yellow-500 min-w-[20px]" />
            <span className="text-gray-300">Enero 3, 2007</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <FaMapMarkerAlt className="text-yellow-500 min-w-[20px]" />
            <span className="text-gray-300">Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;