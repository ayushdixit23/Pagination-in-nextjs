"use client";
import React, { useState } from "react";

const Pagination = ({ length, postPerPage, currentPage, setCurrentPage }) => {
  let page = [];
  const totalPages = Math.ceil(length / postPerPage);
  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    page.push(i);
  }
  return (
    <div className="flex justify-center items-center gap-3">
      <button
        onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        disabled={currentPage === 1}
        className="text-white bg-black rounded-lg p-3"
      >
        Previous
      </button>

      <div
        className="flex justify-center
	   items-center my-5"
      >
        {page.map((p, i) => (
          <div
            key={i}
            onClick={() => {
              setCurrentPage(p);
            }}
            className={`text-white gap-2 rounded-md p-3 px-6  ${
              p === currentPage
                ? "bg-black shadow-2xl border-2"
                : "bg-blue-700 border"
            }`}
          >
            {p}
          </div>
        ))}
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
