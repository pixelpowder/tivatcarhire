'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function Privacy() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t("privacy.title")}
      subtitle={t("privacy.subtitle")}
      description={t("privacy.seoDesc")}
      image="/img/boka-bay.webp"
    >
      <p><strong>{t('privacyBody.lastUpdatedLabel') || 'Last updated:'}</strong> {t('privacyBody.lastUpdatedDate') || 'April 2026'}</p>

      <h2>{t('privacyBody.h2Who') || 'Who We Are'}</h2>
      <p>{t('privacyBody.whoText') || 'Tivat Car Hire operates as an affiliate partner connecting travellers with car rental providers in Montenegro. Our website is located at tivatcarhire.com. When you use our site, we may collect certain information as described below.'}</p>

      <h2>{t('privacyBody.h2Collect') || 'What Information We Collect'}</h2>
      <h3>{t('privacyBody.h3YouProvide') || 'Information you provide'}</h3>
      <p>{t('privacyBody.youProvideText') || 'When you use our booking search form, we collect the pickup location, dates, and times you enter in order to find available vehicles. This information is passed to our partner (LocalRent) to generate search results. We do not collect or store payment details, all payments are processed directly by the rental provider.'}</p>

      <h3>{t('privacyBody.h3Auto') || 'Information collected automatically'}</h3>
      <ul>
        <li><strong>{t('privacyBody.usageLabel') || 'Usage data:'}</strong> {t('privacyBody.usageText') || 'pages visited, time spent on site, referring website'}</li>
        <li><strong>{t('privacyBody.deviceLabel') || 'Device information:'}</strong> {t('privacyBody.deviceText') || 'browser type, operating system, screen resolution'}</li>
        <li><strong>{t('privacyBody.ipLabel') || 'IP address:'}</strong> {t('privacyBody.ipText') || 'used for approximate location and security purposes'}</li>
      </ul>

      <h2>{t('privacyBody.h2Use') || 'How We Use Your Information'}</h2>
      <ul>
        <li>{t('privacyBody.use1') || 'To connect you with car rental availability and pricing'}</li>
        <li>{t('privacyBody.use2') || 'To improve our website and user experience'}</li>
        <li>{t('privacyBody.use3') || 'To understand how visitors use our site (analytics)'}</li>
        <li>{t('privacyBody.use4') || 'To respond to enquiries via WhatsApp, Viber, or email'}</li>
      </ul>

      <h2>{t('privacyBody.h2ThirdParty') || 'Third-Party Services'}</h2>
      <p>{t('privacyBody.thirdPartyIntro') || 'Our website uses the following third-party services:'}</p>
      <ul>
        <li><strong>{t('privacyBody.localRentLabel') || 'LocalRent:'}</strong> {t('privacyBody.localRentText') || 'car rental booking widget, processes your search queries and handles all booking and payment'}</li>
        <li><strong>{t('privacyBody.vercelLabel') || 'Vercel:'}</strong> {t('privacyBody.vercelText') || 'website hosting'}</li>
        <li><strong>{t('privacyBody.pexelsLabel') || 'Pexels:'}</strong> {t('privacyBody.pexelsText') || 'stock photography'}</li>
      </ul>
      <p>{t('privacyBody.thirdPartyOutro') || 'Each of these services has their own privacy policy governing how they handle data.'}</p>

      <h2>{t('privacyBody.h2Cookies') || 'Cookies'}</h2>
      <p>{t('privacyBody.cookiesPre') || 'We use minimal cookies necessary for the website to function. The LocalRent booking widget may set its own cookies for session management and preferences. See our'} <a href={localePath("/cookie-policy")}>{t('privacyBody.cookiesLink') || 'Cookie Policy'}</a> {t('privacyBody.cookiesPost') || 'for details.'}</p>

      <h2>{t('privacyBody.h2Rights') || 'Your Rights'}</h2>
      <p>{t('privacyBody.rightsIntro') || 'You have the right to:'}</p>
      <ul>
        <li>{t('privacyBody.right1') || 'Request access to any personal data we hold about you'}</li>
        <li>{t('privacyBody.right2') || 'Request correction or deletion of your data'}</li>
        <li>{t('privacyBody.right3') || 'Withdraw consent for data processing'}</li>
        <li>{t('privacyBody.right4') || 'Lodge a complaint with a data protection authority'}</li>
      </ul>

      <h2>{t('privacyBody.h2Contact') || 'Contact'}</h2>
      <p>{t('privacyBody.contactText') || 'For any privacy-related questions, contact us via email at info@tivatcarhire.com.'}</p>
    </ContentPage>
  );
}
