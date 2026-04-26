'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function Terms() {
  const { t } = useTranslation();
  return (
    <ContentPage
      title={t("terms.title")}
      subtitle={t("terms.subtitle")}
      description={t("terms.seoDesc")}
      image="/img/boka-bay.webp"
    >
      <p><strong>{t('termsBody.lastUpdatedLabel') || 'Last updated:'}</strong> {t('termsBody.lastUpdatedDate') || 'April 2026'}</p>

      <h2>{t('termsBody.h2About') || 'About This Website'}</h2>
      <p>{t('termsBody.pAbout') || 'Tivat Car Hire (tivatcarhire.com) is an affiliate website that connects travellers with car rental services in Montenegro. We are not a car rental company, we partner with LocalRent to provide real-time availability and booking services.'}</p>

      <h2>{t('termsBody.h2Booking') || 'Booking & Rental Terms'}</h2>
      <p>{t('termsBody.pBooking1') || 'All car rental bookings made through our website are processed and fulfilled by our partner, LocalRent. When you complete a booking, you enter into a rental agreement directly with the vehicle supplier, not with Tivat Car Hire.'}</p>
      <p>{t('termsBody.pBooking2') || 'The rental terms, including cancellation policies, insurance coverage, age requirements, and payment conditions, are set by the vehicle supplier and displayed during the booking process. We recommend reading these terms carefully before confirming any booking.'}</p>

      <h2>{t('termsBody.h2Role') || 'Our Role'}</h2>
      <p>{t('termsBody.pRoleProvide') || 'We provide:'}</p>
      <ul>
        <li>{t('termsBody.roleProvide1') || 'A search interface to browse available rental vehicles'}</li>
        <li>{t('termsBody.roleProvide2') || 'Destination and travel information about Montenegro'}</li>
        <li>{t('termsBody.roleProvide3') || 'Customer support to help with enquiries before booking'}</li>
      </ul>
      <p>{t('termsBody.pRoleNot') || 'We do not:'}</p>
      <ul>
        <li>{t('termsBody.roleNot1') || 'Own, operate, or maintain any rental vehicles'}</li>
        <li>{t('termsBody.roleNot2') || 'Process payments or handle refunds'}</li>
        <li>{t('termsBody.roleNot3') || 'Set rental prices, insurance terms, or cancellation policies'}</li>
      </ul>

      <h2>{t('termsBody.h2Pricing') || 'Pricing'}</h2>
      <p>{t('termsBody.pPricing') || 'Prices displayed on our website are provided in real-time by our booking partner and are subject to change. The final price is confirmed at the time of booking. All prices include VAT and mandatory insurance unless otherwise stated.'}</p>

      <h2>{t('termsBody.h2Content') || 'Website Content'}</h2>
      <p>{t('termsBody.pContent') || 'We make every effort to ensure that information on this website is accurate and up to date. However, travel information, driving regulations, and border crossing requirements can change. We recommend verifying critical details (especially border crossing documents and driving rules) with official sources before your trip.'}</p>

      <h2>{t('termsBody.h2Liability') || 'Limitation of Liability'}</h2>
      <p>{t('termsBody.pLiabilityIntro') || 'Tivat Car Hire acts as an intermediary and is not liable for:'}</p>
      <ul>
        <li>{t('termsBody.liability1') || 'The condition or availability of rental vehicles'}</li>
        <li>{t('termsBody.liability2') || 'Actions or omissions by rental suppliers'}</li>
        <li>{t('termsBody.liability3') || 'Losses arising from border crossing issues or documentation problems'}</li>
        <li>{t('termsBody.liability4') || 'Changes to prices after booking confirmation'}</li>
      </ul>

      <h2>{t('termsBody.h2IP') || 'Intellectual Property'}</h2>
      <p>{t('termsBody.pIP') || 'All content on this website, including text, design, and graphics, is owned by Tivat Car Hire unless otherwise credited. Stock photography is used under licence from Pexels.'}</p>

      <h2>{t('termsBody.h2Contact') || 'Contact'}</h2>
      <p>{t('termsBody.pContact') || 'Questions about these terms? Contact us at info@tivatcarhire.com.'}</p>
    </ContentPage>
  );
}
