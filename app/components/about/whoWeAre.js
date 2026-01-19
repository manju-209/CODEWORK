import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section className="bg-primary text-secondary relative overflow-hidden py-16 md:py-20 lg:py-24">
    
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 space-y-16 md:space-y-20">

        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6 md:mb-8">
            <span className="text-secondary text-sm font-medium">— About Our Company —</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-secondary">
            <span className="text-secondary">Get to Know </span>
            <span className="text-secondary">
              Codework
            </span>
          </h1>
          
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">Why Choose Codework?</h2>
            <p className="text-secondary/90 text-base md:text-lg leading-relaxed">
              We specialize in crafting innovative AI-based products tailored to your business needs. From development to deployment, we ensure seamless technology integration. We design solutions that prioritize user experience and real-world impact, leveraging proven technologies like React.js, Java, Python, Azure, AWS, R, and Next.js.
            </p>
          </div>
          <div>
            <img
              src="/Whychooseus/team2.jpg"
              alt="Codework"
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/Whychooseus/team1.jpg"
              alt="Team"
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-none"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">Our Mission & Vision</h2>
            <p className="text-secondary/90 text-base md:text-lg leading-relaxed">
              Our mission is to leverage our expertise in software development to create meaningful solutions that benefit society while ensuring that our top talent shares in our organization's success.
            </p>
            <p className="text-secondary/90 text-base md:text-lg leading-relaxed">
              Our vision is to lead the way in delivering innovative and transformative technology solutions that reshape industries and empower businesses globally. We strive to create a future where our software and services drive digital transformation, helping organizations optimize operations, boost efficiency, and unlock new growth opportunities.
            </p>
          </div>
        </div>

      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-primary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default WhoWeAre;
