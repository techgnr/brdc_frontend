import data from "../../utils/data.json";
import PaginatedData from "../PaginatedData";
import Heading from "../ui/Heading";
import QuickCard from "../ui/QuickCard";
import LinkButton from "../ui/LinkButton";
import StoryCard from "../ui/StoryCard";
import SectionHeading from "../ui/SectionHeading";
import useFetchData from "../../hooks/useFetchData";
import type { Stories } from "../../types";
import Loader from "./Loader";
import EmptyMessage from "./EmptyMessage";

const StoriesSingle = ({
  isHome,
  itemsPerPage = 6,
}: {
  isHome?: boolean;
  itemsPerPage?: number;
}) => {
  const { data: stories, isLoading } = useFetchData<Stories[]>(
    `/sucessstories/`,
    {}
  );
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
        {isLoading ? (
          <Loader />
        ) : !stories ? (
          <EmptyMessage message="No data available" />
        ) : isHome ? (
          <>
            <div className="space-y-6">
              {stories.map((item) => (
                <QuickCard item={item} key={item.id} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <LinkButton path="/stories" className="px-6 py-3">
                View All
              </LinkButton>
            </div>
          </>
        ) : (
          <PaginatedData data={stories} itemsPerPage={itemsPerPage}>
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
