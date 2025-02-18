import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Qualquer rota que comece com /api/
        destination: "https://sua-api.com/api/:path*", // URL da API de destino
      },
    ];
  },
}

export default nextConfig;