'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PortoMontenegroGuide() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogPorto.title')}
      subtitle={t('blogPorto.subtitle')}
      description={t('blogPorto.description')}
      image="/img/blog-porto-montenegro-guide.webp"
    >
      <h2>{t('blogPorto.h2Beyond')}</h2>
      <p>{t('blogPorto.beyondP1')}</p>
      <p>{t('blogPorto.beyondP2')}</p>

      <h2>{t('blogPorto.h2Naval')}</h2>
      <p>{t('blogPorto.navalP1')}</p>
      <p>{t('blogPorto.navalP2')}</p>

      <img src="/img/blog-porto-montenegro-guide-inline.webp" alt={t('blogPorto.altMarina')} loading="lazy" />

      <h2>{t('blogPorto.h2Food')}</h2>
      <p>{t('blogPorto.foodP1')}</p>
      <p>{t('blogPorto.foodP2')}</p>

      <h2>{t('blogPorto.h2Pool')}</h2>
      <p>{t('blogPorto.poolP')} <a href={localePath('/blog/lustica-peninsula-drive')}>{t('blogPorto.poolLink')}</a>.</p>

      <h2>{t('blogPorto.h2Evening')}</h2>
      <p>{t('blogPorto.eveningP1')}</p>
      <p>{t('blogPorto.eveningP2')}</p>

      <h2>{t('blogPorto.h2Getting')}</h2>
      <p>{t('blogPorto.gettingP')}</p>

      <div className="route-info">
        <h3>{t('blogPorto.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogPorto.glanceDistance')}</strong>
            {t('blogPorto.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogPorto.glanceParking')}</strong>
            {t('blogPorto.glanceParkingVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogPorto.glanceEntry')}</strong>
            {t('blogPorto.glanceEntryVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogPorto.glanceBest')}</strong>
            {t('blogPorto.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
