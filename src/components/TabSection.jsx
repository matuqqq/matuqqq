function TabSection({ activeTab, setActiveTab, tabs }) {
  return (
    <div className="bg-gray-900 p-2 rounded-lg mb-4 sm:mb-6 overflow-x-auto">
      <div className="flex gap-1 sm:gap-2 min-w-max sm:min-w-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex-shrink-0 sm:flex-grow px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap
              ${activeTab === tab.id ? "bg-yellow-500 text-gray-900" : "text-gray-300 hover:bg-gray-800"}
            `}
          >
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              {tab.icon && (
                <tab.icon
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${activeTab === tab.id ? "text-gray-900" : "text-yellow-500"}`}
                />
              )}
              <span className="hidden xs:inline sm:inline">{tab.name}</span>
              <span className="xs:hidden sm:hidden">{tab.name.split(" ")[0]}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default TabSection
