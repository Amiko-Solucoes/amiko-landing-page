"use client";

import { useEffect } from "react";

export default function FeedbackRedirect() {
  useEffect(() => {
    // URL do Google Forms
    const googleFormURL = "https://forms.gle/jboq3ZZcKmdtNGqM8";
    
    // Redireciona para o Google Forms após 1 segundo
    setTimeout(() => {
      window.location.href = googleFormURL;
    }, 1000);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-screen text-center h-screen bg-sky-900 text-white">
      <span className="text-3xl font-bold">SUGESTÕES E FEEDBACKS</span>
    </main>
  );
}
