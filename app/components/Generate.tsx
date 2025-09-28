"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { generateData } from "../data/generate";
import Card from "./Card";

type GenerateProps = {
  title: string;
};

const Generate = ({ title }: GenerateProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-6 w-full mt-10">
      <div className="flex items-center justify-between w-full mb-2">
        <h1 className="font-semibold">{title}</h1>
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
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open
            ? "max-h-[1000px] opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <div className="my-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {generateData.slice(8, 16).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Generate;
