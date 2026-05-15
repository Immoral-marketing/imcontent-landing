"use client";
import { useEffect, useRef } from "react";
const logo1 = "/assets/236a5f1094702f87948e3bd904ee91cd410c0f59.png";
const logo2 = "/assets/09374405cb11117544c255a1a7f295e8b17d17a2.png";
const logo3 = "/assets/db96946871fdc72bd040ba3683e9d9c196e7dc6f.png";
const logo4 = "/assets/d9f1e63177c9e18ffce445017f1efbcf666263f7.png";
const logo5 = "/assets/4d5f76e9e1d906df4abff34565064c4137fa4b73.png";
const logo6 = "/assets/e84f50a186295d38ae2bdc8051707390917577bb.png";

export function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollPosition += speed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-24 lg:py-32 border-y border-black/5 bg-gradient-to-r from-white via-gray-50/30 to-white overflow-hidden relative z-10" style={{ position: 'relative' }}>
      <div
        ref={scrollRef}
        className="flex gap-16 lg:gap-20 overflow-x-hidden items-center"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicate logos for seamless loop */}
        {[...Array(20)].map((_, index) => {
          const logoIndex = index % logos.length;
          const isAdobeFirefly = logoIndex === 0;
          const isFreepik = logoIndex === 4; // logo5
          
          let heightClass = "h-10 lg:h-12";
          if (isAdobeFirefly) heightClass = "h-12 lg:h-14";
          if (isFreepik) heightClass = "h-8 lg:h-10";
          
          return (
            <div
              key={index}
              className="flex-shrink-0 opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <img 
                src={logos[logoIndex]} 
                alt={`AI Tool ${logoIndex + 1}`} 
                className={`${heightClass} w-auto object-contain`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
