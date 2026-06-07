import React, { useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import PROFILE_PIC from "../assets/images/profile-pic.jpg";
import { STATS } from "../utils/data";

// --- KOMPONEN KUSTOM: EFEK TEKS DEKRIPSI HACKER (OPTIMAL DI HP & LAPTOP) ---
const HackerText = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*_+=";

  useEffect(() => {
    let isMounted = true;
    let iteration = 0;
    let interval = null;

    const startEffect = () => {
      // Menghitung kecepatan interval agar pas selesai dalam durasi ~500ms
      const stepSpeed = Math.max(10, Math.floor(500 / text.length)); 

      interval = setInterval(() => {
        if (!isMounted) return;

        const scrambled = text
          .split("")
          .map((letter, index) => {
            // Karakter spasi dan tanda baca tidak diacak agar tetap rapi di layar HP
            if (letter === " " || letter === "," || letter === ".") return letter;
            
            // Jika indeks sudah terlewati oleh iterasi bulat, tampilkan huruf asli
            if (index < iteration) {
              return text[index];
            }
            
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        setDisplayText(scrambled);

        // Berhenti total jika iterasi bulat sudah mencapai panjang teks asli
        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text); // Memastikan teks akhir 100% akurat tanpa sisa acak
        }

        iteration += 1; // Menggunakan angka bulat agar ringan dan pasti tereksekusi di HP
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

// --- KOMPONEN UTAMA HERO ---
const Hero = () => {
  const roles = ["Data Analyst Enthusiast", "Full Stack Developer", "Machine Learning Enthusiast"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section id="hero" className="container mx-auto px-6 lg:px-8 pt-12 md:pt-16 pb-12 max-w-5xl bg-transparent">
      <motion.div 
        className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Sisi Kiri: Teks dan Tombol */}
        <div className="order-2 lg:order-1 text-center lg:text-left w-full lg:flex-1">
          <motion.h3 
            variants={itemVariants}
            className="text-lg lg:text-2xl font-semibold text-slate-900 dark:text-white transition-colors duration-300 font-mono"
          >
            <HackerText text="Hi, My Name Is Ariz Fadilah Tanjung, S.Mat." delay={100} />
          </motion.h3>
          
          <motion.h1 
            variants={itemVariants}
            className="w-full max-w-[480px] mx-auto lg:mx-0 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[60px] mt-3 text-orange-500 font-mono tracking-tight"
          >
            <HackerText text="This is my Portfolio, Let's Connect!" delay={250} />
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="w-full max-w-[460px] mx-auto lg:mx-0 text-sm lg:text-base mt-4 text-slate-700 dark:text-slate-300 transition-colors duration-300 leading-relaxed bg-transparent"
          >
            <span>I'm a passionate</span>
            
            <span className="inline-flex relative h-6 w-[165px] align-top text-orange-600 font-semibold mx-1 bg-transparent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 whitespace-nowrap bg-transparent"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>

            <span className="block mt-1 text-slate-600 dark:text-slate-400 font-normal bg-transparent">
              from Indonesia and I'm interested in joining a development company. If you have any opportunities or just want to connect, feel free to reach out!.
            </span>
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-4 mt-6"
          >
            <a
              href="./CV_Resume_Ariz Fadilah Tanjung_FreshGraduate.pdf"
              download="CV_Resume_Ariz Fadilah Tanjung_FreshGraduate.pdf"
              className="action-btn btn-scale-anim flex items-center justify-center px-6 py-3 rounded-full font-medium text-[14px] bg-orange-500 text-white shadow-md hover:scale-105 transition-transform"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Sisi Kanan: Foto Profil */}
        <div className="order-1 lg:order-2 flex justify-center w-full lg:w-auto lg:-translate-y-12">
          <motion.div 
            className="w-[280px] md:w-[350px] h-[380px] md:h-[420px] bg-orange-100/50 dark:bg-slate-800/40 border border-transparent dark:border-slate-700 rounded-3xl relative transition-all duration-300 z-10"
            variants={profileVariants}
          >
            <img src={PROFILE_PIC} alt="Profile" className="profile-pic w-full h-full object-cover rounded-3xl" />
          </motion.div>
        </div>
      </motion.div>

      {/* Bagian Bawah: Kartu Statistik */}
      <motion.div 
        className="flex justify-center gap-6 lg:gap-12 mt-20 md:mt-28 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {STATS.map((item) => (
          <div 
            key={item.id} 
            className="flex-1 min-w-[140px] max-w-[200px] flex flex-col items-center text-center p-5 bg-white/40 dark:bg-slate-900/60 border border-[#fee6cc] dark:border-slate-800 rounded-2xl shadow-sm backdrop-blur-[5px] transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-orange-600">
              {item.count}
            </h3>
            <p className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-pre-line mt-2 leading-snug transition-colors duration-300">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;