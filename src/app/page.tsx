import Header from "@/pages/header";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-[1440px] w-full bg-black">
        <div className="fixed w-full z-[100]">
            <Header />
        </div>
      </div>
    </div>
  );
}
