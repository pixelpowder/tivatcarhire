import Contact from '@/src/components/pages/Contact';
import { t, buildAlternates } from '@/src/app/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Contact Us | Tivat Car Hire',
    description: 'Get in touch with Tivat Car Hire. We help you find the perfect rental car from Tivat Airport.',
    alternates: buildAlternates('contact', lang),
  };
}

export default function ContactPage() {
  return <Contact />;
}
