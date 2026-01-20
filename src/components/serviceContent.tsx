"use client"

import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

const serviceStyles = tv({
  base: "flex flex-col gap-2",
  variants: {
    variant: {
      primary: "text-[#70A4BD]",
      secondary: "text-[#70BD70]",
      tertiary: "text-[#F6AA56]",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const footerStyles = tv({
  base: "w-full flex justify-center items-center py-4 rounded-2xl text-center",
  variants: {
    variant: {
      primary: "bg-gradient-to-r-primary",
      secondary: "bg-gradient-to-r-secondary",
      tertiary: "bg-gradient-to-r-tertiary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ServiceContentProps {
  variant?: "primary" | "secondary" | "tertiary";
}

export function ServiceContent({ variant = "primary" }: ServiceContentProps) {

  const { t } = useTranslation();

  const texts = {
    primary: {
      title: t("services.s1.t1"),
      subtitle: t("services.s1.t2"),
      description: t("services.s1.p1"),
      footer: t("services.s1.t3"),
    },
    secondary: {
      title: t("services.s2.t1"),
      subtitle: t("services.s2.t2"),
      description: t("services.s2.p1"),
      footer: t("services.s2.t3"),
    },
    tertiary: {
      title: t("services.s3.t1"),
      subtitle: t("services.s3.t2"),
      description: t("services.s3.p1"),
      footer: t("services.s3.t3"),
    },
  };

  const content = texts[variant];

  return (
    <div className={twMerge(serviceStyles({ variant }), "flex flex-col gap-10")}>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-6xl">{content.title}</h1>
        <h2 className="text-sky-900 font-bold text-2xl">{content.subtitle}</h2>
        <span className="text-sky-900 text-lg">{content.description}</span>
      </div>
      <div className={`${variant === 'primary' ? 'flex' : 'hidden'} justify-center`}>
        <a href="/moara-assistente">
          <Button variant="outline" className="rounded-[8px] text-base border-sky-900 text-sky-900 hover:bg-sky-900 hover:text-white">{t("services.s1.b1")}</Button>
        </a>
      </div>
      <div className={footerStyles({ variant })}>
        <h2 className="text-white text-lg md:text-2xl px-4">{content.footer}</h2>
      </div>
    </div>
  );
}
