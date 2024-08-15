import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <main className="mx-auto container">
      <section className="flex justify-between gap-10 mt-10">
        <details className="dropdown">
          <summary className="btn btn-lg w-72  btn-accent text-xl flex items-center justify-center ">
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

        <label className="input input-bordered input-lg flex items-center gap-4 flex-1">
          <IoSearch className="text-2xl text-gray-500" />
          <input type="text" className="grow" placeholder="Search..." />
        </label>

        <button
          onClick={() => setToggle(!toggle)}
          className="btn btn-info btn-lg"
        >
          Price: {toggle ? "Low to High" : "High to Low"}
        </button>
      </section>
    </main>
  );
};

export default Home;
