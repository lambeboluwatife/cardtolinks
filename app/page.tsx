import Header from "./components/Header";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="max-w-5xl w-full">
        <Carousel />
      </div>
    </main>
  );
}
