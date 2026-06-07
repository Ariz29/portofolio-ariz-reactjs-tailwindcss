import React from "react"

const ProjectCard = ({ imgUrl, title, tags }) => {
      return (
            /* PERBAIKAN UTAMA: 
               - Saat light mode: bg-white
               - Saat dark mode: Menggunakan gradasi miring dari slate-900 ke slate-950 (dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950)
               - Penyesuaian border agar lebih halus di mode gelap (dark:border-slate-800) */
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 rounded-3xl overflow-hidden shadow-md border border-orange-100/70 dark:border-slate-800/60 p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg">
                  
                  {/* Wadah Gambar Proyek */}
                  {imgUrl && (
                        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4 border dark:border-slate-800">
                              <img 
                                    src={imgUrl} 
                                    alt={title} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                              />
                        </div>
                  )}

                  {/* Bagian Konten Teks & Tags (Disatukan dalam flex-col agar tag naik nempel ke atas) */}
                  <div className="flex flex-col flex-1 justify-start">
                        <div>
                              <h5 className="text-[15px] font-bold text-slate-950 dark:text-white text-left leading-snug tracking-wide mb-3 whitespace-normal transition-colors duration-300">
                                    {title}
                              </h5>
                        </div>

                        {/* Bagian Tag / Badges: Sekarang langsung naik mendekati judul dengan margin-top kecil (mt-1) */}
                        <div className="flex flex-wrap gap-2 mt-1">
                              {tags && tags.map((tag, index) => (
                                    <span 
                                          key={index} 
                                          /* Menyesuaikan warna badge agar ramah dark mode (dark:bg-slate-800 dark:text-orange-400) */
                                          className="text-xs font-medium text-orange-700 bg-orange-100/60 dark:bg-slate-800/80 dark:text-orange-400 px-3 py-1.5 rounded-xl transition-colors duration-300"
                                    >
                                          {tag}
                                    </span>
                              ))}
                        </div>
                  </div>
            </div>
      )
}

export default ProjectCard