"use client";
import React from "react";
import Link from "next/link";

const CareersHeader = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-primary text-secondary overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
     
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-20 text-center lg:text-left">
        
        {/* Heading */}
        <div className="heading-container mb-6 sm:mb-7 md:mb-8 lg:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="text-secondary">Join Our </span>
            <span className="text-secondary">Team</span>
          </h1>
          
          {/* Decorative underline */}
          <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-3 sm:mt-4 md:mt-5 lg:mt-6 mx-auto lg:mx-0"></div>
        </div>

        {/* Text Content */}
        <div className="paragraph-container mb-8 sm:mb-9 md:mb-10 lg:mb-12 max-w-4xl mx-auto lg:mx-0">
          <div className="relative mb-6 sm:mb-7 md:mb-8">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-secondary/90 lg:pl-6 xl:pl-8 font-light">
              Shape the future with <span className="font-medium">AI technology</span>. 
              Join our team of <span className="font-medium">innovators</span>.
            </p>
          </div>

          {/* About Us Link Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
            <p className="text-sm sm:text-base md:text-lg text-secondary/90 mb-3 sm:mb-3.5 md:mb-4">
              Want to know our story?
            </p>
            <Link 
              href="/about-us" 
              className="inline-flex items-center bg-gradient-to-r from-primary to-primary/80 text-secondary font-bold px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-lg sm:rounded-xl hover:from-primary/90 hover:to-primary hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group text-sm sm:text-base"
            >
              <span className="relative z-10">About Us</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </Link>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto lg:mx-0">
          <div className="text-center lg:text-left">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-1 sm:mb-1.5">50+</div>
            <div className="text-secondary/70 text-xs sm:text-sm md:text-base">Team Members</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-1 sm:mb-1.5">Remote</div>
            <div className="text-secondary/70 text-xs sm:text-sm md:text-base">Work Options</div>
          </div>
          <div className="text-center lg:text-left col-span-2 md:col-span-1">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-1 sm:mb-1.5">AI</div>
            <div className="text-secondary/70 text-xs sm:text-sm md:text-base">Innovation</div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration - Responsive */}
      <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
        <div className="w-24 h-12 sm:w-32 sm:h-16 md:w-48 md:h-24 lg:w-64 lg:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default CareersHeader;
