'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TivatToDubrovnikCoastal() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogDubrovnik.title')}
      subtitle={t('blogDubrovnik.subtitle')}
      description={t('blogDubrovnik.description')}
      image="/img/blog-tivat-to-dubrovnik-coastal.webp"
    >
      <h2>{t('blogDubrovnik.h2Overview')}</h2>
      <p>{t('blogDubrovnik.overviewP1')}</p>
      <p>{t('blogDubrovnik.overviewP2')}</p>

      <h2>{t('blogDubrovnik.h2Ferry')}</h2>
      <p>{t('blogDubrovnik.ferryP1')}</p>
      <p>{t('blogDubrovnik.ferryP2')}</p>

      <img src="/img/blog-tivat-to-dubrovnik-coastal-inline.webp" alt={t('blogDubrovnik.altCoast')} loading="lazy" />

      <h2>{t('blogDubrovnik.h2HercegNovi')}</h2>
      <p>{t('blogDubrovnik.hnP1')}</p>
      <p>{t('blogDubrovnik.hnP2')}</p>

      <h2>{t('blogDubrovnik.h2Border')}</h2>
      <p>{t('blogDubrovnik.borderP1')} <a href={localePath('/border-crossing-guide')}>{t('blogDubrovnik.borderLink')}</a>.</p>
      <p>{t('blogDubrovnik.borderP2')}</p>

      <h2>{t('blogDubrovnik.h2Arrival')}</h2>
      <p>{t('blogDubrovnik.arrivalP1')}</p>
      <p>{t('blogDubrovnik.arrivalP2')}</p>

      <h2>{t('blogDubrovnik.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogDubrovnik.tipDocLabel')}</strong> {t('blogDubrovnik.tipDocVal')}</li>
        <li><strong>{t('blogDubrovnik.tipTimeLabel')}</strong> {t('blogDubrovnik.tipTimeVal')}</li>
        <li><strong>{t('blogDubrovnik.tipFuelLabel')}</strong> {t('blogDubrovnik.tipFuelVal')}</li>
        <li><strong>{t('blogDubrovnik.tipParkLabel')}</strong> {t('blogDubrovnik.tipParkVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogDubrovnik.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogDubrovnik.glanceDistance')}</strong>
            {t('blogDubrovnik.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogDubrovnik.glanceDrive')}</strong>
            {t('blogDubrovnik.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogDubrovnik.glanceFerry')}</strong>
            {t('blogDubrovnik.glanceFerryVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogDubrovnik.glanceBorder')}</strong>
            {t('blogDubrovnik.glanceBorderVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
