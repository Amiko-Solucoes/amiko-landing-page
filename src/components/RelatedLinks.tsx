interface RelatedLinksProps {
  links: { href: string; label: string }[];
  title?: string;
}

/** Bloco "Veja também" para ligar as páginas do mesmo tema entre si. */
export function RelatedLinks({ links, title = "Veja também" }: RelatedLinksProps) {
  return (
    <section className="w-full max-w-[900px] px-6 pb-14 flex flex-col gap-2">
      <h2 className="text-lg font-bold text-sky-900">{title}</h2>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sky-700 underline">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
