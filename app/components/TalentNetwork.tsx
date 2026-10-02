import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TalentMember {
  name: string;
  role: string;
  image: string;
  skillsRow1: string[];
  skillsRow2: string[];
}

const talentMembers: TalentMember[] = [
  {
    name: "Noman Tariq",
    role: "Backend Developer",
    image: "/talent-noman.png",
    skillsRow1: ["Python", "AI", "Computer Vision"],
    skillsRow2: ["Natural Language Processing"],
  },
  {
    name: "Asfand Yar",
    role: "Graphic Designer",
    image: "/talent-asfand.png",
    skillsRow1: ["Photoshop", "Illustrator", "Figma"],
    skillsRow2: ["Canva", "Adobe XD"],
  },
  {
    name: "Asim Tariq",
    role: "Mobile APP Developer",
    image: "/talent-asim.png",
    skillsRow1: ["Android", "iOS", "Java"],
    skillsRow2: ["UI Design", "Cross-Platform"],
  },
  {
    name: "Muhammad Haris",
    role: "CMS Developer",
    image: "/talent-haris.png",
    skillsRow1: ["WordPress", "Shopify", "WIX"],
    skillsRow2: ["Webflow", "Framer"],
  },
];

export default function TalentNetwork() {
  return (
    <section
      id="talent-network"
      className="relative w-full text-white py-24 sm:py-28 px-4 sm:px-8 lg:px-14 overflow-hidden bg-[#050b08] bg-cover bg-center bg-no-repeat"
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

      <div className="relative z-10 max-w-[1360px] mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            {/* Tag/Badge: • Discover 150+ Top Professionals */}
            <div className="inline-flex items-center gap-2 mb-3.5 select-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00BD5F] inline-block shadow-[0_0_8px_rgba(0,189,95,0.7)]" />
              <span className="text-[16px] font-medium text-white/90">
                Discover 150+ Top Professionals
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-[-0.02em] leading-tight">
              Meet Our Talent Network
            </h2>
          </div>

          {/* Right Action Button: Apply as a Developer */}
          <div className="shrink-0 pb-1">
            <Link
              href="https://firnas.tech/apply-developer/"
              className="inline-flex items-center justify-center bg-[#00BD5F] hover:bg-[#18AE69] text-white font-medium text-[16px] px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(0,189,95,0.35)] hover:shadow-[0_6px_25px_rgba(0,189,95,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Apply as a Developer
            </Link>
          </div>
        </div>

        {/* 5 Cards Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {/* Member Cards 1-4 */}
          {talentMembers.map((member, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center p-6 sm:p-7 rounded-[22px] border border-white/[0.12] bg-black/30 backdrop-blur-[6px] transition-all duration-300 hover:border-[#00BD5F] hover:bg-black/45 hover:-translate-y-1.5 shadow-[0_6px_25px_rgba(0,0,0,0.35)]"
            >
              {/* Circular Avatar with Grayscale + Border */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 border border-white/10 group-hover:border-[#00BD5F]/40 transition-colors duration-300 bg-neutral-900">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority={idx < 2}
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Name */}
              <h3 className="text-[21px] font-bold text-white tracking-tight leading-snug mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[14px] text-white/65 font-normal mb-6">
                {member.role}
              </p>

              {/* Skill Badges Rows */}
              <div className="w-full flex flex-col gap-2 mt-auto">
                {/* Row 1 */}
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {member.skillsRow1.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-[6px] bg-white/[0.06] border border-white/[0.1] text-[11px] font-normal text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {member.skillsRow2.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-[6px] bg-white/[0.06] border border-white/[0.1] text-[11px] font-normal text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 5th Card: Discover 150+ More Top Experts */}
          <div className="flex flex-col items-center justify-center text-center p-6 sm:p-7 rounded-[22px] border border-white/[0.12] bg-black/30 backdrop-blur-[6px] transition-all duration-300 hover:border-[#00BD5F] hover:bg-black/45 hover:-translate-y-1.5 shadow-[0_6px_25px_rgba(0,0,0,0.35)] min-h-[360px]">
            {/* Firnas Site Icon in White Round Badge */}
            <div className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 shadow-lg p-3">
              <Image
                src="/firnas-site-icon.png"
                alt="Firnas Tech Icon"
                width={42}
                height={42}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-[20px] sm:text-[21px] font-bold text-white tracking-tight leading-snug mb-8 max-w-[170px]">
              Discover 150+ More Top Experts
            </h3>

            {/* Action Button: Request Candidates */}
            <Link
              href="https://firnas.tech/hire-developer/"
              className="inline-flex items-center justify-center bg-[#00BD5F] hover:bg-[#18AE69] text-white font-medium text-[14px] px-6 py-3 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(0,189,95,0.35)] hover:shadow-[0_6px_20px_rgba(0,189,95,0.45)]"
            >
              Request Candidates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
