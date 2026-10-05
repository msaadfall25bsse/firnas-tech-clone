"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [applyDropdownOpen, setApplyDropdownOpen] = useState(false);

  // Timer refs to prevent dropdown from abruptly closing when cursor moves to the menu
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const applyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = (type: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(type);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 350); // 350ms generous buffer so user easily moves mouse to menu links
  };

  const handleApplyEnter = () => {
    if (applyTimeoutRef.current) {
      clearTimeout(applyTimeoutRef.current);
      applyTimeoutRef.current = null;
    }
    setApplyDropdownOpen(true);
  };

  const handleApplyLeave = () => {
    if (applyTimeoutRef.current) {
      clearTimeout(applyTimeoutRef.current);
    }
    applyTimeoutRef.current = setTimeout(() => {
      setApplyDropdownOpen(false);
    }, 350);
  };

  useEffect(() => {
    const handleScroll = () => {
      setActiveDropdown(null);
      setApplyDropdownOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      if (applyTimeoutRef.current) clearTimeout(applyTimeoutRef.current);
    };
  }, []);

  return (
    <header 
      className="absolute top-0 left-0 right-0 z-50 w-full pt-[15px] pb-0"
      onMouseLeave={handleDropdownLeave}
    >
      
      {/* 1. ABOUT DROPDOWN PANEL (FULL VIEWPORT WIDTH) */}
      {activeDropdown === "about" && (
        <div 
          className="absolute left-0 right-0 top-full pt-4 w-full z-50 animate-in fade-in duration-200"
          onMouseEnter={() => handleDropdownEnter("about")}
          onMouseLeave={handleDropdownLeave}
        >
          {/* Bridge overlay to ensure mouse never leaves hover zone */}
          <div className="w-full bg-white text-black shadow-[0px_64px_55px_-29px_rgba(0,0,0,0.18)] border-t border-black/5">
          <div className="max-w-[1300px] mx-auto px-6 sm:px-10 py-10">
            <div className="grid grid-cols-12 gap-6 items-start">
              
              {/* Col 1 (30%): "About Firnas.tech" heading + green arrow */}
              <div className="col-span-12 lg:col-span-4 pr-4">
                <Link 
                  href="https://firnas.tech/about/"
                  className="group inline-flex items-center gap-5"
                >
                  <h2 className="text-[26px] sm:text-[30px] font-semibold text-black tracking-tight leading-[1.2]">
                    About<br />Firnas.tech
                  </h2>
                  <div className="text-[#00BD5F] transition-transform duration-200 group-hover:translate-x-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Col 2 & 3: Border left divider + Sub-lists + Partner Logos */}
              <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-6 lg:border-l lg:border-black/15 lg:pl-8">
                
                {/* Subcol 1: About list */}
                <div className="col-span-4 space-y-3">
                  <h4 className="text-[17px] font-semibold text-black tracking-tight">About</h4>
                  <ul className="space-y-2.5">
                    {[
                      { title: "About Us", href: "https://firnas.tech/about/" },
                      { title: "Our Team", href: "https://firnas.tech/our-team/" },
                      { title: "Careers", href: "https://firnas.tech/careers/" },
                      { title: "Clients", href: "https://firnas.tech/clients/" },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-2 text-[14px] font-medium text-black/85 hover:text-[#00BD5F] transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00BD5F] shrink-0" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subcol 2: Resources list */}
                <div className="col-span-3 space-y-3">
                  <h4 className="text-[17px] font-semibold text-black tracking-tight">Resources</h4>
                  <ul className="space-y-2.5">
                    <li>
                      <Link
                        href="https://firnas.tech/news-and-events/"
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-black/85 hover:text-[#00BD5F] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00BD5F] shrink-0" />
                        <span>News and Events</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Subcol 3: Partners & Supporters */}
                <div className="col-span-5 space-y-3">
                  <h4 className="text-[17px] font-semibold text-black tracking-tight">Our partners &amp; supporters</h4>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="relative w-12 h-12 shrink-0">
                      <Image
                        src="/aust-logo.png"
                        alt="Aust University"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-12 h-12 shrink-0">
                      <Image
                        src="/comsats-logo.png"
                        alt="COMSATS"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-28 h-9 shrink-0">
                      <Image
                        src="/tmuc-logo.png"
                        alt="TMUC"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
          </div>
        </div>
      )}

      {/* 2. OUR SERVICES DROPDOWN PANEL (EXACT MATCHING FIRST IMAGE & FIRNAS.TECH) */}
      {activeDropdown === "services" && (
        <div 
          className="absolute left-0 right-0 top-full pt-4 w-full z-50 animate-in fade-in duration-200"
          onMouseEnter={() => handleDropdownEnter("services")}
          onMouseLeave={handleDropdownLeave}
        >
          {/* Bridge overlay to ensure mouse never leaves hover zone */}
          <div className="w-full bg-white text-black shadow-[0px_64px_55px_-29px_rgba(0,0,0,0.18)] border-t border-black/5">
            <div className="max-w-[1300px] mx-auto px-6 sm:px-10 py-10">
            <div className="grid grid-cols-12 gap-8 items-start">
              
              {/* Left Column (Col 1-3): Services Title with Green Arrow + Technologies Gallery */}
              <div className="col-span-12 lg:col-span-3 pr-4 space-y-8">
                {/* Services Title + Arrow */}
                <Link 
                  href="https://firnas.tech/our-services/"
                  className="group inline-flex items-center justify-between w-full pr-4"
                >
                  <h2 className="text-[28px] sm:text-[32px] font-bold text-black tracking-tight leading-[1.15]">
                    Services
                  </h2>
                  <div className="text-[#00BD5F] transition-transform duration-200 group-hover:translate-x-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>

                {/* Technologies Section */}
                <div className="space-y-4">
                  <h4 className="text-[17px] font-semibold text-black tracking-tight">Technologies</h4>
                  
                  {/* Exact 4x3 Grid of All 12 Technology Logos */}
                  <div className="grid grid-cols-4 gap-4 items-center pt-1">
                    {[
                      { src: "/tech-nestjs.svg", alt: "NestJS" },
                      { src: "/tech-django.svg", alt: "Django" },
                      { src: "/tech-java.svg", alt: "Java" },
                      { src: "/tech-api.svg", alt: "REST API" },
                      { src: "/tech-solidity.svg", alt: "Solidity" },
                      { src: "/tech-node.svg", alt: "Node.js" },
                      { src: "/tech-next.svg", alt: "Next.js" },
                      { src: "/tech-flutter.svg", alt: "Flutter" },
                      { src: "/tech-react.svg", alt: "React" },
                      { src: "/tech-wordpress.svg", alt: "WordPress" },
                      { src: "/tech-mysql.svg", alt: "MySQL" },
                      { src: "/tech-mongo.svg", alt: "MongoDB" },
                    ].map((tech, i) => (
                      <div key={i} className="relative w-8 h-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100">
                        <Image
                          src={tech.src}
                          alt={tech.alt}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Columns (Col 4-12): 4-Column Grid with Top & Bottom Rows matching image */}
              <div className="col-span-12 lg:col-span-9 lg:border-l lg:border-black/15 lg:pl-8">
                
                {/* Row 1: Web Development | Mobile Application | Custom Development | AI/ML/GenAI Development */}
                <div className="grid grid-cols-4 gap-6 pb-8 border-b border-black/10">
                  {/* 1. Web Development */}
                  <div className="space-y-3">
                    <h4 className="text-[16px] font-semibold text-black tracking-tight">Web Development</h4>
                    <ul className="space-y-2">
                      {["Web App Development", "E-commerce Development", "Web Portal Development", "CMS Development"].map((item, idx) => (
                        <li key={idx}>
                          <Link href="https://firnas.tech/our-services/web-development/" className="inline-flex items-center gap-2 text-[13.5px] font-medium text-black/85 hover:text-[#00BD5F] transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BD5F] shrink-0" />
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 2. Mobile Application */}
                  <div className="space-y-3">
                    <h4 className="text-[16px] font-semibold text-black tracking-tight">Mobile Application</h4>
                    <ul className="space-y-2">
                      {["Android App Development", "iOS App Development", "Cross Platform Development", "Support & Maintenance"].map((item, idx) => (
                        <li key={idx}>
                          <Link href="https://firnas.tech/our-services/mobile-app-development/" className="inline-flex items-center gap-2 text-[13.5px] font-medium text-black/85 hover:text-[#00BD5F] transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BD5F] shrink-0" />
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. Custom Development */}
                  <div className="space-y-3">
                    <h4 className="text-[16px] font-semibold text-black tracking-tight">Custom Development</h4>
                    <ul className="space-y-2">
                      {["Web & Mobile App", "API Development", "AI/ML & GenAI", "Legacy Software Modernization"].map((item, idx) => (
                        <li key={idx}>
                          <Link href="https://firnas.tech/our-services/custom-software-development/" className="inline-flex items-center gap-2 text-[13.5px] font-medium text-black/85 hover:text-[#00BD5F] transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BD5F] shrink-0" />
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 4. AI/ML/GenAI Development */}
                  <div className="space-y-3">
                    <h4 className="text-[16px] font-semibold text-black tracking-tight">AI/ML/GenAI Development</h4>
                    <ul className="space-y-2">
                      {["AI Software Development", "AI & ML Consulting", "AI & ML Integration", "OpenAI as a Service"].map((item, idx) => (
                        <li key={idx}>
                          <Link href="https://firnas.tech/our-services/ai-ml-genai-development/" className="inline-flex items-center gap-2 text-[13.5px] font-medium text-black/85 hover:text-[#00BD5F] transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BD5F] shrink-0" />
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Row 2: UI/UX Design | Digital Marketing | Branding | Staff Augmentation */}
                <div className="grid grid-cols-4 gap-6 pt-7">
                  {/* 5. UI/UX Design */}
                  <div className="space-y-3">
                    <h4 className="text-[16px] font-semibold text-black tracking-tight">UI/UX Design</h4>
                    <ul className="space-y-2">
                      {["Web UI/UX", "Mobile UI/UX", "UI/UX Audits", "Motion Design"].map((item, idx) => (
                        <li key={idx}>
                          <Link href="https://firnas.tech/our-services/ui-ux-design/" className="inline-flex items-center gap-2 text-[13.5px] font-medium text-black/85 hover:text-[#00BD5F] transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BD5F] shrink-0" />
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 6. Digital Marketing */}
                  <div className="space-y-3">
                    <h4 className="text-[16px] font-semibold text-black tracking-tight">Digital Marketing</h4>
                    <ul className="space-y-2">
                      {["Search Engine Optimization", "Content Marketing", "Social Media Marketing", "Online Reputation Management"].map((item, idx) => (
                        <li key={idx}>
                          <Link href="https://firnas.tech/our-services/digital-marketing/" className="inline-flex items-center gap-2 text-[13.5px] font-medium text-black/85 hover:text-[#00BD5F] transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BD5F] shrink-0" />
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 7. Branding */}
                  <div className="space-y-3">
                    <h4 className="text-[16px] font-semibold text-black tracking-tight">Branding</h4>
                    <ul className="space-y-2">
                      {["Logo Design & Redesign", "Taglines and Slogans", "Stationary Design"].map((item, idx) => (
                        <li key={idx}>
                          <Link href="https://firnas.tech/our-services/branding/" className="inline-flex items-center gap-2 text-[13.5px] font-medium text-black/85 hover:text-[#00BD5F] transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BD5F] shrink-0" />
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 8. Staff Augmentation */}
                  <div className="space-y-3">
                    <h4 className="text-[16px] font-semibold text-black tracking-tight">Staff Augmentation</h4>
                    <ul className="space-y-2">
                      {["Staff Augmentation"].map((item, idx) => (
                        <li key={idx}>
                          <Link href="https://firnas.tech/our-services/staff-augmentation/" className="inline-flex items-center gap-2 text-[13.5px] font-medium text-black/85 hover:text-[#00BD5F] transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BD5F] shrink-0" />
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          </div>
          </div>
        </div>
      )}

      {/* Main Pill Navbar Container matching .elementor-element-01d4d2e */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="firnas-header-glass min-h-[80px] flex items-center justify-between transition-all duration-300">
          
          {/* Container 1 & 2: Left Group containing Logo and Navbar Links together */}
          <div className="flex items-center flex-1">
            {/* Logo Section (.elementor-element-30aab0d) */}
            <div className="shrink-0 flex items-center pl-2 sm:pl-3">
              <Link href="/" className="inline-block py-1">
                <div className="relative w-[170px] sm:w-[190px] h-[32px] sm:h-[36px]">
                  <Image
                    src="/firnas-logo.png"
                    alt="Firnas.tech"
                    fill
                    priority
                    className="object-contain object-left"
                  />
                </div>
              </Link>
            </div>

            {/* Navigation Menu (.elementor-element-3be3ff7) shifted left, starting right after logo */}
            <nav className="hidden lg:flex items-center text-[16px] text-white font-normal font-sans ml-8 xl:ml-12">
              <Link
                href="/"
                className="text-[#00BD5F] hover:text-[#18AE69] mx-[12px] xl:mx-[14px] transition-colors py-2 font-normal"
              >
                Home
              </Link>

              {/* About Nav Item */}
              <div
                onMouseEnter={() => handleDropdownEnter("about")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  className={`flex items-center mx-[12px] xl:mx-[14px] transition-colors py-2 focus:outline-none cursor-pointer font-normal ${
                    activeDropdown === "about" ? "text-[#18AE69]" : "text-white hover:text-[#18AE69]"
                  }`}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "about" ? null : "about")
                  }
                >
                  <span>About</span>
                  <svg
                    className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-200 ${
                      activeDropdown === "about" ? "rotate-180 text-[#18AE69]" : "text-white"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Our Services Nav Item */}
              <div
                onMouseEnter={() => handleDropdownEnter("services")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  className={`flex items-center mx-[12px] xl:mx-[14px] transition-colors py-2 focus:outline-none cursor-pointer font-normal ${
                    activeDropdown === "services" ? "text-[#18AE69]" : "text-white hover:text-[#18AE69]"
                  }`}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "services" ? null : "services")
                  }
                >
                  <span>Our Services</span>
                  <svg
                    className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180 text-[#18AE69]" : "text-white"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <Link
                href="https://firnas.tech/work/"
                className="hover:text-[#18AE69] text-white mx-[12px] xl:mx-[14px] transition-colors py-2 font-normal"
              >
                Work
              </Link>

              <Link
                href="https://firnas.tech/our-services/staff-augmentation/"
                className="hover:text-[#18AE69] text-white mx-[12px] xl:mx-[14px] transition-colors py-2 font-normal"
              >
                Staff Augmentation
              </Link>
            </nav>
          </div>

          {/* Container 3: Right Action Pill (.elementor-element-af72a80 & b0000ba: ~35% desktop) */}
          <div className="hidden sm:flex items-center relative shrink-0 mr-[10px]">
            <div
              className="relative"
              onMouseEnter={handleApplyEnter}
              onMouseLeave={handleApplyLeave}
            >
              <button
                type="button"
                onClick={() => setApplyDropdownOpen(!applyDropdownOpen)}
                className="firnas-btn-apply cursor-pointer"
              >
                <span>Apply Now</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    applyDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Apply Now dropdown matching .elementor-nav-menu--dropdown */}
              {applyDropdownOpen && (
                <div 
                  className="absolute right-0 top-full pt-3 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseEnter={handleApplyEnter}
                  onMouseLeave={handleApplyLeave}
                >
                  <div className="w-56 bg-white text-black rounded-lg py-1 shadow-[0px_0px_90px_rgba(0,0,0,0.4)] border border-black/10">
                    <Link
                      href="https://firnas.tech/apply-developer/"
                      className="block px-5 py-3.5 text-[15px] font-sans text-gray-800 hover:text-black hover:bg-gray-100 transition-colors border-b border-black/10 first:rounded-t-lg"
                    >
                      Apply as a Developer
                    </Link>
                    <Link
                      href="https://firnas.tech/hire-developer/"
                      className="block px-5 py-3.5 text-[15px] font-sans text-gray-800 hover:text-black hover:bg-gray-100 transition-colors last:rounded-b-lg"
                    >
                      Hire Developer
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center pr-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#00BD5F] p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 glass-dropdown rounded-2xl p-5 text-white animate-in slide-in-from-top-4 duration-200">
            <ul className="space-y-4 text-base">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#00BD5F] font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://firnas.tech/about/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#00BD5F] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://firnas.tech/our-services/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#00BD5F] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="https://firnas.tech/work/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#00BD5F] transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="https://firnas.tech/our-services/staff-augmentation/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#00BD5F] transition-colors"
                >
                  Staff Augmentation
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <Link
                  href="https://firnas.tech/apply-developer/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#00BD5F] text-white text-center font-medium py-3 rounded-full"
                >
                  Apply as a Developer
                </Link>
                <Link
                  href="https://firnas.tech/hire-developer/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="border border-[#00BD5F] text-[#00BD5F] text-center font-medium py-3 rounded-full"
                >
                  Hire Developer
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
