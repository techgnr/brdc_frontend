import Slider from "react-slick";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { createRef } from "react";
import useFetchData from "../../hooks/useFetchData";
import type { CarouselGroup } from "../../types";
import Loader from "./Loader";
import LinkButton from "../ui/LinkButton";
import EmptyMessage from "./EmptyMessage";

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

  const { data: banner, isLoading } = useFetchData<CarouselGroup[]>(
    "/carousels",
    {}
  );

  const slider = createRef<Slider>();

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  if (!banner || banner.length === 0)
    return <EmptyMessage message="No data available" />;
  return (
    <section className="relative overflow-hidden group max-w-[1400px] mx-auto">
      <Slider className="overflow-hidden relative" {...settings} ref={slider}>
        {banner?.map((item, index) => {
          const {
            image,
            title,
            description,
            heading,
            primary_button_label,
            primary_button_link,
          } = item.items[0] || {};
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
              <div className="block md:grid grid-cols-3 items-center">
                <div className="col-span-2 relative">
                  <div className="absolute inset-0 bg-black/20 overflow-hidden" />

                  <img
                    src={image}
                    alt={heading}
                    className="h-[600px] w-full object-cover"
                  />
                </div>
                <div className="col-span-1 absolute left-0 w-full bottom-0 min-h-[300px] md:relative  md:min-h-[400px]">
                  <div className="absolute inset-0 left-[0px] md:left-[-100px] p-10 bg-primary/20 md:bg-primary text-white flex flex-col justify-center">
                    <h2 className="text-xl md:text-xl font-semibold mb-2">
                      {heading}
                    </h2>
                    <h1 className="text-3xl md:text-4xl font-bold mb-5">
                      {title}
                    </h1>
                    <p className="text-md md:text-base leading-relaxed line-clamp-4 mb-3">
                      {description}
                    </p>
                    <div className="z-50">
                      <LinkButton
                        path={primary_button_link}
                        variant="outline"
                        className="mt-5 text-white hover:text-primary"
                      >
                        {primary_button_label}
                      </LinkButton>
                    </div>
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
