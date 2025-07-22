import { Send } from "lucide-react";
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import InputField from "./InputField";
import usePostData from "../../hooks/usePostData";

const formFields = [
  {
    label: "Full Name *",
    name: "full_name",
    type: "text",
    placeholder: "Your full name",
    required: true,
    width: "col-span-1",
  },
  {
    label: "Phone Number *",
    name: "phone_no",
    type: "number",
    placeholder: "Your phone number",
    required: true,
    width: "col-span-1",
  },
  {
    label: "Email Address *",
    name: "email",
    type: "email",
    placeholder: "your.email@example.com",
    required: true,
    width: "col-span-1 sm:col-span-2",
  },
  // {
  //   label: "Subject *",
  //   name: "subject",
  //   type: "select",
  //   options: [
  //     { label: "Select a subject", value: "" },
  //     { label: "General Inquiry", value: "general" },
  //     { label: "Volunteer Opportunities", value: "volunteer" },
  //     { label: "Donation/Partnership", value: "donation" },
  //     { label: "Program Information", value: "programs" },
  //     { label: "Media Inquiry", value: "media" },
  //     { label: "Other", value: "other" },
  //   ],
  //   required: true,
  //   width: "col-span-2",
  // },
  {
    label: "Message *",
    name: "description",
    type: "textarea",
    placeholder:
      "Tell us how we can help you or how you'd like to get involved...",
    required: true,
    rows: 6,
    width: "col-span-1 sm:col-span-2",
  },
];

type Contactus = {
  full_name: string;
  email: string;
  phone_no: string;
  description: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<Contactus>({
    full_name: "",
    email: "",
    phone_no: "",
    description: "",
  });

  const [errorMessage, setErrorMessage] = useState<any>({});

  const { mutate, status } = usePostData("/contactus/");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({
          full_name: "",
          email: "",
          phone_no: "",
          description: "",
        });
      },
      onError: (err: any) => {
        setErrorMessage(err.response.data as any);
        console.error("Submission error:", err);
      },
    });
  };

  return (
    <section className="py-10 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Send us a message"
          description="Have a question or want to get involved? Fill out the form below and we'll get back to you."
        />

        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {formFields.map((field, idx) => (
                <div className={field.width} key={field.name}>
                  <InputField
                    key={idx}
                    field={field}
                    value={formData[field.name as keyof typeof formData]}
                    handleInputChange={handleInputChange}
                  />
                  {errorMessage[field.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errorMessage[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={status === "pending"}
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Send className="h-5 w-5 mr-2" />
                {status === "pending" ? "Sending..." : "Send Message"}
              </button>
            </div>
            {status === "success" && (
              <p className="text-green-500 text-sm mt-1 text-center">
                Thank you for your message! We will get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
