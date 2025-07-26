import Image from "next/image";
import Navbar from "./(home)/Navbar";
import HeroSection from "./(home)/HeroSection";
import Premium from "./(home)/Premium";
import WorkCycle from "./(home)/WorkCycle";
import Testimonials from "./(home)/Testimonials";
import WhyChoose from "./(home)/WhyChoose";
import Footer from "./(home)/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Premium />
      <Testimonials />
      <WorkCycle />
      <WhyChoose />
      <Footer />
    </>
  );
}
