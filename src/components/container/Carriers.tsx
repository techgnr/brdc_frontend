import SectionHeading from "../ui/SectionHeading";
import PaginatedData from "../PaginatedData";
import LinkButton from "../ui/LinkButton";
import useFetchData from "../../hooks/useFetchData";
import type { Carrier } from "../../types";
import Loader from "./Loader";
import EmptyMessage from "./EmptyMessage";
import CarrierCard from "../ui/CarrierCard";

const Carriers = ({
  isHome,
  itemsPerPage = 6,
}: {
  isHome?: boolean;
  itemsPerPage?: number;
}) => {
  const { data: carriers, isLoading } = useFetchData<Carrier[]>(
    "/carrier/",
    {}
  );
  return (
    <section id="Carrier" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Our Carrier"
          description="Three key focus areas that create lasting impact in Nepal's communities"
        />

        {isLoading ? (
          <Loader />
        ) : !carriers || carriers.length === 0 ? (
          <EmptyMessage message="No data available" />
        ) : isHome ? (
          <>
            <div className="grid md:grid-cols-3 gap-8">
              {carriers.slice(0, itemsPerPage).map((item) => (
                <CarrierCard key={item.id} carrier={item} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <LinkButton path="/blogs" className="px-6 py-3">
                View More
              </LinkButton>
            </div>
          </>
        ) : (
          <PaginatedData data={carriers} itemsPerPage={itemsPerPage}>
            {(items) => (
              <div className="grid md:grid-cols-3 gap-6">
                {items.map((item) => (
                  <CarrierCard key={item.id} carrier={item} />
                ))}
              </div>
            )}
          </PaginatedData>
        )}
      </div>
    </section>
  );
};

export default Carriers;
