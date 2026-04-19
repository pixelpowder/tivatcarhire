import { t, buildAlternates } from '../../../metadata';
import TivatSolilaNature from '@/src/components/pages/blog/TivatSolilaNature';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogSolila.title') + ' | Tivat Car Hire',
    description: t(lang, 'blogSolila.description'),
    alternates: buildAlternates('blog/tivat-solila-nature', lang),
  };
}

export default function LangTivatSolilaNatureRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogSolila.title'),
    "description": t(lang, 'blogSolila.description'),
    "image": "https://www.tivatcarhire.com/img/blog-tivat-solila-nature.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TivatSolilaNature />
    </>
  );
}
