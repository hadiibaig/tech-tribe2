import React from "react";
import GradientBtn from "../GradientBtn/GradientBtn";
import { MdMailOutline } from "react-icons/md";
import { TbPhone } from "react-icons/tb";

const LastForever = () => {
  return (
    <div className="relative my-20 ">
      <img
        src="/assets/bgIMG.webp"
        alt="Background"
        className="w-full h-[20rem] lg:h-[25rem] object-cover"
      />
      <div className="wrapper px-4 xl:px-0 absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="lg:flex-1 mb-8 lg:mb-0">
          <div className="hidden lg:block mb-8 h-1 w-16 bg-gradient-to-r from-[#FDB228] to-[#7927FA] rounded-md" />
          <div className="text-center lg:text-left text-2xl lg:text-4xl font-bold">
            Design for real <br className="hidden lg:block" /> humans, not
            users. <br className="hidden lg:block" />
            Build to <span className="text-gradient">last forever.</span>
          </div>
        </div>

        <div className="lg:flex-1 mb-8 lg:mb-0">
          <p className="text-base text-center lg:text-left lg:text-lg w-full">
            Lorem ipsum dolor sit amet consectetur. Urna iaculis orci integer
            tincidunt a facilisis malesuada. Cras ac elementum dignissim diam
            nunc sapien tellus pharetra amet.
          </p>
          <div className="flex flex-col xl:flex-row items-center justify-center md:justify-normal lg:items-start xl:gap-5 mt-2">
            <div className="flex items-center gap-2">
              <MdMailOutline className="mt-1" />
              <a
                href="mailto:your-email@example.com"
                className="hover:text-gradient"
              >
                your-email@example.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <TbPhone />
              <a
                href={`tel:+923331122333`}
                className="hover:text-gradient hover:underline cursor-pointer"
              >
                +92 333 11 22333
              </a>
            </div>
          </div>
        </div>

        <div className="lg:flex-1 flex justify-center lg:justify-end">
          <GradientBtn btnText="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default LastForever;
