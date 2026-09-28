import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <ProofStrip />
        <Services />
        <Work />
        <Experience />
        <Stack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
