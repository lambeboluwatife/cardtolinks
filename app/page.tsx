import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <Carousel />
      </div>
    </main>
  );
}
