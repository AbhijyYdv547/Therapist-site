import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Fees from "@/components/Fees";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Services from "@/components/Services";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <SectionHeading/>
      <Hero/>
      <About/>
      <Services/>
      <Fees/>
      <FAQ/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
