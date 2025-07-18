import { Mountain } from "lucide-react";
import data from "../../utils/data.json";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {data.brand.icon && (
                <Mountain size={24} className="text-green-400" />
              )}
              <span className="text-xl font-bold">{data.brand.name}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {data.brand.description}
            </p>
          </div>

          {data.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4 relative inline-block text-white after:content-[''] after:absolute after:top-[105%] after:left-0 after:w-1/2 after:h-[2px] after:bg-white">
                {section.title}
              </h3>
              <ul className="space-y-2 text-gray-400">
                {section.items.map((item, i) =>
                  typeof item === "string" ? (
                    <li key={i}>{item}</li>
                  ) : (
                    <li key={i}>
                      <Link
                        to={item.href}
                        className="hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{data.footerNote}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
