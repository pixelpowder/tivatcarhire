'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TivatIslandFlowers() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogIsland.title')}
      subtitle={t('blogIsland.subtitle')}
      description={t('blogIsland.description')}
      image="/img/blog-tivat-island-flowers.webp"
    >
      <h2>{t('blogIsland.h2What')}</h2>
      <p>{t('blogIsland.whatP1')}</p>
      <p>{t('blogIsland.whatP2')}</p>

      <h2>{t('blogIsland.h2Getting')}</h2>
      <p>{t('blogIsland.gettingP1')}</p>
      <p>{t('blogIsland.gettingP2')}</p>

      <h2>{t('blogIsland.h2Gardens')}</h2>
      <p>{t('blogIsland.gardensP1')}</p>
      <p>{t('blogIsland.gardensP2')}</p>

      <img src="/img/blog-tivat-island-flowers-inline.webp" alt={t('blogIsland.altIsland')} loading="lazy" />

      <h2>{t('blogIsland.h2Walk')}</h2>
      <p>{t('blogIsland.walkP1')} <a href={localePath('/blog/tivat-solila-nature')}>{t('blogIsland.walkLink')}</a>.</p>
      <p>{t('blogIsland.walkP2')}</p>

      <h2>{t('blogIsland.h2History')}</h2>
      <p>{t('blogIsland.historyP1')}</p>
      <p>{t('blogIsland.historyP2')}</p>

      <h2>{t('blogIsland.h2Practical')}</h2>
      <p>{t('blogIsland.practicalP')}</p>

      <div className="route-info">
        <h3>{t('blogIsland.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogIsland.glanceDrive')}</strong>
            {t('blogIsland.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogIsland.glanceEntry')}</strong>
            {t('blogIsland.glanceEntryVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogIsland.glanceTime')}</strong>
            {t('blogIsland.glanceTimeVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogIsland.glanceParking')}</strong>
            {t('blogIsland.glanceParkingVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
