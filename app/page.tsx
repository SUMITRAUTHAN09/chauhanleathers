import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>

      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto ">
          <Navbar />
          <Hero />
        </div>
          <Footer/>
      </main>
    </>
  );
}
