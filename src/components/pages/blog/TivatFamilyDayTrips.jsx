'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TivatFamilyDayTrips() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogFamily.title')}
      subtitle={t('blogFamily.subtitle')}
      description={t('blogFamily.description')}
      image="/img/blog-tivat-family-day-trips.webp"
    >
      <h2>{t('blogFamily.h2Intro')}</h2>
      <p>{t('blogFamily.introP')}</p>

      <h2>{t('blogFamily.h2Trip1')}</h2>
      <h3>{t('blogFamily.trip1Name')}</h3>
      <p>{t('blogFamily.trip1P1')}</p>
      <p>{t('blogFamily.trip1P2')}</p>

      <h2>{t('blogFamily.h2Trip2')}</h2>
      <h3>{t('blogFamily.trip2Name')}</h3>
      <p>{t('blogFamily.trip2P1')}</p>
      <p>{t('blogFamily.trip2P2')}</p>

      <img src="/img/blog-tivat-family-day-trips-inline.webp" alt={t('blogFamily.altFamily')} loading="lazy" />

      <h2>{t('blogFamily.h2Trip3')}</h2>
      <h3>{t('blogFamily.trip3Name')}</h3>
      <p>{t('blogFamily.trip3P1')} <a href={localePath('/blog/tivat-to-kotor-scenic')}>{t('blogFamily.trip3Link')}</a>.</p>
      <p>{t('blogFamily.trip3P2')}</p>

      <h2>{t('blogFamily.h2Trip4')}</h2>
      <h3>{t('blogFamily.trip4Name')}</h3>
      <p>{t('blogFamily.trip4P1')}</p>
      <p>{t('blogFamily.trip4P2')}</p>

      <h2>{t('blogFamily.h2Trip5')}</h2>
      <h3>{t('blogFamily.trip5Name')}</h3>
      <p>{t('blogFamily.trip5P1')}</p>
      <p>{t('blogFamily.trip5P2')}</p>

      <h2>{t('blogFamily.h2Packing')}</h2>
      <ul>
        <li><strong>{t('blogFamily.packSunLabel')}</strong> {t('blogFamily.packSunVal')}</li>
        <li><strong>{t('blogFamily.packWaterLabel')}</strong> {t('blogFamily.packWaterVal')}</li>
        <li><strong>{t('blogFamily.packShoesLabel')}</strong> {t('blogFamily.packShoesVal')}</li>
        <li><strong>{t('blogFamily.packSnackLabel')}</strong> {t('blogFamily.packSnackVal')}</li>
      </ul>
    </ContentPage>
  );
}
