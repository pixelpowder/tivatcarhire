'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import config from '../../siteConfig';
import { Users, Fuel, Settings, Briefcase, ArrowRight } from 'lucide-react';

export default function FleetIndex() {
  const { t, localePath } = useTranslation();

  return (
    <ContentPage
      title={t('fleetIndex.title') !== 'fleetIndex.title' ? t('fleetIndex.title') : 'Our Fleet'}
      subtitle={t('fleetIndex.subtitle') !== 'fleetIndex.subtitle' ? t('fleetIndex.subtitle') : 'Seven rental cars for Tivat town, Porto Montenegro marina and the Lustica peninsula loop.'}
      image="/img/fleet/renault-clio.jpg"
      heroPosition="center"
      description={t('fleetIndex.seoDesc') !== 'fleetIndex.seoDesc' ? t('fleetIndex.seoDesc') : 'Browse the Tivat Car Hire fleet — specs, fuel economy, and what each car is best for around Porto Montenegro, Tivat town and the peninsula.'}
    >
      <p>{t('fleetIndex.intro1')}</p>

      <p>{t('fleetIndex.intro2')}</p>

      <p>{t('fleetIndex.intro3')}</p>

      <div className="fleet-index-grid">
        {config.cars.map((car) => {
          const tk = (sub, fallback) => {
            const val = t(`cars.${car.slug}.${sub}`);
            return val && val !== `cars.${car.slug}.${sub}` ? val : fallback;
          };
          const name = tk('name', car.name);
          const tagline = tk('tagline', car.tagline);
          const category = tk('category', car.category);
          const consumption = car.details?.consumption;

          return (
            <a
              key={car.slug}
              href={localePath(`/cars/${car.slug}`)}
              className="fleet-index-card"
            >
              <div className="fleet-index-card__img" style={{ backgroundImage: `url(${car.image})` }}>
                <span className="fleet-index-card__tag">{category}</span>
              </div>
              <div className="fleet-index-card__body">
                <h3 className="fleet-index-card__name">{name}</h3>
                <p className="fleet-index-card__tagline">{tagline}</p>
                <div className="fleet-index-card__specs">
                  <span><Users size={14} /> {car.seats}</span>
                  <span><Settings size={14} /> {car.transmission.slice(0,4)}</span>
                  <span><Fuel size={14} /> {car.fuel}</span>
                  <span><Briefcase size={14} /> {car.luggage}</span>
                </div>
                {consumption && (
                  <div className="fleet-index-card__extra">
                    {consumption}
                  </div>
                )}
                <div className="fleet-index-card__footer">
                  <span className="fleet-index-card__arrow">
                    {t('cars.readGuide') !== 'cars.readGuide' ? t('cars.readGuide') : 'Read guide'} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </ContentPage>
  );
}
