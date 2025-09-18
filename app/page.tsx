import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Generate from "./components/Generate";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <Header />
      {/* <Carousel /> */}
      <Generate />
      <Footer />
    </main>
  );
}
