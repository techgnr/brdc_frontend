import SectionHeading from "../ui/SectionHeading";
import useFetchData from "../../hooks/useFetchData";
import type { Milestone } from "../../types";
import { Loader } from "lucide-react";
import EmptyMessage from "./EmptyMessage";

const Statistics = () => {
  const { data: statics, isLoading } = useFetchData<Milestone[]>(
    `/milestones/?is_statistics=true`,
    {}
  );
  return (
    <section className="pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Statistics"
          description="We work directly with local communities, ensuring our programs are culturally sensitive."
        />
        {isLoading ? (
          <Loader />
        ) : !statics ? (
          <EmptyMessage message="No data available" />
        ) : (
          <div className="flex flex-wrap gap-y-6 gap-x-6">
            {statics.map((item) => (
              <div
                className={`min-h-[200px] flex-1/5 flex flex-col items-center justify-center text-center p-4 md:px-6 border border-gray-200 rounded-md hover:shadow-md transition-shadow duration-300 bg-white`}
                key={item.id}
              >
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  {item.count}
                </p>
                <h6 className="text-green-800 font-medium italic text-sm">
                  {item.name}
                </h6>
                <p className="text-gray-500 font-medium text-sm mt-3 md:max-w-md md:text-md line-clamp-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Statistics;
