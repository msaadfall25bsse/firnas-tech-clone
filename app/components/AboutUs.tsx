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
        
        {/* Left Column: Heading, Text & Button (shifted 5px left as requested) */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6 -translate-x-[5px]">
          
          {/* Badge: • About Us */}
          <div className="inline-flex items-center gap-[7px] mb-4 select-none">
            <span className="w-[7px] h-[7px] rounded-full bg-[#00BD5F] inline-block"></span>
            <span className="text-[18px] font-normal text-[#212121] tracking-[0.1px] font-archivo">
              About Us
            </span>
          </div>

          {/* Headline - Exact Real Website: 50px, Archivo, 600 weight, line-height 58px, letter-spacing -2.7px, #000000 */}
          <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] font-semibold text-[#000000] tracking-[-2px] lg:tracking-[-2.7px] leading-[1.2] lg:leading-[58px] mb-5 max-w-[615px] font-archivo">
            Our journey of building success
          </h2>

          {/* Description Paragraph - Exact Real Website: 20px, Archivo, 300 weight, line-height 33px, #212121 */}
          <p className="text-[17px] sm:text-[19px] lg:text-[20px] text-[#212121] font-light leading-[28px] lg:leading-[33px] mb-8 max-w-[615px] font-archivo">
            Firnas.tech is a leading IT service provider dedicated to helping companies transform and expand their digital capabilities. With a team of over 60 skilled professionals, we design and implement robust digital infrastructure that empowers our clients to excel in their respective industries.
          </p>

          {/* Button - Exact Real Website: 18px, Archivo, 400 weight, padding 18px 32px, rounded 300px, hover: #1B1464 */}
          <Link
            href="https://firnas.tech/about/"
            className="inline-flex items-center justify-center bg-[#00BD5F] hover:bg-[#1B1464] text-white font-normal text-[18px] px-8 py-[18px] rounded-[300px] transition-all duration-300 font-archivo shadow-[0_4px_18px_rgba(0,189,95,0.25)] hover:shadow-[0_6px_24px_rgba(27,20,100,0.35)]"
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
