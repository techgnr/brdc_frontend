import { Handshake, Heart, Target } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="About Us"
          description="NepalCare is dedicated to creating sustainable change in Nepal's
            communities through education, healthcare, and environmental
            conservation. We work hand-in-hand with local communities to build a
            brighter future for Nepal."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A Nepal where every community has access to quality education,
              healthcare, and sustainable livelihoods for generations to come.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Handshake className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Our Approach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We work directly with local communities, ensuring our programs are
              culturally sensitive, sustainable, and community-driven.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Transparency, respect, empowerment, and sustainability guide every
              decision we make and action we take.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Button className="mt-8 px-6">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
