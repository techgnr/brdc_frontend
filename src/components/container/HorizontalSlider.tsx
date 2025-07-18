import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const items = [
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

const HorizontalSlider = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Network
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals working to create positive change in
            Nepal
          </p>
        </div>
        <div className="relative">
          <Marquee
            speed={40}
            direction="left"
            pauseOnHover
            gradient={false}
            autoFill
            className="flex gap-6"
          >
            <div className="flex gap-6 items-end">
              {items.map((src, index) => (
                <Link
                  key={index}
                  to="#"
                  className={`relative bg-white overflow-hidden rounded-md shadow-sm border border-gray-200 hover:shadow-lg transition-shadow group ${
                    index === 0 ? "ms-6" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt={`logo-${index}`}
                    className="h-40 w-40 object-cover object-center group-hover:scale-115 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default HorizontalSlider;
