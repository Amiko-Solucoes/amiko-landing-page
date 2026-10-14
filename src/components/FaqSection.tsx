import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/site";

interface FaqSectionProps {
  faqs: { q: string; a: string }[];
  title?: string;
}

/** Lista de perguntas frequentes visível na página + marcação FAQPage para buscadores e IAs. */
export function FaqSection({ faqs, title = "Perguntas frequentes" }: FaqSectionProps) {
  return (
    <section className="w-full max-w-[900px] px-6 py-14 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-sky-900 mb-2">{title}</h2>
      {faqs.map((item) => (
        <details key={item.q} className="border border-zinc-200 rounded-lg p-4">
          <summary className="font-bold text-sky-900 cursor-pointer">{item.q}</summary>
          <p className="text-zinc-700 mt-2 text-sm leading-relaxed">{item.a}</p>
        </details>
      ))}
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
