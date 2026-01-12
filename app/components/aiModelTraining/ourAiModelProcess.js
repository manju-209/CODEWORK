"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaBullseye,
  FaDatabase,
  FaBrain,
  FaRocket,
  FaSyncAlt,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Understanding Business Requirements",
    description:
      "A successful AI implementation starts with a clear goal. We collaborate with you to understand your business challenges, industry-specific needs, and available datasets.",
    Icon: FaBullseye,
  },
  {
    number: "02",
    title: "Data Collection and Preprocessing",
    description:
      "Quality data is the foundation of any AI model. Our experts assist in data collection, cleaning, and preprocessing.",
    Icon: FaDatabase,
  },
  {
    number: "03",
    title: "Model Training and Evaluation",
    description:
      "Our AI models undergo rigorous training, testing, validation, and continuous refinement.",
    Icon: FaBrain,
  },
  {
    number: "04",
    title: "Deployment and Optimization",
    description:
      "We deploy trained models into your environment and monitor performance at scale.",
    Icon: FaRocket,
  },
  {
    number: "05",
    title: "Continuous Learning and Improvement",
    description:
      "We retrain models with new data and integrate feedback loops for long-term success.",
    Icon: FaSyncAlt,
  },
  {
    number: "06",
    title: "Business Impact and Insights",
    description:
      "Our AI-driven solutions provide actionable insights and data-driven decision-making.",
    Icon: FaChartLine,
  },
];

export default function OurAiModelProcess() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <section className="relative bg-secondary py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Agile Software Process
          </h2>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            Our structured AI development process ensures quality, scalability,
            and measurable business outcomes.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.Icon;

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 bg-secondary/70 p-8 rounded-2xl shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary/30">
                  <Icon className="text-2xl text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-primary">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Ready to Transform Your Business?
          </h3>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact-ai-solutions"
              className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold"
            >
              Start Your Project
            </Link>
            <Link
              href="/ai-services"
              className="border border-secondary text-primary px-6 py-3 rounded-lg font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
