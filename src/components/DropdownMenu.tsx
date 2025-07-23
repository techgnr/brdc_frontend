import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

const DropdownMenu = ({
  label,
  items,
  extraItem,
}: {
  label: string;
  items: { label: string; to: string; state?: any }[];
  extraItem?: { label: string; to: string };
}) => {
  return (
    <li className="relative group">
      <button
        className={`peer flex items-center text-gray-700 hover:text-primary font-semibold transition-all duration-200 ease-in-out group-hover:text-primary`}
      >
        {label} <ChevronDown size={16} className="ml-1" />
      </button>
      <ul
        className={`absolute z-50 w-max bg-white border border-gray-200 shadow-md rounded-sm mt-2 transition-all duration-200 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible peer-focus:opacity-100 peer-focus:visible`}
      >
        {items.map((item, j) => (
          <li key={j}>
            <Link
              to={item.to}
              state={item.state}
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
