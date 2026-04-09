import { t, buildAlternates } from '../../metadata';
import TivatToKotorScenic from '@/src/components/pages/blog/TivatToKotorScenic';

export async function generateMetadata() {
  return {
    title: t('en', 'blogKotor.title') + ' | Tivat Car Hire',
    description: t('en', 'blogKotor.description'),
    alternates: buildAlternates('blog/tivat-to-kotor-scenic'),
  };
}

export default function TivatToKotorScenicRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogKotor.title'),
    "description": t('en', 'blogKotor.description'),
    "image": "https://www.tivatcarhire.com/img/blog-tivat-to-kotor-scenic.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TivatToKotorScenic />
    </>
  );
}
