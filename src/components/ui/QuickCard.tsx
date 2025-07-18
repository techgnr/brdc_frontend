import { Link } from "react-router";

const QuickCard = ({ item }: any) => {
  return (
    <Link
      to={`/stories/${item.id}`}
      className="h-28 bg-gray-100 flex rounded-md overflow-hidden shadow hover:shadow-md transition-shadow duration-300 group"
      key={item.id}
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-auto object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold line-clamp-2">{item.title}</h2>
        <p className="text-gray-600 line-clamp-3">{item.uploaded_date}</p>
      </div>
    </Link>
  );
};

export default QuickCard;
