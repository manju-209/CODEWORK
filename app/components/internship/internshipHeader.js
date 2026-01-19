"use client";
import React from "react";

const InternshipHeader = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-secondary overflow-hidden">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16">
          
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left pt-16 sm:pt-20 md:pt-24 lg:pt-20 pb-8 sm:pb-12 md:pb-16">

            {/* Heading */}
            <div className="heading-container mb-6 sm:mb-7 md:mb-8 lg:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
                Kickstart Your Career with Our{" "}
                <span className="text-primary">Internship Program</span>
              </h1>
              
              {/* Decorative underline */}
              <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-3 sm:mt-4 md:mt-5 lg:mt-6 mx-auto lg:mx-0"></div>
            </div>

            {/* Paragraph */}
            <div className="paragraph-container mb-6 sm:mb-7 md:mb-8 lg:mb-10 max-w-3xl mx-auto lg:mx-0">
              <div className="relative">
                <div className="absolute -left-2 sm:-left-3 md:-left-4 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full hidden lg:block"></div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary/90 leading-relaxed lg:pl-6 xl:pl-8 font-light">
                  Are you ready to gain real-world experience in <span className="text-primary font-medium">AI and technology</span>?
                  Join our internship program at Codework, where you'll learn, grow,
                  and contribute to <span className="text-primary font-medium">exciting projects</span>. Apply now and take the first
                  step toward your future!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Decoration - Responsive */}
      <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
        <div className="w-24 h-12 sm:w-32 sm:h-16 md:w-48 md:h-24 lg:w-64 lg:h-32 bg-gradient-to-l from-primary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default InternshipHeader;
