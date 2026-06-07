import React, { useEffect, useState } from "react";
import LOGO from "../assets/images/logo.png";
import { MENU_LINKS } from "../utils/data.js";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Tema Loader
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Resize Handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="container mx-auto sticky top-4 z-50 px-4 md:px-0 max-w-5xl">
      {/* Container Utama */}
      <div className="relative flex flex-row items-center justify-between rounded-full bg-white dark:bg-slate-900 border border-[#fee6cc]/60 dark:border-slate-700/60 m-4 p-3 md:py-1.5 md:px-5 shadow-sm transition-colors duration-500">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="h-7 md:h-10 ml-1 md:ml-2 py-0.5 object-contain" src={LOGO} alt="logo" />
        </div>

        {/* PERBAIKAN 1: Tombol ini HANYA muncul berupa Hamburger saat menu tertutup (hidden di Desktop) */}
        {!isOpen && (
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center md:hidden text-slate-800 dark:text-slate-300 focus:outline-none z-50 w-10 h-10"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className="block h-0.5 w-6 bg-current absolute top-2 transition-all duration-300 ease-in-out -translate-y-1.5"></span>
              <span className="block h-0.5 w-6 bg-current absolute top-2 transition-all duration-300 ease-in-out opacity-100"></span>
              <span className="block h-0.5 w-6 bg-current absolute top-2 transition-all duration-300 ease-in-out translate-y-1.5"></span>
            </div>
          </button>
        )}

        {/* Bagian Kanan Navbar */}
        <div className="flex flex-row items-center gap-6">
          {/* Navigation Links (Desktop) & Sidebar (Mobile) */}
          <ul
            className={`
              ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
              fixed md:static top-0 right-0 h-screen md:h-auto w-64 md:w-auto
              flex flex-col md:flex-row 
              items-end md:items-center 
              gap-4 md:gap-6 
              bg-white/80 dark:bg-slate-900/80 md:bg-transparent md:dark:bg-transparent
              pt-6 pb-10 px-8 md:p-0 
              border-none 
              rounded-l-[45px] md:rounded-none
              shadow-[-10px_0_30px_rgba(0,0,0,0.03)] dark:shadow-[-10px_0_30px_rgba(0,0,0,0.3)] md:shadow-none 
              z-50 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            `}
          >
            {/* PERBAIKAN 2: KONTROL ATAS MOBILE (Tombol X & Tema Switcher disatukan di baris ini) */}
            <li className="w-full md:hidden flex flex-row items-center justify-between h-10 mb-6">
              {/* Toggle Switcher Mobile */}
              <button
                onClick={toggleTheme}
                className={`flex justify-center items-center h-10 w-10 text-[18px] rounded-full shadow-sm active:scale-95 transition-all duration-300 ${
                  isDark 
                    ? "bg-white text-slate-900 border-transparent" 
                    : "bg-slate-900 text-white border-transparent"
                }`}
                aria-label="Toggle Theme"
              >
                {isDark ? "☀️" : "🌙"}
              </button>

              {/* Tombol X (Close) - Sekarang diletakkan di sini agar sejajar sempurna tepat di atas baris teks urutan list */}
              <button
                className="flex items-center justify-center text-slate-800 dark:text-slate-300 focus:outline-none w-10 h-10 -mr-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <div className="w-6 h-5 relative flex items-center justify-center">
                  <span className="block h-0.5 w-6 bg-current absolute rotate-45 transition-all duration-300 ease-in-out"></span>
                  <span className="block h-0.5 w-6 bg-current absolute -rotate-45 transition-all duration-300 ease-in-out"></span>
                </div>
              </button>
            </li>

            {/* Loop Menu Links */}
            {MENU_LINKS.map((item) => (
              <li key={item.id} className="w-full md:w-auto text-right">
                <Link
                  activeClass="active"
                  to={item.to}
                  smooth={true}
                  spy={true}
                  offset={item.offset}
                  className="menu-item block py-2.5 md:py-0 cursor-pointer text-slate-700 dark:text-slate-300 hover:text-orange-500 font-semibold md:font-medium text-[13px] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Switcher Desktop */}
          <button
            onClick={toggleTheme}
            className={`hidden md:flex justify-center items-center h-9 md:h-10 text-[13px] font-medium rounded-full px-6 transition-all duration-300 hover:scale-105 shadow-md ${
              isDark 
                ? "bg-white text-slate-900" 
                : "bg-slate-900 text-white"
            }`}
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;