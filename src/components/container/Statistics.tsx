import SectionHeading from "../ui/SectionHeading";
import data from "../../utils/data.json";

const Statistics = () => {
  return (
    <section className="pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Statistics"
          description="We work directly with local communities, ensuring our programs are culturally sensitive."
        />
        <div className="flex flex-wrap gap-y-6 gap-x-6">
          {data.statics.map((item, idx) => (
            <div
              className={`min-h-[200px] flex-1/5 flex flex-col items-center justify-center text-center p-4 border border-gray-200 rounded-md hover:shadow-md transition-shadow duration-300 ${
                idx % 2 === 0 ? "bg-white" : "bg-white"
              }`}
              key={item.id}
            >
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {item.count}
              </p>
              <h6 className="text-green-800 font-medium italic text-sm">
                {item.label}
              </h6>
              <p className="text-gray-500 font-medium text-sm mt-3 md:text-md">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
