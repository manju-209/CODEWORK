"use client";
import React from "react";
import Link from "next/link";

const CaseStudiesLanding = () => {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:h-screen flex items-center bg-primary text-primary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/840843081452.jpg")' }}
        />
        <div className="absolute inset-0 bg-primary/5" />
      </div>
     
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-left pb-20 sm:pb-24 md:pb-28 lg:pb-16">
        
        {/* Heading Container */}
        <div className="heading-container pt-4 sm:pt-6 md:pt-8 lg:pt-10 mb-6 sm:mb-7 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-primary">
            <span className="text-secondary block sm:inline">Our Company </span>
            <span className="text-secondary block sm:inline">Case Study</span>
          </h1>
          
          {/* Decorative underline */}
          <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-3 sm:mt-4"></div>
        </div>

        {/* Paragraph Container */}
        <div className="paragraph-container mb-6 sm:mb-7 md:mb-8 space-y-4 sm:space-y-5 md:space-y-6">
          <div className="relative">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-secondary/90 pl-4 sm:pl-5 md:pl-6 font-light">
              Transforming <span className="font-medium">Challenges</span> into <span className="font-medium">Opportunities</span>.
            </p>
          </div>
        </div>

        {/* CTA Button - Positioned Responsively */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <Link
            href="/contact-ai-solutions"
            className="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 border-2 border-secondary text-secondary font-medium rounded-none bg-transparent hover:bg-secondary hover:text-primary transition-all duration-300 text-sm sm:text-base md:text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesLanding;
