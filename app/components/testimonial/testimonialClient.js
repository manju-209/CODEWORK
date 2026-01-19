"use client";
import React, { useEffect, useMemo, useState } from "react";

const TestimonialClient = () => {
<<<<<<< HEAD
  return (
    <div className="bg-primary text-primary relative overflow-hidden px-6 md:py-20  space-y-20">

      {/* Section Header */}
      <div className="text-center mb-20 relative z-10">        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          <span className="text-primary">What Our </span>
          <span className="text-primary">
            Clients Say
          </span>
=======
  const testimonials = useMemo(
    () => [
      {
        name: "Johnson R",
        role: "Delivery Manager – WebSignX Technologies",
        avatar: "/testimonial/webmainlogo.png",
        quote:
          "The Codework team demonstrated exceptional expertise by collaborating in developing our ticket booking application project. Their attention to detail, seamless integration of features, and commitment to meeting deadlines made this project a success. We are thoroughly impressed with their technical proficiency and look forward to future collaborations.",
      },
      {
        name: "Bikram Bakshi",
        role: "Entrepreneur & Tech Innovator",
        avatar: "/testimonial/cwmainlogo.png",
        quote:
          "It's rare to find partners who go above and beyond their scope of work. Your proactive thinking and self-initiative in providing insightful ideas have truly elevated our product to new heights. The innovative contributions you've made, coupled with your commitment to understanding our vision, have played a pivotal role in shaping the product into what it is today.",
      },
      {
        name: "Johnson R",
        role: "Entrepreneur & Tech Innovator",
        avatar: "/testimonial/Testimonials3.svg",
        quote:
          "We are extremely pleased with the Codework team's exceptional work in developing our website. Their technical expertise, attention to detail, and seamless execution exceeded our expectations. From design to functionality, they ensured that every aspect was well-integrated and user-friendly. Their commitment to meeting deadlines and delivering high-quality results made this project a great success. We look forward to collaborating with them again on future projects.",
      },
      {
        name: "Lovio Team",
        role: "Entrepreneur & Tech Innovator",
        avatar: "/testimonial/loviomainlogo.png",
        quote:
          "Partnering with CODEWORK has completely transformed the way we run our e-commerce dropshipping business. Their AI-powered automation solutions simplified our market research process and gave us valuable insights that used to take days to gather. The seamless sales platform integration they built has not only saved us time but also helped us scale with efficiency. With CODEWORK's expertise, we feel truly empowered to focus on growth while technology takes care of the complexities. A real game-changer for Lovio!",
      },
    ],
    []
  );
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderCard = (t, position) => {
    const isReducedLogo =
      t.avatar === "/testimonial/cwmainlogo.png" ||
      t.avatar === "/testimonial/loviomainlogo.png";
    const isCenter = position === "center";
    
    // Responsive translate values
    const getTranslate = () => {
      if (position === "left") return "translate(-120%, 0)";
      if (position === "right") return "translate(20%, 0)";
      return "translate(-50%, 0)";
    };
    
    const scale = isCenter ? 1.12 : 0.88;
    const z = isCenter ? 30 : 20;
    const opacity = isCenter ? 1 : 0.7;
    const visibility = isCenter ? 'visible' : isMobile ? 'hidden' : 'visible';
    
    return (
      <div
        className="absolute left-1/2 top-0 w-[95%] sm:w-[85%] md:w-[70%] lg:w-[65%] xl:w-[720px]"
        style={{
          transform: `${getTranslate()} scale(${scale})`,
          transition: "transform 600ms ease, opacity 600ms ease",
          zIndex: z,
          opacity,
          visibility,
        }}
      >
        <div className="relative ">
          <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full ring-2 sm:ring-4 ring-white shadow-xl overflow-hidden bg-white">
            <img
              src={t.avatar}
              alt={t.name}
              className={`w-full h-full object-contain ${isReducedLogo ? "p-2 sm:p-3" : "p-1.5 sm:p-2"}`}
            />
          </div>
          <div className="bg-white text-primary rounded-xl sm:rounded-2xl shadow-2xl border border-white/60 p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="pt-6 sm:pt-8 md:pt-10 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{t.name}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1">{t.role}</p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4 sm:mt-6 md:mt-8 italic text-center text-sm sm:text-base md:text-lg">
              {t.quote}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-primary text-secondary relative overflow-hidden px-4 sm:px-6 py-12 sm:py-16 md:py-20 space-y-12 sm:space-y-16 md:space-y-20">
      {/* Header Section */}
      <div className="text-center mb-16 sm:mb-16 md:mb-20 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-8 md:mb-8 text-secondary">
          <span className="text-secondary">What Our </span>
          <span className="text-secondary">Clients Say</span>
>>>>>>> newchange
        </h2>
        
      </div>

      {/* Carousel Section */}
      <div className="relative max-w-7xl pt-24 sm:pt-24 md:pt-20 mx-auto h-[450px] sm:h-[480px] md:h-[520px] lg:h-[560px] xl:h-[580px]">
        {renderCard(testimonials[(active - 1 + testimonials.length) % testimonials.length], "left")}
        {renderCard(testimonials[active], "center")}
        {renderCard(testimonials[(active + 1) % testimonials.length], "right")}
        
        {/* Navigation Controls */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-40">
          <button
            aria-label="Previous testimonial"
            onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
            className="bg-white/20 backdrop-blur-sm border border-white/40 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition text-lg sm:text-xl"
          >
            ‹
          </button>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition ${
                  i === active ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
<<<<<<< HEAD
          
          
        </div>

        {/* Right Testimonial Box */}
        <div className="bg-secondary/30 backdrop-blur-xl border border-white/10 text-primary p-8 rounded-3xl shadow-2xl max-w-2xl hover:bg-secondary/40 hover:border-white/30 transition-all duration-500 relative">
  

          <p className="text-lg leading-relaxed text-primary/90 mb-6 italic">
            "The Codework team demonstrated exceptional expertise by collaborating
            in developing our ticket booking application project. Their attention
            to detail, seamless integration of features, and commitment to meeting
            deadlines made this project a success. We are thoroughly impressed with
            their technical proficiency and look forward to future collaborations."
          </p>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center text-primary font-bold text-lg">
              J
            </div>
            <div>
              <p className="font-bold text-primary text-lg">Johnson R</p>
              <p className="text-primary/80 text-sm">
                Delivery Manager – WebSignX Technologies
              </p>
            </div>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        </div>
      </div>

      {/* Second Testimonial (Right Image) */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto relative z-10">
        {/* Left Testimonial Box */}
        <div className="bg-secondary/30 backdrop-blur-xl border border-white/10 text-primary p-8 rounded-3xl shadow-2xl max-w-2xl hover:bg-secondary/40 hover:border-white/30 transition-all duration-500 relative">

          <p className="text-lg leading-relaxed text-primary/90 mb-6 italic">
            "It's rare to find partners who go above and beyond their scope of work.
            Your proactive thinking and self-initiative in providing insightful ideas
            have truly elevated our product to new heights. The innovative
            contributions you've made, coupled with your commitment to understanding
            our vision, have played a pivotal role in shaping the product into what
            it is today."
          </p>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center text-primary font-bold text-lg">
              B
            </div>
            <div>
              <p className="font-bold text-primary text-lg">Bikram Bakshi</p>
              <p className="text-primary/80 text-sm">Entrepreneur & Tech Innovator</p>
            </div>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        </div>

        {/* Enhanced Right Image Container with Hexagonal Design */}
        <div className="relative flex items-center justify-center group">
          {/* Outer Pulse Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/25 to-secondary/35 rounded-full blur-3xl scale-110 opacity-70 group-hover:scale-125 animate-pulse transition-all duration-700"></div>
          
          {/* Hexagonal Frame */}
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Hexagon Shape */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-secondary/50 transform rotate-12 group-hover:rotate-0 transition-all duration-700"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}
            ></div>
            
            {/* Inner Hexagon */}
            <div 
              className="absolute inset-4 bg-white/5 backdrop-blur-xl transform -rotate-12 group-hover:rotate-12 transition-all duration-700 border border-white/20"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}
            ></div>
            
            {/* Image Container */}
            <div className="relative w-56 h-56 bg-secondary/40 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl shadow-secondary/20 group-hover:scale-105 transition-all duration-500 border border-white/10">
              <img
                src="/testimonial/Testimonials2.svg"
                alt="Client Image"
                className="h-40 w-auto object-contain z-10 group-hover:scale-110 transition-all duration-500"
              />
              
              {/* Animated Corner Elements */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-secondary/30 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Floating Tech Icons */}
          <div className="absolute top-4 -right-8 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center animate-float group-hover:animate-bounce">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Third Testimonial (Left Image) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto relative z-10">
        {/* Enhanced Left Image Container with Modern Card Design */}
        <div className="relative flex items-center justify-center group">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/50 rounded-3xl blur-3xl scale-110 opacity-60 group-hover:scale-120 transition-all duration-700"></div>
          
          {/* Modern Card Frame */}
          <div className="relative w-80 h-96 bg-gradient-to-br from-white/10 via-white/5 to-secondary/30 backdrop-blur-xl rounded-3xl p-6 shadow-2xl shadow-secondary/25 border border-white/20 group-hover:scale-105 transition-all duration-500">
            
            {/* Top Accent Bar */}
            <div className="w-full h-2 bg-gradient-to-r from-secondary via-secondary/60 to-transparent rounded-full mb-6"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-64 bg-secondary/20 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10">
              <img
                src="/testimonial/Testimonials3.svg"
                alt="WebSignX"
                className="h-52 w-auto object-contain z-10 group-hover:scale-110 transition-all duration-500"
              />
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-secondary/20"></div>
              
              {/* Floating Geometric Shapes */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-secondary/60 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-secondary/40 rounded-full animate-pulse"></div>
            </div>
            
            {/* Bottom Info Strip */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <div className="w-2 h-2 bg-secondary/60 rounded-full"></div>
                <div className="w-2 h-2 bg-secondary/30 rounded-full"></div>
              </div>
              <div className="text-xs text-primary font-medium">Trusted Partner</div>
            </div>
          </div>
          
          {/* Side Accent Elements */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-12 h-24 bg-gradient-to-r from-secondary/20 to-transparent rounded-r-full"></div>
          <div className="absolute -right-4 top-1/3 w-8 h-16 bg-gradient-to-l from-secondary/15 to-transparent rounded-l-full"></div>
        </div>

        {/* Right Testimonial Box */}
        <div className="bg-secondary/30 backdrop-blur-xl border border-white/10 text-primary p-8 rounded-3xl shadow-2xl max-w-2xl hover:bg-secondary/40 hover:border-white/30 transition-all duration-500 relative">

          <p className="text-lg leading-relaxed text-primary/90 mb-6 italic">
            "We are extremely pleased with the Codework team's exceptional work in developing our website. Their technical expertise, attention to detail, and seamless execution exceeded our expectations. From design to functionality, they ensured that every aspect was well-integrated and user-friendly. Their commitment to meeting deadlines and delivering high-quality results made this project a great success. We look forward to collaborating with them again on future projects."
          </p>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center text-primary font-bold text-lg">
              J
            </div>
            <div>
              <p className="font-bold text-primary text-lg">Johnson R</p>
              <p className="text-primary/80 text-sm">
                Entrepreneur & Tech Innovator
              </p>
            </div>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        </div>
      </div>

      {/* third Testimonial (Right Image) */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto relative z-10">
        {/* Left Testimonial Box */}
        <div className="bg-secondary/30 backdrop-blur-xl border border-white/10 text-white p-8 rounded-3xl shadow-2xl max-w-2xl hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 relative">

          <p className="text-lg leading-relaxed text-primary/90 mb-6 italic">
            "Partnering with CODEWORK has completely transformed the way we run our e-commerce dropshipping business. Their AI-powered automation solutions simplified our market research process and gave us valuable insights that used to take days to gather. The seamless sales platform integration they built has not only saved us time but also helped us scale with efficiency. With CODEWORK’s expertise, we feel truly empowered to focus on growth while technology takes care of the complexities. A real game-changer for Lovio!"
          </p>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center text-primary font-bold text-lg">
              L
            </div>
            <div>
              <p className="font-bold text-primary text-lg">Lovio Team</p>
              <p className="text-primary/80 text-sm">Entrepreneur & Tech Innovator</p>
            </div>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>

        {/* Enhanced Right Image Container with Hexagonal Design */}
        <div className="relative flex items-center justify-center group">
          {/* Outer Pulse Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/25 to-primary/35 rounded-full blur-3xl scale-110 opacity-70 group-hover:scale-125 animate-pulse transition-all duration-700"></div>
          
          {/* Hexagonal Frame */}
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Hexagon Shape */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/50 transform rotate-12 group-hover:rotate-0 transition-all duration-700"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}
            ></div>
            
            {/* Inner Hexagon */}
            <div 
              className="absolute inset-4 bg-white/5 backdrop-blur-xl transform -rotate-12 group-hover:rotate-12 transition-all duration-700 border border-primary/20"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}
            ></div>
            
            {/* Image Container */}
            <div className="relative w-56 h-56 bg-secondary/40 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/20 group-hover:scale-105 transition-all duration-500 border border-white/10">
              <img
                src="/testimonial/lovioo.svg"
                alt="Client Image"
                className="h-40 w-auto object-contain z-10 group-hover:scale-110 transition-all duration-500"
              />
              
              {/* Animated Corner Elements */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Floating Tech Icons */}
          <div className="absolute top-4 -right-8 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center animate-float group-hover:animate-bounce">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-64 h-32 bg-gradient-to-l from-primary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Custom CSS for Additional Animations */}
=======
          <button
            aria-label="Next testimonial"
            onClick={() => setActive((active + 1) % testimonials.length)}
            className="bg-white/20 backdrop-blur-sm border border-white/40 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition text-lg sm:text-xl"
          >
            ›
          </button>
        </div>
      </div>

      {/* Hidden Content */}
      <div className="hidden">
        {/* ... all your hidden content remains the same ... */}
      </div>

      {/* Bottom Decoration - Responsive */}
      <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
        <div className="w-32 h-16 sm:w-48 sm:h-24 md:w-64 md:h-32 bg-gradient-to-l from-primary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Custom CSS for Animations */}
>>>>>>> newchange
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialClient;
