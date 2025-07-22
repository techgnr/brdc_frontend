import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

const DropdownMenu = ({
  label,
  items,
  activeDropdown,
  handleDropdownToggle,
  handleClick,
  dropdownRefs,
  extraItem,
}: {
  label: string;
  items: { label: string; to: string; state?: any }[];
  activeDropdown: string | null;
  handleDropdownToggle: (label: string) => void;
  handleClick: () => void;
  dropdownRefs: React.MutableRefObject<Record<string, HTMLUListElement | null>>;
  extraItem?: { label: string; to: string };
}) => {
  return (
    <li className="relative header-nav-item group">
      <button
        className={`flex items-center text-gray-700 hover:text-primary font-semibold ${
          activeDropdown === label ? "text-primary" : ""
        }`}
        onClick={() => handleDropdownToggle(label)}
      >
        {label} <ChevronDown size={16} className="ml-1" />
      </button>
      <ul
        ref={(el) => {
          dropdownRefs.current[label] = el;
        }}
        className={`absolute z-50 w-max bg-white border border-gray-200 shadow-md rounded-sm mt-2 transition-all duration-200 ease-in-out ${
          activeDropdown === label
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-1"
        }`}
      >
        {items.map((item, j) => (
          <li key={j}>
            <Link
              to={item.to}
              state={item.state}
              onClick={handleClick}
              className="block px-3 py-1.5 text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
        {extraItem && (
          <li>
            <Link
              to={extraItem.to}
              onClick={handleClick}
              className="block px-3 py-1.5 text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              {extraItem.label}
            </Link>
          </li>
        )}
      </ul>
    </li>
  );
};

export default DropdownMenu;
