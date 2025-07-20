import useFetchData from "../../hooks/useFetchData";
import type { Events } from "../../types";
import PaginatedData from "../PaginatedData";
import Heading from "../ui/Heading";
import LinkButton from "../ui/LinkButton";
import QuickCard from "../ui/QuickCard";
import EmptyMessage from "./EmptyMessage";
import Loader from "./Loader";

const EventsSingle = ({
  isHome,
  itemsPerPage = 6,
}: {
  isHome?: boolean;
  itemsPerPage?: number;
}) => {
  const { data: events, isLoading } = useFetchData<Events[]>(`/events/`, {});
  return (
    <div className="py-20">
      <Heading title="Events" className="text-center" />
      <div className="mt-8 ">
        {isLoading ? (
          <Loader />
        ) : !events ? (
          <EmptyMessage message="No data available" />
        ) : isHome ? (
          <>
            <div className="space-y-6">
              {events.map((item) => (
                <QuickCard item={item} key={item.id} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <LinkButton path="/events" className="px-6 py-3">
                View All
              </LinkButton>
            </div>
          </>
        ) : (
          <PaginatedData data={events} itemsPerPage={itemsPerPage}>
            {(items) => (
              <div className="grid md:grid-cols-3 gap-6">
                {items.map((item) => (
                  <QuickCard key={item.id} item={item} />
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
