"use client";
import React from "react";
import Image from "next/image";
import Marquee from 'react-fast-marquee';
import {
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiOpenjdk,
  SiR,
  SiMicrosoftazure,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiTypescript,
  SiPostgresql
} from 'react-icons/si';

const DrivingInnovation = () => {
  // Enhanced Technology Icons Data with fallback handling
  const technologyIcons = [
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "Java", Icon: SiOpenjdk, color: "#ED8B00" },
    { name: "R Language", Icon: SiR, color: "#276DC3" },
    { name: "Microsoft Azure", Icon: SiMicrosoftazure, color: "#0078D4" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
    { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  ];
 
  return (
    <section className="bg-primary w-full py-16 pt-8 relative sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-blob animation-delay-1000"></div>
      </div> */}
 
      {/* Floating Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
      </div> */}
 
 
 
      {/* Enhanced Technology Showcase Section */}
      <div className="relative mt-20 min-h-[40vh] sm:min-h-[50vh] flex items-end">
        <div className="w-full mx-auto text-center relative z-10">
         
          {/* Enhanced Section Header */}
          <div className="mb-12">
            <div >
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              <span className="text-primary">Technologies We </span>
              <span className="text-primary">
                Master
              </span>
            </h3>
            <p className="text-primary text-lg max-w-3xl mx-auto leading-relaxed">
              Powered by the latest technologies and frameworks for cutting-edge solutions
            </p>
          </div>
 
          {/* Enhanced Technology Container with Equal Sized Cards */}
          <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/20 w-full min-h-[200px] sm:min-h-[240px] p-8 sm:p-10 md:p-12 rounded-tl-[100px] rounded-tr-[100px] sm:rounded-tl-[140px] sm:rounded-tr-[140px] shadow-2xl">
                       
            {/* Enhanced Marquee with Equal Sized Cards */}
            <Marquee
              speed={35}
              gradient={false}
              pauseOnHover
              direction="left"
              loop={0}
              className="py-8"
            >
              {technologyIcons.map((tech, index) => {
                const IconComponent = tech.Icon;
               
                // Safety check to ensure icon exists
                if (!IconComponent) {
                  return null;
                }
 
                return (
                  <div key={index} className="mx-6 sm:mx-8 flex flex-col items-center justify-center group">
                    {/* Fixed size container for all cards */}
                    <div className="relative w-24 h-32 sm:w-28 sm:h-36 flex flex-col items-center justify-between p-4 rounded-2xl bg-white/10  border border-white/20 hover:border-secondary/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-secondary/25">
                     
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     
                      {/* Technology Icon - Fixed position */}
                      <div className="flex-shrink-0 mt-2">
                        <IconComponent
                          size={32}
                          className="relative z-10 transition-all duration-500 group-hover:scale-110"
                          style={{ color: tech.color }}
                        />
                      </div>
                     
                      {/* Technology Name - Always visible and centered */}
                      <div className="flex-1 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary tracking-wide text-center leading-tight">
                          {tech.name}
                        </span>
                      </div>
 
                      {/* Floating indicator */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                    </div>
                  </div>
                );
              })}
            </Marquee>
 
            {/* Enhanced floating tech particles */}
           
 
            {/* Gradient overlay for depth */}
          </div>
        </div>
      </div>
 
      {/* Enhanced Bottom Decoration */}
 
      {/* Enhanced CSS Animations */}
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
 
        .animate-blob {
          animation: blob 7s infinite;
        }
 
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
 
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
 
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
 
        .animation-delay-1000 {
          animation-delay: 1s;
        }
 
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
 
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
 
        .animation-delay-1800 {
          animation-delay: 1.8s;
        }
 
        .animation-delay-2000 {
          animation-delay: 2s;
        }
 
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};
 
export default DrivingInnovation;
 
 