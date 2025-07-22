import SectionHeading from "../ui/SectionHeading";
import type { Milestone } from "../../types";
import useFetchData from "../../hooks/useFetchData";
import Loader from "./Loader";
import EmptyMessage from "./EmptyMessage";

const OurReach = () => {
  const { data: reachs, isLoading } = useFetchData<Milestone[]>(
    `/milestones/?is_reached=true`,
    {}
  );
  return (
    <div>
      <SectionHeading
        title="Our Reach"
        description="We work directly with local communities, ensuring our programs are culturally sensitive."
      />
      {isLoading ? (
        <Loader />
      ) : !reachs || reachs.length === 0 ? (
        <EmptyMessage message="No data available" />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {reachs.map((item, idx) => (
            <div
              className={`min-h-[200px] flex flex-col items-center justify-center text-center p-4 md:px-5 border border-gray-200 rounded-md hover:shadow-md transition-shadow duration-300 ${
                idx % 2 === 0 ? "bg-primary-dark" : "bg-transparent"
              }`}
              key={item.id}
            >
              <p
                className={`text-3xl md:text-4xl font-bold ${
                  idx % 2 === 0 ? "text-white" : "text-primary"
                }`}
              >
                {item.count}
              </p>
              <h6
                className={`font-medium italic text-sm ${
                  idx % 2 === 0 ? "text-white" : "text-primary"
                }`}
              >
                {item.name}
              </h6>
              <p
                className={`font-medium text-sm mt-3 line-clamp-3 md:text-md ${
                  idx % 2 === 0 ? "text-white" : "text-gray-500 "
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OurReach;
