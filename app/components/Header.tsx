import Image from "next/image";
import { GoHomeFill } from "react-icons/go";
import { IoVideocam } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { BiSolidMagicWand } from "react-icons/bi";
import { GiPaintBrush } from "react-icons/gi";
import { PiMarkerCircleLight } from "react-icons/pi";
import { BsImages } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { MdCircleNotifications, MdWbSunny, MdFolder } from "react-icons/md";

import HeaderDropdown from "./HeaderDropdown";

const Header = () => {
  return (
    <header className="px-2 py-1 flex items-center justify-between bg-white text-black">
      <div className="flex flex-row items-center space-x-2">
        <Image src="/image/krea white.png" alt="Logo" width={40} height={40} />
        <HeaderDropdown />
      </div>

      <div className="flex flex-row items-center space-x-1 bg-gray-100 px-2 py-1 rounded-2xl">
        <div className="p-3 rounded-xl bg-white cursor-pointer">
          <GoHomeFill size={20} />
        </div>
        <div className="p-3 rounded-xl hover:bg-white cursor-pointer">
          <FaRegImage size={20} />
        </div>
        <div className="p-3 rounded-xl hover:bg-white cursor-pointer">
          <IoVideocam size={20} />
        </div>
        <div className="p-3 rounded-xl hover:bg-white cursor-pointer">
          <BiSolidMagicWand size={20} />
        </div>
        <div className="p-3 rounded-xl hover:bg-white cursor-pointer">
          <GiPaintBrush size={20} />
        </div>
        <div className="p-3 rounded-xl hover:bg-white cursor-pointer">
          <PiMarkerCircleLight size={20} />
        </div>
        <div className="p-3 rounded-xl hover:bg-white cursor-pointer">
          <MdFolder size={20} />
        </div>
      </div>

      <div className="flex flex-row items-center text-sm">
        <div className="flex flex-row items-center space-x-1 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          <BsImages size={20} />
          <h6>Gallery</h6>
        </div>
        <div className="flex flex-row items-center space-x-1 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          <BiSupport size={20} />
          <h6>Support</h6>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <MdCircleNotifications
            size={20}
            className="hover:bg-gray-100 cursor-pointer"
          />
          <MdWbSunny size={20} className="hover:bg-gray-100 cursor-pointer" />
          <div className="rounded-full bg-black h-7 w-7"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
