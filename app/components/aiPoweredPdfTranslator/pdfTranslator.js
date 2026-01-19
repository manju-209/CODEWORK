"use client";
import React from "react";

function PdfTranslator() {
  return (
    <div className="relative bg-secondary min-h-screen overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 py-12 relative z-10">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-primary mb-6">
            AI-Powered PDF Translator
          </h2>
          <p className="text-xl text-primary/90 max-w-4xl">
            AI-powered PDF Translator supporting Tamil, Hindi, Malayalam,
            Telugu, and Kannada while preserving original formatting.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </div>
  );
}

export default PdfTranslator;



