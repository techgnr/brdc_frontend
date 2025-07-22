import SectionHeading from "../ui/SectionHeading";
import PaginatedData from "../PaginatedData";
import BlogCard from "../ui/BlogCard";
import LinkButton from "../ui/LinkButton";
import useFetchData from "../../hooks/useFetchData";
import type { BlogPost } from "../../types";
import Loader from "./Loader";
import EmptyMessage from "./EmptyMessage";

const Programs = ({
  isHome,
  itemsPerPage = 6,
}: {
  isHome?: boolean;
  itemsPerPage?: number;
}) => {
  const { data: blogs, isLoading } = useFetchData<BlogPost[]>("/blogs/", {});
  return (
    <section id="programs" className="py-10 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Our Blogs"
          description="Three key focus areas that create lasting impact in Nepal's
            communities"
        />

        {isLoading ? (
          <Loader />
        ) : !blogs || blogs.length === 0 ? (
          <EmptyMessage message="No data available" />
        ) : isHome ? (
          <>
            <div className="grid md:grid-cols-3 gap-8">
              {blogs.slice(0, itemsPerPage).map((item) => (
                <BlogCard key={item.id} blog={item} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <LinkButton path="/blogs" className="px-6 py-3">
                View More
              </LinkButton>
            </div>
          </>
        ) : (
          <PaginatedData data={blogs} itemsPerPage={itemsPerPage}>
            {(items) => (
              <div className="grid md:grid-cols-3 gap-6">
                {items.map((item) => (
                  <BlogCard key={item.id} blog={item} />
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
