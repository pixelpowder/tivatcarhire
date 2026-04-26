import NotFound from '@/src/components/pages/NotFound';
import { t } from './metadata';

export const metadata = {
  title: `${t('en', 'notFound.metaTitle') !== 'notFound.metaTitle' ? t('en', 'notFound.metaTitle') : 'Page Not Found'} | Tivat Car Hire`,
};

export default function NotFoundPage() {
  return <NotFound />;
}
