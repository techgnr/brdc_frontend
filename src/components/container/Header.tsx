import { useState } from "react";
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
import Button from "../ui/Button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <div className="border-b-1 border-green-600">
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
              {data.navigation.map((item, i) => (
                <li key={i} className="relative header-nav-item group">
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center text-gray-700 hover:text-green-600 transition-colors font-semibold"
                        onClick={() => handleDropdownToggle(item.label)}
                      >
                        {item.label}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      {item.dropdown && (
                        <ul
                          className={`absolute z-10 w-48 bg-white border border-gray-200 shadow-md rounded-sm mt-2 ${
                            activeDropdown === item.label ? "block" : "hidden"
                          }`}
                        >
                          {item.dropdown.map((sub, j) => (
                            <li key={j}>
                              <Link
                                to={sub.href}
                                className="block px-3 py-1.5 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href || "#"}
                      className="text-gray-700 hover:text-green-600 transition-colors font-semibold"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Button variant="primary">Donate Now</Button>
              </li>
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
                      <button className="w-full mt-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.href || "#"}
                        className="block px-3 py-2 text-gray-700 hover:text-green-600"
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
