import Header from "./components/Header";
import Hero from "./components/Hero";
import ArtistGrid from "./components/ArtistGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ArtistGrid />
      </main>
      <Footer />
    </>
  );
}
