"use client";
import React from "react";

const TestimonialLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[90vh] md:h-screen flex items-center pb-10 bg-primary text-primary overflow-hidden">
      
      {/* Main Content Container */}
      <div className="relative z-10 w-[80%] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content Section */}
        <div className="w-full md:w-2/3 text-left">
          

          {/* Enhanced Heading */}
          <div className="heading-container mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary">
              <span className="text-primary">Client </span>
              <span className="text-primary">
                Testimonials
              </span>
            </h1>
            
            {/* Decorative underline */}
            <div className="w-28 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-4"></div>
          </div>

          {/* Enhanced Paragraph */}
          <div className="paragraph-container mb-12">
            <div className="relative">
              <p className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl leading-relaxed text-primary/90 pl-6 font-light">
                Hear from our clients! Discover how our services have made a <span className="text-primary font-medium">lasting impact</span>. 
                Their words inspire us to keep delivering <span className="text-primary font-medium">exceptional results</span>.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Enhanced Statistics */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">100+</div>
          <div className="text-primary/80 text-sm">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">100%</div>
          <div className="text-primary/80 text-sm">Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">5.0</div>
          <div className="text-primary/80 text-sm">Average Rating</div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-64 h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default TestimonialLanding;
