import { ArrowBigUpDash } from "lucide-react";
import { useState, useEffect } from "react";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 text-3xl text-white bg-primary p-2 rounded-full transition-all duration-300 md:text-4xl cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      } hover:bg-primary-dark`}
    >
      <ArrowBigUpDash />
    </button>
  );
};

export default GoTop;
