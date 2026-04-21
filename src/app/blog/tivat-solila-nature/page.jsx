import { t, buildAlternates } from '../../metadata';
import TivatSolilaNature from '@/src/components/pages/blog/TivatSolilaNature';

export async function generateMetadata() {
  const title = t('en', 'blogSolila.title') + ' | Tivat Car Hire';
  const description = t('en', 'blogSolila.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/tivat-solila-nature'),
    openGraph: { title, description, type: 'website' },
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
