import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GradientBtn from "../GradientBtn/GradientBtn";
import { services } from "../../constant";

const OurServices = () => {
  // Refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="my-32 wrapper px-4 xl:px-0">
      <p className="uppercase text-primary text-center">
        we build secure system
      </p>
      <h2 className="text-center text-5xl font-bold mb-6">
        <span className="text-gradient">Our Services</span>
      </h2>
      {/* left right btns */}
      <div className="relative">
        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10"
        >
          <IoChevronBackOutline className="w-6 h-6" />
        </button>
        <button
          ref={nextRef}
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10"
        >
          <IoChevronForwardOutline className="w-6 h-6" />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {services?.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="mt-5 bg-[#0B0D10] flex flex-col items-center justify-center space-y-4 h-[28rem] gradientBorder hover:border-yellow-500 hover:bg-gradient-to-r hover:from-[#F9AE2E] hover:to-[#7D2BF4] transition-all p-6 shadow-lg">
                <div className="mb-4">
                  <img
                    src="assets/idea.webp"
                    alt="idea"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm mb-4 text-center leading-7">
                  {service.description}
                </p>

                <GradientBtn btnText="Read More" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-6">
        <GradientBtn btnText="View All Services" />
      </div>
    </div>
  );
};

export default OurServices;
