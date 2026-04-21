'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import config from '../../siteConfig';
import { carArticles as carArticlesEn } from '../../data/carArticles';
import { carArticles as carArticlesDe } from '../../data/carArticles.de';
import { carArticles as carArticlesRu } from '../../data/carArticles.ru';
import { carArticles as carArticlesIt } from '../../data/carArticles.it';
import { carArticles as carArticlesFr } from '../../data/carArticles.fr';
import { carArticles as carArticlesMe } from '../../data/carArticles.me';
import { carImages } from '../../data/carImages';
import CarGallery from '../CarGallery';

const CAR_ARTICLES_BY_LANG = {
  en: carArticlesEn,
  de: carArticlesDe,
  ru: carArticlesRu,
  it: carArticlesIt,
  fr: carArticlesFr,
  me: carArticlesMe,
};
import {
  Users, Fuel, Settings, Briefcase, CheckCircle, ArrowRight,
  Droplet, Package,
} from 'lucide-react';

// Tivat-town-specific inline photo per car — marina, Lustica, bay loops.
const INLINE_PHOTOS = {
  'renault-clio':   { src: '/img/fleet-inline/coastal-road.jpg',      alt: 'Coastal road along the Bay of Kotor',              caption: 'The bay road from Tivat to Lepetane — the default rental at its most natural pace.' },
  'vw-polo':        { src: '/img/fleet-inline/road-mountains.jpg',    alt: 'Road climbing out of the Bay of Kotor',            caption: 'The Vrmac tunnel approach from the Tivat side — the Polo keeps composed where smaller triples scrabble.' },
  'peugeot-308':    { src: '/img/fleet-inline/mountain-highway.jpg',  alt: 'Adriatic highway inland from Tivat',               caption: 'The push across to Podgorica via Sozina — the 308\u2019s diesel settles into its stride here.' },
  'renault-megane': { src: '/img/fleet-inline/sea-road.jpg',          alt: 'Road hugging the Tivat shoreline',                 caption: 'The Pine Walk road out toward Donja Lastva — the Megane swallows family kit and distance together.' },
  'fiat-500':       { src: '/img/fleet-inline/rocky-road.jpg',        alt: 'Narrow coastal lane threading through Lustica',    caption: 'The coastal lanes of Luštica toward Krašići — sunroof open, the Fiat 500 at its most charming.' },
  'vw-golf':        { src: '/img/fleet-inline/forest-road.jpg',       alt: 'Tree-lined road between Tivat and Kotor',          caption: 'The wooded stretches between Tivat and Perast — DSG + diesel, the Golf reads the road for you.' },
  'toyota-yaris':   { src: '/img/fleet-inline/aerial-mountains.jpg',  alt: 'Aerial view of the Bay of Kotor from above Tivat', caption: 'A week of marina-based exploring costs under €40 in fuel — the Yaris Hybrid quietly earns its keep.' },
  _default:         { src: '/img/fleet-inline/sunset-montenegro.jpg', alt: 'Sunset over Porto Montenegro',                     caption: 'Tivat roads weave marina, bay and peninsula inside the same afternoon.' },
};

// Related cards per car — using the actual blog + destination pages that exist
// on tivatcarhire (porto-montenegro-guide, lustica-peninsula-drive, etc.).
const RELATED = {
  'renault-clio': [
    { href: '/blog/porto-montenegro-guide',          img: '/img/blog-porto-montenegro-guide.webp',          title: 'Porto Montenegro guide' },
    { href: '/kotor',                                 img: '/img/kotor-nearby.webp',                          title: 'Kotor' },
    { href: '/blog/tivat-to-kotor-scenic',           img: '/img/blog-tivat-to-kotor-scenic.webp',           title: 'Tivat to Kotor scenic' },
  ],
  'vw-polo': [
    { href: '/blog/tivat-to-kotor-scenic',           img: '/img/blog-tivat-to-kotor-scenic.webp',           title: 'Tivat to Kotor scenic' },
    { href: '/kotor',                                 img: '/img/kotor-nearby.webp',                          title: 'Kotor' },
    { href: '/blog/porto-montenegro-guide',          img: '/img/blog-porto-montenegro-guide.webp',          title: 'Porto Montenegro guide' },
  ],
  'peugeot-308': [
    { href: '/blog/tivat-to-dubrovnik-coastal',      img: '/img/blog-tivat-to-dubrovnik-coastal.webp',      title: 'Tivat to Dubrovnik' },
    { href: '/blog/tivat-family-day-trips',          img: '/img/blog-tivat-family-day-trips.webp',          title: 'Tivat family day trips' },
    { href: '/border-crossing-guide',                 img: '/img/dubrovnik-walls.webp',                       title: 'Border crossing guide' },
  ],
  'renault-megane': [
    { href: '/blog/tivat-family-day-trips',          img: '/img/blog-tivat-family-day-trips.webp',          title: 'Tivat family day trips' },
    { href: '/blog/lustica-peninsula-drive',         img: '/img/blog-lustica-peninsula-drive.webp',         title: 'Lustica peninsula drive' },
    { href: '/blog/tivat-to-kotor-scenic',           img: '/img/blog-tivat-to-kotor-scenic.webp',           title: 'Tivat to Kotor scenic' },
  ],
  'fiat-500': [
    { href: '/blog/porto-montenegro-guide',          img: '/img/blog-porto-montenegro-guide.webp',          title: 'Porto Montenegro guide' },
    { href: '/blog/lustica-peninsula-drive',         img: '/img/blog-lustica-peninsula-drive.webp',         title: 'Lustica peninsula drive' },
    { href: '/blog/tivat-island-flowers',            img: '/img/blog-tivat-island-flowers.webp',            title: 'Island of Flowers' },
  ],
  'vw-golf': [
    { href: '/blog/tivat-to-kotor-scenic',           img: '/img/blog-tivat-to-kotor-scenic.webp',           title: 'Tivat to Kotor scenic' },
    { href: '/blog/tivat-to-dubrovnik-coastal',      img: '/img/blog-tivat-to-dubrovnik-coastal.webp',      title: 'Tivat to Dubrovnik' },
    { href: '/blog/porto-montenegro-guide',          img: '/img/blog-porto-montenegro-guide.webp',          title: 'Porto Montenegro guide' },
  ],
  'toyota-yaris': [
    { href: '/blog/porto-montenegro-guide',          img: '/img/blog-porto-montenegro-guide.webp',          title: 'Porto Montenegro guide' },
    { href: '/blog/tivat-grocery-essentials',        img: '/img/blog-tivat-grocery-essentials.webp',        title: 'Tivat grocery essentials' },
    { href: '/blog/tivat-airport-first-hour',        img: '/img/blog-tivat-airport-first-hour.webp',        title: 'Tivat airport first hour' },
  ],
};

