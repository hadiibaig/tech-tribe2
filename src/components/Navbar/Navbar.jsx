import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { navLinksData, servicesDropdown } from "../../constant";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-black/40 backdrop-blur-sm fixed w-full z-20">
      <div className="flex md:flex-col items-center justify-between md:justify-center gap-5 px-6 py-5">
        {/* Logo */}
        <div>
          <img src="/assets/logo.webp" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinksData?.map((link) => (
            <li key={link.href} className="relative">
              {link?.hasDropdown ? (
                <div className="relative">
                  <button
                    className="flex items-center"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className="text-white hover:text-gradient">
                      {link.label}
                    </span>
                    {dropdownOpen ? (
                      <FaCaretUp className="ml-1 text-white" />
                    ) : (
                      <FaCaretDown className="ml-1 text-white" />
                    )}
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute left-0 mt-2 bg-black/90 text-white p-2 space-y-2">
                      {servicesDropdown?.map((dropdownLink) => (
                        <li key={dropdownLink.href}>
                          <Link
                            to={dropdownLink.href}
                            className="hover:text-gradient"
                          >
                            {dropdownLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link to={link.href} className="text-white hover:text-gradient">
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center bg-black/90 text-white p-6 space-y-4 md:hidden">
          {navLinksData?.map((link) => (
            <li key={link.href} className="relative w-full">
              {link.hasDropdown ? (
                <div className="relative w-full">
                  <button
                    className="flex items-center w-full justify-between"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className="text-white hover:text-gradient">
                      {link.label}
                    </span>
                    {dropdownOpen ? (
                      <FaCaretUp className="ml-1 text-white" />
                    ) : (
                      <FaCaretDown className="ml-1 text-white" />
                    )}
                  </button>
                  {dropdownOpen && (
                    <ul className="bg-black/90 text-white p-2 space-y-2">
                      {servicesDropdown?.map((dropdownLink) => (
                        <li key={dropdownLink.href}>
                          <Link
                            to={dropdownLink.href}
                            className="hover:text-gradient"
                          >
                            {dropdownLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gradient w-full"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
