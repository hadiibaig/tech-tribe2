import GradientBtn from "../GradientBtn/GradientBtn";

const SendAMessage = () => {
  return (
    <section className="wrapper py-24 px-4 xl:px-0 flex flex-col lg:flex-row gap-10">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <p className="uppercase text-primary">get in touch</p>
        <h2
          className="text-3xl md:text-4xl my-3 font-bold text-gradient"
          style={{ lineHeight: 1.3 }}
        >
          <span className="text-gradient">Send us a message</span>
        </h2>

        <p className="pb-3 text-primary">
          Interdum curabitur congue sem senectus proin tincidunt conubia eros id
          ridiculus class.
        </p>

        <hr className="hr-gradient" />

        <div className="relative mt-10 mb-6 flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full gradientBorder bg-[#14151B] text-base outline-none p-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-primary"
          />

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            className="w-full gradientBorder bg-[#14151B] text-base outline-none p-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-primary"
          />
        </div>

        <div className="relative mb-6 flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="w-full gradientBorder bg-[#14151B] text-base outline-none p-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-primary"
          />
          <select
            name="meetingTime"
            defaultValue=""
            className="w-full gradientBorder bg-[#14151B] text-base outline-none px-3 py-[16.2px] leading-8 transition-colors duration-200 ease-in-out placeholder:text-primary"
          >
            <option value="" disabled className="text-black bg-gray-50">
              Schedule a meeting
            </option>
            <option value="09:00 AM" className="text-black bg-gray-50">
              09:00 AM
            </option>
            <option value="10:00 AM" className="text-black bg-gray-50">
              10:00 AM
            </option>
            <option value="11:00 AM" className="text-black bg-gray-50">
              11:00 AM
            </option>
          </select>
        </div>

        <div className="relative mb-4">
          <textarea
            name="message"
            placeholder="Your message"
            className="w-full gradientBorder bg-[#14151B] h-40 text-base outline-none text-primary p-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder:text-primary"
          />
        </div>
        <GradientBtn btnText="Send message" />
      </div>

      {/* Map Section */}
      <div className="w-full lg:w-1/2 h-[20rem] lg:h-[35rem] gradientBorder overflow-hidden flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        ></iframe>
      </div>
    </section>
  );
};

export default SendAMessage;
