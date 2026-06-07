import React from "react"

const ContactInfoCard = ({ icon, text }) => {
      return (
            <div className="flex items-center gap-4 bg-white/40 dark:bg-slate-900/60 border border-[#fee6cc] dark:border-slate-800 p-4 rounded-xl shadow-sm backdrop-blur-[5px] transition-all duration-300">
                  
                  {/* Container Ikon: Menggunakan warna utama oranye yang menyala di kedua mode */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-50 dark:bg-slate-800/80 text-orange-600 dark:text-orange-500 text-xl transition-colors duration-300">
                        {icon}
                  </div>
                  
                  {/* Container Teks: text-slate-700 (saat light) dan dark:text-slate-200 (saat dark) */}
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200 break-all transition-colors duration-300">
                        {text}
                  </p>
                  
            </div>
      )
}

export default ContactInfoCard