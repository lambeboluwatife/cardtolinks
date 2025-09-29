import Header from "./components/Header";
import Generate from "./components/Generate";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import HeroClientWrapper from "./components/HeroClientWrapper";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroClientWrapper />
      <Generate />
      <Gallery />
      <Footer />
    </main>
  );
}
