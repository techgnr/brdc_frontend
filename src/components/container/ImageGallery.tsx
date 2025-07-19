import LinkButton from "../ui/LinkButton";
import data from "../../utils/data.json";
import { Link } from "react-router";

const ImageGallery = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8">
        {data.galleryImage.map((item) => (
          <Link
            to={`/gallery/images/${item.id}`}
            state={{ title: item.title }}
            className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group"
          >
            <div className="bg-green-100 w-full h-full rounded-full flex items-center justify-center">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 transform translate-y-16 left-0 w-full p-4 bg-black/30 transition duration-300 group-hover:translate-y-0 ">
              <h3 className="text-lg text-center font-bold text-white pb-4 line-clamp-1 transition duration-300 group-hover:text-green-300">
                {item.title}
              </h3>
              <div className="text-center">
                <LinkButton
                  variant="secondary"
                  path={`/gallery/images/${item.id}`}
                  className="w-24"
                  state={{ title: item.title }}
                >
                  View
                </LinkButton>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
