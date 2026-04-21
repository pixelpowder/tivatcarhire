import { t, buildAlternates } from '../../metadata';
import TivatGroceryEssentials from '@/src/components/pages/blog/TivatGroceryEssentials';

export async function generateMetadata() {
  const title = t('en', 'blogGrocery.title') + ' | Tivat Car Hire';
  const description = t('en', 'blogGrocery.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/tivat-grocery-essentials'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function TivatGroceryEssentialsRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogGrocery.title'),
    "description": t('en', 'blogGrocery.description'),
    "image": "https://www.tivatcarhire.com/img/blog-tivat-grocery-essentials.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TivatGroceryEssentials />
    </>
  );
}
