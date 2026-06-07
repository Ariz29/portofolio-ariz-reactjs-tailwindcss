import React from "react"

const Tabs = ({ tabList, activeTab, onChange }) => {
  if (!tabList || tabList.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-1.5 bg-white p-1 rounded-full max-w-max mx-auto border border-amber-100 shadow-sm">
      {tabList.map((tab) => {
        const isActive = activeTab === tab.value;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.value)}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
              isActive
                ? "text-white bg-amber-500 shadow-sm scale-105" 
                : "text-slate-600 hover:text-amber-500 hover:bg-amber-50" 
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs