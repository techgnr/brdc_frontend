import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import data from "../../utils/data.json";

const ThematicArea = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="Who We Are" />

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {data.thematic.map((item) => (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-full  rounded-full flex items-center justify-center mb-6">
                <img src={item.image} alt="" />
              </div>
              {/* <h3 className="text-xl text-center font-bold text-gray-900 mb-4">
                {item.title}
              </h3> */}
            </div>
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
