import Header from "@/pages/header";
import Hero from "@/pages/hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="sticky z-[100] w-full">
            <Header />
        </div>
        <div className="pt-20 bg-slate-200">
          <Hero />
        </div>
      </div>
    </div>
  );
}
