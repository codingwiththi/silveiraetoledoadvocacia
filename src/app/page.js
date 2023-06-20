import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Clients from "@/components/clients";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Team from "@/components/team";
import Image from "next/image";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <Services />
      {/* <Portfolio /> */}
      <Clients />
      <Team />
      <Contact />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
}
