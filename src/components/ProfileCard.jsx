import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaFileDownload,
} from "react-icons/fa"
import React from "react"

function ProfileCard() {
  return (
    <div className="bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-xl sticky top-4">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gray-900 rounded-2xl mb-4 lg:mb-6 overflow-hidden shadow-lg border-2 border-yellow-500/20">
          <img src="https://i.imgur.com/YtCh020.png" alt="Profile" className="w-full h-full object-cover" />
        </div>

        <div className="text-center mb-4 lg:mb-6">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Mateo Moreira</h1>
          <p className="text-yellow-500 font-medium text-sm sm:text-base">Full Stack Junior</p>
          <p className="text-gray-400 text-xs sm:text-sm">
            <b>Técnico Informático</b>
          </p>
        </div>

        <div className="flex space-x-3 sm:space-x-4 mb-4 lg:mb-6">
          <a
            href="https://github.com/matuqqq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-2 sm:p-3 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200"
          >
            <FaGithub size={16} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mateo-moreira-6a5b4b2ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-2 sm:p-3 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200"
          >
            <FaLinkedin size={16} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://drive.google.com/file/d/1FoqOkRQsAekIT54XjaxwDxqdI3HmUFCC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-2 sm:p-3 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200"
          >
            <FaFileDownload size={16} className="sm:w-5 sm:h-5" />
          </a>
        </div>

        <div className="w-full space-y-3 bg-gray-900 p-3 sm:p-4 rounded-xl">
          <div className="flex items-center space-x-3 text-xs sm:text-sm">
            <FaEnvelope className="text-yellow-500 flex-shrink-0 w-4 h-4" />
            <span className="text-gray-300 break-all sm:break-normal">mateoivanmoreira@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 text-xs sm:text-sm">
            <FaPhone className="text-yellow-500 flex-shrink-0 w-4 h-4" />
            <span className="text-gray-300">+54 11 2374-1777</span>
            <a
              className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center ml-auto"
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send/?phone=541123741777&text=Hola+Mateo+estoy+interesado+en+tu+perfil%21&type=phone_number&app_absent=0"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          <div className="flex items-center space-x-3 text-xs sm:text-sm">
            <FaCalendar className="text-yellow-500 flex-shrink-0 w-4 h-4" />
            <span className="text-gray-300">Enero 3, 2007</span>
          </div>
          <div className="flex items-center space-x-3 text-xs sm:text-sm">
            <FaMapMarkerAlt className="text-yellow-500 flex-shrink-0 w-4 h-4" />
            <span className="text-gray-300">GBA Oeste, Argentina</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard