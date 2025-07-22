import { Link } from "react-router";

const StoryCard = ({ story, index }: any) => {
  return (
    <Link
      to={`/stories/${story.id}`}
      state={{ id: story.id, name: story.title }}
      key={index}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {story.title}
        </h3>
        {/* <p className="text-purple-600 text-sm mb-1">
          Age {story.age} • {story.business}
        </p> */}
        {/* <p className="text-gray-500 text-sm mb-3">{story.location}</p> */}
        {/* <div className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded mb-3 inline-block">
          {story.income}
        </div> */}
        <p className="text-gray-700 italic text-sm">"{story.story}"</p>
      </div>
    </Link>
  );
};

export default StoryCard;
