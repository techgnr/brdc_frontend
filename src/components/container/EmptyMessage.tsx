const EmptyMessage = ({
  message = "No data available",
  position = "center",
}: {
  message: string;
  position?: "center" | "left" | "right";
}) => {
  return (
    <div
      className={`flex justify-${position} items-center h-full text-gray-500 font-semibold text-md py-4`}
    >
      <span>{message}</span>
    </div>
  );
};

export default EmptyMessage;
