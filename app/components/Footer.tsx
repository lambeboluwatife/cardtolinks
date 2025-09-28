import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-3 md:px-4 lg:px-6 py-2 md:py-3 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 bg-[#2f2f2f] text-white">
      <div className="flex flex-row items-center gap-2">
        <Image
          src="/image/krea logo.png"
          alt="krea logo"
          width={40}
          height={40}
          className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
        />
        <h1 className="text-lg md:text-xl font-bold">Krea AI</h1>
      </div>
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-base md:text-lg font-semibold">curated by</h1>
        <Image
          src="/image/mobbin.png"
          alt="mobbin logo"
          width={100}
          height={100}
          className="object-contain h-12 w-32 md:h-15 md:w-44"
        />
      </div>
    </footer>
  );
};

export default Footer;
