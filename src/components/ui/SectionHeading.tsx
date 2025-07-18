const SectionHeading = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className={`text-center ${description ? "mb-16" : "mb-8"}`}>
      <h2 className="text-3xl md:text-4xl inline-block font-bold text-gray-900 mb-6 relative after:content-[''] after:absolute after:top-[105%] after:left-0 after:w-1/2 after:h-[4px] after:bg-green-600 before:rounded-full">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
