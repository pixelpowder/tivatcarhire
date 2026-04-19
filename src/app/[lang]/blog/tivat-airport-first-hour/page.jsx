import { t, buildAlternates } from '../../../metadata';
import TivatAirportFirstHour from '@/src/components/pages/blog/TivatAirportFirstHour';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogAirport.title') + ' | Tivat Car Hire',
    description: t(lang, 'blogAirport.description'),
    alternates: buildAlternates('blog/tivat-airport-first-hour', lang),
  };
}

export default async function LangTivatAirportFirstHourRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogAirport.title'),
    "description": t(lang, 'blogAirport.description'),
    "image": "https://www.tivatcarhire.com/img/blog-tivat-airport-first-hour.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TivatAirportFirstHour />
    </>
  );
}
