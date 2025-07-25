const QuickCard = ({ item }: { item: any }) => {
  return (
    <div
      className="h-28 bg-gray-100 flex rounded-md overflow-hidden shadow hover:shadow-md transition-shadow duration-300 group"
      key={item.id}
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-28 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold line-clamp-2 text-gray-600 transition duration-200 group-hover:text-primary">
          {item.title}
        </h2>
        <p className="text-green-800 text-sm font-medium">
          {item.uploaded_date || item.created_at.slice(0, 10)}
        </p>
      </div>
    </div>
  );
};

export default QuickCard;
