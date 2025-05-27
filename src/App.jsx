import ProfileCard from "./components/ProfileCard"
import ResumeSection from "./components/ResumeSection"
import React from "react"

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <div className="xl:col-span-1 order-1 xl:order-1">
          <ProfileCard />
        </div>
        <div className="xl:col-span-2 order-2 xl:order-2">
          <ResumeSection />
        </div>
      </div>
    </div>
  )
}

export default App
