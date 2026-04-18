import { t, buildAlternates } from '../../../metadata';
import TivatToKotorScenic from '@/src/components/pages/blog/TivatToKotorScenic';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogKotor.title') + ' | Tivat Car Hire',
    description: t(lang, 'blogKotor.description'),
    alternates: buildAlternates('blog/tivat-to-kotor-scenic', lang),
  };
}

export default function LangTivatToKotorScenicRoute() {
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
