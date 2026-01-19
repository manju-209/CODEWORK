"use client";

import React from "react";
import Link from "next/link";
import { MdArrowCircleRight } from "react-icons/md";
import { RiBrain2Fill } from "react-icons/ri";
import { BsStars, BsFillBarChartLineFill } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import { AiFillMessage } from "react-icons/ai";
import { FaDatabase, FaRobot } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import MobileSection from "./mobileSection";

const Card = ({ card, additionalStyle, index }) => {
  const IconComponent = card.icon;

  return (
    <div
      className={`relative overflow-hidden border border-white/10 shadow-2xl bg-cover bg-center transition-all duration-500 hover:scale-105 cursor-pointer group h-[240px] sm:h-[320px] md:h-[360px] w-full max-w-[520px] animate-float-up rounded-none ${additionalStyle || ""}`}
      style={{
        backgroundImage: `url(${card.image})`,
        animationDelay: `${index * 0.2}s`,
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 via-secondary/50 to-secondary/30 opacity-50 group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/70 to-secondary opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>

      <div className="absolute bottom-0 w-full p-4 text-white transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-6">
        <div className="flex justify-start ml-4 sm:ml-24 mb-4">
          {IconComponent && (
            <IconComponent
              size={52}
              className="relative z-10 transition-all duration-300 group-hover:scale-105"
              style={{ fill: "url(#iconGradient)" }}
            />
          )}
        </div>

        <div className="w-full flex items-center ml-4 sm:ml-24 justify-between">
          <h3 className="text-xl font-bold text-primary">{card.title}</h3>
        </div>

        <div className="absolute top-1/2 right-4 sm:right-16 lg:right-32 transform -translate-y-1/2 transition-all duration-500 group-hover:translate-x-24 group-hover:opacity-0">
          <MdArrowCircleRight size={28} style={{ fill: "url(#iconGradient)" }} />
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="text-center px-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-3 text-primary">
            {card.title}
          </h3>
          <p className="text-lg leading-relaxed font-light max-w-md">
            {card.description}
          </p>
        </div>
      </div>

      <Link href={card.link || "#"} className="absolute inset-0 z-20" />
    </div>
  );
};

const AiCardSection = () => {
  const [showMore, setShowMore] = React.useState(false);

  const cardsData = [
    {
      id: 1,
      title: "AI Consulting",
      description:
        "Our AI consulting services deliver tailor-made solutions aligned with your business goals.",
      image:
        "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/AIConsulting.avif",
      icon: RiBrain2Fill,
      link: "/ai-consulting",
    },
    {
      id: 2,
      title: "Generative AI",
      description:
        "Creativity meets technology with our Generative AI solutions.",
      image:
        "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/GenerativeAI.jpg",
      icon: BsStars,
      link: "/generative-ai",
    },
    {
      id: 3,
      title: "Machine Learning",
      description:
        "Advanced ML solutions using TensorFlow and PyTorch.",
      image:
        "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/MachineLearning.avif",
      icon: GiGears,
      link: "/machine-learning",
    },
    {
      id: 4,
      title: "Natural Language Processing",
      description:
        "NLP solutions to enhance communication and automation.",
      image:
        "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/NaturalLanguageProcessing.jpg",
      icon: AiFillMessage,
      link: "/natural-language-processing",
    },
    {
      id: 5,
      title: "Data Engineering",
      description:
        "Robust data infrastructure and pipelines.",
      image:
        "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/DataEngineering.avif",
      icon: FaDatabase,
      link: "/data-engineering",
    },
    {
      id: 6,
      title: "Cyber Security",
      description:
        "Advanced cybersecurity solutions.",
      image:
        "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/CyberSecurity.jpg",
      icon: MdOutlineSecurity,
      link: "/ai-in-cybersecurity",
    },
    {
      id: 7,
      title: "Predictive Analytics",
      description:
        "AI-driven forecasting and insights.",
      image:
        "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/PredictiveAnalytics.jpg",
      icon: BsFillBarChartLineFill,
      link: "/predictive-analytics",
    },
    {
      id: 8,
      title: "AI Chatbots",
      description:
        "Smart chatbots for real-time engagement.",
      image:
        "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/chatbot.jpg",
      icon: FaRobot,
      link: "/ai-chatbot-integration",
    },
  ];

  const displayedCards = showMore ? cardsData : cardsData.slice(0, 4);

  return (
    <div className="relative p-8 bg-secondary overflow-hidden">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="iconGradient">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>

      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 mb-6">
          <span className="text-primary text-sm font-medium">
            — AI Solutions —
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Our <span className="text-primary">Expertise</span>
        </h2>

        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Cutting-edge AI solutions designed to transform your business
        </p>
      </div>

      <div className="hidden md:grid grid-cols-2 gap-9 justify-items-center">
        {displayedCards.map((card, index) => (
          <Card key={card.id} card={card} index={index} />
        ))}
      </div>

      {!showMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowMore(true)}
            className="px-12 py-4 text-primary font-bold rounded-full border border-white/20 hover:bg-white/10"
          >
            View All
          </button>
        </div>
      )}

      <div className="md:hidden">
        <MobileSection />
      </div>
    </div>
  );
};

export default AiCardSection;
