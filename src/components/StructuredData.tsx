import React from 'react';

export const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Clean Lourenço",
    "image": "https://cleanlourenco.com.br/images/happy_family.png",
    "@id": "https://cleanlourenco.com.br",
    "url": "https://cleanlourenco.com.br",
    "telephone": "+55-14-99767-0761",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Marília",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.2139,
      "longitude": -49.9458
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Marília",
        "sameAs": "https://www.google.com/search?q=Marília+SP"
      },
      {
        "@type": "City",
        "name": "Garça"
      },
      {
        "@type": "City",
        "name": "Pompéia"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/CLEANLOURENCO",
      "https://www.instagram.com/cleanlourenco/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
