"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { generateData } from "../data/generate";

const Generate = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-6 py-4 w-full">
      <div className="flex items-center justify-between w-full mb-4">
        <h1 className="font-semibold">Generate</h1>
        <div
          className="flex items-center flex-row space-x-2 text-sm text-blue-600 cursor-pointer hover:underline"
          onClick={() => setOpen(!open)}
        >
          <h6>Show all</h6>
          <IoIosArrowDown
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div className="my-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {generateData.slice(0, 8).map((item) => (
          <div
            key={item.id}
            className=" flex flex-row items-center gap-2 hover:bg-gray-100 p-3 rounded-xl cursor-pointer transition"
          >
            <div className={`mb-2 ${item.iconBackground} rounded-xl p-3`}>
              {item.icon}
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex items-center gap-2 flex-row">
                <h2 className="font-semibold text-sm">{item.title}</h2>
                {item.new && (
                  <span className="text-[10px] text-blue-100 bg-blue-600 px-2 rounded-md">
                    New
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 justify-between w-full">
                <p className="text-[10px] text-gray-600 leading-3">
                  {item.description}
                </p>
                <span className="text-[10px] bg-gray-200 px-3 py-1 rounded-xl cursor-pointer hover:bg-gray-300">
                  Open
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <div className="my-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {generateData.slice(8, 16).map((item) => (
            <div
              key={item.id}
              className=" flex flex-row items-center gap-2 hover:bg-gray-100 p-3 rounded-xl cursor-pointer transition"
            >
              <div className={`mb-2 ${item.iconBackground} rounded-xl p-3`}>
                {item.icon}
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <div className="flex items-center gap-2 flex-row">
                  <h2 className="font-semibold text-sm">{item.title}</h2>
                  {item.new && (
                    <span className="text-[10px] text-blue-100 bg-blue-600 px-2 rounded-md">
                      New
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 justify-between w-full">
                  <p className="text-[10px] text-gray-600 leading-3">
                    {item.description}
                  </p>
                  <span className="text-[10px] bg-gray-200 px-3 py-1 rounded-xl cursor-pointer hover:bg-gray-300">
                    Open
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Generate;
