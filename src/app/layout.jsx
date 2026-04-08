import '@/src/index.css';
import '@/src/App.css';
import '@/src/ContentPage.css';
import '@/src/BookPage.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import CookieBanner from '@/src/CookieBanner';
import { LanguageContext } from '@/src/i18n/LanguageContext';
import { DEFAULT_LANG } from '@/src/i18n/languages';

export const metadata = {
  title: 'Tivat Car Hire — Airport Gateway to Montenegro',
  description:
    'Montenegro\'s coastal gateway — collect your car at Tivat Airport in 5 minutes flat. Kotor is 20 min north, Budva 30 min south. From €13/day, full insurance included.',
  metadataBase: new URL('https://www.tivatcarhire.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/img/hero-tivat.webp" as="image" type="image/webp" />

        {/* AutoRental JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRental",
            "name": "Tivat Car Hire",
            "url": "https://www.tivatcarhire.com",
            "description": "Rent a car at Tivat Airport from trusted local providers with free cancellation, full insurance, and meet-and-greet pickup at TIV arrivals.",
            "email": "info@tivatcarhire.com",
            "image": "https://www.tivatcarhire.com/img/schema-car.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tabacina BB",
              "addressLocality": "Tivat",
              "postalCode": "85320",
              "addressCountry": "ME"
            },
            "areaServed": [
              { "@type": "City", "name": "Tivat" },
              { "@type": "City", "name": "Kotor" },
              { "@type": "City", "name": "Budva" },
              { "@type": "City", "name": "Herceg Novi" },
              { "@type": "City", "name": "Podgorica" }
            ],
            "priceRange": "€25–€120",
            "currenciesAccepted": "EUR",
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday"], "opens": "00:00", "closes": "23:59" }
            ],
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "3", "bestRating": "5" }
          }) }}
        />

        {/* FAQPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What documents do I need at TIV pickup?",
                "acceptedAnswer": { "@type": "Answer", "text": "A driving licence with Latin-script details, a passport, and a physical credit card in the main driver\u2019s name. If your licence uses only non-Latin characters, bring an International Driving Permit. Electronic licences and photocopies are not accepted." }
              },
              {
                "@type": "Question",
                "name": "Can I drive the rental car to Croatia or Albania?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Notify the rental company at booking so they prepare the Green Card insurance certificate. Cross-border travel to Croatia, Bosnia, Albania, Serbia, and Kosovo is permitted \u2014 documents will be in the glovebox when you collect at TIV." }
              },
              {
                "@type": "Question",
                "name": "Is there a minimum age to rent?",
                "acceptedAnswer": { "@type": "Answer", "text": "Age and experience requirements depend on the vehicle category. Economy cars typically require 21+, premium vehicles 25+. These details appear during the search before you commit to a booking." }
              },
              {
                "@type": "Question",
                "name": "What is included in the rental price?",
                "acceptedAnswer": { "@type": "Answer", "text": "CDW and theft protection, VAT, an equipment kit (first-aid box, warning triangle, reflective vest), and a transparent fuel policy. Mileage terms vary by vehicle \u2014 some are unlimited, others capped at a daily kilometre allowance shown on the listing." }
              },
              {
                "@type": "Question",
                "name": "How does TIV airport pickup work?",
                "acceptedAnswer": { "@type": "Answer", "text": "Tivat is a single-terminal airport. After you clear baggage reclaim, walk out the terminal exit and cross to the short-stay car park \u2014 roughly 40 metres. Our agent meets you there with the keys and paperwork. Total time from bag belt to driving: about 10 minutes." }
              },
              {
                "@type": "Question",
                "name": "Can I drop off at a different location?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. One-way rentals are supported across 28+ towns in Montenegro. Pick up at TIV and drop off in Budva, Kotor, Podgorica, or across the border in Dubrovnik. Select different pickup and drop-off points during booking." }
              },
              {
                "@type": "Question",
                "name": "What is the cancellation policy?",
                "acceptedAnswer": { "@type": "Answer", "text": "Free cancellation up to 7 days before the rental start date for standard vehicles, up to 30 days for premium and convertible categories. A 6% payment processing fee applies to all refunds." }
              },
              {
                "@type": "Question",
                "name": "Is a deposit required?",
                "acceptedAnswer": { "@type": "Answer", "text": "Deposit amounts vary by vehicle group \u2014 some economy cars require no deposit at all. When a deposit applies, it must be on a physical credit card in the main driver\u2019s name and is refunded on return of the vehicle." }
              },
              {
                "@type": "Question",
                "name": "Where is the nearest fuel station to TIV?",
                "acceptedAnswer": { "@type": "Answer", "text": "There is a Jugopetrol station 800 metres from the airport exit on the main road toward Tivat town, and a Petrol station in Radanovici on the Budva road. Both accept card and cash payment." }
              },
              {
                "@type": "Question",
                "name": "Are there any hidden fees?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. Taxes, airport surcharge, equipment kit \u2014 all included. The price at checkout is the price you pay at pickup. We do not add fees at the desk." }
              },
              {
                "@type": "Question",
                "name": "How much do I pay upfront?",
                "acceptedAnswer": { "@type": "Answer", "text": "Only 15\u201320% of the total is charged at booking to secure the car. The balance is paid directly to the rental agent at the airport when you collect." }
              },
              {
                "@type": "Question",
                "name": "Can I rent without a credit card?",
                "acceptedAnswer": { "@type": "Answer", "text": "Some vehicles are available without a credit card \u2014 these are clearly marked with a card-free badge in the search results. Filter for them during your search." }
              }
            ]
          }) }}
        />
      </head>
      <body>
        <LanguageContext value={DEFAULT_LANG}>
          {children}
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </LanguageContext>
      </body>
    </html>
  );
}
