import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ContactForm from "../forms/ContactForm";

const MapEmbed = () => {
  const mapEmbedHTML = `<iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/place?q=nepal&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>`;

  return <div dangerouslySetInnerHTML={{ __html: mapEmbedHTML }} />;
};

const Contact = () => {
  const contactInfo = [
    {
      icon: Building,
      title: "Main Office",
      details: ["ABC Foundation", "Setopul, Kathmandu 44600", "Nepal"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+977-1-234-5678 (Main)",
        "+977-1-234-5679 (Programs)",
        "+977-98-1234-5678 (Mobile)",
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@abc.org", "programs@abc.org", "volunteer@abc.org"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const officeLocations = [
    {
      name: "Kathmandu Headquarters",
      address: "Thamel, Kathmandu 44600",
      phone: "+977-1-234-5678",
      email: "kathmandu@abc.org",
      type: "Main Office",
    },
    {
      name: "Pokhara Regional Office",
      address: "Lakeside, Pokhara 33700",
      phone: "+977-61-123-456",
      email: "pokhara@abc.org",
      type: "Regional Office",
    },
    {
      name: "Chitwan Field Office",
      address: "Bharatpur, Chitwan 44200",
      phone: "+977-56-123-456",
      email: "chitwan@abc.org",
      type: "Field Office",
    },
  ];

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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at one of our offices across Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
