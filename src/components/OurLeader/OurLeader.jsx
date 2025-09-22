import GradientBtn from "../GradientBtn/GradientBtn";
import { useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurLeader = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="wrapper px-4 xl:px-0 flex flex-col lg:flex-row items-center lg:justify-between lg:pr-12 gap-8 lg:gap-0">
      {/* Text Section */}
      <div className="text-center lg:text-left">
        <p className="uppercase my-2">our leader</p>
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 text-gradient">
          Incredible People <br className="hidden lg:block" /> Behind Us
        </h2>
        <p className="my-7 text-lg lg:text-xl">
          Si temport erat scelerisque dis iaculis. Id amet{" "}
          <br className="hidden md:block" />
          lorem elementum praesent in etiam laoreet mi.
        </p>

        {/* Gradient Button */}
        <GradientBtn
          btnText="More Team"
          className="rounded text-md px-10 py-3"
        />
      </div>

      {/* Image Section */}
      <div className="flex flex-col sm:flex-row items-center gap-5">
        <div
          className="gradientBorder w-full sm:w-auto perspective"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="gradientBottomBorder">
                  <img
                    src="/assets/founderPic.webp"
                    alt="Mohi Ud Din"
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <p className="text-xl font-semibold text-center mt-2">
                  Mohi Ud Din
                </p>
                <p className="text-lg text-center mb-5 text-primary">Founder</p>
              </div>
              <div className="flip-card-back flex flex-col justify-center items-center">
                <p className="text-xl font-semibold mb-4">Mohi Ud Din</p>
                <div className="flex items-center space-x-4">
                  <Link to={"/"}>
                    <FaInstagram className="w-8 h-8" />
                  </Link>

                  <Link to={"/"}>
                    <FaLinkedinIn className="w-8 h-8" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLeader;
