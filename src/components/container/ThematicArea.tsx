import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import data from "../../utils/data.json";
import { Link } from "react-router";

const ThematicArea = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Thematic Areas"
          description="NepalCare is dedicated to creating sustainable change in Nepal's
            communities through education, healthcare."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {data.thematic.map((item) => (
            <Link
              to={`/thematic/${item.id}`}
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
                  <Button variant="secondary">Learn More</Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Button className="mt-8 px-6">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default ThematicArea;
