import { t, buildAlternates } from '../../../metadata';
import TivatToDubrovnikCoastal from '@/src/components/pages/blog/TivatToDubrovnikCoastal';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogDubrovnik.title') + ' | Tivat Car Hire',
    description: t(lang, 'blogDubrovnik.description'),
    alternates: buildAlternates('blog/tivat-to-dubrovnik-coastal', lang),
  };
}

export default async function LangTivatToDubrovnikCoastalRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogDubrovnik.title'),
    "description": t(lang, 'blogDubrovnik.description'),
    "image": "https://www.tivatcarhire.com/img/blog-tivat-to-dubrovnik-coastal.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TivatToDubrovnikCoastal />
    </>
  );
}
