'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TivatToKotorScenic() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogKotor.title')}
      subtitle={t('blogKotor.subtitle')}
      description={t('blogKotor.description')}
      image="/img/blog-tivat-to-kotor-scenic.webp"
    >
      <h2>{t('blogKotor.h2Two')}</h2>
      <p>{t('blogKotor.twoP1')}</p>
      <p>{t('blogKotor.twoP2')}</p>

      <h2>{t('blogKotor.h2Tunnel')}</h2>
      <p>{t('blogKotor.tunnelP1')}</p>
      <p>{t('blogKotor.tunnelP2')}</p>

      <h2>{t('blogKotor.h2Bay')}</h2>
      <p>{t('blogKotor.bayP1')}</p>
      <p>{t('blogKotor.bayP2')}</p>

      <img src="/img/blog-tivat-to-kotor-scenic-inline.webp" alt={t('blogKotor.altBay')} loading="lazy" />

      <h2>{t('blogKotor.h2Stops')}</h2>
      <p>{t('blogKotor.stopsP1')}</p>
      <ul>
        <li><strong>{t('blogKotor.stopMuoLabel')}</strong> {t('blogKotor.stopMuoVal')}</li>
        <li><strong>{t('blogKotor.stopPrcanjLabel')}</strong> {t('blogKotor.stopPrcanjVal')}</li>
        <li><strong>{t('blogKotor.stopViewLabel')}</strong> {t('blogKotor.stopViewVal')}</li>
      </ul>

      <h2>{t('blogKotor.h2Parking')}</h2>
      <p>{t('blogKotor.parkingP')} <a href={localePath('/blog/tivat-family-day-trips')}>{t('blogKotor.parkingLink')}</a>.</p>

      <h2>{t('blogKotor.h2Return')}</h2>
      <p>{t('blogKotor.returnP')}</p>

      <div className="route-info">
        <h3>{t('blogKotor.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogKotor.glanceTunnel')}</strong>
            {t('blogKotor.glanceTunnelVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotor.glanceBay')}</strong>
            {t('blogKotor.glanceBayVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotor.glanceDistance')}</strong>
            {t('blogKotor.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotor.glanceToll')}</strong>
            {t('blogKotor.glanceTollVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
