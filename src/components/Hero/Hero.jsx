import GradientBtn from "../GradientBtn/GradientBtn";

const Hero = () => {
  return (
    <div
      className="relative h-screen text-center flex flex-col space-y-10 items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/herobg.webp")' }}
    >
      <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
        Lorem Ipsum <br />
        Sit Dolor Amit Consectetur
      </p>
      <p className="text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,{" "}
        <br className="hidden sm:flex" />
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>

      <GradientBtn btnText="Schedule a meeting" />

      <div className="absolute bottom-5">
        <p className="uppercase font-semibold text-lg tracking-[8px] text-gradient">
          where innovation meets operational excellence
        </p>
      </div>
    </div>
  );
};

export default Hero;
