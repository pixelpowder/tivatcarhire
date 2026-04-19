import { t, buildAlternates } from '../../../metadata';
import LusticaPeninsulaDrive from '@/src/components/pages/blog/LusticaPeninsulaDrive';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogLustica.title') + ' | Tivat Car Hire',
    description: t(lang, 'blogLustica.description'),
    alternates: buildAlternates('blog/lustica-peninsula-drive', lang),
  };
}

export default function LangLusticaPeninsulaDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogLustica.title'),
    "description": t(lang, 'blogLustica.description'),
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
