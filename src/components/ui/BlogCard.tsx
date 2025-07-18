import { Globe } from "lucide-react";

const BlogCard = ({ item }: { item: string }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
      <div
        className="h-48 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
        }}
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Globe className="text-emerald-600 mr-3" size={24} />
          <h3 className="text-xl font-bold text-gray-900">
            Environment {item.split(" ")[1]}
          </h3>
        </div>
        <span className="inline-block bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full mb-4">
          12 Active Projects
        </span>
        <p className="text-gray-600 leading-relaxed">
          Reforestation projects, clean water initiatives, and sustainable
          farming practices protecting Nepal's natural heritage.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
