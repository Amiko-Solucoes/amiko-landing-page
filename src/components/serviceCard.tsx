import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const cardsStyle = tv({
  base: "shadow-xl flex flex-col text-center justify-center items-center px-4 pt-14 pb-8 max-w-[300px] min-w-[250px] h-[270px] gap-6 rounded-[8px]",
  variants: {
    variant: {
      primary: "bg-[#DDFAF2]",
      secondary: "bg-[#D3FED3]",
      tertiary: "bg-[#FFEDDA]",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const IconStyle = tv({
  base: "p-4 rounded-full w-fit relative top-8",
  variants: {
    variant: {
      primary: "bg-[#4FA6C0]",
      secondary: "bg-[#2ABE6C]",
      tertiary: "bg-[#F6AA56]",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

const TextStyle = tv({
  base: "",
  variants: {
    variant: {
      primary: "text-sky-900",
      secondary: "text-sky-900",
      tertiary: "text-[#7B4300]",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

interface CardVariantProps {
  variant?: 'primary' |'secondary' | 'tertiary';
  iconSrc: string;
  title: string;
  description: string;
}

export function ServiceCard ({variant = "primary", iconSrc, title, description}: CardVariantProps) {
  return (
    <>
     <div className="flex flex-col justify-center items-center">
        <div className={IconStyle({ variant })}>
          <Image src={iconSrc} alt="" width={40} height={40}/>
        </div>
        <div className={twMerge(cardsStyle({ variant }), TextStyle({ variant }))}>
          <span className="font-bold text-xl">{title}</span>
          <span>{description}</span>
        </div>
      </div>
    </>
  )
}