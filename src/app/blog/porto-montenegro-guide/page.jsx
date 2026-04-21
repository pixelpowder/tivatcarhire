import { t, buildAlternates } from '../../metadata';
import PortoMontenegroGuide from '@/src/components/pages/blog/PortoMontenegroGuide';

export async function generateMetadata() {
  const title = t('en', 'blogPorto.title') + ' | Tivat Car Hire';
  const description = t('en', 'blogPorto.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/porto-montenegro-guide'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function PortoMontenegroGuideRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogPorto.title'),
    "description": t('en', 'blogPorto.description'),
    "image": "https://www.tivatcarhire.com/img/blog-porto-montenegro-guide.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PortoMontenegroGuide />
    </>
  );
}
