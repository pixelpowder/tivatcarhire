'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function LusticaPeninsulaDrive() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogLustica.title')}
      subtitle={t('blogLustica.subtitle')}
      description={t('blogLustica.description')}
      image="/img/blog-lustica-peninsula-drive.webp"
    >
      <h2>{t('blogLustica.h2Why')}</h2>
      <p>{t('blogLustica.whyP1')}</p>
      <p>{t('blogLustica.whyP2')}</p>

      <h2>{t('blogLustica.h2Route')}</h2>
      <p>{t('blogLustica.routeP1')}</p>
      <p>{t('blogLustica.routeP2')}</p>

      <h2>{t('blogLustica.h2Beaches')}</h2>
      <p>{t('blogLustica.beachesP1')}</p>
      <ul>
        <li><strong>{t('blogLustica.beachZanjiceLabel')}</strong> {t('blogLustica.beachZanjiceVal')}</li>
        <li><strong>{t('blogLustica.beachMiristLabel')}</strong> {t('blogLustica.beachMiristVal')}</li>
        <li><strong>{t('blogLustica.beachDobreLabel')}</strong> {t('blogLustica.beachDobreVal')}</li>
      </ul>

      <img src="/img/blog-lustica-peninsula-drive-inline.webp" alt={t('blogLustica.altBeach')} loading="lazy" />

      <h2>{t('blogLustica.h2Villages')}</h2>
      <p>{t('blogLustica.villagesP1')}</p>
      <p>{t('blogLustica.villagesP2')} <a href={localePath('/blog/porto-montenegro-guide')}>{t('blogLustica.villagesLink')}</a>.</p>

      <h2>{t('blogLustica.h2Resort')}</h2>
      <p>{t('blogLustica.resortP1')}</p>
      <p>{t('blogLustica.resortP2')}</p>

      <h2>{t('blogLustica.h2Practical')}</h2>
      <p>{t('blogLustica.practicalP')}</p>

      <div className="route-info">
        <h3>{t('blogLustica.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogLustica.glanceLoop')}</strong>
            {t('blogLustica.glanceLoopVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogLustica.glanceDrive')}</strong>
            {t('blogLustica.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogLustica.glanceRoad')}</strong>
            {t('blogLustica.glanceRoadVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogLustica.glanceFuel')}</strong>
            {t('blogLustica.glanceFuelVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
