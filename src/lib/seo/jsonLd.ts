const SITE_URL = "https://www.cueserve.com";

export function organizationJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cueserve",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  });
}

export function articleJsonLd(post: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  author?: string;
  image?: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    url: post.url,
    author: post.author ? { "@type": "Person", name: post.author } : undefined,
    image: post.image,
  });
}

export function breadcrumbJsonLd(trail: { name: string; url: string }[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  });
}
