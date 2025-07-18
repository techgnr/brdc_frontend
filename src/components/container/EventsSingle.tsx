import data from "../../utils/data.json";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import QuickCard from "../ui/QuickCard";

const EventsSingle = () => {
  return (
    <div>
      <Heading title="Events" className="text-center" />
      <div className="mt-8 space-y-6">
        {data.events.map((item) => (
          <QuickCard item={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button className="px-4">View More</Button>
      </div>
    </div>
  );
};

export default EventsSingle;
