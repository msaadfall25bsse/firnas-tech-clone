import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[180px] md:pt-[210px] pb-24 px-4 sm:px-6 lg:px-8 bg-[#050b08]">
      
      {/* 
        Layer 1: Background Video (video in background)
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <video
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+10px)] min-w-full min-h-full w-auto h-auto object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 
        Layer 2: services-bg.jpg (Video ke UPER lagayi gayi image)
      */}
      <div 
        className="absolute inset-0 z-[1] bg-cover bg-top bg-no-repeat pointer-events-none mix-blend-screen"
        style={{ 
          backgroundImage: `url('/services-bg.jpg')`,
          opacity: 0.65,
        }}
      />

      {/* 
        Layer 3: Top-Right and Bottom-Left Emerald Green Ambient Glows matching exact image
      */}
      {/* Top Right Green Ambient Glow */}
      <div className="absolute -top-[10%] -right-[5%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(0,189,95,0.28)_0%,rgba(0,189,95,0.12)_40%,transparent_70%)] blur-3xl pointer-events-none z-[2]" />
      
      {/* Bottom Left Green Ambient Glow */}
      <div className="absolute -bottom-[15%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(0,189,95,0.25)_0%,rgba(0,189,95,0.10)_45%,transparent_75%)] blur-3xl pointer-events-none z-[2]" />

      {/* Layer 4: Grid overlay matching Firnas theme */}
      <div className="absolute inset-0 z-[3] grid-overlay pointer-events-none opacity-30" />

      {/* Layer 5: Vignette and bottom fade to section */}
      <div className="absolute inset-0 z-[4] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,11,8,0.70)_80%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050b08] to-transparent pointer-events-none z-[4]" />

      {/* Layer 6: Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge Pill: We make digital (and magical).... matching elementor-element-8fc239c */}
        <div className="glass-badge-pill px-4 sm:px-5 py-2 mb-8 sm:mb-10 flex items-center gap-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all hover:border-[#00BD5F]/40 cursor-default">
          <span className="w-2 h-2 rounded-full bg-[#00BD5F] animate-pulse shadow-[0_0_10px_#00BD5F]" />
          <span className="text-[13px] sm:text-[14px] font-normal tracking-normal text-white/90">
            We make digital (and magical)....
          </span>
        </div>

        {/* Main Hero Headline (.elementor-element-de861e8): 65px font-weight: 600, line-height: 78px, letter-spacing: -1.5px */}
        <h1 className="text-[38px] sm:text-[52px] md:text-[60px] lg:text-[65px] font-semibold text-white tracking-[-1.5px] leading-[1.14] sm:leading-[1.18] lg:leading-[78px] max-w-[980px] mb-6">
          <span className="text-[#00BD5F] font-semibold">Helping Companies</span> Scale with World Class Technology
        </h1>

        {/* Hero Subtitle Description (.elementor-element-e0873f3): 24px (desktop) / 18px (mobile), font-weight: 300, line-height: 39px */}
        <p className="text-[17px] sm:text-[20px] lg:text-[23px] font-light text-white/80 leading-[1.5] sm:leading-[1.6] lg:leading-[38px] max-w-[840px] mb-10">
          We design, develop, and deliver comprehensive software, prioritizing user experience, engagement, and intelligent solutions for diverse platforms.
        </p>

        {/* Call to Action Buttons (.elementor-element-6431c2b & f6d0aaf): 18px font-weight: 400, padding: 18px 32px */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
          
          {/* About Us Button */}
          <Link
            href="https://firnas.tech/about/"
            className="group inline-flex items-center justify-center gap-2 bg-[#00BD5F] hover:bg-white text-white hover:text-black font-normal text-[17px] sm:text-[18px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-[0_4px_25px_rgba(0,189,95,0.35)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]"
          >
            <span>About Us</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>

          {/* Contact Us Button */}
          <Link
            href="https://firnas.tech/contact/"
            className="group inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white text-white hover:text-black font-normal text-[17px] sm:text-[18px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/70 hover:border-white transition-all duration-300 backdrop-blur-sm"
          >
            <span>Contact Us</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>

        </div>

      </div>

    </section>
  );
}
