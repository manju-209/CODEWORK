"use client";
import React from 'react'

const TextAnalyticsLanding = () => {
  return (
    <section className="relative bg-secondary w-full py-36 pl-36 overflow-hidden">
     

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 relative z-10">
        {/* Enhanced Text Card with Brand Colors */}
        <div className="md:w-5/12 bg-gradient-to-br from-secondary/40 via-secondary/60 to-secondary/80 backdrop-blur-xl border border-primary/20 p-8 pb-6 rounded-3xl text-primary z-20 -mr-28 md:-mr-32 self-end shadow-2xl shadow-secondary/25 hover:scale-105 transition-all duration-500 relative overflow-hidden">
          
          {/* Corner Decorations */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-primary text-sm font-medium">— NLP & Sentiment Analysis —</span>
          </div>

          {/* Enhanced Heading with Gradient Text */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Transforming Caregiver Communication with{" "}
            <span className="text-primary font-bold">
              Text Analytics
            </span>
          </h2>
          
          {/* Decorative underline */}
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mb-6"></div>
          
          {/* Enhanced Paragraph */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
          <p className="text-base md:text-lg w-[90%] leading-relaxed text-primary/90 pl-6 font-light">
            Communication is vital in caregiving, but often challenging. The <span className="text-primary font-medium">Text Analytics Project</span> uses technologies like <span className="text-primary font-medium">NLP</span> and <span className="text-primary font-medium">sentiment analysis</span> to turn conversations into insights, enhancing engagement and service quality.
          </p>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
        </div>

        {/* Enhanced Full-cover Image */}
        <div className="md:w-1/2 h-96 md:h-96 overflow-hidden rounded-3xl shadow-2xl z-10 relative group">
          {/* Image container with enhanced effects */}
          <div className="relative h-full">
            <img
              src="/CaseStudies/textt.jpg"
              alt="Text Analytics Communication Technology"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 via-transparent to-secondary/20 group-hover:from-secondary/20 group-hover:to-secondary/30 transition-all duration-500"></div>
            
            {/* Floating tech elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"/>
              </svg>
            </div>
            
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
              <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            
            {/* Enhanced border with glow effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-6px) rotate(2deg); }
          66% { transform: translateY(-3px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default TextAnalyticsLanding
