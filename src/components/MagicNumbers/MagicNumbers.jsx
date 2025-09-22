"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { stats } from "../../constant";

const MagicNumbers = () => {
  return (
    <section className="relative py-16 md:py-20">
      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
          Fun Fact
        </p>

        <h2
          className="mb-6 text-4xl font-bold md:text-5xl text-gradient"
          style={{ lineHeight: 1.3 }}
        >
          <span className="text-gradient">Magic Numbers</span>
        </h2>

        <p className="mx-auto mb-16 text-lg text-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats?.map((stat, index) => (
            <MagicNumberItem key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MagicNumberItem = ({ stat }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="relative">
      {/* Icon Circle */}
      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center gradientBorderFull text-gray-300">
        <div className="innerCircle">
          <img
            src={stat.src}
            alt={stat.alt}
            width={32}
            height={32}
            className="w-10 h-10"
          />
        </div>
      </div>

      {/* Animated Number */}
      <p className="mb-2 text-4xl font-bold text-white">
        {inView ? <CountUp end={stat.number} separator="" duration={5} /> : 0}
        <span className="absolute top-20 text-[#48B4A5]">+</span>
      </p>

      {/* Label */}
      <p className="text-gray-400">{stat.label}</p>
    </div>
  );
};

export default MagicNumbers;
