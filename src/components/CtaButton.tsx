interface CtaButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "light";
}

/** Botão de chamada para ação (link estilizado, sem <button> dentro de <a>). */
export function CtaButton({ href = "/contato", children, variant = "primary" }: CtaButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-sky-900 text-white hover:bg-sky-700"
      : "bg-white text-sky-900 hover:bg-sky-100";
  return (
    <a href={href} className={`inline-block w-fit px-6 py-3 rounded-lg font-bold transition ${styles}`}>
      {children}
    </a>
  );
}
