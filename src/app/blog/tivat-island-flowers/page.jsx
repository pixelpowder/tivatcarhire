import { t, buildAlternates } from '../../metadata';
import TivatIslandFlowers from '@/src/components/pages/blog/TivatIslandFlowers';

export async function generateMetadata() {
  const title = t('en', 'blogIsland.title') + ' | Tivat Car Hire';
  const description = t('en', 'blogIsland.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/tivat-island-flowers'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function TivatIslandFlowersRoute() {
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
