import { t, buildAlternates } from '../../metadata';
import TivatFamilyDayTrips from '@/src/components/pages/blog/TivatFamilyDayTrips';

export async function generateMetadata() {
  const title = t('en', 'blogFamily.title') + ' | Tivat Car Hire';
  const description = t('en', 'blogFamily.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/tivat-family-day-trips'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function TivatFamilyDayTripsRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogFamily.title'),
    "description": t('en', 'blogFamily.description'),
    "image": "https://www.tivatcarhire.com/img/blog-tivat-family-day-trips.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TivatFamilyDayTrips />
    </>
  );
}
