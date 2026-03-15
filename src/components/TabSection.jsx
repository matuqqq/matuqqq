import React from "react"

function TabSection({ activeTab, setActiveTab, tabs }) {
  return (
    <div className="sticky top-0 z-10 backdrop-blur-md bg-[#050505]/80 -mx-4 px-4 sm:mx-0 sm:px-0 py-4 mb-6 border-b border-white/5 sm:border-none sm:static sm:bg-transparent">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                nav-tab flex-shrink-0
                ${isActive ? "nav-tab-active" : "nav-tab-inactive"}
              `}
            >
              <Icon size={16} className={isActive ? "text-yellow-400" : "text-gray-500 group-hover:text-gray-300"} />
              <span>{tab.name}</span>
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default TabSection
