import { t, buildAlternates } from '../../metadata';
import TivatSolilaNature from '@/src/components/pages/blog/TivatSolilaNature';

export async function generateMetadata() {
  return {
    title: t('en', 'blogSolila.title') + ' | Tivat Car Hire',
    description: t('en', 'blogSolila.description'),
    alternates: buildAlternates('blog/tivat-solila-nature'),
  };
}

export default function TivatSolilaNatureRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogSolila.title'),
    "description": t('en', 'blogSolila.description'),
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
