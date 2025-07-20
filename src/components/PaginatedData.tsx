import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginatedDataProps<T> = {
  data: T[];
  itemsPerPage: number;
  children: (items: T[]) => React.ReactNode;
  scrollToTopOnPageChange?: boolean;
};

function PaginatedData<T>({
  data,
  itemsPerPage,
  children,
  scrollToTopOnPageChange = true,
}: PaginatedDataProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    if (scrollToTopOnPageChange) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage, scrollToTopOnPageChange]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const getPageNumbers = () => {
    const range: (number | string)[] = [];
    const maxButtons = 5;
    if (totalPages <= maxButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      range.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      range.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      range.push(1, "...", currentPage, "...", totalPages);
    }

    return range;
  };

  return (
    <>
      {children(currentItems)}

      <div className="flex w-full cols-3 justify-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 border border-primary rounded disabled:opacity-50 disabled:border-gray-300 cursor-pointer disabled:cursor-not-allowed"
        >
          <ChevronLeft size={16} />
        </button>

        {getPageNumbers().map((item, index) =>
          item === "..." ? (
            <span key={index} className="px-2 text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => setCurrentPage(Number(item))}
              className={`px-3 py-1 border rounded ${
                currentPage === item
                  ? "bg-primary text-white"
                  : "hover:bg-blue-100"
              }`}
            >
              {item}
            </button>
          )
        )}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="p-2 border border-primary rounded disabled:opacity-50 disabled:border-gray-300 cursor-pointer disabled:cursor-not-allowed"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </>
  );
}

export default PaginatedData;
