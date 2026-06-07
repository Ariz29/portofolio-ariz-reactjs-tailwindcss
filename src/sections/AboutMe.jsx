import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";
import PROFILE_PIC from "../assets/images/profile-pic2.jpg"
import { ABOUT_ME } from "../utils/data"
import { FaGraduationCap, FaBriefcase, FaAward, FaBuilding } from "react-icons/fa";

// --- KOMPONEN KUSTOM: EFEK TEKS DEKRIPSI HACKER (DURASI 0.5 DETIK) ---
const HackerText = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*_+=";

  useEffect(() => {
    let isMounted = true;
    let iteration = 0;
    let interval = null;

    const startEffect = () => {
      const stepSpeed = 25; 
      const totalSteps = 500 / stepSpeed; 
      const increment = text.length / totalSteps;

      interval = setInterval(() => {
        if (!isMounted) return;

        const scrambled = text
          .split("")
          .map((letter, index) => {
            if (letter === " " || letter === "," || letter === "." || letter === "•") return letter;
            
            if (index < iteration) {
              return text[index];
            }
            
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        setDisplayText(scrambled);

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += increment; 
      }, stepSpeed);
    };

    const timeoutId = setTimeout(startEffect, delay);

    return () => {
      isMounted = false;
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [text, delay]);

  return <span className={className}>{displayText || text}</span>;
};

const AboutMe = () => {
  // Mengambil data roles yang disesuaikan persis dengan komponen Hero sebelumnya
  const roles = ["Data Analyst Enthusiast", "Full Stack Developer", "Machine Learning Enthusiast"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Interval otomatis untuk mengubah teks peran secara dinamis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="about" className="container mx-auto px-6 lg:px-8 py-20 max-w-5xl">
      
      {/* MAIN TITLE */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h4 className="section-title font-montserrat text-slate-900 dark:text-white transition-colors duration-300">
          About Me
        </h4>
        
        <div className="w-12 h-[3px] bg-orange-500 rounded-full mt-2 mb-4"></div>
        
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 tracking-wider uppercase font-montserrat">
          My Background & Journey
        </p>
      </div>

      {/* CONTENT: DIBAGI MENJADI 2 KOLOM (GAMBAR & NARASI) */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start justify-between">
        
        {/* LEFT SIDE: Profile Picture (PERBAIKAN: Diatur menjadi w-full & max-w untuk efek full responsif) */}
        <div className="relative group w-full max-w-[350px] lg:max-w-[360px] flex-shrink-0">
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-amber-300 rounded-[14px] blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div className="w-full h-auto bg-white dark:bg-slate-900 border border-orange-100 dark:border-slate-800 rounded-[12px] overflow-hidden flex items-center justify-center shadow-md relative z-10">
            <img
              src={PROFILE_PIC}
              alt="Ariz Fadilah Tanjung"
              className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105"
            />
          </div>
        </div>
        
        {/* RIGHT SIDE: Narrative & Highlight Cards */}
        <div className="flex-1 w-full text-center lg:text-left">
          <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-montserrat transition-colors duration-300">
            Ariz Fadilah Tanjung, S.Mat.
          </h5>
          
          <div className="h-8 min-w-[280px] text-base md:text-lg font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wide mb-5 font-mono relative overflow-hidden flex justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="absolute whitespace-nowrap"
              >
                <HackerText key={currentRoleIndex} text={roles[currentRoleIndex]} delay={0} />
              </motion.span>
            </AnimatePresence>
          </div>
          
          {/* Narrative Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify transition-colors duration-300">
            Driven by an enthusiasm for mathematics and statistical analysis, I bridge the gap between complex data science and modern software development. Equipped with a robust foundation in mathematical logic, I specialize in engineering scalable web applications and developing data-driven computational systems—leveraging tools like Python and Laravel to transform metric complexities into actionable business intelligence.
          </p>
          
          {/* HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            
            {/* Education Card */}
            <div className="p-4 bg-orange-50/40 dark:bg-slate-900/40 border border-orange-100/70 dark:border-slate-800/80 rounded-xl text-center lg:text-left transition-colors duration-300">
              <FaGraduationCap className="text-xl text-orange-600 mx-auto lg:mx-0 mb-2" />
              <h6 className="text-xs font-bold text-slate-800 dark:text-slate-200">Education</h6>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                • <strong>Bachelor of Mathematics (Statistics)</strong><br />University of Lampung<br />
                <span className="inline-block mt-1">• <strong>Computer & Informatics Engineering (Software Engineering)</strong></span><br />SMK Negeri 1 Lahat (3rd Batch)
              </p>
            </div>

            {/* Internship Experience Card */}
            <div className="p-4 bg-orange-50/40 dark:bg-slate-900/40 border border-orange-100/70 dark:border-slate-800/80 rounded-xl text-center lg:text-left transition-colors duration-300">
              <FaBuilding className="text-xl text-orange-600 mx-auto lg:mx-0 mb-2" />
              <h6 className="text-xs font-bold text-slate-800 dark:text-slate-200">Internship</h6>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                • Software Engineer Intern at PT Perkebunan Nusantara I (formerly PTPN VII)<br />
                • Production & Expenditure Balance Intern at BPS
              </p>
            </div>

            {/* Core Focus Card */}
            <div className="p-4 bg-orange-50/40 dark:bg-slate-900/40 border border-orange-100/70 dark:border-slate-800/80 rounded-xl text-center lg:text-left transition-colors duration-300">
              <FaBriefcase className="text-xl text-orange-600 mx-auto lg:mx-0 mb-2" />
              <h6 className="text-xs font-bold text-slate-800 dark:text-slate-200">Core Expertise</h6>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Data Analysis, ML Modeling, & Fullstack Web Dev (Laravel/React)</p>
            </div>

            {/* Key Certifications Card */}
            <div className="p-4 bg-orange-50/40 dark:bg-slate-900/40 border border-orange-100/70 dark:border-slate-800/80 rounded-xl text-center lg:text-left transition-colors duration-300">
              <FaAward className="text-xl text-orange-600 mx-auto lg:mx-0 mb-2" />
              <h6 className="text-xs font-bold text-slate-800 dark:text-slate-200">Certifications</h6>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Associate Data Scientist & Fundamental of Deep Learning</p>
            </div>

          </div>

          {/* Social Media Links */}
          <div className="flex justify-center lg:justify-start gap-5 mt-8 border-t border-slate-100 dark:border-slate-800 pt-6">
            {ABOUT_ME.socialLinks.map((item) => (
              <a
                key={item.id}
                className="cursor-pointer group inline-block"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.label}
              >
                <item.icon className="text-xl text-slate-400 dark:text-slate-500 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
              </a>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default AboutMe