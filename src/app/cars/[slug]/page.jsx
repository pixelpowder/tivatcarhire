import { notFound } from 'next/navigation';
import { buildAlternates } from '../../metadata';
import config from '@/src/siteConfig';
import { carMetas } from '@/src/data/carMetas';
import CarDetail from '@/src/components/pages/CarDetail';

export function generateStaticParams() {
  return config.cars.map(car => ({ slug: car.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const car = config.cars.find(c => c.slug === slug);
  if (!car) return {};

  const meta = carMetas[slug]?.en;
  const title = meta?.title || `${car.name} Hire in Tivat | Tivat Car Hire`;
  const description = meta?.desc || `${car.name} rental guide for Tivat.`;
  const SITE = 'https://www.tivatcarhire.com';
  return {
    title,
    description,
    alternates: buildAlternates(`cars/${slug}`),
    openGraph: {
      title,
      description,
      url: `${SITE}/cars/${slug}`,
      type: 'website',
      images: [{ url: `${SITE}${car.image}`, width: 1200, height: 800, alt: car.name }],
    },
  };
}

export default async function CarDetailRoute({ params }) {
  const { slug } = await params;
  const car = config.cars.find(c => c.slug === slug);
  if (!car) notFound();

  // Vehicle schema — no price (pricing is dynamic, handled by the booking widget)
  const vehicleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    'name': car.name,
    'description': car.suitability,
    'image': `https://www.tivatcarhire.com${car.image}`,
    'brand': { '@type': 'Brand', 'name': car.name.split(' ')[0] },
    'vehicleSeatingCapacity': car.seats,
    'vehicleTransmission': car.transmission,
    'fuelType': car.fuel,
    ...(car.details?.consumption && { 'fuelConsumption': car.details.consumption }),
    ...(car.details?.topSpeed && { 'speed': car.details.topSpeed }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }} />
      <CarDetail slug={slug} />
    </>
  );
}
