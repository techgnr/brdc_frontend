import Slider from "react-slick";
import data from "../../utils/data.json";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { createRef } from "react";

const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    fade: true,
    cssEase: "linear",
    infinite: true,
  };

  const slider = createRef<Slider>();
  return (
    <section className="relative overflow-hidden group max-w-[1400px] mx-auto">
      <Slider className="overflow-hidden relative" {...settings} ref={slider}>
        {data.banner?.map((item, index) => {
          const { image, title, description, heading } = item;
          return (
            <div key={index} className="relative h-[600px] w-full">
              <div className="absolute inset-[-100px] z-50 px-10 flex items-center justify-between opacity-0 transition-all duration-300 group-hover:inset-0 group-hover:opacity-100">
                <button
                  onClick={() => slider?.current?.slickPrev()}
                  className="cursor-pointer"
                >
                  <ChevronsLeft color="white" />
                </button>
                <button
                  onClick={() => slider?.current?.slickNext()}
                  className="cursor-pointer"
                >
                  <ChevronsRight color="white" />
                </button>
              </div>
              <div className="grid grid-cols-3 items-center">
                <div className="col-span-2 relative">
                  <div className="absolute inset-0 bg-black/50 overflow-hidden" />

                  <img
                    src={image}
                    alt={heading}
                    className="h-[600px] w-full object-cover"
                  />
                </div>
                <div className="col-span-1 relative min-h-[400px]">
                  <div className="absolute inset-0 left-[-100px] p-10 bg-green-600 text-white flex flex-col justify-center">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">
                      {heading}
                    </h2>
                    <h1 className="text-3xl md:text-5xl font-bold mb-5">
                      {title}
                    </h1>
                    <p className="text-sm md:text-base">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Banner;
