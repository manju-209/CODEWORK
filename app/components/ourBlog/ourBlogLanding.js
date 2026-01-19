"use client";
import React from "react";

const OurBlogLanding = () => {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:h-screen flex items-center bg-primary text-secondary overflow-hidden">

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-0 pb-24 sm:pb-28 md:pb-32 lg:pb-20 flex flex-col items-center justify-center">
        
        {/* Content */}
        <div className="w-full text-left md:text-left">
          
          <div className="heading-container mb-6 sm:mb-7 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-secondary">
              <span className="text-secondary">Our </span>
              <span className="text-secondary">blogs</span>
            </h1>
            
            {/* Decorative underline */}
            <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-3 sm:mt-4"></div>
          </div>

          <div className="paragraph-container mb-8 sm:mb-10 md:mb-12">
            <div className="relative">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-secondary/90 pl-4 sm:pl-5 md:pl-6 font-light">
                Stay updated with the latest <span className="font-medium">news and insights</span> from our blog.
              </p>
            </div>
          </div>
        </div>
    
      </div>

      {/* Statistics - Responsive Positioning */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4">
        <div className="text-center">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">50+</div>
          <div className="text-secondary/80 text-xs sm:text-sm md:text-base">Articles</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">10K+</div>
          <div className="text-secondary/80 text-xs sm:text-sm md:text-base">Readers</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">Weekly</div>
          <div className="text-secondary/80 text-xs sm:text-sm md:text-base">Updates</div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(var(--rotate, 0deg));
          }
          50% {
            transform: translateY(-10px) rotate(var(--rotate, 0deg));
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bouncesSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-bounce-slow {
          animation: bouncesSlow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default OurBlogLanding;
