import SectionHeading from "../ui/SectionHeading";
import useFetchData from "../../hooks/useFetchData";
import type { AboutSection } from "../../types";
import EmptyMessage from "./EmptyMessage";
import Loader from "./Loader";
import { Link } from "react-router";

const HomeAbout = () => {
  const { data: about, isLoading } = useFetchData<AboutSection[]>(
    "/aboutsection/?is_who_we_are=true",
    {}
  );
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Who We Are"
          description="ABC is dedicated to creating sustainable change in Nepal's
            communities through education, healthcare, and environmental
            conservation. We work hand-in-hand with local communities to build a
            brighter future for Nepal."
        />
        {isLoading ? (
          <Loader />
        ) : !about || about.length === 0 ? (
          <EmptyMessage message="No data available" />
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-8">
              {about.slice(0, 6).map((item) => (
                <Link
                  to={`/who-we-are/${item.id}`}
                  state={{ id: item.id, name: item.name }}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                  key={item.id}
                >
                  <div className="flex items-center justify-center mb-6 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl text-center font-bold text-gray-900 mb-4 group-hover:text-primary">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed line-clamp-4">
                    {item.about_categories?.intro}
                  </p>
                </Link>
              ))}
            </div>
            {/* <div className="text-center">
              <Button className="mt-8 px-6">Learn More</Button>
            </div> */}
          </>
        )}
      </div>
    </section>
  );
};

export default HomeAbout;
