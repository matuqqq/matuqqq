import ProfileCard from "./components/ProfileCard"
import ResumeSection from "./components/ResumeSection"
import React from "react"

function App() {
  return (
    <div className="relative min-h-screen bg-[#02040a] text-gray-100 overflow-x-hidden selection:bg-yellow-500/30 selection:text-white font-sans">
      
      {/* Liquid Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#03050a]">
        {/* Soft Liquid Blobs - Colores más suaves y mayor desenfoque */}
        <div className="absolute top-[-10%] left-[-10%] w-[100vw] h-[100vw] bg-yellow-500/[0.07] rounded-full animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[100vw] h-[100vw] bg-blue-600/[0.07] rounded-full animate-blob animation-delay-2000"></div>
        
        {/* Rejilla de líneas ultra fina en lugar de puntos */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        {/* Estrellas estáticas muy tenues (solo para dar profundidad) */}
        <div className="absolute inset-0">
           {[...Array(20)].map((_, i) => (
             <div 
               key={i}
               className="absolute w-px h-px bg-white rounded-full opacity-20"
               style={{
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`,
               }}
             />
           ))}
        </div>
      </div>

      {/* Main Content - Añadido z-10 para asegurar que esté sobre el fondo */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-12 xl:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          
          {/* Left Column: Profile Card (Sticky on Desktop) */}
          <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-8 z-20">
             <ProfileCard />
          </div>

          {/* Right Column: Resume Content */}
          <div className="lg:col-span-8 xl:col-span-9 w-full">
            <ResumeSection />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
