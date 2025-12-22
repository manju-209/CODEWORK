"use client";
import React from "react";

const TestimonialClient = () => {
  return (
    <div className="bg-primary text-primary relative overflow-hidden px-6 md:py-20  space-y-20">

      {/* Section Header */}
      <div className="text-center mb-20 relative z-10">        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          <span className="text-primary">What Our </span>
          <span className="text-primary">
            Clients Say
          </span>
        </h2>
        
        <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto"></div>
      </div>

      {/* First Testimonial (Left Image) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto relative z-10">
        {/* Enhanced Left Image Container */}
        <div className="relative flex items-center justify-center group">
          {/* Outer Glow Ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/30 rounded-full blur-2xl scale-125 opacity-60 group-hover:scale-130 transition-all duration-700"></div>
          
          {/* Rotating Border Ring */}
          <div className="absolute inset-0 w-80 h-80 rounded-full border-2 border-secondary/30 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute inset-4 w-72 h-72 rounded-full border border-secondary/20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
          
          {/* Main Image Frame */}
          <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-secondary/40 via-secondary/60 to-secondary/80 p-1 shadow-2xl shadow-secondary/20 group-hover:scale-105 transition-all duration-500">
            <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-xl border border-white/20 p-8 flex items-center justify-center relative overflow-hidden">
              {/* Image */}
              <img
                src="/testimonial/Testimonials1.svg"
                alt="WebSignX"
                className="h-48 w-auto object-contain z-10 relative group-hover:scale-110 transition-all duration-500"
              />
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-8 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-6 w-1 h-1 bg-secondary/60 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-secondary/80 rounded-full animate-ping"></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 via-transparent to-secondary/20 rounded-full pointer-events-none"></div>
            </div>
          </div>
          
          
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
