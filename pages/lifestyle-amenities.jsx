import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import LifestyleAmenitiesSection from "@/components/LifestyleAmenitiesSection";
import { amenities } from "@/data/anondoBhubonData";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title:
    "Lifestyle Amenities | Forest Walkways, Sports Complexes, Schools & Waterfront | Anondo Bhubon",
  description:
    "Explore Anondo Bhubon's integrated community amenities near Purbachal: 50-bigha Forest Walkways, a 125-bigha river and lake waterfront, 70-bigha international-standard cricket and football sports complexes, neighbourhood playgrounds, a 55-bigha Mega Commercial Centre, schools, university site, and two hospitals.",
  keywords: [
    "Anondo Bhubon amenities",
    "Anondo Bhubon lifestyle facilities",
    "50-bigha Forest Walkways Purbachal",
    "70-bigha sports complex cricket football",
    "55-bigha Mega Commercial Centre",
    "125-bigha riverfront and lakes",
    "schools university and hospitals Purbachal township",
  ],
  path: "/lifestyle-amenities",
  image: finalRenderAssets.amenities,
  imageAlt:
    "Anondo Bhubon lifestyle amenities — Forest Walkways, waterfront, sports complexes, schools, and community spaces",
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
