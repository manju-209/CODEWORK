"use client";
import React from "react";

const AiPdfLanding = () => {
  return (
    <section className="relative bg-secondary pl-36 w-full py-36 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-secondary/15 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary">
          AI-Powered PDF Translator
        </h1>
      </div>
    </section>
  );
};

export default AiPdfLanding;
