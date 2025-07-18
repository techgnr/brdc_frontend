import data from "../../utils/data.json";
import PaginatedData from "../PaginatedData";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import QuickCard from "../ui/QuickCard";

const EventsSingle = ({
  isHome,
  itemsPerPage = 6,
}: {
  isHome?: boolean;
  itemsPerPage?: number;
}) => {
  return (
    <div className="py-20">
      <Heading title="Events" className="text-center" />
      <div className="mt-8 ">
        {isHome ? (
          <>
            <div className="space-y-6">
              {data.events.map((item) => (
                <QuickCard item={item} key={item.id} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button className="px-6 py-3">View More</Button>
            </div>
          </>
        ) : (
          <PaginatedData data={data.events} itemsPerPage={itemsPerPage}>
            {(items) => (
              <div className="grid md:grid-cols-3 gap-6">
                {items.map((item) => (
                  <QuickCard key={item} item={item} />
                ))}
              </div>
            )}
          </PaginatedData>
        )}
      </div>
    </div>
  );
};

export default EventsSingle;
