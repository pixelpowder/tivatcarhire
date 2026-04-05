import { t, buildAlternates } from './metadata';
import HomeClient from '@/src/HomeClient';

export async function generateMetadata() {
  return {
    title: 'Tivat Car Hire — Tivat Airport & Porto Montenegro Pickup | Tivat Car Hire',
    description: t('en', 'home.seoDesc'),
    alternates: buildAlternates(''),
  };
}

export default function HomePage() {
  return <HomeClient />;
}