const ARTICLE_LINKS = {
  'renault-clio':   { paraIndex: 1, candidates: ['Porto Montenegro', 'Tivat town', 'bay road'],            href: '/blog/porto-montenegro-guide' },
  'vw-polo':        { paraIndex: 1, candidates: ['Vrmac', 'Kotor', 'Lepetane', 'Donja Lastva'],            href: '/blog/tivat-to-kotor-scenic' },
  'peugeot-308':    { paraIndex: 3, candidates: ['Dubrovnik', 'cross-border', 'Podgorica'],                href: '/blog/tivat-to-dubrovnik-coastal' },
  'renault-megane': { paraIndex: 3, candidates: ['Plavi Horizonti', 'Lustica', 'family'],                  href: '/blog/tivat-family-day-trips' },
  'fiat-500':       { paraIndex: 1, candidates: ['Porto Montenegro', 'Pine Walk', 'Tivat Main Square'],    href: '/blog/porto-montenegro-guide' },
  'vw-golf':        { paraIndex: 1, candidates: ['Vrmac', 'tunnel', 'Kotor', 'Lepetane'],                  href: '/blog/tivat-to-kotor-scenic' },
  'toyota-yaris':   { paraIndex: 1, candidates: ['Porto Montenegro', 'marina', 'Tivat town'],              href: '/blog/porto-montenegro-guide' },
};

function renderParagraphWithLink(paragraph, rule, localePath, linkLabel) {
  if (!rule) return paragraph;
  for (const phrase of rule.candidates) {
    const idx = paragraph.indexOf(phrase);
    if (idx === -1) continue;
    const before = paragraph.slice(0, idx);
    const linkText = paragraph.slice(idx, idx + phrase.length);
    const after = paragraph.slice(idx + phrase.length);
    return (
      <>
        {before}
        <a href={localePath(rule.href)} title={linkLabel}>{linkText}</a>
        {after}
      </>
    );
  }
  return paragraph;
}

