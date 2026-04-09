import { t, buildAlternates } from '../../metadata';
import LusticaPeninsulaDrive from '@/src/components/pages/blog/LusticaPeninsulaDrive';

export async function generateMetadata() {
  return {
    title: t('en', 'blogLustica.title') + ' | Tivat Car Hire',
    description: t('en', 'blogLustica.description'),
    alternates: buildAlternates('blog/lustica-peninsula-drive'),
  };
}

export default function LusticaPeninsulaDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogLustica.title'),
    "description": t('en', 'blogLustica.description'),
    "image": "https://www.tivatcarhire.com/img/blog-lustica-peninsula-drive.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Tivat Car Hire", "url": "https://www.tivatcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <LusticaPeninsulaDrive />
    </>
  );
}
