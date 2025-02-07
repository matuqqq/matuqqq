import { FaWhatsapp,FaEnvelope, FaPhone, FaCalendar, FaGithub, FaLinkedin, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa"
import React from 'react';

function ProfileCard() {
  return (
    <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-xl">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-900 rounded-2xl mb-4 md:mb-6 overflow-hidden shadow-lg border-2 border-yellow-500/20">
          <img src="./media/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold mb-1">Mateo Moreira</h1>
        <div className="space-y-1 text-center mb-4 md:mb-6">
          <p className="text-yellow-500 font-medium">Full Stack Junior </p>
          <p className="text-gray-400 text-sm"><b>Tecnico Informatico</b></p>
        </div>

        <div className="flex space-x-4 mb-6 md:mb-8">
          <a
            href="https://github.com/matuqqq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-2 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mateo-moreira-6a5b4b2ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-2 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="./media/curriculum-vitae--mateo-moreira.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-2 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all"
          >
            <FaFileDownload size={18} />
          </a>
        </div>

        <div className="w-full space-y-3 bg-gray-900 p-3 md:p-4 rounded-xl">
          <div className="flex items-center space-x-3 text-xs md:text-sm">
            <FaEnvelope className="text-yellow-500 min-w-[16px] md:min-w-[20px]" />
            <span className="text-gray-300 truncate">mateoivanmoreira@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 text-xs md:text-sm">
            <FaPhone className="text-yellow-500 min-w-[16px] md:min-w-[20px]" />
            <span className="text-gray-300">+54 11 2374-1777 </span>
            <a className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center" target="_blank"
              rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=541123741777&text=Hola+Mateo+estoy+interesado+en+tu+perfil%21&type=phone_number&app_absent=0">
              <FaWhatsapp  className=" align-right mr-1" size={20} />
            </a>
          </div>
          <div className="flex items-center space-x-3 text-xs md:text-sm">
            <FaCalendar className="text-yellow-500 min-w-[16px] md:min-w-[20px]" />
            <span className="text-gray-300">Enero 3, 2007</span>
          </div>
          <div className="flex items-center space-x-3 text-xs md:text-sm">
            <FaMapMarkerAlt className="text-yellow-500 min-w-[16px] md:min-w-[20px]" />
            <span className="text-gray-300">GBA Oeste, Argentina</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard

