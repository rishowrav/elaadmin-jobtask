import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import axios from "axios";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    dataFeatching();
  }, []);

  const dataFeatching = async () => {
    try {
      const { data } = await axios.get("product.json");
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
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>

        <label className="input input-bordered  flex items-center gap-4 flex-1">
          <IoSearch className="text-2xl text-gray-500" />
          <input type="text" className="grow h-12" placeholder="Search..." />
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
