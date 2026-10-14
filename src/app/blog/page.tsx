import Header from "@/sections/header";
import Footer from "@/sections/footer";
import { WhatsAppButton } from "@/components/whatsappButton";
import { blogPosts } from "@/data/blogPosts";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Blog sobre concierge hospitalar e atendimento beira-leito",
  description: "Artigos práticos sobre concierge hospitalar digital, atendimento beira-leito, chamada de enfermagem e experiência do paciente, com dados reais de hospitais brasileiros.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>

        <div className="pt-24 w-full flex flex-col items-center">
          <section className="w-full max-w-[900px] px-6 py-12 flex flex-col gap-3">
            <h1 className="text-sky-900 text-4xl font-bold">Blog da Amiko: concierge hospitalar e atendimento beira-leito</h1>
            <p className="text-lg text-zinc-700">
              Conteúdo prático sobre concierge hospitalar digital, atendimento beira-leito, chamada de enfermagem e experiência do paciente, baseado em dados reais da MOARA em hospitais e eventos brasileiros.
            </p>
          </section>

          <section className="w-full max-w-[900px] px-6 pb-16 flex flex-col gap-6">
            {blogPosts
              .slice()
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-6 hover:border-sky-400 transition"
                >
                  <span className="w-fit text-xs font-bold uppercase tracking-wide text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-sky-900">{post.title}</h2>
                  <p className="text-zinc-700 text-sm">{post.description}</p>
                  <span className="text-xs text-zinc-500">{post.readTime}</span>
                </a>
              ))}
          </section>

          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}
