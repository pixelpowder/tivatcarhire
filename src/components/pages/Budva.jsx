'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Budva() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage title={t("budva.title")} subtitle={t("budva.subtitle")} description={t("budva.seoDesc")} image="/img/budva-nearby.webp">
      <img src="/img/budva-nearby.webp" alt="Budva Riviera coastline" loading="lazy" />
      <h2>{t('budvaBody.h1')}</h2>
      <p>{t('budvaBody.p1')}</p>
      <p>{t('budvaBody.p2')}</p>

      <h2>{t('budvaBody.beachesTitle')}</h2>
      <p>{t('budvaBody.beachesIntro')}</p>
      <ul>
        <li><strong>Mogren:</strong> {t('budvaBody.mogren')}</li>
        <li><strong>Jaz:</strong> {t('budvaBody.jaz')}</li>
        <li><strong>Sveti Stefan:</strong> {t('budvaBody.svetiStefan')}</li>
        <li><strong>Becici:</strong> {t('budvaBody.becici')}</li>
      </ul>

      <h2>{t('budvaBody.oldTownTitle')}</h2>
      <p>{t('budvaBody.oldTownText')}</p>

      <img src="/img/yacht-marina.webp" alt="Budva coastline view" loading="lazy" />

      <h2>{t('budvaBody.dayTripsTitle')}</h2>
      <p>{t('budvaBody.svetiStefanTrip')}</p>
      <p>{t('budvaBody.kotorTrip')} The <a href={localePath('/kotor')}>UNESCO Old Town of Kotor</a> is a 25-minute drive north.</p>
      <p>{t('budvaBody.lovcenTrip')}</p>

      <h2>{t('budvaBody.gettingAroundTitle')}</h2>
      <p>{t('budvaBody.gettingAroundText')}</p>
    </ContentPage>
  );
}
