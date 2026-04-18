import { t, buildAlternates } from '../../../metadata';
import TivatIslandFlowers from '@/src/components/pages/blog/TivatIslandFlowers';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogIsland.title') + ' | Tivat Car Hire',
    description: t(lang, 'blogIsland.description'),
    alternates: buildAlternates('blog/tivat-island-flowers', lang),
  };
}

export default function LangTivatIslandFlowersRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogIsland.title'),
    "description": t('en', 'blogIsland.description'),
    "image": "https://www.tivatcarhire.com/img/blog-tivat-island-flowers.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TivatIslandFlowers />
    </>
  );
}
