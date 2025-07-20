import LinkButton from "../ui/LinkButton";
import SectionHeading from "../ui/SectionHeading";

const TeamsSection = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Our Team"
          description="Meet the passionate individuals working to create positive change in
            Nepal"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
              RS
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Raj Sharma</h3>
            <p className="text-primary font-medium mb-3">Executive Director</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              15+ years experience in development work across Nepal. Passionate
              about sustainable community development.
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
              SP
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Sita Poudel
            </h3>
            <p className="text-primary font-medium mb-3">Program Manager</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Expert in education and women's empowerment programs. Leading our
              rural school development initiatives.
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
              KB
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Kiran Bhattarai
            </h3>
            <p className="text-primary font-medium mb-3">Field Coordinator</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              On-ground coordinator ensuring effective implementation of
              programs in remote mountain communities.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <LinkButton path="/team" className="px-6 py-3 mt-6 block mx-auto">
            View More
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
