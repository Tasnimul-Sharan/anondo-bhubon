import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import LifestyleAmenitiesSection from "@/components/LifestyleAmenitiesSection";
import { amenities } from "@/data/anondoBhubonData";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Lifestyle Amenities | Anondo Bhubon Community Facilities",
  description:
    "Explore Anondo Bhubon lifestyle amenities including clubhouse, communal parks, parking courts, sports facilities, playgrounds, riverside park, meditation spaces, malls, school and university.",
  keywords: [
    "Anondo Bhubon amenities",
    "Anondo Bhubon lifestyle facilities",
    "Purbachal township amenities",
    "residential clubhouse Bangladesh",
    "riverside park community",
    "township community facilities",
  ],
  path: "/lifestyle-amenities",
  image: finalRenderAssets.amenities,
  imageAlt: "Anondo Bhubon lifestyle amenities and community facilities",
  pageType: "CollectionPage",
  breadcrumb: [{ name: "Lifestyle Amenities", path: "/lifestyle-amenities" }],
  jsonLd: {
    "@type": "ItemList",
    "@id": "https://www.anondobhubon.com/lifestyle-amenities#amenities",
    name: "Anondo Bhubon Lifestyle Amenities",
    itemListElement: amenities.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: item.description,
      image: `https://www.anondobhubon.com${item.image}`,
    })),
  },
};

export default function LifestyleAmenitiesPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Lifestyle Amenities",
          backgroundImage: finalRenderAssets.amenities,
        }}
      />
      <LifestyleAmenitiesSection />
    </div>
  );
}
