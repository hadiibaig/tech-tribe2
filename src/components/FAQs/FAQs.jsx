import { useState } from "react";
import { questions } from "../../constant";

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <div className="mt-10 wrapper px-4 xl:px-0 flex flex-col md:flex-row items-center">
      <div>
        <img
          src="/assets/faqimg.webp"
          alt="faq"
          width={100}
          height={100}
          className="w-full md:w-auto md:h-[23rem] container mx-auto object-cover"
        />
      </div>

      {/* content */}
      <div className="mt-4 md:mt-10 lg:mt-0 xl:-mt-9 relative w-full shadow-xl sm:max-w-2xl sm:rounded-lg sm:px-10">
        {/* text */}
        <div className="flex flex-col">
          <p className="uppercase text-primary">why choose us</p>
          <h2 className="mt-2 text-xl font-bold tracking-tight md:text-3xl">
            <span className="text-gradient">All-in Solution</span>
          </h2>
          <p className="mt-2 text-lg text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* question with ans */}
        <div className="mt-4 grid max-w-xl">
          {questions?.map((question, index) => (
            <div key={index} className="py-2">
              <details
                className="group gradientBorder bg-[#0B0D10] p-3"
                aria-hidden="true"
                onClick={() =>
                  setActiveQuestion(activeQuestion === index ? null : index)
                }
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>{question.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                {activeQuestion === index && (
                  <p className="mt-2 text-gray-200">{question.answer}</p>
                )}
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQs;
