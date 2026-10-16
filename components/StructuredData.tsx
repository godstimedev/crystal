import { site } from "@/content/site";

/* schema.org Person record so search engines can connect Crystal to her brands. Facts from the brief only. */
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.seo.jobTitle,
  description: site.seo.description,
  url: site.url,
  brand: ["Studio COKA", "ELEvated", "The Effective Architect", "AKO Alliance", "Alive and Free"].map((name) => ({
    "@type": "Brand",
    name,
  })),
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag early
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
    />
  );
}
