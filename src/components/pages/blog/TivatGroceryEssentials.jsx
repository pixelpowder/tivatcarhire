'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TivatGroceryEssentials() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogGrocery.title')}
      subtitle={t('blogGrocery.subtitle')}
      description={t('blogGrocery.description')}
      image="/img/blog-tivat-grocery-essentials.webp"
    >
      <h2>{t('blogGrocery.h2Why')}</h2>
      <p>{t('blogGrocery.whyP1')}</p>
      <p>{t('blogGrocery.whyP2')}</p>

      <img src="/img/blog-tivat-grocery-essentials-inline.webp" alt={t('blogGrocery.altShop')} loading="lazy" />

      <h2>{t('blogGrocery.h2Supermarkets')}</h2>
      <p>{t('blogGrocery.superP1')}</p>
      <ul>
        <li><strong>{t('blogGrocery.shopVoliLabel')}</strong> {t('blogGrocery.shopVoliVal')}</li>
        <li><strong>{t('blogGrocery.shopHDLLabel')}</strong> {t('blogGrocery.shopHDLVal')}</li>
        <li><strong>{t('blogGrocery.shopPijacaLabel')}</strong> {t('blogGrocery.shopPijacaVal')}</li>
      </ul>

      <h2>{t('blogGrocery.h2Fuel')}</h2>
      <p>{t('blogGrocery.fuelP1')}</p>
      <p>{t('blogGrocery.fuelP2')} <a href={localePath('/blog/tivat-airport-first-hour')}>{t('blogGrocery.fuelLink')}</a>.</p>

      <h2>{t('blogGrocery.h2Sim')}</h2>
      <p>{t('blogGrocery.simP1')}</p>
      <p>{t('blogGrocery.simP2')}</p>

      <h2>{t('blogGrocery.h2Pharmacy')}</h2>
      <p>{t('blogGrocery.pharmacyP')}</p>

      <h2>{t('blogGrocery.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogGrocery.tipCashLabel')}</strong> {t('blogGrocery.tipCashVal')}</li>
        <li><strong>{t('blogGrocery.tipSundayLabel')}</strong> {t('blogGrocery.tipSundayVal')}</li>
        <li><strong>{t('blogGrocery.tipBagsLabel')}</strong> {t('blogGrocery.tipBagsVal')}</li>
        <li><strong>{t('blogGrocery.tipWaterLabel')}</strong> {t('blogGrocery.tipWaterVal')}</li>
      </ul>
    </ContentPage>
  );
}
