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
import { relatedCardTitles as relatedTitlesEn } from '../../data/relatedCardTitles';
import { relatedCardTitles as relatedTitlesDe } from '../../data/relatedCardTitles.de';
import { relatedCardTitles as relatedTitlesFr } from '../../data/relatedCardTitles.fr';
import { relatedCardTitles as relatedTitlesIt } from '../../data/relatedCardTitles.it';
import { relatedCardTitles as relatedTitlesRu } from '../../data/relatedCardTitles.ru';
import { relatedCardTitles as relatedTitlesMe } from '../../data/relatedCardTitles.me';
import CarGallery from '../CarGallery';

const RELATED_TITLES_BY_LANG = {
  en: relatedTitlesEn,
  de: relatedTitlesDe,
  fr: relatedTitlesFr,
  it: relatedTitlesIt,
  ru: relatedTitlesRu,
  me: relatedTitlesMe,
};

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

// Per-car inline Tivat-area photo. Alt + caption text comes from translations
// (cars.<slug>.inlineAlt / inlineCaption); the _default entry below is rendered
// only when slug is missing from this map.
const INLINE_PHOTOS = {
  'renault-clio':   { src: '/img/fleet-inline/coastal-road.jpg' },
  'vw-polo':        { src: '/img/fleet-inline/road-mountains.jpg' },
  'peugeot-308':    { src: '/img/fleet-inline/mountain-highway.jpg' },
  'renault-megane': { src: '/img/fleet-inline/sea-road.jpg' },
  'fiat-500':       { src: '/img/fleet-inline/rocky-road.jpg' },
  'vw-golf':        { src: '/img/fleet-inline/forest-road.jpg' },
  'toyota-yaris':   { src: '/img/fleet-inline/aerial-mountains.jpg' },
  _default:         { src: '/img/fleet-inline/sunset-montenegro.jpg' },
};

// 3 related image-link cards at the end of each detail page, local Tivat-area destinations + blog.
// Card titles come from translations (cars.<slug>.related.<i>.title).
const RELATED = {
  'renault-clio': [
    { href: '/blog/porto-montenegro-guide',          img: '/img/blog-porto-montenegro-guide.webp' },
    { href: '/kotor',                                 img: '/img/kotor-nearby.webp' },
    { href: '/blog/tivat-to-kotor-scenic',           img: '/img/blog-tivat-to-kotor-scenic.webp' },
  ],
  'vw-polo': [
    { href: '/blog/tivat-to-kotor-scenic',           img: '/img/blog-tivat-to-kotor-scenic.webp' },
    { href: '/kotor',                                 img: '/img/kotor-nearby.webp' },
    { href: '/blog/porto-montenegro-guide',          img: '/img/blog-porto-montenegro-guide.webp' },
  ],
  'peugeot-308': [
    { href: '/blog/tivat-to-dubrovnik-coastal',      img: '/img/blog-tivat-to-dubrovnik-coastal.webp' },
    { href: '/blog/tivat-family-day-trips',          img: '/img/blog-tivat-family-day-trips.webp' },
    { href: '/border-crossing-guide',                 img: '/img/dubrovnik-walls.webp' },
  ],
  'renault-megane': [
    { href: '/blog/tivat-family-day-trips',          img: '/img/blog-tivat-family-day-trips.webp' },
    { href: '/blog/lustica-peninsula-drive',         img: '/img/blog-lustica-peninsula-drive.webp' },
    { href: '/blog/tivat-to-kotor-scenic',           img: '/img/blog-tivat-to-kotor-scenic.webp' },
  ],
  'fiat-500': [
    { href: '/blog/porto-montenegro-guide',          img: '/img/blog-porto-montenegro-guide.webp' },
    { href: '/blog/lustica-peninsula-drive',         img: '/img/blog-lustica-peninsula-drive.webp' },
    { href: '/blog/tivat-island-flowers',            img: '/img/blog-tivat-island-flowers.webp' },
  ],
  'vw-golf': [
    { href: '/blog/tivat-to-kotor-scenic',           img: '/img/blog-tivat-to-kotor-scenic.webp' },
    { href: '/blog/tivat-to-dubrovnik-coastal',      img: '/img/blog-tivat-to-dubrovnik-coastal.webp' },
    { href: '/blog/porto-montenegro-guide',          img: '/img/blog-porto-montenegro-guide.webp' },
  ],
  'toyota-yaris': [
    { href: '/blog/porto-montenegro-guide',          img: '/img/blog-porto-montenegro-guide.webp' },
    { href: '/blog/tivat-grocery-essentials',        img: '/img/blog-tivat-grocery-essentials.webp' },
    { href: '/blog/tivat-airport-first-hour',        img: '/img/blog-tivat-airport-first-hour.webp' },
  ],
};

// One inline article link per car, paraIndex is which paragraph to search first.
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

  const tf = (key, fallback) => {
    const val = t(key);
    return val && val !== key ? val : fallback;
  };

  const name = car.name;
  const tagline = car.tagline;
  const lede = car.lede;
  const suitability = car.suitability;
  const regional = car.regional;
  const category = car.category;
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

      <h2>{tf('cars.whoForTitle', `Who is the ${car.name} for?`)}</h2>
      <p>{suitability}</p>
      {Array.isArray(car.bestFor) && (
        <ul className="car-detail-bestfor">
          {car.bestFor.map((b, i) => (
            <li key={i}><CheckCircle size={14} /> {b}</li>
          ))}
        </ul>
      )}

      <div className="car-detail-regional">
        <h2>{tf('cars.regionalTitle', 'Best regional use')}</h2>
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
                      <img src={inline.src} alt={name} loading="lazy" />
                    </figure>
                  );
                })()}
              </>
            );
          })}
        </div>
      )}

      <h2>{tf('cars.featuresTitle', 'Inside the car')}</h2>
      <ul className="car-detail-feature-list">
        {car.features.map((f, i) => (
          <li key={i}><CheckCircle size={14} /> {f}</li>
        ))}
      </ul>

      {RELATED[slug] && (
        <div className="car-detail-related">
          <h2>{tf('cars.relatedTitle', 'Where this car takes you')}</h2>
          <div className="car-detail-related__grid">
            {RELATED[slug].map((card, i) => {
              const titles = (RELATED_TITLES_BY_LANG[lang] || RELATED_TITLES_BY_LANG.en)[slug] || [];
              return (
                <a key={card.href} href={localePath(card.href)} className="car-detail-related__card">
                  <div className="car-detail-related__img" style={{ backgroundImage: `url(${card.img})` }} />
                  <div className="car-detail-related__body">
                    <span className="car-detail-related__title">{titles[i] || ''}</span>
                    <ArrowRight size={14} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}

      <div className="car-detail-cta">
        <a href={localePath('/book')} className="car-detail-cta__btn">
          {tf('cars.checkAvailability', 'Check availability & live pricing')} <ArrowRight size={16} />
        </a>
        <a href={localePath(`/cars/${next.slug}`)} className="car-detail-cta__next">
          {tf('cars.nextBtn', `Next in fleet: ${next.name}`)} →
        </a>
      </div>
    </ContentPage>
  );
}
