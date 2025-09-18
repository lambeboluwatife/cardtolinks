import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4 flex items-center justify-between bg-gray-900 text-white">
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
      <div className="flex flex-row items-center gap-3">
        <h1 className="text-lg font-medium">curated by</h1>
        <Image src="/image/mobbin.png" alt="krea logo" width={80} height={40} />
      </div>
    </footer>
  );
};

export default Footer;
