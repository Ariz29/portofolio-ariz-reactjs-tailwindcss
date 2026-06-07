import React, { useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay" 
import { PORTFOLIO_TABS, PROJECTS, ORGANIZATIONS, CERTIFICATIONS } from "../utils/data"
import ProjectCard from "../components/ProjectCard"

const MyProjects = () => {
      const [activeTab, setActiveTab] = useState("projects")

      // 1. Carousel Configuration - PROJECTS
      const [emblaProjRef, emblaProjApi] = useEmblaCarousel(
            { loop: true, align: "start", duration: 30 },
            [Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })]
      )

      // 2. Carousel Configuration - ORGANIZATIONS
      const [emblaOrgRef, emblaOrgApi] = useEmblaCarousel(
            { loop: true, align: "start", duration: 30 },
            [Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true })]
      )

      // 3. Carousel Configuration - CERTIFICATIONS
      const [emblaCertRef, emblaCertApi] = useEmblaCarousel(
            { loop: true, align: "start", duration: 30 },
            [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
      )

      // Autoplay synchronization purely triggered upon tab changes
      useEffect(() => {
            const projAutoplay = emblaProjApi?.plugins().autoplay
            const orgAutoplay = emblaOrgApi?.plugins().autoplay
            const certAutoplay = emblaCertApi?.plugins().autoplay

            projAutoplay?.stop()
            orgAutoplay?.stop()
            certAutoplay?.stop()

            if (activeTab === "projects" && emblaProjApi) projAutoplay?.play()
            if (activeTab === "organizations" && emblaOrgApi) orgAutoplay?.play()
            if (activeTab === "certifications" && emblaCertApi) certAutoplay?.play()
            
      }, [activeTab, emblaProjApi, emblaOrgApi, emblaCertApi])

      return (
            <section id="portfolio" className="bg-transparent mt-14 max-w-6xl mx-auto relative transition-all duration-300">
                  <div className="container mx-auto px-8 md:px-14 py-10">
                        
                        {/* Section Main Title */}
                        <div className="w-full lg:w-[60vw] mx-auto text-center mb-10 flex flex-col items-center">
                              <h4 className="section-title text-slate-900 dark:text-white transition-colors duration-300">
                                    My Portfolio
                              </h4>
                              
                              {/* PERBAIKAN: Mengubah bg-gradient-primary menjadi warna oranye polos (bg-orange-500) */}
                              <div className="w-12 h-[3px] bg-orange-500 rounded-full mt-2 mb-4"></div>
                              
                              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300 transition-colors duration-300">
                                    Exploring my track record in technology systems development, statistical data analysis, and managerial contributions within student organizations.
                              </p>
                        </div>

                        {/* TAB NAVIGATION BUTTONS */}
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-12">
                              {PORTFOLIO_TABS.map((tab) => (
                                    <button
                                          key={tab.id}
                                          onClick={() => setActiveTab(tab.id)}
                                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                                                activeTab === tab.id
                                                      ? "bg-orange-500 text-white border-transparent shadow-sm scale-105"
                                                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-orange-100 dark:border-slate-800 hover:border-orange-400"
                                          }`}
                                    >
                                          {tab.label}
                                    </button>
                              ))}
                        </div>

                        {/* TAB 1: PROJECTS */}
                        {activeTab === "projects" && (
                              <div className="relative px-4 animate-fadeIn">
                                    <div className="overflow-hidden" ref={emblaProjRef}>
                                          <div className="flex -ml-4">
                                                {PROJECTS.map((project) => (
                                                      <div key={project.id} className="pl-4 flex-none w-full sm:w-1/2 lg:w-1/2">
                                                            <ProjectCard
                                                                  imgUrl={project.image}
                                                                  title={project.title}
                                                                  tags={project.tags}
                                                            />
                                                      </div>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        )}

                        {/* TAB 2: ORGANIZATIONS */}
                        {activeTab === "organizations" && (
                              <div className="relative px-4 animate-fadeIn">
                                    <div className="overflow-hidden" ref={emblaOrgRef}>
                                          <div className="flex -ml-4">
                                                {ORGANIZATIONS.map((org) => (
                                                      <div key={org.id} className="pl-4 flex-none w-full sm:w-1/2 lg:w-1/2">
                                                            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-5 rounded-3xl border border-orange-100/70 dark:border-slate-800/60 shadow-md flex flex-col h-full transition-all duration-300">
                                                                  {org.image && (
                                                                        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4 border dark:border-slate-800">
                                                                              <img src={org.image} alt={org.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"/>
                                                                        </div>
                                                                  )}
                                                                  <div className="flex flex-col flex-1 justify-between">
                                                                        <div>
                                                                              <span className="text-xs font-semibold text-orange-600 bg-orange-50 dark:bg-slate-800 dark:text-orange-400 px-3 py-1 rounded-md">
                                                                                    {org.period}
                                                                              </span>
                                                                              <h5 className="text-lg font-bold text-slate-950 dark:text-white mt-3">{org.role}</h5>
                                                                              <p className="text-sm font-medium text-orange-600/90 dark:text-orange-400/90 mb-3">{org.name}</p>
                                                                              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300 line-clamp-3">{org.desc}</p>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        )}

                        {/* TAB 3: CERTIFICATIONS */}
                        {activeTab === "certifications" && (
                              <div className="relative px-4 animate-fadeIn">
                                    <div className="overflow-hidden" ref={emblaCertRef}>
                                          <div className="flex -ml-4">
                                                {CERTIFICATIONS.map((cert) => (
                                                      <div key={cert.id} className="pl-4 flex-none w-full sm:w-1/2 lg:w-1/2">
                                                            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-5 rounded-3xl border border-orange-100/70 dark:border-slate-800/60 shadow-md flex flex-col h-full transition-all duration-300">
                                                                  {cert.image && (
                                                                        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4 border dark:border-slate-800">
                                                                              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"/>
                                                                        </div>
                                                                  )}
                                                                  <div className="flex flex-col flex-1 justify-between">
                                                                        <div>
                                                                              <h5 className="text-[16px] font-bold text-slate-950 dark:text-white leading-snug line-clamp-1">{cert.title}</h5>
                                                                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cert.issuer} • {cert.year}</p>
                                                                        </div>
                                                                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 font-mono">ID: {cert.credential}</p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        )}

                  </div>
            </section>
      )
}

export default MyProjects