export default function CarDetail({ slug }) {
  const { t, lang, localePath } = useTranslation();
  const localisedArticles = CAR_ARTICLES_BY_LANG[lang] || CAR_ARTICLES_BY_LANG.en;
  const carArticles = localisedArticles[slug] ? localisedArticles : CAR_ARTICLES_BY_LANG.en;
  const car = config.cars.find(c => c.slug === slug);
  if (!car) return null;

  const k = (sub) => `cars.${slug}.${sub}`;
  const tk = (sub, fallback) => {
    const val = t(k(sub));
    return val && val !== k(sub) ? val : fallback;
  };
  const tf = (key, fallback) => {
    const val = t(key);
    return val && val !== key ? val : fallback;
  };

  const name = tk('name', car.name);
  const tagline = tk('tagline', car.tagline);
  const lede = tk('lede', car.lede);
  const suitability = tk('suitability', car.suitability);
  const regional = tk('regional', car.regional);
  const category = tk('category', car.category);
  const details = car.details || {};

  const idx = config.cars.findIndex(c => c.slug === slug);
  const next = config.cars[(idx + 1) % config.cars.length];

  const toMpg = (consumption) => {
    if (!consumption) return null;
    const m = consumption.match(/([\d.]+)\s*L\/100/);
    if (!m) return null;
    const l100 = parseFloat(m[1]);
    if (!l100) return null;
    return `${Math.round(282.48 / l100)} mpg`;
  };
  const mpg = toMpg(details.consumption);

  const quickRow = [
    { icon: <Users size={16} />,     label: tf('carSpecs.seats', 'Seats'),         value: car.seats },
    { icon: <Settings size={16} />,  label: tf('carSpecs.transmission', 'Gearbox'), value: car.transmission },
    { icon: <Fuel size={16} />,      label: tf('carSpecs.fuel', 'Fuel'),           value: car.fuel },
    { icon: <Briefcase size={16} />, label: tf('carSpecs.luggage', 'Luggage'),     value: `${car.luggage} bags` },
    { icon: <Package size={16} />,   label: tf('carSpecs.bootSize', 'Boot'),       value: details.bootSize },
    { icon: <Droplet size={16} />,   label: tf('carSpecs.mpg', 'Economy'),         value: mpg || details.consumption },
  ].filter(r => r.value);
  const detailRow = [];

  return (
    <ContentPage
      title={name}
      subtitle={tagline}
      description={suitability}
      image={car.image}
      heroPosition="center"
    >
      <div className="car-detail-hero-card">
        <div className="car-detail-category-tag">{category}</div>
        <p className="car-detail-lede">{lede}</p>
      </div>

      <CarGallery images={carImages[slug] || [car.image]} alt={name} />

      <h2>{tf('cars.overviewTitle', 'At a glance')}</h2>
      <div className="car-detail-specs car-detail-specs--quick">
        {quickRow.map((s) => (
          <div key={s.label} className="car-detail-spec">
            <div className="car-detail-spec__icon">{s.icon}</div>
            <div className="car-detail-spec__label">{s.label}</div>
            <div className="car-detail-spec__value">{s.value}</div>
          </div>
        ))}
      </div>

      <h2>{t('cars.whoForTitle') || `Who is the ${car.name} for?`}</h2>
      <p>{suitability}</p>
      {Array.isArray(car.bestFor) && (
        <ul className="car-detail-bestfor">
          {car.bestFor.map((b, i) => (
            <li key={i}><CheckCircle size={14} /> {tk(`bestFor.${i}`, b)}</li>
          ))}
        </ul>
      )}

      <div className="car-detail-regional">
        <h2>{t('cars.regionalTitle') || 'Best regional use'}</h2>
        <p>{regional}</p>
      </div>

      {carArticles[slug] && (
        <div className="car-detail-article">
          <h2>{tf('cars.articleTitle', `The ${car.name} on Tivat roads`)}</h2>
          {carArticles[slug].paragraphs.map((para, i) => {
            const rule = ARTICLE_LINKS[slug];
            const applyRuleHere = rule && rule.paraIndex === i;
            const sectionKeys = [
              'behindWheel', 'onRoads', 'spaceLoad', 'bestFor', 'practical', 'verdict',
            ];
            const sectionFallbacks = [
              'Behind the wheel',
              'On Tivat roads',
              'Space and load',
              'Best journeys for this car',
              'Practical notes',
              'The verdict',
            ];
            return (
              <>
                <section key={i} className="car-detail-article__section">
                  <h3>{tf(`cars.sections.${sectionKeys[i]}`, sectionFallbacks[i])}</h3>
                  <p>{applyRuleHere ? renderParagraphWithLink(para, rule, localePath, car.name) : para}</p>
                </section>
                {i === 2 && (() => {
                  const inline = INLINE_PHOTOS[slug] || INLINE_PHOTOS._default;
                  return (
                    <figure key={`inline-${i}`} className="car-detail-article__figure">
                      <img src={inline.src} alt={inline.alt} loading="lazy" />
                      <figcaption>{inline.caption}</figcaption>
                    </figure>
                  );
                })()}
              </>
            );
          })}
        </div>
      )}

      <h2>{t('cars.featuresTitle') || 'Inside the car'}</h2>
      <ul className="car-detail-feature-list">
        {car.features.map((f, i) => {
          const translated = tk(`features.${i}`, f);
          return <li key={i}><CheckCircle size={14} /> {translated}</li>;
        })}
      </ul>

      {RELATED[slug] && (
        <div className="car-detail-related">
          <h2>{tf('cars.relatedTitle', 'Where this car takes you')}</h2>
          <div className="car-detail-related__grid">
            {RELATED[slug].map((card) => (
              <a key={card.href} href={localePath(card.href)} className="car-detail-related__card">
                <div className="car-detail-related__img" style={{ backgroundImage: `url(${card.img})` }} />
                <div className="car-detail-related__body">
                  <span className="car-detail-related__title">{card.title}</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="car-detail-cta">
        <a href={localePath('/book')} className="car-detail-cta__btn">
          {t('cars.checkAvailability') || `Check availability & live pricing`} <ArrowRight size={16} />
        </a>
        <a href={localePath(`/cars/${next.slug}`)} className="car-detail-cta__next">
          {t('cars.nextBtn') || `Next in fleet: ${next.name}`} →
        </a>
      </div>
    </ContentPage>
  );
}
