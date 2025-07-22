import { Link } from "react-router";
import useFetchData from "../../hooks/useFetchData";
import type { Album } from "../../types";
import EmptyMessage from "./EmptyMessage";
import Loader from "./Loader";
import Button from "../ui/Button";

const ImageGallery = () => {
  const { data: albums, isLoading } = useFetchData<Album[]>("/albums/", {});
  return (
    <div className="px-4">
      {isLoading ? (
        <Loader />
      ) : !albums || albums.length === 0 ? (
        <EmptyMessage message="No album available" />
      ) : (
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {albums.map((item) => (
            <Link
              to={`/gallery/images/${item.id}`}
              state={{ title: item.title }}
              key={item.id}
              className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group"
            >
              <div className="bg-green-100 w-full h-72 rounded-full flex items-center justify-center">
                <img
                  src={item.thumbnail}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 transform translate-y-16 left-0 w-full p-4 bg-black/60 transition duration-300 group-hover:translate-y-0 ">
                <h3 className="text-lg text-center font-bold text-white mb-4 line-clamp-2 transition duration-300 group-hover:text-green-300">
                  {item.title}
                </h3>
                <div className="text-center">
                  <Button variant="secondary" className="w-24">
                    View
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
