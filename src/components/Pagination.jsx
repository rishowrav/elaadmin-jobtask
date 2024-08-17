import React, { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Pagination = ({
  setCurrentPage,
  itemsPerPage,
  currentPage,
  category,
  search,
}) => {
  const [count, setCount] = useState(0);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get(
        `/products-count?category=${category}&search=${search}`
      );
      setCount(data.productLength);
    };

    getData();
  }, [category, search]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((index) => index + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-base h-10">
        {/* Previous Button */}
        <li>
          <button
            disabled={currentPage === 1 ? true : false}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            className={`${
              currentPage === 1
                ? "disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed "
                : ""
            } flex cursor-pointer items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-800 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-blue-500 hover:text-white`}
          >
            Previous
          </button>
        </li>
        {/* Numbers */}
        {pages.map((page) => {
          return (
            <li onClick={() => setCurrentPage(page)} key={page}>
              <a
                className={`${
                  currentPage == +page ? "bg-blue-600 text-white" : "bg-white"
                } flex cursor-pointer hover:bg-blue-500 hover:text-white  items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300   `}
              >
                {page}
              </a>
            </li>
          );
        })}

        {/* Next Button */}
        <li>
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            disabled={currentPage === numberOfPages ? true : false}
            className={`${
              currentPage === numberOfPages
                ? "disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed "
                : ""
            }  flex cursor-pointer  items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
