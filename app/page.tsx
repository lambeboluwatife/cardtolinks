// app/page.tsx (server component)
import Header from "./components/Header";
import Generate from "./components/Generate";
import Footer from "./components/Footer";
import HeroClientWrapper from "./components/HeroClientWrapper";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroClientWrapper />
      <Generate title="Generate" />
      <Generate title="Gallery" />
      <Footer />
    </main>
  );
}
