import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/LGPD", destination: "/privacy"},
      { source: "/lgpd", destination: "/privacy"},
      { source: "/privacidade", destination: "/privacy"},
      { source: "/termos", destination: "/terms"},
      { source: "/gerencial", destination: "/management-report"},
      { source: "/gerencial-scmp", destination: "/management-report-scmp"},
    ];
  },
}

export default nextConfig;