import React from "react"

const Footer = () => {
      return (
            <footer className="w-full bg-transparent pb-4 transition-colors duration-300 overflow-hidden">
                  <div 
                        className="w-[101%] -ml-[0.5%] text-xs text-center p-5 
                                   rounded-t-[50px] sm:rounded-t-[100px] 
                                   border-t-4 border-x-4 border-transparent 
                                   bg-[linear-gradient(to_right,#ffffff,#ffffff),_linear-gradient(to_right,rgba(156,163,175,0.5),rgba(241,245,249,0.5),rgba(156,163,175,0.5))] 
                                   dark:bg-[linear-gradient(to_right,#0f172a,#0f172a),_linear-gradient(to_right,rgba(75,85,99,0.5),rgba(148,163,184,0.5),rgba(75,85,99,0.5))] 
                                   bg-clip-[padding-box,_border-box] 
                                   bg-origin-[padding-box,_border-box] 
                                   shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]
                                   transition-colors duration-300"
                  >
                        <b className="text-slate-600 dark:text-slate-400">
                              Website Portfolio - Ariz Fadilah Tanjung
                        </b>
                  </div>
            </footer>
      )
}

export default Footer