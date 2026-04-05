'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Podgorica() {
  const { t } = useTranslation();
  return (
    <ContentPage title={t("podgorica.title")} subtitle={t("podgorica.subtitle")} description={t("podgorica.seoDesc")} image="/img/coastal-road.webp">
      <img src="/img/coastal-road.webp" alt="Road from coast to Podgorica" loading="lazy" />
      <h2>{t('podgoricaBody.h1')}</h2>
      <p>{t('podgoricaBody.p1')}</p>
      <p>{t('podgoricaBody.p2')}</p>
      <p>{t('podgoricaBody.p3')}</p>

      <h2>{t('podgoricaBody.seeTitle')}</h2>
      <p>{t('podgoricaBody.seeText')}</p>

      <img src="/img/boka-bay.webp" alt="Montenegro inland landscape" loading="lazy" />

      <h2>{t('podgoricaBody.dayTripsTitle')}</h2>
      <h3>{t('podgoricaBody.skadarTitle')}</h3>
      <p>{t('podgoricaBody.skadarText')}</p>
      <h3>{t('podgoricaBody.danilovgradTitle')}</h3>
      <p>{t('podgoricaBody.danilovgradText')}</p>
      <h3>Zabljak</h3>
      <p>{t('podgoricaBody.zabljak')}</p>
    </ContentPage>
  );
}
