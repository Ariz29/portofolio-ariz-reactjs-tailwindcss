import React from "react";

const SkillCard = ({ Icon, title, progress, description, type }) => {
  
  const formatTypeLabel = (type) => {
    if (type === "fullstack") return "Fullstack Development";
    if (type === "data-science") return "Data Science";
    if (type === "tools") return "Core Tools";
    if (type === "soft-skills") return "Soft Skills";
    return type;
  };

  return (
    <div className="
      /* Sifat Dasar Card */
      bg-white dark:bg-slate-900/60 
      p-6 rounded-3xl 
      flex flex-col justify-between 
      transition-all duration-300 ease-in-out
      
      /* NORMAL MODE (LIGHT MODE) */
      border border-orange-100/70
      shadow-sm
      hover:-translate-y-1.5 
      hover:border-orange-400/80 
      hover:shadow-xl hover:shadow-orange-600/5
      
      /* DARK MODE (Memakai prefix dark: secara konsisten) */
      dark:border-slate-800/80 
      dark:hover:-translate-y-1.5
      dark:hover:border-orange-500/40
      dark:hover:shadow-[0_12px_25px_-5px_rgba(0,0,0,0.5),0_8px_20px_rgba(249,115,22,0.12)]
    ">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-orange-50 dark:bg-slate-800/50 rounded-2xl text-primary text-2xl">
            <Icon />
          </div>
          <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
            {formatTypeLabel(type)}
          </span>
        </div>

        <h5 className="text-[16px] font-bold text-slate-950 dark:text-white mb-1">{title}</h5>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-5 line-clamp-3 mb-4">{description}</p>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[11px] font-medium text-slate-400">Proficiency</span>
          <span className="text-xs font-bold text-primary">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;