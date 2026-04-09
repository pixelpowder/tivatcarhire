'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TivatAirportFirstHour() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogAirport.title')}
      subtitle={t('blogAirport.subtitle')}
      description={t('blogAirport.description')}
      image="/img/blog-tivat-airport-first-hour.webp"
    >
      <h2>{t('blogAirport.h2Touchdown')}</h2>
      <p>{t('blogAirport.touchdownP1')}</p>
      <p>{t('blogAirport.touchdownP2')}</p>

      <h2>{t('blogAirport.h2Baggage')}</h2>
      <p>{t('blogAirport.baggageP1')}</p>
      <p>{t('blogAirport.baggageP2')}</p>

      <img src="/img/blog-tivat-airport-first-hour-inline.webp" alt={t('blogAirport.altTerminal')} loading="lazy" />

      <h2>{t('blogAirport.h2Car')}</h2>
      <p>{t('blogAirport.carP1')}</p>
      <p>{t('blogAirport.carP2')}</p>

      <h2>{t('blogAirport.h2Fuel')}</h2>
      <p>{t('blogAirport.fuelP1')}</p>
      <p>{t('blogAirport.fuelP2')} <a href={localePath('/blog/tivat-grocery-essentials')}>{t('blogAirport.fuelLink')}</a>.</p>

      <h2>{t('blogAirport.h2Directions')}</h2>
      <p>{t('blogAirport.directionsP1')}</p>
      <ul>
        <li><strong>{t('blogAirport.dirNorthLabel')}</strong> {t('blogAirport.dirNorthVal')}</li>
        <li><strong>{t('blogAirport.dirSouthLabel')}</strong> {t('blogAirport.dirSouthVal')}</li>
        <li><strong>{t('blogAirport.dirStraightLabel')}</strong> {t('blogAirport.dirStraightVal')}</li>
      </ul>

      <h2>{t('blogAirport.h2Phone')}</h2>
      <p>{t('blogAirport.phoneP')}</p>

      <div className="route-info">
        <h3>{t('blogAirport.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogAirport.glanceWalk')}</strong>
            {t('blogAirport.glanceWalkVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogAirport.glanceFuel')}</strong>
            {t('blogAirport.glanceFuelVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogAirport.glanceSim')}</strong>
            {t('blogAirport.glanceSimVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogAirport.glanceAtm')}</strong>
            {t('blogAirport.glanceAtmVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
