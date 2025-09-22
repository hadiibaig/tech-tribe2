import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { clients } from "../../constant";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ClientSaySlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Use effect to initialize Swiper navigation buttons
  useEffect(() => {
    // Wait for the buttons to render
    if (prevRef.current && nextRef.current) {
      return;
    }
  }, []);

  return (
    <div className="my-12 lg:my-20 xl:my-44 wrapper px-4 xl:px-0">
      <p className="uppercase text-center my-2">Testimonial</p>
      <h2
        className="text-center text-4xl font-bold mb-6"
        style={{ lineHeight: 1.5 }}
      >
        <span className="text-gradient">Happy Clients Say</span>
      </h2>
      {/* Custom Navigation Buttons */}
      <div className="relative">
        <button
          ref={prevRef}
          className="hidden sm:block absolute -left-6 top-1/2 transform -translate-y-1/2 z-10"
        >
          <IoChevronBackOutline className="w-6 h-6" />
        </button>
        <button
          ref={nextRef}
          className="hidden sm:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10"
        >
          <IoChevronForwardOutline className="w-6 h-6" />
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
          }}
          className="mySwiper"
        >
          {clients?.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="p-6 gradientBorder bg-[#0B0D10]">
                <p className="text-primary">{client.description}</p>
                <div className="mt-10 flex items-center gap-3 justify-center">
                  <img
                    src={client.image}
                    alt={client.name}
                    width={80}
                    height={80}
                    className="object-cover rounded-full"
                  />
                  <div>
                    <p className="text-[#fdb228] text-xl font-semibold">
                      {client.name}
                    </p>
                    <p className="text-primary text-xl font-semibold">
                      {client.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientSaySlider;
