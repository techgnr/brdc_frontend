import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { X } from "lucide-react";
import type { Album } from "../../types";
import EmptyMessage from "./EmptyMessage";
import Loader from "./Loader";

const ImagesSingle = ({
  images,
  loading,
}: {
  images: Album;
  loading: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(1);

  const handleClick = (index: number) => {
    setActiveImage(index);
    setOpen(true);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  return (
    <section>
      <div className="max-w-7xl mx-auto py-10 sm:py-16 md:py-20 pt-10">
        <Heading title={images?.title} />
        {loading ? (
          <Loader />
        ) : !images?.images.length ? (
          <EmptyMessage message="No image available" />
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 mt-8">
            {images.images.map((image) => (
              <img
                key={image?.id}
                src={image?.image}
                alt=""
                className="w-full h-72 object-cover cursor-pointer hover:scale-105 transition-all duration-200 rounded-md"
                onClick={() => handleClick(image?.id)}
              />
            ))}
          </div>
        )}
        {open && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer">
            <div className="absolute inset-[5%] md:inset-[10%]">
              <div className="w-full h-full rounded-md overflow-hidden">
                <img
                  src={images?.images[activeImage - 1]?.image}
                  alt=""
                  className="w-full h-full object-contain"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <div className="absolute inset-0 flex justify-end p-4">
              <Button
                variant="primary"
                onClick={() => setOpen(false)}
                className="max-h-13  flex items-center justify-center"
              >
                <X size={20} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImagesSingle;
