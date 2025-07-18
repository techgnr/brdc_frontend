import SectionHeading from "../ui/SectionHeading";
import data from "../../utils/data.json";
import Statistics from "./Statistics";

const Milestones = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Statistics />
        <div>
          <SectionHeading
            title="Our Reach"
            description="We work directly with local communities, ensuring our programs are culturally sensitive."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {data.milestone.map((item, idx) => (
              <div
                className={`min-h-[200px] flex flex-col items-center justify-center text-center p-4 border border-gray-200 rounded-md hover:shadow-md transition-shadow duration-300 ${
                  idx % 2 === 0 ? "bg-green-700" : "bg-transparent"
                }`}
                key={item.id}
              >
                <p
                  className={`text-3xl md:text-4xl font-bold ${
                    idx % 2 === 0 ? "text-white" : "text-green-600"
                  }`}
                >
                  {item.count}
                </p>
                <h6
                  className={`font-medium italic text-sm ${
                    idx % 2 === 0 ? "text-white" : "text-green-600"
                  }`}
                >
                  {item.label}
                </h6>
                <p
                  className={`font-medium text-sm mt-3 md:text-md ${
                    idx % 2 === 0 ? "text-white" : "text-gray-500 "
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
