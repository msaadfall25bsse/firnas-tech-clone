import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section 
      id="about"
      className="relative w-full bg-white text-[#111111] py-20 md:py-28 px-4 sm:px-8 lg:px-14 overflow-hidden"
    >
      {/* 
        Background Grid Texture matching Firnas.tech White-BG pattern
      */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-45 bg-[size:52px_52px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 189, 95, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 189, 95, 0.08) 1px, transparent 1px)
          `,
        }}
      />

      {/* Optional fallback overlay if white-bg.png exists */}
      <div 
        className="absolute inset-0 pointer-events-none bg-repeat opacity-30"
        style={{
          backgroundImage: `url('/white-bg.png')`,
          backgroundSize: '350px 350px'
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Heading, Text & Button */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
          
          {/* Badge: • About Us */}
          <div className="inline-flex items-center gap-2.5 mb-5 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00BD5F] inline-block shadow-[0_0_8px_rgba(0,189,95,0.6)]"></span>
            <span className="text-[17px] font-medium text-[#222222] tracking-normal">
              About Us
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] tracking-[-0.02em] leading-[1.14] mb-6">
            Our journey of building success
          </h2>

          {/* Description Paragraph */}
          <p className="text-[17px] sm:text-[18px] text-[#444444] font-normal leading-[1.65] mb-9 max-w-[560px]">
            Firnas.tech is a leading IT service provider dedicated to helping companies transform and expand their digital capabilities. With a team of over 60 skilled professionals, we design and implement robust digital infrastructure that empowers our clients to excel in their respective industries.
          </p>

          {/* Button */}
          <Link
            href="https://firnas.tech/about/"
            className="inline-flex items-center justify-center bg-[#00BD5F] hover:bg-[#18AE69] text-white font-medium text-[16px] px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_18px_rgba(0,189,95,0.3)] hover:shadow-[0_6px_24px_rgba(0,189,95,0.45)] hover:-translate-y-0.5 active:translate-y-0"
          >
            About Firnas.tech
          </Link>
        </div>

        {/* Right Column: 4-Photo Collage Image */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[620px] aspect-[1024/703] rounded-3xl overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.08)]">
            <Image
              src="/about-us-banner.jpg"
              alt="Our journey of building success - Firnas.tech team"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
              priority
              className="object-cover rounded-3xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
