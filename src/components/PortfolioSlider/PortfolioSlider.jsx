import React from "react";
import GradientBtn from "../GradientBtn/GradientBtn";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { portfolioSlides } from "../../constant";

const PortfolioSlider = () => {
  return (
    <section className="min-h-screen relative wrapper px-4 xl:px-0">
      <p className="text-center text-white/80 text-sm tracking-wider mb-2">
        LOREM IPSUM
      </p>
      <h2 className="text-center text-5xl font-bold mb-16">
        <span className="text-gradient">Our Portfolio</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioSlides?.map((slide, index) => (
          <div
            key={index}
            className={`group relative rounded-lg overflow-hidden border border-[#333] transition-all duration-300 ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div
              className="relative aspect-video h-[25rem] w-full"
              style={{
                backgroundImage: `url(${slide?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F9AE2E] to-[#7D2BF4] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-8 z-10">
                <p className="text-sm mb-2 opacity-90">{slide.title}</p>
                <h3 className="text-2xl font-bold mb-4">{slide.company}</h3>
                <GradientBtn btnText="Read More" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom navigation buttons */}
      <button className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white">
        <IoChevronBackOutline className="w-6 h-6" />
      </button>
      <button className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white">
        <IoChevronForward className="w-6 h-6" />
      </button>
    </section>
  );
};

export default PortfolioSlider;
