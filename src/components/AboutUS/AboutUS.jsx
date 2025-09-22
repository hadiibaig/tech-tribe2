const AboutUS = () => {
  return (
    <div className="wrapper py-10 px-4 xl:px-0 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-1/2">
        <p className="uppercase text-primary">About us</p>
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gradient">Experienced Since 2010</span>
        </h2>

        <p className="mb-4 text-primary text-lg">
          Fermentum ligula massa aliquam nisl proin vestibulum felis. Vivamus et
          neque velit dictumst. Consectetuer mi et nunc lobortis sodales
          elementum. In si at nisl nibh.
        </p>
        <p className="mb-4 text-primary text-lg">
          Fermentum ligula massa aliquam nisl proin vestibulum felis. Vivamus et
          neque velit dictumst. Consectetuer mi et nunc lobortis sodales
          elementum. In si at nisl nibh. Lorem ipsum dolor sit amet consectetur.
          Urna iaculis orci integer tincidunt a facilisis malesuada. Cras ac
          elementum dignissim diam nunc sapien tellus pharetra amet. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Natus, veritatis.
        </p>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
        <div className="relative w-full h-64 md:h-96">
          <img src="/assets/videoBG.webp" alt="About Us" layout="fill" />
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <img
              src="/assets/playBtn.webp"
              alt="Play btn"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
