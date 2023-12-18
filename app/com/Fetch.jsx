import React from "react";

const Pagination = ({ length, postPerPage, currentPage, setCurrentPage }) => {
  let page = [];
  const totalPages = Math.ceil(length / postPerPage);

  // Function to generate an array of page numbers
  const generatePageArray = () => {
    const maxButtons = 5;
    const maxPagesToShow = Math.min(totalPages, maxButtons);
    const middleIndex = Math.ceil(maxPagesToShow / 2);

    if (currentPage <= middleIndex) {
      for (let i = 1; i <= maxPagesToShow; i++) {
        page.push(i);
      }
    } else if (currentPage > totalPages - middleIndex) {
      for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
        page.push(i);
      }
    } else {
      for (
        let i = currentPage - Math.floor(maxPagesToShow / 2);
        i <= currentPage + Math.floor(maxPagesToShow / 2);
        i++
      ) {
        page.push(i);
      }
    }
  };

  generatePageArray();

  return (
    <div className="flex justify-center items-center gap-3">
      <button
        onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        disabled={currentPage === 1}
        className="text-white bg-black rounded-lg p-3"
      >
        Previous
      </button>

      <div className="flex justify-center items-center my-5">
        {page.map((p, i) => (
          <div
            key={i}
            onClick={() => setCurrentPage(p)}
            className={`text-white gap-2 rounded-md p-3 px-6 ${
              p === currentPage
                ? "bg-black shadow-2xl border-2"
                : "bg-blue-700 border"
            }`}
          >
            {p}
          </div>
        ))}

        {totalPages > 5 && currentPage + Math.floor(5 / 2) < totalPages && (
          <div className="text-black gap-2 rounded-md p-3 px-6 cursor-not-allowed">
            ...
          </div>
        )}
      </div>

      <button
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        disabled={currentPage === totalPages}
        className="text-white bg-black rounded-lg p-3 px-6"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
