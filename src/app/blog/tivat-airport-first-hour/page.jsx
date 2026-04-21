import { t, buildAlternates } from '../../metadata';
import TivatAirportFirstHour from '@/src/components/pages/blog/TivatAirportFirstHour';

export async function generateMetadata() {
  const title = t('en', 'blogAirport.title') + ' | Tivat Car Hire';
  const description = t('en', 'blogAirport.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/tivat-airport-first-hour'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function TivatAirportFirstHourRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogAirport.title'),
    "description": t('en', 'blogAirport.description'),
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
