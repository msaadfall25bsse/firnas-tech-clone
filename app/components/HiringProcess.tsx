import React from "react";
import Image from "next/image";

interface StepCard {
  image: string;
  title: string;
  description: string;
}

const steps: StepCard[] = [
  {
    image: "/hiring-step-1.png",
    title: "Share Your Needs",
    description:
      "Tell us about your project and the skills you need – Our diverse pool of pre-vetted experts ensures we'll find exactly what you're looking for while you focus on what matters.",
  },
  {
    image: "/hiring-step-2.png",
    title: "Meet Your Matches",
    description:
      "We'll send you curated profiles of pre-vetted developers – Save 60% of your time by quickly accessing qualified talent matched to your needs.",
  },
  {
    image: "/hiring-step-3.webp",
    title: "Interview & Shortlist",
    description:
      "Interview the developers you like and choose who you want to work with – Take full control of your hiring without the hassle.",
  },
];

export default function HiringProcess() {
  return (
    <section
      id="hiring-process"
      className="relative w-full bg-white text-[#111111] py-20 md:py-28 px-4 sm:px-8 lg:px-14 overflow-hidden"
    >
      {/* 
        Subtle light checkered grid background matching Firnas.tech
      */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[size:52px_52px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 189, 95, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 189, 95, 0.07) 1px, transparent 1px)
          `,
        }}
      />

      <div className="relative z-10 max-w-[1340px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          {/* Badge: • Hiring Process */}
          <div className="inline-flex items-center gap-2 mb-3.5 select-none justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00BD5F] inline-block shadow-[0_0_8px_rgba(0,189,95,0.6)]" />
            <span className="text-[16px] sm:text-[17px] font-medium text-[#222222] tracking-normal">
              Hiring Process
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] tracking-[-0.02em] leading-[1.12]">
            Hire Pre-Vetted Engineers <br className="hidden sm:inline" />
            In 3 Easy Steps
          </h2>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8 items-stretch">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start p-7 sm:p-8 rounded-[24px] bg-[#f8f9fa] border border-black/[0.04] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Card Illustration Container with subtle mint background */}
              <div className="relative w-full aspect-[16/10] rounded-[18px] overflow-hidden mb-7 bg-[#e2f4ea]/55 flex items-center justify-center p-3 sm:p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    priority={idx === 0}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-[22px] sm:text-[24px] font-bold text-[#111111] tracking-[-0.01em] leading-snug mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[15px] sm:text-[16px] text-[#555555] font-light leading-[1.65]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
