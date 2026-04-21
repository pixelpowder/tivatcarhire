// Expose the request pathname via a custom header so the root layout
// (which has no access to route params) can derive the active locale for
// <html lang="..."> and JSON-LD schema markup.
//
// Also 301-redirects retired car-guide slugs to their nearest Tivat
// inventory replacement.

import { NextResponse } from 'next/server';

const RETIRED_CARS = {
  'skoda-octavia':    'peugeot-308',      // mid-size diesel auto → closest
  'toyota-corolla':   'toyota-yaris',     // Toyota hybrid stays Toyota
  'mercedes-c-class': 'peugeot-308',      // premium mid-size → the best mid-size we have
  'jeep-renegade':    'renault-megane',   // no crossover in fleet → biggest-boot mid-size
  'bmw-x3':           'renault-megane',   // no SUV in fleet → biggest-boot mid-size
  'vw-transporter':   '/cars',            // van — no van in fleet, go to index
  'dacia-duster':     'vw-golf',          // budget crossover → DSG diesel mid-size
  'peugeot-208':      'vw-polo',          // retired economy hatch → Polo
  'kia-stonic':       'renault-megane',   // retired crossover → biggest-boot mid-size
  'citroen-c3':       'vw-polo',          // economy hatch → Polo
};

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Match /cars/<old-slug> or /<locale>/cars/<old-slug> — redirect 301
  const carMatch = pathname.match(/^(?:\/([a-z]{2}))?\/cars\/([a-z0-9-]+)\/?$/);
  if (carMatch) {
    const [, locale, slug] = carMatch;
    if (RETIRED_CARS[slug]) {
      const target = RETIRED_CARS[slug];
      const newPath = target.startsWith('/')
        ? (locale ? `/${locale}${target}` : target)
        : (locale ? `/${locale}/cars/${target}` : `/cars/${target}`);
      const url = request.nextUrl.clone();
      url.pathname = newPath;
      return NextResponse.redirect(url, 301);
    }
  }

  const res = NextResponse.next();
  res.headers.set('x-pathname', pathname);
  return res;
}

export const config = {
  matcher: [
    // Skip static assets, API routes, and internal Next paths
    '/((?!api|_next|favicon|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};
