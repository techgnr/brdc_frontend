import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { X } from "lucide-react";

const ImagesSingle = ({ images }: any) => {
  const [open, setOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto py-20 pt-10">
        <Heading title={images.title} />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 mt-8">
          {images.images.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setOpen(true)}
            />
          ))}
        </div>
        {open && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer">
            <div className="absolute inset-[5%] md:inset-[10%]">
              <div className="w-full h-full rounded-md overflow-hidden">
                <img
                  src={images.images[0]}
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
