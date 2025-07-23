import { useEffect, useRef, useState } from "react";
import data from "../../utils/data.json";
import {
  Mail,
  Phone,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "react-router";
import useFetchData from "../../hooks/useFetchData";
import type { AboutSection } from "../../types";
import DropdownMenu from "../DropdownMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { data: about } = useFetchData<AboutSection[]>("/aboutsection/", {});
  const dropdownRefs = useRef<Record<string, HTMLUListElement | null>>({});

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleClick = () => {
    setTimeout(() => setActiveDropdown(null), 50);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && !ref.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="border-b-1 border-primary">
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
          <div className="hidden sm:flex items-center space-x-4">
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

      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <Link to="/" className="flex items-center">
              <img
                src={data.logo.icon}
                alt="Logo"
                className="w-auto h-20 rounded-full"
              />
            </Link>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-700">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <ul className="hidden md:flex items-center font-semibold space-x-8">
              <li>
                <Link to="/" className="text-gray-700 hover:text-primary">
                  Home
                </Link>
              </li>

              <DropdownMenu
                label="Who We Are"
                items={
                  about
                    ?.filter((item) => item.is_who_we_are)
                    .map((item) => ({
                      label: item.name,
                      to: `/who-we-are/${item.id}`,
                      state: { id: item.id, name: item.name },
                    })) || []
                }
                extraItem={{ label: "Our Team", to: "/team" }}
                activeDropdown={activeDropdown}
                handleDropdownToggle={handleDropdownToggle}
                handleClick={handleClick}
                dropdownRefs={dropdownRefs}
              />

              <DropdownMenu
                label="What We Do"
                items={
                  about
                    ?.filter((item) => item.is_what_we_do)
                    .map((item) => ({
                      label: item.name,
                      to: `/what-we-do/${item.id}`,
                      state: { id: item.id, name: item.name },
                    })) || []
                }
                activeDropdown={activeDropdown}
                handleDropdownToggle={handleDropdownToggle}
                handleClick={handleClick}
                dropdownRefs={dropdownRefs}
              />

              {data.navigation.map((item, i) => (
                <li key={i} className="relative header-nav-item group">
                  {item.dropdown ? (
                    <DropdownMenu
                      label={item.label}
                      items={item.dropdown}
                      activeDropdown={activeDropdown}
                      handleDropdownToggle={handleDropdownToggle}
                      handleClick={handleClick}
                      dropdownRefs={dropdownRefs}
                    />
                  ) : (
                    <Link
                      to={item.to || "#"}
                      className="text-gray-700 hover:text-primary"
                      onClick={handleClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <ul className="flex flex-col gap-4 font-semibold">
                <li>
                  <Link to="/" className="text-gray-700 hover:text-primary">
                    Home
                  </Link>
                </li>

                <DropdownMenu
                  label="Who We Are"
                  items={
                    about
                      ?.filter((item) => item.is_who_we_are)
                      .map((item) => ({
                        label: item.name,
                        to: `/who-we-are/${item.id}`,
                        state: { id: item.id, name: item.name },
                      })) || []
                  }
                  extraItem={{ label: "Our Team", to: "/team" }}
                  activeDropdown={activeDropdown}
                  handleDropdownToggle={handleDropdownToggle}
                  handleClick={handleClick}
                  dropdownRefs={dropdownRefs}
                />

                <DropdownMenu
                  label="What We Do"
                  items={
                    about
                      ?.filter((item) => item.is_what_we_do)
                      .map((item) => ({
                        label: item.name,
                        to: `/what-we-do/${item.id}`,
                        state: { id: item.id, name: item.name },
                      })) || []
                  }
                  activeDropdown={activeDropdown}
                  handleDropdownToggle={handleDropdownToggle}
                  handleClick={handleClick}
                  dropdownRefs={dropdownRefs}
                />

                {data.navigation.map((item, i) => (
                  <li key={i} className="relative header-nav-item group">
                    {item.dropdown ? (
                      <DropdownMenu
                        label={item.label}
                        items={item.dropdown}
                        activeDropdown={activeDropdown}
                        handleDropdownToggle={handleDropdownToggle}
                        handleClick={handleClick}
                        dropdownRefs={dropdownRefs}
                      />
                    ) : (
                      <Link
                        to={item.to || "#"}
                        className="text-gray-700 hover:text-primary"
                        onClick={handleClick}
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
