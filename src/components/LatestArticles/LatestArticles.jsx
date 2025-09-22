import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import GradientBtn from "../GradientBtn/GradientBtn";
import React, { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { allArticlesData } from "../../constant";

const LatestArticlesSlider = () => {
  // Refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="my-12 md:my-20 xl:my-44 wrapper px-4 xl:px-0">
      {/* Heading Section */}
      <p className="uppercase text-center text-sm text-primary mb-2">
        our update
      </p>
      <h2
        className="text-center text-2xl lg:text-4xl font-bold mb-6"
        style={{ lineHeight: 1.3 }}
      >
        <span className="text-gradient">Latest Article & News</span>
      </h2>

      {/* Swiper Section */}
      <div className="relative">
        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute -left-10 top-1/2 z-10"
          style={{ top: "40%", transform: "translateY(-50%)" }}
        >
          <IoChevronBackOutline className="w-6 h-6 text-white" />
        </button>
        <button
          ref={nextRef}
          className="absolute -right-10 top-1/2 z-10"
          style={{ top: "40%", transform: "translateY(-50%)" }}
        >
          <IoChevronForwardOutline className="w-6 h-6 text-white" />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
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
          {allArticlesData?.map((article) => (
            <SwiperSlide key={article.id}>
              {/* Wrapper for Gradient Border */}
              <div
                className="relative rounded-md overflow-hidden group"
                style={{
                  background: "linear-gradient(to right, #FDB228, #7927FA)",
                  padding: "1.1px", // Adjust padding to control border width
                }}
              >
                {/* Inner Card Content */}
                <div className="bg-[#0b0d10] rounded-md h-full min-h-[30rem] flex flex-col justify-between shadow-lg relative overflow-hidden">
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F9AE2E] to-[#7D2BF4] opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>

                  {/* Label Tag */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[#FDB228] to-[#7927FA] uppercase text-xs font-bold px-3 py-1 rounded z-20">
                    {article.label}
                  </div>

                  {/* Card Image */}
                  <img
                    src={article.image || "/placeholder.webp"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-80 object-cover rounded-t-md"
                  />

                  {/* Card Content */}
                  <div className="text-white flex flex-col flex-grow relative z-20">
                    <h3 className="p-3 text-lg font-semibold mb-4">
                      {article.title}
                    </h3>

                    {/* Author and Date */}
                    <div className="border-t py-2 flex items-center justify-center text-gray-400 text-sm mt-auto">
                      <p>{article.autherName}</p>
                      <span className="mx-2">/</span>
                      <p>{article.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center my-12 md:my-16">
          <GradientBtn btnText="Read more" />
        </div>
      </div>
    </div>
  );
};

export default LatestArticlesSlider;
