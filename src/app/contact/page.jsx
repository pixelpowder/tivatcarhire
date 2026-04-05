import Contact from '@/src/components/pages/Contact';
import { buildAlternates } from '@/src/app/metadata';

export function generateMetadata() {
  return {
    title: 'Contact Us | Tivat Car Hire',
    description: 'Get in touch with Tivat Car Hire. We help you find the perfect rental car from Tivat Airport. Email, phone, or WhatsApp — we\'re here to help you find the perfect rental car.',
    alternates: buildAlternates('contact'),
  };
}

export default function ContactPage() {
  return <Contact />;
}
