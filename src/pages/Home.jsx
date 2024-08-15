import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Card from "../components/Card";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <main className="mx-auto container space-y-10 mb-20">
      <section className="flex lg:flex-row flex-col justify-between gap-10 mt-10">
        <details className="dropdown">
          <summary className="btn btn-lg w-full  btn-accent text-xl flex items-center justify-center ">
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

        <label className="input input-bordered input-lg  flex items-center gap-4 flex-1">
          <IoSearch className="text-2xl text-gray-500" />
          <input type="text" className="grow h-16" placeholder="Search..." />
        </label>

        <button
          onClick={() => setToggle(!toggle)}
          className="btn btn-info btn-lg"
        >
          Price: {toggle ? "Low to High" : "High to Low"}
        </button>
      </section>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
};

export default Home;
