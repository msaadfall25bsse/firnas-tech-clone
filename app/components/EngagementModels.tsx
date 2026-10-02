"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EngagementModels() {
  const [activeTab, setActiveTab] = useState<"dedicated" | "fixed">("dedicated");

  return (
    <section
      id="engagement-models"
      className="relative w-full bg-white text-[#111111] py-20 md:py-28 px-4 sm:px-8 lg:px-14 overflow-hidden"
    >
      {/* 
        Subtle light checkered grid background matching Firnas.tech White-BG pattern
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

      <div className="relative z-10 max-w-[1300px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          {/* Badge: • Staff Augmentation */}
          <div className="inline-flex items-center gap-2.5 mb-3.5 select-none justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00BD5F] inline-block shadow-[0_0_8px_rgba(0,189,95,0.6)]" />
            <span className="text-[16px] sm:text-[17px] font-medium text-[#222222] tracking-normal">
              Staff Augmentation
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] tracking-[-0.02em] leading-tight">
            Engagement Models
          </h2>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="w-full max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 sm:mb-16">
          {/* Tab 1: Dedicated Team Model */}
          <button
            type="button"
            onClick={() => setActiveTab("dedicated")}
            className={`w-full py-4 sm:py-4.5 px-6 rounded-[14px] text-[17px] sm:text-[18px] font-medium transition-all duration-300 text-center cursor-pointer shadow-sm ${
              activeTab === "dedicated"
                ? "bg-[#00BD5F] text-white shadow-[0_6px_20px_rgba(0,189,95,0.35)]"
                : "bg-[#eeeeee]/90 hover:bg-[#e4e4e4] text-[#444444]"
            }`}
          >
            Dedicated Team Model
          </button>

          {/* Tab 2: Fixed Price Project */}
          <button
            type="button"
            onClick={() => setActiveTab("fixed")}
            className={`w-full py-4 sm:py-4.5 px-6 rounded-[14px] text-[17px] sm:text-[18px] font-medium transition-all duration-300 text-center cursor-pointer shadow-sm ${
              activeTab === "fixed"
                ? "bg-[#00BD5F] text-white shadow-[0_6px_20px_rgba(0,189,95,0.35)]"
                : "bg-[#eeeeee]/90 hover:bg-[#e4e4e4] text-[#444444]"
            }`}
          >
            Fixed Price Project
          </button>
        </div>

        {/* Tab 1 Content: Dedicated Team Model */}
        {activeTab === "dedicated" && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center animate-fadeIn">
            {/* Left Image */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="relative w-full max-w-[612px] aspect-[612/407] rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-black/[0.04]">
                <Image
                  src="/engagement-dedicated.jpg"
                  alt="Build your own team - Firnas.tech"
                  fill
                  priority
                  className="object-cover rounded-[20px]"
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
              {/* Badge: • Our Experts will Drive Your Vision */}
              <div className="inline-flex items-center gap-2 mb-3.5 select-none">
                <span className="w-2 h-2 rounded-full bg-[#00BD5F] inline-block shadow-[0_0_6px_rgba(0,189,95,0.7)]" />
                <span className="text-[15px] font-medium text-[#222222]">
                  Our Experts will Drive Your Vision
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111111] tracking-[-0.02em] leading-tight mb-5">
                Build your own team
              </h3>

              {/* Description */}
              <p className="text-[16px] sm:text-[18px] text-[#444444] font-light leading-[1.65] mb-8">
                You can choose the team of skilled, proficient and dedicated
                developers that perfectly matches your business needs and
                efficiently creates the product with agile methodology. You pay
                for the week or month of work completed by the team. Ideal for
                startups which are in initial phases as the product needs to be
                discovered along the way resulting in less planning and a faster
                beginning.
              </p>

              {/* CTA Button */}
              <Link
                href="https://firnas.tech/contact/"
                className="inline-flex items-center justify-center bg-[#00BD5F] hover:bg-[#18AE69] text-white font-medium text-[16px] px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_18px_rgba(0,189,95,0.3)] hover:shadow-[0_6px_24px_rgba(0,189,95,0.45)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Hire Now
              </Link>
            </div>
          </div>
        )}

        {/* Tab 2 Content: Fixed Price Project */}
        {activeTab === "fixed" && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center animate-fadeIn">
            {/* Left Content (In Tab 2 on firnas.tech, text is on left, image on right) */}
            <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4 order-2 lg:order-1">
              {/* Badge: • Your Search for Skilled Professionals ends here */}
              <div className="inline-flex items-center gap-2 mb-3.5 select-none">
                <span className="w-2 h-2 rounded-full bg-[#00BD5F] inline-block shadow-[0_0_6px_rgba(0,189,95,0.7)]" />
                <span className="text-[15px] font-medium text-[#222222]">
                  Your Search for Skilled Professionals ends here
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111111] tracking-[-0.02em] leading-tight mb-5">
                Fixed Price Project
              </h3>

              {/* Description */}
              <p className="text-[16px] sm:text-[18px] text-[#444444] font-light leading-[1.65] mb-8">
                Recommended for the projects with a fixed budget as our
                developers can empower your business with speed, scalability and
                agility. We take full responsibility of your product from user
                and market research to design, development and maintenance as
                this requires more planning and investigation before
                commencement.
              </p>

              {/* CTA Button */}
              <Link
                href="https://firnas.tech/contact/"
                className="inline-flex items-center justify-center bg-[#00BD5F] hover:bg-[#18AE69] text-white font-medium text-[16px] px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_18px_rgba(0,189,95,0.3)] hover:shadow-[0_6px_24px_rgba(0,189,95,0.45)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Discuss Now
              </Link>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 w-full flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[640px] aspect-[640/360] rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-black/[0.04]">
                <Image
                  src="/engagement-fixed.jpg"
                  alt="Fixed Price Project - Firnas.tech"
                  fill
                  priority
                  className="object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
