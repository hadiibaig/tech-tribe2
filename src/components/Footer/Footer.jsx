import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { footerLinks } from "../../constant";

const Footer = () => {
  return (
    <div className="wrapper flex flex-col items-center justify-center my-20">
      {/* Logo */}
      <img src="/assets/logo.webp" alt="Logo" width={300} height={300} />
      {/* <Image src="/assets/logo.webp" alt="Logo" width={300} height={300} /> */}

      {/* Description */}
      <p className="my-6 text-center text-sm md:text-base lg:text-lg">
        Lorem Ipsum Sit Dolor Amit Consectetur.
      </p>

      <hr className="hr-gradient my-5 w-full" />

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 lg:gap-7">
        {footerLinks?.map((item, i) => (
          <Link
            key={i}
            to={item?.href}
            className="text-sm md:text-base hover:text-gradient"
          >
            {item?.label}
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex gap-7 items-center justify-center my-5">
        <Link to={"/"}>
          <FaFacebook className="w-6 h-6" />
        </Link>
        <Link to={"/"}>
          <FaLinkedinIn className="w-6 h-6" />
        </Link>
        <Link to={"/"}>
          <FaInstagram className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
