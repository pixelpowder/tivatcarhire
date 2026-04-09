import { t, buildAlternates } from '../../../metadata';
import TivatGroceryEssentials from '@/src/components/pages/blog/TivatGroceryEssentials';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogGrocery.title') + ' | Tivat Car Hire',
    description: t(lang, 'blogGrocery.description'),
    alternates: buildAlternates('blog/tivat-grocery-essentials'),
  };
}

export default function LangTivatGroceryEssentialsRoute() {
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
