'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function CookiePolicy() {
  const { t } = useTranslation();
  return (
    <ContentPage
      title={t("cookie-policy.title")}
      subtitle={t("cookie-policy.subtitle")}
      description={t("cookie-policy.seoDesc")}
      image="/img/boka-bay.webp"
    >
      <p><strong>{t('cookiePolicy.lastUpdatedLabel') || 'Last updated:'}</strong> {t('cookiePolicy.lastUpdatedDate') || 'April 2026'}</p>

      <h2>{t('cookiePolicy.h2Section1') || 'What Are Cookies?'}</h2>
      <p>{t('cookiePolicy.p1') || 'Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use it.'}</p>

      <h2>{t('cookiePolicy.h2Section2') || 'Cookies We Use'}</h2>

      <h3>{t('cookiePolicy.h3Essential') || 'Essential Cookies'}</h3>
      <p>{t('cookiePolicy.essentialIntro') || 'These are necessary for the website to function. They cannot be disabled.'}</p>
      <ul>
        <li><strong>{t('cookiePolicy.sessionLabel') || 'Session cookies:'}</strong> {t('cookiePolicy.sessionText') || 'maintain your browsing session while you navigate the site'}</li>
        <li><strong>{t('cookiePolicy.preferenceLabel') || 'Preference cookies:'}</strong> {t('cookiePolicy.preferenceText') || 'remember your language and location selections'}</li>
      </ul>

      <h3>{t('cookiePolicy.h3ThirdParty') || 'Third-Party Cookies'}</h3>
      <p>{t('cookiePolicy.thirdPartyIntro') || 'Our car rental booking widget (provided by LocalRent) may set cookies to:'}</p>
      <ul>
        <li>{t('cookiePolicy.thirdParty1') || 'Remember your search preferences (dates, location)'}</li>
        <li>{t('cookiePolicy.thirdParty2') || 'Maintain your session during the booking process'}</li>
        <li>{t('cookiePolicy.thirdParty3') || 'Track affiliate referrals'}</li>
      </ul>
      <p>{t('cookiePolicy.thirdPartyOutro') || 'These cookies are set by LocalRent and are governed by their privacy policy.'}</p>

      <h2>{t('cookiePolicy.h2Managing') || 'Managing Cookies'}</h2>
      <p>{t('cookiePolicy.managingIntro') || 'You can control cookies through your browser settings. Most browsers allow you to:'}</p>
      <ul>
        <li>{t('cookiePolicy.managing1') || 'View what cookies are stored'}</li>
        <li>{t('cookiePolicy.managing2') || 'Delete individual or all cookies'}</li>
        <li>{t('cookiePolicy.managing3') || 'Block cookies from specific sites'}</li>
        <li>{t('cookiePolicy.managing4') || 'Block all third-party cookies'}</li>
      </ul>
      <p>{t('cookiePolicy.managingOutro') || 'Note that blocking essential cookies may affect the functionality of the booking widget.'}</p>

      <h2>{t('cookiePolicy.h2Contact') || 'Contact'}</h2>
      <p>{t('cookiePolicy.contactText') || 'Questions about our use of cookies? Contact us at info@tivatcarhire.com.'}</p>
    </ContentPage>
  );
}
