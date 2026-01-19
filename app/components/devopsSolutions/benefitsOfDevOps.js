"use client";
import React from 'react';

const BenefitsOfDevOps = () => {
  const benefits = [
    {
      title: "Faster Development Cycles",
      hoverText: "Accelerates software development and deployment."
    },
    {
      title: "Infrastructure Optimization",
      hoverText: "Optimizes infrastructure to support both cloud-native and hybrid environments."
    },
    {
      title: "Enhanced Collaboration",
      hoverText: "Facilitates effective communication between development and operations teams."
    },
    {
      title: "Integrated Security",
      hoverText: "Integrates security best practices across all stages of the development lifecycle."
    },
    {
      title: "Workflow Automation",
      hoverText: "Streamlines workflows by reducing manual effort and mitigating human error."
    }
  ];

  return (
    <div className="container mx-auto bg-secondary py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-14 relative overflow-hidden">
      
      <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10">
        {/* Left side - Title and subtitle */}
        <div className="w-full lg:w-1/3">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 sm:mb-5 md:mb-6 animate-fade-in-left"
          >
            Key Benefits of DevOps Solutions
          </h2>
          <p className="text-primary text-sm sm:text-base md:text-lg leading-relaxed animate-fade-in-left-delay">
            A well-designed DevOps strategy serves as the backbone of modern software development, influencing delivery speed and operational efficiency. Implementing professional DevOps solutions offers:
          </p>
        </div>
        
        {/* Right side - Benefits */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {benefits.map(({ title, hoverText }, index) => (
            <div 
              key={index} 
              className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-secondary/30 via-secondary/10 to-secondary/40 text-primary transition-all duration-500 relative overflow-hidden group min-h-[100px] sm:min-h-[110px] md:min-h-[120px] border border-secondary/20 cursor-pointer hover:scale-105 hover:rotate-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Static gradient overlay */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-secondary/20 via-secondary/10 to-secondary/20 animate-pulse-slow" />
              </div>
              
              {/* Animated hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-r from-secondary/60 to-secondary/40 animate-spin-slow" />
              </div>
              
              {/* Glowing border accent on hover */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl border border-secondary/30 group-hover:border-secondary/80 transition-all duration-500" />
              
              {/* Floating glow effect */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-secondary/40 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full">
                {/* Default title text */}
                <p className="font-bold text-base sm:text-lg md:text-xl group-hover:opacity-0 transition-opacity duration-300 absolute top-0 left-0 text-primary">
                  {title}
                </p>
                
                {/* Hover text */}
                <p className="font-medium text-primary text-xs sm:text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 right-0 leading-relaxed">
                  {hoverText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        .animate-fade-in-left-delay {
          animation: fade-in-left 0.8s ease-out 0.2s both;
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .floating-particles::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(0, 0, 0, 0.06) 1px, transparent 1px);
          animation: floating 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BenefitsOfDevOps;
