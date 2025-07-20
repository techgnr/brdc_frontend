import { Globe } from "lucide-react";
import type { BlogPost } from "../../types";

const BlogCard = ({ blog }: { blog: BlogPost }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
      <div
        className="h-48 bg-cover bg-center"
        style={{
          backgroundImage: `url(${blog.thumbnail})`,
        }}
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Globe className="text-emerald-600 mr-3" size={24} />
          <h3 className="text-xl font-bold text-gray-900">{blog.title}</h3>
        </div>
        <span className="inline-block bg-emerald-100 text-primary-dark text-sm px-4 py-1 rounded-full mb-4">
          {blog.created_at.split("T")[0]}
        </span>
        {/* <p className="text-gray-600 leading-relaxed">{blog.content}</p> */}
      </div>
    </div>
  );
};

export default BlogCard;
