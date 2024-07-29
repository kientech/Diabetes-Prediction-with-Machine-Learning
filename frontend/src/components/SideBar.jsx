import React from "react";
import { HiOutlineHome, HiOutlineChartSquareBar } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className="min-w-20 bg-[#ffff] h-full px-4 py-6 text-center rounded-lg">
      <div>
        <a href="#" className="font-bold text-xl p-4 rounded-lg bg-blue-400">
          DP
        </a>
        <div className="mt-10 text-center flex-col space-y-5">
          <a
            href="#"
            className="p-4 bg-slate-800 flex items-center justify-center rounded-xl text-lg text-white text-center"
          >
            <HiOutlineHome />
          </a>

          <a
            href="#"
            className="p-4 flex items-center justify-center rounded-xl text-lg text-slate-800 text-center"
          >
            <HiOutlineChartSquareBar />
          </a>

          <a
            href="#"
            className="p-4 flex items-center justify-center rounded-xl text-lg text-slate-800 text-center"
          >
            <HiOutlineChartSquareBar />
          </a>

          <a
            href="#"
            className="p-4 flex items-center justify-center rounded-xl text-lg text-slate-800 text-center"
          >
            <HiOutlineChartSquareBar />
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SideBar;
