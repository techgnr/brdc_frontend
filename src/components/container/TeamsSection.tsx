import useFetchData from "../../hooks/useFetchData";
import type { TeamMember } from "../../types";
import LinkButton from "../ui/LinkButton";
import SectionHeading from "../ui/SectionHeading";
import EmptyMessage from "./EmptyMessage";
import Loader from "./Loader";

const TeamsSection = ({
  title = "Our Team",
  description = "Meet the passionate individuals working to create positive change in Nepal",
  endpoint = "is_bod_team=true",
}: {
  title: string;
  description?: string;
  endpoint?: string;
}) => {
  const { data: teamMember, isLoading } = useFetchData<TeamMember[]>(
    `/teams/?${endpoint}`,
    {}
  );
  return (
    <section id="team" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title={title} description={description} />

        {isLoading ? (
          <Loader />
        ) : !teamMember || teamMember.length === 0 ? (
          <EmptyMessage message="No data available" />
        ) : (
          <>
            {" "}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamMember.map((item) => (
                <div
                  key={item.id}
                  className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {item.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <LinkButton path="/team" className="px-6 py-3 mt-6 block mx-auto">
                View All
              </LinkButton>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TeamsSection;
