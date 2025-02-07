import React from 'react';

function TabSection({ activeTab, setActiveTab, tabs }) {
  return (
    <div className="flex flex-wrap gap-2 bg-gray-900 p-2 rounded-lg mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            flex-grow px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors
            ${activeTab === tab.id ? "bg-yellow-500 text-gray-900" : "text-gray-300 hover:bg-gray-800"}
          `}
        >
          <div className="flex items-center justify-center gap-2">
            {tab.icon && <tab.icon className={activeTab === tab.id ? "text-gray-900" : "text-yellow-500"} />}
            {tab.name}
          </div>
        </button>
      ))}
    </div>
  )
}

export default TabSection

