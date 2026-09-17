import { notFound } from "next/navigation";
import Header from "@/pages/header";
import Footer from "@/pages/footer";
import { WhatsAppButton } from "@/components/whatsappButton";
import { blogPosts, getBlogPost } from "@/data/blogPosts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Blog Amiko Soluções`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>

        <div className="pt-24 w-full flex flex-col items-center">
          <article className="w-full max-w-[760px] px-6 py-12 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <a href="/blog" className="text-sm text-sky-700 hover:underline w-fit">
                ← Voltar para o blog
              </a>
              <span className="w-fit text-xs font-bold uppercase tracking-wide text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h1 className="text-sky-900 text-3xl md:text-4xl font-bold leading-tight">{post.title}</h1>
              <span className="text-sm text-zinc-500">
                {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })} · {post.readTime}
              </span>
            </div>

            <div className="flex flex-col gap-6">
              {post.sections.map((section) => (
                <div key={section.heading ?? section.paragraphs[0]} className="flex flex-col gap-3">
                  {section.heading && (
                    <h2 className="text-xl font-bold text-sky-900">{section.heading}</h2>
                  )}
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-zinc-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="bg-sky-50 rounded-xl p-5 flex flex-col gap-1">
              <a href={post.relatedHref} className="text-sky-700 font-bold hover:underline">
                {post.relatedLabel} →
              </a>
            </div>

            <div className="border-t border-zinc-200 pt-6 flex flex-col gap-1">
              <span className="text-sm font-bold text-sky-900">Sobre o autor</span>
              <p className="text-sm text-zinc-600">
                <strong>Roberto Pinheiro</strong> é engenheiro de Controle e Automação pelo INATEL e fundador da Amiko Soluções, healthtech que desenvolve tecnologia aplicada à saúde. Saiba mais em{" "}
                <a href="/sobre-nos" className="text-sky-700 hover:underline">
                  Sobre a Amiko
                </a>
                .
              </p>
            </div>
          </article>

          <Footer />
          <WhatsAppButton />
        </div>
      </div>

      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: "Roberto Luiz Assad Pinheiro",
            },
            publisher: {
              "@type": "Organization",
              name: "Amiko Soluções",
              url: "https://www.amikosolucoes.com.br",
            },
            mainEntityOfPage: `https://www.amikosolucoes.com.br/blog/${post.slug}`,
          }),
        }}
      />
    </div>
  );
}
