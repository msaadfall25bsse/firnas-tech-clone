"use client";

import React from "react";
import Link from "next/link";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01.",
    title: "Ideate",
    description:
      "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
  },
  {
    number: "02.",
    title: "Design",
    description:
      "Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
  },
  {
    number: "03.",
    title: "Develop",
    description:
      "Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.",
  },
  {
    number: "04.",
    title: "Test",
    description:
      "Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.",
  },
  {
    number: "05.",
    title: "Launch",
    description:
      "Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.",
  },
  {
    number: "06.",
    title: "Support",
    description:
      "Providing ongoing support and enhancements to ensure continued product success.",
  },
];

export default function ProductProcess() {
  return (
    <section
      id="Process"
      className="relative w-full text-white py-24 sm:py-28 px-4 sm:px-8 lg:px-14 bg-[#050b08] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/Services-bg-section.jpg')`,
      }}
    >
      {/* Subtle Grid Overlay for tech pattern matching screenshot */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top Green Ambient Radial Glow */}
      <div className="absolute top-0 right-[15%] w-[550px] h-[350px] bg-[radial-gradient(ellipse,rgba(0,189,95,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* Bottom Green Ambient Radial Glow */}
      <div className="absolute bottom-0 left-[10%] w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,189,95,0.16)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* 
        Parent Flex Container:
        Left column is sticky within this container.
        Right column has all cards which scroll vertically from bottom to top.
        Only when all cards have finished scrolling does the page continue to the next section!
      */}
      <div className="relative z-10 max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* 
          LEFT COLUMN: Sticky Pinning Element
          Locked at top-28 / top-32 on desktop while the right cards scroll through.
        */}
        <div className="lg:col-span-6 flex flex-col items-start lg:sticky lg:top-28 self-start pt-2">
          {/* Badge: • Our Process */}
          <div className="inline-flex items-center gap-2.5 mb-4 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00BD5F] inline-block shadow-[0_0_8px_rgba(0,189,95,0.7)]" />
            <span className="text-[16px] font-medium text-white/90">
              Our Process
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-[-0.02em] leading-[1.12] mb-6">
            Our Product Development Process
          </h2>

          {/* Paragraph */}
          <p className="text-[16px] sm:text-[18px] text-white/75 font-light leading-[1.65] mb-8 max-w-[500px]">
            Our product development process is built to turn your ideas into
            impactful solutions step by step. From initial discovery and
            planning to design, development, testing, and launch.
          </p>

          {/* Fuel Your Digital First Idea Box */}
          <div className="relative w-full max-w-[420px] rounded-[22px] border border-white/[0.12] bg-black/40 backdrop-blur-[10px] p-7 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-[#00BD5F]/60 transition-all duration-300">
            {/* Paper Plane Icon */}
            <div className="mb-5 text-white group-hover:text-[#00BD5F] transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-[22px] sm:text-[24px] font-bold text-white leading-snug mb-2">
              Fuel Your Digital First Idea
            </h3>

            {/* Description */}
            <p className="text-[15px] text-white/70 font-normal mb-6">
              With 60+ Transformation Experts
            </p>

            {/* Get Started Button */}
            <Link
              href="http://wa.link/wnk5tx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#00BD5F] hover:bg-[#18AE69] text-white font-medium text-[15px] px-7 py-3 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(0,189,95,0.35)] hover:shadow-[0_6px_22px_rgba(0,189,95,0.5)] hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* 
          RIGHT COLUMN:
          Stack of 6 process cards. As the user scrolls, this column naturally scrolls
          from bottom upward past the sticky left column.
          Only when card 06 has passed does the user proceed to the next section!
        */}
        <div className="lg:col-span-6 flex flex-col gap-6 w-full pt-2">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-start p-8 sm:p-9 rounded-[20px] border border-white/[0.12] bg-black/35 backdrop-blur-[8px] shadow-[0_6px_25px_rgba(0,0,0,0.35)] hover:border-[#00BD5F] hover:bg-black/50 transition-all duration-300"
            >
              {/* Step Number (Green: 01., 02., etc.) */}
              <span className="text-[30px] sm:text-[34px] font-bold text-[#00BD5F] mb-3 leading-none tracking-tight">
                {step.number}
              </span>

              {/* Step Title (White) */}
              <h3 className="text-[24px] sm:text-[26px] font-bold text-white mb-3 tracking-tight">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[15px] sm:text-[17px] text-white/70 font-light leading-[1.65]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
