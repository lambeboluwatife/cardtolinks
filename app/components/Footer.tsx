import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-4 py-2 flex items-center justify-between bg-[#2f2f2f] text-white">
      <div className="flex flex-row items-center gap-2">
        <Image
          src="/image/krea logo.png"
          alt="krea logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <h1 className="text-xl font-bold">Krea AI</h1>
      </div>
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-lg font-semibold">curated by</h1>
        <Image
          src="/image/mobbin.png"
          alt="mobbin logo"
          width={100}
          height={100}
          className="object-contain h-15 w-44"
        />
      </div>
    </footer>
  );
};

export default Footer;
