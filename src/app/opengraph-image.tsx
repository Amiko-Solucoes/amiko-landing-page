import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "MOARA, concierge hospitalar digital da Amiko Soluções";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagem padrão de compartilhamento (WhatsApp, LinkedIn, Google) para todas as páginas. */
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo-amiko.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #F3FCFF 0%, #DDF2FB 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={300} height={119} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 30, color: "#0369a1", fontWeight: 700, letterSpacing: 2 }}>MOARA</div>
          <div style={{ fontSize: 64, color: "#0c4a6e", fontWeight: 800, lineHeight: 1.1 }}>
            Concierge hospitalar digital e atendimento beira-leito com IA
          </div>
          <div style={{ fontSize: 30, color: "#334155", lineHeight: 1.35 }}>
            Pacientes pedem ajuda pelo WhatsApp e cada pedido chega direto à equipe certa.
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#0c4a6e" }}>amikosolucoes.com.br</div>
      </div>
    ),
    size,
  );
}
