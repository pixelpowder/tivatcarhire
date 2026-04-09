import { t, buildAlternates } from '../../../metadata';
import TivatFamilyDayTrips from '@/src/components/pages/blog/TivatFamilyDayTrips';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogFamily.title') + ' | Tivat Car Hire',
    description: t(lang, 'blogFamily.description'),
    alternates: buildAlternates('blog/tivat-family-day-trips'),
  };
}

export default function LangTivatFamilyDayTripsRoute() {
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
