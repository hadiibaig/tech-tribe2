const GradientBtn = ({ btnText, className }) => {
  return (
    <button
      type="button"
      className={`${
        className
          ? className
          : "rounded-sm text-sm px-7 py-3 font-medium hover:shadow-md hover:shadow-slate-700"
      } w-fit text-white bg-[#7927FA] hover:bg-gradient-to-r hover:from-[#F9AE2E] hover:to-[#7D2BF4] text-center me-2 mb-2 transition-all duration-300`}
    >
      {btnText}
    </button>
  );
};
export default GradientBtn;
