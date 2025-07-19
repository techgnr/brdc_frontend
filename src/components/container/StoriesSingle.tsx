import { Link } from "react-router";
import data from "../../utils/data.json";
import PaginatedData from "../PaginatedData";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import QuickCard from "../ui/QuickCard";
import LinkButton from "../ui/LinkButton";
import StoryCard from "../ui/StoryCard";
import SectionHeading from "../ui/SectionHeading";

const StoriesSingle = ({
  isHome,
  itemsPerPage = 6,
}: {
  isHome?: boolean;
  itemsPerPage?: number;
}) => {
  return (
    <div className="py-20">
      {!isHome ? (
        <SectionHeading
          title="Success Stories"
          description="NepalCare is dedicated to creating sustainable change in Nepal's communities through education, healthcare."
        />
      ) : (
        <Heading title="Stories" className="text-center" />
      )}
      <div className="mt-8 ">
        {isHome ? (
          <>
            <div className="space-y-6">
              {data.events.map((item) => (
                <QuickCard item={item} key={item.id} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <LinkButton path="/stories" className="px-6 py-3">
                View More
              </LinkButton>
            </div>
          </>
        ) : (
          <PaginatedData data={data.events} itemsPerPage={itemsPerPage}>
            {(items) => (
              <div className="grid md:grid-cols-3 gap-6">
                {items.map((item) => (
                  <StoryCard key={item.id} story={item} index={item.id} />
                ))}
              </div>
            )}
          </PaginatedData>
        )}
      </div>
    </div>
  );
};

export default StoriesSingle;
