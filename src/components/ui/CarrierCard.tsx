import { Globe } from "lucide-react";
import type { Carrier } from "../../types";
import { Link } from "react-router";

const CarrierCard = ({ carrier }: { carrier: Carrier }) => {
  return (
    <Link
      to={`/carriers/${carrier.id}`}
      key={carrier.id}
      state={{ id: carrier.id, name: carrier.name }}
      className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div
        className="h-48 bg-cover bg-center"
        style={{
          backgroundImage: `url(${carrier.upload_document})`,
        }}
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Globe className="text-emerald-600 mr-3" size={24} />
          <h3 className="text-xl font-bold text-gray-900">{carrier.name}</h3>
        </div>
        <span className="inline-block bg-emerald-100 text-primary-dark text-sm px-4 py-1 rounded-full mb-4">
          {carrier?.created_at?.slice(0, 10)}
        </span>
        {/* <p className="text-gray-600 leading-relaxed">{blog.content}</p> */}
      </div>
    </Link>
  );
};

export default CarrierCard;
