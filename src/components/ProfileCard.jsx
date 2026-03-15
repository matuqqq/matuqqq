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
import { profileData } from "../data"

function ProfileCard() {
  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group">
      
      {/* Background Accent */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-700"></div>

      <div className="flex flex-col items-center relative z-10">
        
        {/* Profile Image with Glow */}
        <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 bg-gray-900 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
            <img 
              src={profileData.profileImage} 
              alt={profileData.name} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
            />
          </div>
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full animate-pulse"></div>
        </div>

        {/* Name & Role */}
        <div className="text-center mb-8 w-full">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            {profileData.name}
          </h1>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.1)] mb-3 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
            {profileData.role}
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full space-y-3 bg-gray-950/40 p-5 rounded-2xl border border-white/5 backdrop-blur-sm mb-8">
          <InfoItem icon={FaEnvelope} text={profileData.email} href={`mailto:${profileData.email}`} />
          <InfoItem icon={FaPhone} text={profileData.phone} />
          <InfoItem icon={FaMapMarkerAlt} text={profileData.location} />
          <InfoItem icon={FaCalendar} text={profileData.birthDate} />
        </div>

        {/* Social Actions */}
        <div className="flex gap-3 w-full justify-center mb-8">
          <SocialButton icon={FaGithub} href={profileData.github} label="GitHub" />
          <SocialButton icon={FaLinkedin} href={profileData.linkedin} label="LinkedIn" />
          <SocialButton icon={FaWhatsapp} href={profileData.whatsapp} label="WhatsApp" highlight />
        </div>

        {/* CV Download Button */}
        <a
          href={profileData.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-950 font-bold py-3.5 px-6 rounded-xl hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:-translate-y-0.5 transition-all duration-300 group/btn"
        >
          <FaFileDownload className="group-hover/btn:animate-bounce" />
          <span>Descargar CV</span>
        </a>

      </div>
    </div>
  )
}

function InfoItem({ icon: Icon, text, href }) {
  const content = (
    <div className="flex items-center gap-3 text-sm sm:text-base group/item cursor-default">
      <div className="bg-gray-800/60 p-2.5 rounded-xl border border-white/5 group-hover/item:border-yellow-500/30 group-hover/item:text-yellow-400 transition-colors text-gray-400">
        <Icon size={14} />
      </div>
      <span className="text-gray-300 font-medium truncate group-hover/item:text-gray-100 transition-colors">{text}</span>
    </div>
  )

  return href ? (
    <a href={href} className="block hover:bg-white/5 -mx-2 px-2 py-1 rounded-lg transition-colors">
      {content}
    </a>
  ) : content
}

function SocialButton({ icon: Icon, href, label, highlight }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        p-3 rounded-xl border transition-all duration-300 flex items-center justify-center
        ${highlight 
          ? 'bg-green-600/10 text-green-500 border-green-500/20 hover:bg-green-500 hover:text-white hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]' 
          : 'bg-gray-800/50 text-gray-400 border-white/5 hover:bg-yellow-500 hover:text-gray-900 hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]'
        }
      `}
    >
      <Icon size={20} />
    </a>
  )
}

export default ProfileCard
