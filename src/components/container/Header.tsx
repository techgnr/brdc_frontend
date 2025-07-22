import { useEffect, useRef, useState } from "react";
import data from "../../utils/data.json";
import {
  Mail,
  Phone,
  Menu,
  X,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "react-router";
import LinkButton from "../ui/LinkButton";
import useFetchData from "../../hooks/useFetchData";
import type { AboutSection } from "../../types";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { data: about } = useFetchData<AboutSection[]>("/aboutsection/", {});

  // Toggle mobile menu with ref
  const dropdownRef = useRef<HTMLUListElement>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleClick = () => {
    setTimeout(() => setActiveDropdown(null), 50);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="border-b-1 border-primary">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-green-400" />
              <span>{data.contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-green-400" />
              <span>{data.contactInfo.phone}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {data.socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                {link.name === "Facebook" && <Facebook size={14} />}
                {link.name === "Twitter" && <Twitter size={14} />}
                {link.name === "Instagram" && <Instagram size={14} />}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <img
                src={data.logo.icon}
                alt="Logo"
                className="w-24 h-24 rounded-full"
              />
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center font-semibold space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="relative header-nav-item group">
                <button
                  className={`flex items-center text-gray-700 hover:text-primary transition-colors font-semibold ${
                    activeDropdown === "who we are" ? "text-primary" : ""
                  }`}
                  onClick={() => handleDropdownToggle("who we are")}
                >
                  Who We Are
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <ul
                  className={`absolute z-50 w-max max-w-sm bg-white border border-gray-200 shadow-md rounded-sm mt-2 transition-all duration-200 ease-in-out ${
                    activeDropdown === "who we are"
                      ? "opacity-100 visible traslate-y-0"
                      : "opacity-0 invisible translate-y-1"
                  }`}
                  ref={dropdownRef}
                >
                  {about &&
                    about
                      .filter((item) => item.is_who_we_are)
                      .map((sub, j) => (
                        <li key={j}>
                          <Link
                            to={`/who-we-are/${sub.id}`}
                            state={{ id: sub.id, name: sub.name }}
                            onClick={handleClick}
                            className="block px-3 py-1.5 z-50 text-gray-700 border-b-2 border-gray-50 hover:bg-gray-50 hover:text-primary transition-colors"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}

                  <li>
                    <Link
                      to="/team"
                      onClick={handleClick}
                      className="block px-3 py-1.5 z-50 text-gray-700 border-b-2 border-gray-50 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Our Team
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative header-nav-item group">
                <button
                  className={`flex items-center text-gray-700 hover:text-primary transition-colors font-semibold ${
                    activeDropdown === "what we do" ? "text-primary" : ""
                  }
                  `}
                  onClick={() => handleDropdownToggle("what we do")}
                >
                  What We Do
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {about && (
                  <ul
                    className={`absolute z-50 w-max max-w-sm bg-white border border-gray-200 shadow-md rounded-sm mt-2 transition-all duration-200 ease-in-out ${
                      activeDropdown === "what we do"
                        ? "opacity-100 visible traslate-y-0"
                        : "opacity-0 invisible translate-y-1"
                    }`}
                    ref={dropdownRef}
                  >
                    {about
                      .filter((item) => item.is_what_we_do)
                      .map((sub, j) => (
                        <li key={j}>
                          <Link
                            to={`/what-we-do/${sub.id}`}
                            state={{ id: sub.id, name: sub.name }}
                            onClick={handleClick}
                            className="block px-3 py-1.5 text-gray-700 border-b-2 border-gray-50 hover:bg-gray-50 hover:text-primary transition-colors"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
              {data.navigation.map((item, i) => (
                <li key={i} className="relative header-nav-item group">
                  {item.dropdown ? (
                    <>
                      <button
                        className={`flex items-center text-gray-700 hover:text-primary transition-colors font-semibold ${
                          activeDropdown === item.label ? "text-primary" : ""
                        }`}
                        onClick={() => handleDropdownToggle(item.label)}
                      >
                        {item.label}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      {item.dropdown && (
                        <ul
                          className={`absolute z-10 w-48 bg-white border border-gray-200 shadow-md rounded-sm mt-2 transition-all duration-200 ease-in-out ${
                            activeDropdown === item.label
                              ? "opacity-100 visible traslate-y-0"
                              : "opacity-0 invisible translate-y-1"
                          }`}
                          ref={dropdownRef}
                        >
                          {item.dropdown.map((sub, j) => (
                            <li key={j}>
                              <Link
                                to={sub.href}
                                onClick={handleClick}
                                className="block px-3 py-1.5 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    // :
                    //  item.button ? (
                    //   <LinkButton
                    //     path="/#"
                    //     variant="primary"
                    //     onClick={handleClick}
                    //   >
                    //     {item.label}
                    //   </LinkButton>
                    // )
                    <Link
                      to={item.href || "#"}
                      className="text-gray-700 hover:text-primary transition-colors font-semibold"
                      onClick={handleClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-700">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <ul className="px-2 pt-2 pb-3 space-y-1">
                {data.navigation.map((item, i) => (
                  <li key={i}>
                    {item.button ? (
                      <button className="w-full mt-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.href || "#"}
                        className="block px-3 py-2 text-gray-700 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
