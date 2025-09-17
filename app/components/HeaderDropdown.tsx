"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const HeaderDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex flex-row items-center justify-between cursor-pointer p-2 rounded-lg"
        onClick={() => setOpen(!open)}
      >
        <div className="rounded-full bg-black h-7 w-7"></div>
        <h6 className="mx-2 text-sm text-gray-700">lambeboluwatife</h6>
        <IoIosArrowDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {open && (
        <div className="absolute z-50 right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border">
          <ul className="flex flex-col">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
