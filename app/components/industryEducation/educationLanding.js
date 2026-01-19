"use client";
import React from "react";

const EducationLanding = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/school.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-primary/70" />
      </div>


      {/* Main Content Container */}
      <div className="relative z-10 w-[80%] mx-auto px-4 text-left">
        {/* Section Badge */}
        <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
          Education Transformation
        </div>

        {/* Heading */}
        <div className="heading-container mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            AI in{" "}
            <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          {/* Decorative underline */}
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-4"></div>
        </div>

        {/* Paragraph */}
        <div className="paragraph-container max-w-3xl">
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light pl-4 border-l-4 border-secondary/50">
            AI is revolutionizing the education sector by personalizing learning, streamlining administration, and providing actionable insights. It helps educators deliver tailored content, improve student engagement, and forecast learning outcomes with greater accuracy.
          </p>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-40 h-20 bg-gradient-to-l from-secondary/40 to-transparent rounded-tl-full"></div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default EducationLanding;
