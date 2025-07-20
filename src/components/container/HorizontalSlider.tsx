import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import useFetchData from "../../hooks/useFetchData";
import type { Network } from "../../types";
import Loader from "./Loader";

const HorizontalSlider = () => {
  const { data: network, isLoading } = useFetchData<Network[]>(
    "/aboutsection/?is_what_we_do=true",
    {}
  );
  if (!network) return null;
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
        {isLoading ? (
          <Loader />
        ) : (
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
                {network.map((item, index) => (
                  <Link
                    key={index}
                    to={item?.link}
                    className={`relative bg-white overflow-hidden rounded-md shadow-sm border border-gray-200 hover:shadow-lg transition-shadow group ${
                      index === 0 ? "ms-6" : ""
                    }`}
                  >
                    <img
                      src={item?.image}
                      alt={`logo-${index}`}
                      className="h-40 w-40 object-cover object-center group-hover:scale-115 transition-all duration-300"
                    />
                  </Link>
                ))}
              </div>
            </Marquee>
          </div>
        )}
      </div>
    </section>
  );
};

export default HorizontalSlider;
