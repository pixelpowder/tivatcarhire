'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TivatSolilaNature() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogSolila.title')}
      subtitle={t('blogSolila.subtitle')}
      description={t('blogSolila.description')}
      image="/img/blog-tivat-solila-nature.webp"
    >
      <h2>{t('blogSolila.h2What')}</h2>
      <p>{t('blogSolila.whatP1')}</p>
      <p>{t('blogSolila.whatP2')}</p>

      <h2>{t('blogSolila.h2Birds')}</h2>
      <p>{t('blogSolila.birdsP1')}</p>
      <p>{t('blogSolila.birdsP2')}</p>

      <img src="/img/blog-tivat-solila-nature-inline.webp" alt={t('blogSolila.altSaltpan')} loading="lazy" />

      <h2>{t('blogSolila.h2Walk')}</h2>
      <p>{t('blogSolila.walkP1')}</p>
      <p>{t('blogSolila.walkP2')}</p>

      <h2>{t('blogSolila.h2Seasons')}</h2>
      <p>{t('blogSolila.seasonsP1')} <a href={localePath('/blog/tivat-island-flowers')}>{t('blogSolila.seasonsLink')}</a>.</p>
      <p>{t('blogSolila.seasonsP2')}</p>

      <h2>{t('blogSolila.h2Photography')}</h2>
      <p>{t('blogSolila.photoP')}</p>

      <h2>{t('blogSolila.h2Practical')}</h2>
      <p>{t('blogSolila.practicalP')}</p>

      <div className="route-info">
        <h3>{t('blogSolila.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogSolila.glanceArea')}</strong>
            {t('blogSolila.glanceAreaVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSolila.glanceSpecies')}</strong>
            {t('blogSolila.glanceSpeciesVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSolila.glanceEntry')}</strong>
            {t('blogSolila.glanceEntryVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSolila.glanceBest')}</strong>
            {t('blogSolila.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
