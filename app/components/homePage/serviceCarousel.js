"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { servicesData } from '../services/ourServices';

const AIKeynoteCarousel = () => {
  const topics = servicesData;

  const [activeIndex, setActiveIndex] = useState(2);
  const topNavContainerRef = useRef(null);
  const topBtnRefs = useRef([]);
  const scrollBehaviorRef = useRef('auto');
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (isInteracting) return;
    const interval = setInterval(() => {
      scrollBehaviorRef.current = 'auto';
      setActiveIndex((prev) => (prev + 1) % topics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [topics.length, isInteracting]);

  const handlePrev = () => {
    scrollBehaviorRef.current = 'smooth';
    setActiveIndex((prev) => (prev - 1 + topics.length) % topics.length);
  };

  const handleNext = () => {
    scrollBehaviorRef.current = 'smooth';
    setActiveIndex((prev) => (prev + 1) % topics.length);
  };

  useEffect(() => {
    const el = topBtnRefs.current[activeIndex];
    const container = topNavContainerRef.current;
    if (!el || !container) return;
    if (scrollBehaviorRef.current !== 'smooth') return;
    const target =
      el.offsetLeft - container.clientWidth / 2 + el.clientWidth / 2;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const clamped = Math.max(0, Math.min(target, maxScroll));
    container.scrollTo({ left: clamped, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <div className="min-h-screen pt-16 md:pt-20 lg:pt-24 bg-secondary text-primary">
      {/* Top Carousel Navigation */}
      <div className="relative px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between max-w-7xl mx-auto gap-4">
          <div className="flex-1 overflow-hidden">
            <div
              ref={topNavContainerRef}
              className="flex gap-2 md:gap-3 items-center overflow-x-auto scroll-smooth whitespace-nowrap hide-scrollbar no-scroll-chaining"
              onTouchStart={() => setIsInteracting(true)}
              onTouchEnd={() => setIsInteracting(false)}
            >
              {topics.map((svc, idx) => (
                <div
                  key={idx}
                  role="button"
                  ref={(el) => (topBtnRefs.current[idx] = el)}
                  onMouseEnter={() => setIsInteracting(true)}
                  onMouseLeave={() => setIsInteracting(false)}
                  onClick={() => {
                    scrollBehaviorRef.current = 'smooth';
                    setActiveIndex(idx);
                  }}
                  className={`cursor-pointer px-4 md:px-5 lg:px-6 py-2 md:py-2.5 rounded-full whitespace-nowrap text-xs md:text-sm font-medium transition-all duration-300 border ${
                    idx === activeIndex
                      ? 'bg-primary text-secondary border-secondary/20'
                      : 'bg-secondary/70 text-primary/70 hover:bg-secondary/60 border-primary/20 hover:border-primary/30'
                  }`}
                >
                  {svc.title}
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2 justify-center sm:justify-start sm:ml-4 lg:ml-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"
              aria-label="Previous slide"
            >
              <IoChevronBack className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"
              aria-label="Next slide"
            >
              <IoChevronForward className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-4 md:px-6 lg:px-8 py-6 md:py-10 lg:py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Side - Title, Description, CTA */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-5 lg:mb-6 text-primary">
              {topics[activeIndex].title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-primary/80 mb-6 md:mb-8 lg:mb-10">
              {topics[activeIndex].description}
            </p>
            <Link href={topics[activeIndex].link}>
              <button className="w-full sm:w-auto bg-primary text-secondary px-6 md:px-7 lg:px-8 py-3 md:py-3.5 lg:py-4 text-base md:text-lg font-semibold hover:bg-primary/90 transition-all">
                Learn More
              </button>
            </Link>
          </div>

          {/* Right Side - Image and Title Label */}
          <div className="relative order-1 lg:order-2">
            <img
              src={topics[activeIndex].image}
              alt={topics[activeIndex].title}
              className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover shadow-2xl "
            />
            
            {/* Topic Label */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 bg-secondary/70 backdrop-blur-sm px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full">
              <p className="text-sm md:text-lg lg:text-xl font-semibold text-primary">{topics[activeIndex].title}</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scroll-chaining {
          overscroll-behavior: contain;
        }
      `}</style>
    </div>
  );
};

export default AIKeynoteCarousel;
