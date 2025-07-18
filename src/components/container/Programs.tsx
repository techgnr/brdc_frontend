import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import PaginatedData from "../PaginatedData";
import BlogCard from "../ui/BlogCard";

const data = Array.from({ length: 54 }, (_, i) => `Post #${i + 1}`);

const Programs = ({
  isHome,
  itemsPerPage = 6,
}: {
  isHome?: boolean;
  itemsPerPage?: number;
}) => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Our Programs"
          description="Three key focus areas that create lasting impact in Nepal's
            communities"
        />

        {isHome ? (
          <>
            <div className="grid md:grid-cols-3 gap-8">
              {data.slice(0, itemsPerPage).map((item) => (
                <BlogCard key={item} item={item} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button className="px-6 py-3">View More</Button>
            </div>
          </>
        ) : (
          <PaginatedData data={data} itemsPerPage={itemsPerPage}>
            {(items) => (
              <div className="grid md:grid-cols-3 gap-6">
                {items.map((item) => (
                  <BlogCard key={item} item={item} />
                ))}
              </div>
            )}
          </PaginatedData>
        )}
      </div>
    </section>
  );
};

export default Programs;
