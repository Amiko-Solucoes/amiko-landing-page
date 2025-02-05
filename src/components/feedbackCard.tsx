import Image from "next/image"

interface CardProps {
  image: string;
  name: string;
  role: string;
  feedback: string;
}

export function FeedbackCard ({image, name, role, feedback} : CardProps){
  return (
    <div className="md:h-full flex flex-col  items-center gap-4 p-4 border-zinc-300 border-[2px] rounded-[8px] bg-white">
    <Image src={image} alt="" width={100} height={140} className="rounded-full h-fit border-zinc-300 border-[1px]"/>
    <div className="flex flex-col gap-4 items-center text-center h-full">
      <div className="flex flex-col">
        <span className="font-bold text-xl">{name}</span>
        <span className="italic text-lg">{role}</span>
      </div>
      <span>{feedback}</span>
    </div>
  </div>
  )
}