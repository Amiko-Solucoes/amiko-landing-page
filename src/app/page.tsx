import AboutUs from "@/pages/aboutUs";
import Header from "@/pages/header";
import Hero from "@/pages/hero";
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
        </div>
      </div>
    </div>
  );
}
