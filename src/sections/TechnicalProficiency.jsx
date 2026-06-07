import React, { useState } from "react";
import { SKILL_TABS, SKILLS } from "../utils/data";
import SkillCard from "../components/SkillCard";

const TechnicalSkills = () => {
  const [activeSkillTab, setActiveSkillTab] = useState("all");

  const filteredSkills = SKILLS.filter((skill) => {
    if (activeSkillTab === "all") return true;
    return skill.type === activeSkillTab;
  });

  return (
    <section id="skills" className="py-16 max-w-6xl mx-auto px-6">
      
      {/* Header Section */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h4 className="section-title font-montserrat text-slate-900 dark:text-white transition-colors duration-300">
            Technical Skills
          </h4>
          
          {/* SEKARANG: Menggunakan warna oranye solid (bg-orange-500) */}
          <div className="w-12 h-[3px] bg-orange-500 rounded-full mt-2 mb-4"></div>
          
          <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-300 max-w-md">
            A comprehensive collection of technologies and core competencies I specialize in for software development and data science.
          </p>
        </div>

      {/* Filter Tabs Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {SKILL_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSkillTab(tab.value)}
            className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
              activeSkillTab === tab.value
                ? "bg-gradient-primary text-white shadow-md scale-105"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800 hover:border-orange-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid Container */}
      <div key={activeSkillTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.id}
            className="animate-popIn opacity-0"
            /* Controls staggering delay: card 1 delay 0ms, card 2 delay 75ms, etc. */
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <SkillCard
              Icon={skill.icon}
              title={skill.skill}
              progress={skill.progress}
              description={skill.description}
              type={skill.type}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;