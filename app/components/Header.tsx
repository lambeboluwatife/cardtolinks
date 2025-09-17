import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import HeaderDropdown from "./HeaderDropdown";

const Header = () => {
  return (
    <header className="px-3 py-2 flex items-center justify-between bg-white text-black">
      <div className="flex flex-row items-center space-x-2">
        <Image src="/image/krea white.png" alt="Logo" width={40} height={40} />
        <HeaderDropdown />
      </div>
      <div className="flex flex-row items-center space-x-4">
        <Image src="/image/krea white.png" alt="Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold text-gray-800">Krea AI</h1>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <Image src="/image/krea white.png" alt="Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold text-gray-800">Krea AI</h1>
      </div>
    </header>
  );
};

export default Header;
