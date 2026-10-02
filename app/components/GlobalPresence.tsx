import React from "react";
import Image from "next/image";

interface LocationCard {
  flag: string;
  country: string;
  role: string;
  address: string;
}

const locations: LocationCard[] = [
  {
    flag: "/flag-pakistan.png",
    country: "Pakistan",
    role: "(Global Delivery Center)",
    address: "Firnas.tech, Javeed Shaheed Rd, Near COMSATS, Abbottabad",
  },
  {
    flag: "/flag-usa.png",
    country: "United States",
    role: "(Regional Office)",
    address: "400, Capitol Mall, Sacramento, California, USA",
  },
  {
    flag: "/flag-uk.png",
    country: "United Kingdom",
    role: "(Regional Office)",
    address: "260 Bastable Avenue, Barking, London, UK",
  },
  {
    flag: "/flag-sweden.png",
    country: "Sweden",
    role: "(Regional Office)",
    address: "Malmvägen 2B , 19161 Sollentuna Sweden, Stockholm, Sweden",
  },
  {
    flag: "/flag-uae.png",
    country: "UAE",
    role: "(Regional Office)",
    address: "Business Centre,Sharjah Publishing City Free Zone, Sharjah, UAE",
  },
];

// Exact hotspot pin coordinates matching Elementor percentages from Firnas.tech
const hotspots = [
  { name: "USA", left: "19%", top: "34%" },
  { name: "United Kingdom", left: "45%", top: "22%" },
  { name: "Sweden", left: "51%", top: "18%" },
  { name: "UAE", left: "61%", top: "47%" },
  { name: "Pakistan", left: "66%", top: "35%" },
];

export default function GlobalPresence() {
  return (
    <section
      id="global-presence"
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

      <div className="relative z-10 max-w-[1340px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          {/* Badge: • Our Global Presence */}
          <div className="inline-flex items-center gap-2.5 mb-4 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00BD5F] inline-block shadow-[0_0_8px_rgba(0,189,95,0.7)]" />
            <span className="text-[16px] font-medium text-white/90">
              Our Global Presence
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-[-0.02em] leading-[1.12] mb-5">
            We&apos;re a Global Team of Innovators
          </h2>

          {/* Paragraph */}
          <p className="text-[16px] sm:text-[18px] text-white/75 font-light leading-[1.65]">
            Navigate complex digital initiatives with confidence, propelling your
            journey towards innovation and growth.
          </p>
        </div>

        {/* 5 Location Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {locations.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start p-6 rounded-[16px] border border-white/[0.12] bg-black/30 backdrop-blur-[6px] transition-all duration-300 hover:border-[#00BD5F] hover:bg-black/45 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] min-h-[220px]"
            >
              {/* Flag Image */}
              <div className="relative w-10 h-10 mb-4 rounded-full overflow-hidden shadow-md">
                <Image
                  src={item.flag}
                  alt={item.country}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title & Role */}
              <h3 className="text-[16px] font-bold text-white leading-tight mb-2">
                {item.country}{" "}
                <span className="text-[13px] font-normal text-white/60 block sm:inline">
                  {item.role}
                </span>
              </h3>

              {/* Address */}
              <p className="text-[13px] text-white/65 leading-[1.5] mt-auto font-normal">
                {item.address}
              </p>
            </div>
          ))}
        </div>

        {/* 
          Map + Statistics Grid
          Left Column (Map with Glowing Hotspots), Right Column (3 Key Statistics)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Interactive World Map with Green Pins */}
          <div className="lg:col-span-8 relative w-full aspect-[2219/1318] max-w-[850px] mx-auto">
            {/* World Map Image */}
            <Image
              src="/world-map.png"
              alt="Firnas.tech Global Footprint Map"
              fill
              priority
              className="object-contain opacity-75"
            />

            {/* Glowing Hotspot Pins */}
            {hotspots.map((pin, idx) => (
              <div
                key={idx}
                className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                style={{ left: pin.left, top: pin.top }}
              >
                {/* Outer Pulsing Green Ring */}
                <span className="absolute -inset-1.5 rounded-full bg-[#00BD5F]/40 animate-ping pointer-events-none" />
                
                {/* Pin Icon Container */}
                <div className="relative flex items-center justify-center text-[#00BD5F] hover:scale-125 transition-transform duration-200 drop-shadow-[0_0_8px_rgba(0,189,95,0.8)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>

                {/* Tooltip on Hover */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+6px)] px-2.5 py-1 rounded bg-black/85 text-white text-[12px] font-medium tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-white/10 shadow-lg">
                  {pin.name}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: 3 Statistics Counters */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-10 lg:pl-6">
            
            {/* Stat 1: 5 Countries */}
            <div>
              <h4 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#00BD5F] tracking-tight leading-none mb-2.5">
                5 Countries
              </h4>
              <p className="text-[17px] sm:text-[18px] text-white/80 font-normal leading-snug">
                including USA, UK, UAE, Sweden, &amp; Pakistan
              </p>
            </div>

            {/* Stat 2: 60+ */}
            <div>
              <h4 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#00BD5F] tracking-tight leading-none mb-2.5">
                60+
              </h4>
              <p className="text-[17px] sm:text-[18px] text-white/80 font-normal leading-snug">
                team of global creators &amp; innovators
              </p>
            </div>

            {/* Stat 3: 25% */}
            <div>
              <h4 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#00BD5F] tracking-tight leading-none mb-2.5">
                25%
              </h4>
              <p className="text-[17px] sm:text-[18px] text-white/80 font-normal leading-snug">
                of our global workforce are women
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
