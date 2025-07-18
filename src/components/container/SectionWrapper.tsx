import type React from "react";

const SectionWrapper = ({
  background,
  children,
}: {
  background?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={`py-20 ${background || "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
      </div>
    </section>
  );
};

export default SectionWrapper;
