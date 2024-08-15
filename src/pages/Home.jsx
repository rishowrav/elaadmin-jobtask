import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const axiosPublic = useAxiosPublic();

  console.log(search);

  useEffect(() => {
    dataFeatching();
  }, [toggle, category, search]);

  const dataFeatching = async () => {
    try {
      const { data } = await axiosPublic.get(
        `/products?sort=${
          toggle ? "asc" : "desc"
        }&category=${category}&search=${search}`
      );
      setLoading(true);
      setDatas(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto container space-y-10 mb-20">
      <section className="flex lg:flex-row flex-col justify-between lg:gap-10 gap-4 mt-10 mx-auto lg:w-[800px] ">
        <details className="dropdown">
          <summary className="btn  w-full  btn-accent text-lg flex items-center justify-center ">
            Categorize <FaChevronDown />
          </summary>
          <ul className="menu font-semibold dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a
                className={`${
                  category === ""
                    ? "bg-gray-500 text-white hover:text-black "
                    : ""
                }`}
                onClick={() => setCategory("")}
              >
                All
              </a>
            </li>
            <li>
              <a
                className={`${
                  category === "Iphone"
                    ? "bg-gray-500 text-white hover:text-black "
                    : ""
                }`}
                onClick={() => setCategory("Iphone")}
              >
                Iphone
              </a>
            </li>
            <li>
              <a
                className={`${
                  category === "Samsung"
                    ? "bg-gray-500 text-white hover:text-black"
                    : ""
                }`}
                onClick={() => setCategory("Samsung")}
              >
                Samsung Galaxy
              </a>
            </li>
            <li>
              <a
                className={`${
                  category === "Oppo"
                    ? "bg-gray-500 text-white hover:text-black"
                    : ""
                }`}
                onClick={() => setCategory("Oppo")}
              >
                Oppo
              </a>
            </li>
            <li>
              <a
                className={`${
                  category === "Google Pixel"
                    ? "bg-gray-500 text-white hover:text-black"
                    : ""
                }`}
                onClick={() => setCategory("Google Pixel")}
              >
                Google Pixel
              </a>
            </li>
          </ul>
        </details>

        <label className="input input-bordered  flex items-center gap-4 flex-1">
          <IoSearch className="text-2xl text-gray-500" />
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="grow h-12"
            placeholder="Search..."
          />
        </label>

        <button
          onClick={() => setToggle(!toggle)}
          className="btn text-lg btn-info "
        >
          Price: {toggle ? "Low to High" : "High to Low"}
        </button>
      </section>

      {loading ? (
        <h1 className="text-4xl font-bold text-center">Loading...</h1>
      ) : (
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {datas.map((item) => (
            <Card key={item?.description} data={item} />
          ))}
        </section>
      )}

      <section className="flex justify-center">
        <Pagination />
      </section>
    </main>
  );
};

export default Home;
