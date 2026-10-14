import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import { ORG_ID, SITE_URL, pageMetadata } from "@/lib/site";

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

  const meta = pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
  });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: ["Roberto Luiz Assad Pinheiro"],
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const outros = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageShell
      breadcrumbs={[
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]}
    >
      <article className="w-full max-w-[760px] px-6 py-10 flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <span className="w-fit text-xs font-bold uppercase tracking-wide text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <h1 className="text-sky-900 text-3xl md:text-4xl font-bold leading-tight">{post.title}</h1>
          <p className="text-sm text-zinc-500">
            Por <a href="/sobre-nos" className="underline">Roberto Pinheiro</a> · Publicado em{" "}
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.updated && post.updated !== post.date && (
              <>
                {" "}· Atualizado em <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </>
            )}{" "}
            · {post.readTime}
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {post.sections.map((section, i) => (
            <section key={section.heading ?? `secao-${i}`} className="flex flex-col gap-3">
              {section.heading && <h2 className="text-xl font-bold text-sky-900">{section.heading}</h2>}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-zinc-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-6 text-zinc-700 leading-relaxed flex flex-col gap-1">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
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
            <strong>Roberto Pinheiro</strong> é engenheiro de Controle e Automação pelo INATEL e fundador da Amiko Soluções,
            healthtech criadora da <a href="/moara" className="text-sky-700 hover:underline">MOARA</a>, concierge hospitalar digital
            e assistente virtual beira-leito. Saiba mais em{" "}
            <a href="/sobre-nos" className="text-sky-700 hover:underline">
              Sobre a Amiko
            </a>
            .
          </p>
        </div>
      </article>

      {post.faq && post.faq.length > 0 && <FaqSection faqs={post.faq} />}

      <section className="w-full max-w-[760px] px-6 pb-14 flex flex-col gap-3">
        <h2 className="text-lg font-bold text-sky-900">Leia também</h2>
        <ul className="flex flex-col gap-2">
          {outros.map((p) => (
            <li key={p.slug}>
              <a href={`/blog/${p.slug}`} className="text-sky-700 underline">
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          inLanguage: "pt-BR",
          image: `${SITE_URL}/opengraph-image`,
          author: {
            "@type": "Person",
            "@id": `${SITE_URL}/sobre-nos#roberto`,
            name: "Roberto Luiz Assad Pinheiro",
            url: `${SITE_URL}/sobre-nos`,
          },
          publisher: { "@id": ORG_ID },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          articleSection: post.category,
        }}
      />
    </PageShell>
  );
}
