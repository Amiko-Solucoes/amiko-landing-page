/** Renderiza um bloco de dados estruturados (schema.org) em JSON-LD. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
