import { BookOpen, Globe, Users } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Our Programs"
          description="Three key focus areas that create lasting impact in Nepal's
            communities"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
              }}
            ></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
                25 Active Projects
              </span>
              <p className="text-gray-600 leading-relaxed">
                Building schools, training teachers, and providing scholarships
                to ensure every child in rural Nepal has access to quality
                education.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Users className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Healthcare</h3>
              </div>
              <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mb-4">
                18 Active Projects
              </span>
              <p className="text-gray-600 leading-relaxed">
                Mobile health clinics, maternal care programs, and health
                education initiatives reaching remote mountain communities.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Globe className="text-emerald-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Environment</h3>
              </div>
              <span className="inline-block bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full mb-4">
                12 Active Projects
              </span>
              <p className="text-gray-600 leading-relaxed">
                Reforestation projects, clean water initiatives, and sustainable
                farming practices protecting Nepal's natural heritage.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
