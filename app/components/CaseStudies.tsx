import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudyItem {
  href: string;
  image: string;
  title: string;
  category: string;
  aspectRatio?: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    href: "https://firnas.tech/work/italo-milan/",
    image: "/case-study-italo-milan.jpg",
    title: "Italo Milan - Luxury Redefined",
    category: "Branding ● Shopify Store",
  },
  {
    href: "https://firnas.tech/work/vanlock-locksmith",
    image: "/case-study-vanlock.webp",
    title: "VanLock Security- Protect your Van",
    category: "Website Design ● Visual Identity",
  },
  {
    href: "https://firnas.tech/work/rukan-albait/",
    image: "/case-study-rukan.webp",
    title: "Rukan Albait - Your Home is our Priority",
    category: "Website Design ● Branding",
  },
  {
    href: "https://firnas.tech/work/black-sea-limo-2/",
    image: "/case-study-blacksea.webp",
    title: "Black Sea Limo - Premier Limousine Service",
    category: "Website Design ● Branding",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
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
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            {/* Tag/Badge: • Case Studies */}
            <div className="inline-flex items-center gap-2.5 mb-4 select-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00BD5F] inline-block shadow-[0_0_8px_rgba(0,189,95,0.6)]" />
              <span className="text-[17px] font-medium text-[#222222] tracking-normal">
                Case Studies
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#111111] tracking-[-0.02em] leading-[1.12]">
              Our success stories.
            </h2>
          </div>

          {/* Right Action: More case studies -> */}
          <div className="shrink-0 pb-1">
            <Link
              href="https://firnas.tech/work/"
              className="group inline-flex items-center gap-2 text-[16px] sm:text-[17px] font-medium text-[#222222] hover:text-[#00BD5F] transition-colors duration-200"
            >
              <span>More case studies</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>
        </div>

        {/* 
          Case Studies Grid: 2 columns on desktop, 1 on mobile
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 sm:gap-y-16">
          {caseStudies.map((study, idx) => (
            <Link
              key={idx}
              href={study.href}
              className="group block cursor-pointer"
            >
              {/* Image Frame Container */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[1500/982] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#f3f4f6] shadow-[0_6px_30px_rgba(0,0,0,0.06)] border border-black/[0.04] transition-all duration-500 ease-out group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] group-hover:-translate-y-1.5">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 650px"
                  priority={idx < 2}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Title & Metadata */}
              <div className="pt-6 sm:pt-7">
                <h3 className="text-[22px] sm:text-[25px] font-bold text-[#111111] group-hover:text-[#00BD5F] transition-colors duration-200 tracking-[-0.01em] leading-snug mb-2">
                  {study.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#666666] font-normal tracking-wide">
                  {study.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
