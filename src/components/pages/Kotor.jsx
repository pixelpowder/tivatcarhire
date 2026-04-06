'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Kotor() {
  const { t } = useTranslation();
  return (
    <ContentPage title={t("kotor.title")} subtitle={t("kotor.subtitle")} description={t("kotor.seoDesc")} image="/img/kotor-nearby.webp">
      <img src="/img/kotor-nearby.webp" alt="Kotor Old Town walls and bay" loading="lazy" />
      <h2>{t('kotorBody.h1')}</h2>
      <p>{t('kotorBody.p1')}</p>
      <p>{t('kotorBody.p2')}</p>

      <h2>{t('kotorBody.landmarksTitle')}</h2>
      <h3>{t('kotorBody.stJohnTitle')}</h3>
      <p>{t('kotorBody.stJohnText')}</p>

      <h3>{t('kotorBody.cathedralTitle')}</h3>
      <p>{t('kotorBody.cathedralText')}</p>

      <img src="/img/kotor-old-town.webp" alt="Kotor Old Town streets" loading="lazy" />

      <h2>{t('kotorBody.dayTripsTitle')}</h2>
      <p>{t('kotorBody.perastTrip')}</p>
      <p>{t('kotorBody.cetinjeTrip')}</p>
      <p>{t('kotorBody.royalCourtText')}</p>
    </ContentPage>
  );
}
