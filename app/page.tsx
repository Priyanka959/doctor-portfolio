import Navbar from "../components/common/Navbar";
import Hero from "../components/sections/Hero";
import Highlights from "../components/sections/Highlights";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-medical-accent selection:text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
