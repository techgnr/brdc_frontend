import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ContactForm from "../forms/ContactForm";

const MapEmbed = () => {
  const mapEmbedHTML = `<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14135.995809707658!2d85.30530146876868!3d27.655504119394696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb177f078f1cd9%3A0xb514415c5a76afb3!2sKusunti%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1753512288034!5m2!1sen!2snp"></iframe>`;


//  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14135.995809707658!2d85.30530146876868!3d27.655504119394696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb177f078f1cd9%3A0xb514415c5a76afb3!2sKusunti%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1753512288034!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  return (
    <div
      dangerouslySetInnerHTML={{ __html: mapEmbedHTML }}
      className="w-full h-96 md:h-[450px]"
    />
  );
};

const contactInfo = [
  {
    icon: Building,
    title: "Main Office",
    details: ["Baijnath Research and Development Center Pvt. Ltd.", "Kusunti-13,Lalitpur, Nepal"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "+977 985-1184482 (Nirajan Khadka)",
      "+977 9858485557 (Hari Bhakta Saud)",
      "+977 9843564936 (Sushil Kunwar)",
    ],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["baijnathrdcenter@brdc.com.np","baijnathrdcenter@gmail.com","khakdkanirazan@brdc.com.np"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Sunday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: Closed",
    ],
  },
];

const officeLocations = [
  {
    name: "Lalitpur Headquarter",
    address: "Kusanti-13, Lalitpur 44700",
    phone: "+977 985-1184482",
    email: "baijnathrdcenter@brdc.com.np",
    type: "Main Office",
  },
  {
    name: "Kailali Regional Office",
    address: "Dhangadhi, Kailali 10900",
    phone: "+977 985-1184482",
    email: "baijnathrdcenter@brdc.com.np",
    type: "Regional Office",
  },
  {
    name: "Achham Field Office",
    address: "Sanfebagar-03 ,Achham 10700",
    phone: "+977 985-1184482",
    email: "baijnathrdcenter@brdc.com.np",
    type: "Field Office",
  },
];
const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contact Information"
            description="Multiple ways to reach us - choose what's most convenient for you."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Office Locations */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at one of our offices across Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {officeLocations.map((office, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {office.name}
                  </h3>
                  <span className="bg-green-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {office.type}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        {/* Map Embed */}
        <MapEmbed />
      </section>
    </div>
  );
};

export default Contact;
