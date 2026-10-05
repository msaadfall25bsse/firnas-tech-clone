import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[180px] md:pt-[210px] pb-24 px-4 sm:px-6 lg:px-8 bg-[#030705]">
      
      {/* 
        Layer 1: Background Video (video in background)
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <video
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+10px)] min-w-full min-h-full w-auto h-auto object-cover opacity-90"
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
          opacity: 0.40,
        }}
      />

      {/* 
        Layer 3: Top-Right and Bottom-Left Emerald Green Ambient Glows matching exact image
      */}
      {/* Top Right Green Ambient Glow */}
      <div className="absolute -top-[10%] -right-[5%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(0,189,95,0.20)_0%,rgba(0,189,95,0.08)_40%,transparent_70%)] blur-3xl pointer-events-none z-[2]" />
      
      {/* Bottom Left Green Ambient Glow */}
      <div className="absolute -bottom-[15%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(0,189,95,0.18)_0%,rgba(0,189,95,0.06)_45%,transparent_75%)] blur-3xl pointer-events-none z-[2]" />

      {/* Layer 4: Grid overlay matching Firnas theme */}
      <div className="absolute inset-0 z-[3] grid-overlay pointer-events-none opacity-25" />

      {/* Layer 5: Dark Vignette and bottom fade to section */}
      <div className="absolute inset-0 z-[4] bg-[radial-gradient(ellipse_at_center,rgba(3,7,5,0.25)_0%,rgba(3,7,5,0.88)_85%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030705] to-transparent pointer-events-none z-[4]" />

      {/* Layer 6: Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge Pill: We make digital (and magical).... matching exact Elementor 8fc239c & 0052908 */}
        <div className="glass-badge-pill inline-flex items-center gap-[5px] mb-8 sm:mb-10 cursor-default -translate-x-[5px] translate-y-[10px]">
          <span className="w-[7px] h-[7px] rounded-full bg-[#00BD5F] shrink-0" />
          <span 
            className="text-[15px] font-light text-white tracking-[1px]"
            style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
          >
            We make digital (and magical)....
          </span>
        </div>

        {/* Main Hero Headline: matching Inspect Box (h2.elementor-heading-title.elementor-size-default: 918px x 156px, 65px Archivo, sans-serif, #FFFFFF, line-height: 78px, letter-spacing: -1.5px), moved 5px down and 5px right */}
        <h2 
          className="elementor-heading-title elementor-size-default text-[36px] sm:text-[50px] md:text-[58px] lg:text-[65px] font-semibold text-white tracking-[-1.5px] leading-[1.12] sm:leading-[1.15] lg:leading-[78px] max-w-[920px] mb-6 -translate-x-[5px] -translate-y-[5px]"
          style={{ fontFamily: "var(--font-archivo), Archivo, sans-serif" }}
        >
          <span style={{ color: "#00BD5F" }}>Helping Companies</span> Scale with World Class Technology
        </h2>

        {/* Hero Subtitle Description: matching Image 1 (p: 816px x 78px, 24px Archivo, sans-serif, #FFFFFF, line-height: 39px, font-weight: 300), moved 5px up towards header */}
        <p 
          className="text-[17px] sm:text-[20px] lg:text-[24px] font-light text-white leading-[1.5] sm:leading-[1.6] lg:leading-[39px] max-w-[816px] mb-10 text-center translate-x-[5px] translate-y-0"
          style={{ fontFamily: "var(--font-archivo), Archivo, sans-serif" }}
        >
          We design, develop, and deliver comprehensive software, prioritizing user experience, engagement, and intelligent solutions for diverse platforms.
        </p>

        {/* Call to Action Buttons: matching exact Firnas.tech elementor-element-6431c2b & elementor-element-f6d0aaf */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
          
          {/* About Us Button (.elementor-element-6431c2b) */}
          <Link
            href="https://firnas.tech/about/"
            className="group inline-flex items-center justify-center bg-[#00BD5F] hover:bg-white text-white hover:text-[#1B1464] font-normal text-[18px] rounded-[300px] transition-all duration-300 shadow-[0_4px_25px_rgba(0,189,95,0.35)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]"
            style={{ 
              fontFamily: "var(--font-archivo), Archivo, sans-serif",
              padding: "18px 32px"
            }}
          >
            <span className="inline-flex items-center gap-[5px]">
              <span className="elementor-button-text text-[18px] font-normal" style={{ fontFamily: "var(--font-archivo), Archivo, sans-serif" }}>
                About Us
              </span>
              <span className="elementor-button-icon inline-flex items-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  className="w-[14px] h-[14px] fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </span>
          </Link>

          {/* Contact Us Button (.elementor-element-f6d0aaf) */}
          <Link
            href="https://firnas.tech/contact/"
            className="group inline-flex items-center justify-center bg-transparent hover:bg-white text-white hover:text-[#1B1464] font-normal text-[18px] rounded-[300px] border-2 border-white hover:border-white transition-all duration-300 backdrop-blur-sm"
            style={{ 
              fontFamily: "var(--font-archivo), Archivo, sans-serif",
              padding: "17px 32px"
            }}
          >
            <span className="inline-flex items-center gap-[5px]">
              <span className="elementor-button-text text-[18px] font-normal" style={{ fontFamily: "var(--font-archivo), Archivo, sans-serif" }}>
                Contact Us
              </span>
              <span className="elementor-button-icon inline-flex items-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  className="w-[14px] h-[14px] fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </span>
          </Link>

        </div>

      </div>

    </section>
  );
}
