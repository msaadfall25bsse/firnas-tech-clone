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
      className="relative w-full bg-white text-[#111111] py-[80px] md:py-[110px] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1240px] mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-[40px] sm:mb-[50px]">
          <div>
            {/* Tag/Badge: • Case Studies */}
            <div className="inline-flex items-center gap-[7px] mb-[5px] select-none">
              <span className="w-[7px] h-[7px] rounded-full bg-[#00BD5F] inline-block" />
              <span className="text-[18px] font-normal text-[#212121] tracking-[0.1px] font-archivo">
                Case Studies
              </span>
            </div>

            {/* Main Heading - Exact 66px Archivo #212121 */}
            <h2 className="text-[38px] sm:text-[50px] lg:text-[66px] font-semibold text-[#212121] tracking-[-2px] lg:tracking-[-2.7px] leading-[1.1] lg:leading-[1.2] font-archivo">
              Our success stories.
            </h2>
          </div>

          {/* Right Action: More case studies -> */}
          <div className="shrink-0 pb-1">
            <Link
              href="https://firnas.tech/work/"
              className="group inline-flex items-center gap-[5px] text-[19px] font-normal text-[#202020] hover:text-[#00BD5F] transition-colors duration-200 font-manrope"
            >
              <span>More case studies</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
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
                <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#202020] group-hover:text-[#00BD5F] transition-colors duration-200 tracking-[-0.01em] leading-snug mb-[5px] font-archivo">
                  {study.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#202020] font-normal tracking-wide font-archivo">
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
