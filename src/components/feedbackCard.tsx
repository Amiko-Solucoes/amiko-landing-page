import Image from "next/image"

export function FeedbackCard (){
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 border-zinc-300 border-[2px] rounded-[8px] bg-white">
    <Image src="/pessoa.png" alt="" width={100} height={140} className="rounded-full h-fit border-zinc-300 border-[1px]"/>
    <div className="flex flex-col gap-2 items-center text-center">
      <div className="flex flex-col">
        <span className="font-bold text-xl">*Nome da pessoa*</span>
        <span className="italic text-lg">*Cargo da pessoa*</span>
      </div>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime aperiam velit qui ducimus quo voluptas explicabo. Quas veniam ex, sit similique optio deleniti alias sint fugit ea facere laudantium.</span>
    </div>
  </div>
  )
}