import { t, buildAlternates } from '../metadata';
import FleetIndex from '@/src/components/pages/FleetIndex';

const SITE = 'https://www.tivatcarhire.com';

export async function generateMetadata() {
  const title = 'Our Fleet, 7 Cars for Rent in Tivat & Porto Montenegro | Tivat Car Hire';
  const descTranslated = t('en', 'fleetIndex.seoDesc');
  const description = descTranslated !== 'fleetIndex.seoDesc'
    ? descTranslated
    : 'Browse 7 rental cars available in Tivat, city hatches for marina parking, mid-size autos for the Lustica loop, crossovers for inland detours. Full specs and fuel economy.';
  return {
    title,
    description,
    alternates: buildAlternates('cars'),
    openGraph: {
      title,
      description,
      url: `${SITE}/cars`,
      type: 'website',
      images: [{ url: `${SITE}/img/fleet/renault-clio.jpg`, width: 1200, height: 800, alt: t('en', 'fleetIndex.ogImageAlt') !== 'fleetIndex.ogImageAlt' ? t('en', 'fleetIndex.ogImageAlt') : 'Tivat Car Hire fleet' }],
    },
  };
}

export default function FleetIndexRoute() {
  return <FleetIndex />;
}
