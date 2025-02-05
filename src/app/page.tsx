import { WhatsAppButton } from "@/components/whatsappButton";
import AboutUs from "@/pages/aboutUs";
import Contact from "@/pages/contact";
import Feedbacks from "@/pages/feedbacks";
import Footer from "@/pages/footer";
import Header from "@/pages/header";
import Hero from "@/pages/hero";
import Partners from "@/pages/partners";
import Services from "@/pages/services";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="fixed z-[100] w-full">
            <Header />
        </div>
        <div className="pt-20 bg-[#F3FCFF]">
          <Hero />
          <AboutUs />
          <Services />
          <Partners />
          <Feedbacks />
          {/* <Contact /> */}
          <Footer />
        </div>
        <WhatsAppButton />
      </div>
    </div>
  );
}
