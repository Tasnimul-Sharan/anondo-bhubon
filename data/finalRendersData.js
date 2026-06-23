const finalRender = (src, label) => ({
  src,
  label,
  title: (src.split("/").pop() || "Final Render")
    .replace(/\.(png|jpe?g)$/i, "")
    .replace(/\s+/g, " ")
    .trim(),
});

export const finalRenderAssets = {
  hero: "/FINAL RENDERS/DOWNTOWN CBD (3).jpg",
  courtyardPremiumPlus: "/FINAL RENDERS/Courtyard plot PREMIUM PLUS.jpg",
  riverPremiumPlus: "/FINAL RENDERS/River view PREMIUM PLUS.jpg",
  lake: "/FINAL RENDERS/BLOCK COMMUNITY LAKE 1.png",
  lakeAlternate: "/FINAL RENDERS/BLOCK COMMUNITY LAKE 3.png",
  riverside: "/FINAL RENDERS/RIVER SIDE 1.png",
  forestWalk: "/FINAL RENDERS/PREMIUM 1 SECTOR- FOREST WALK 1.png",
  forestWalkAlternate: "/FINAL RENDERS/PREMIUM 1 SECTOR- FOREST WALK 2.png",
  megaMall: "/FINAL RENDERS/MEGA MALL 6.png",
  amenities: "/FINAL RENDERS/SECTOR CENTRAL AMENITIES 5.png",
  mosque: "/FINAL RENDERS/PREMIUM 1 SECTOR CENTRAL MOSQUE 1.png",
  school: "/FINAL RENDERS/SECTOR CENTRAL HIGH SCHOOL 1.png",
  stadium: "/FINAL RENDERS/SECTOR CENTRAL STADIUM 1.png",
  university: "/FINAL RENDERS/UNIVERSITY 4.png",
  masterplan: "/FINAL RENDERS/Masterplan/FULL TOP MAP V2.jpg",
  masterplanSide: "/FINAL RENDERS/Masterplan/FULL TOP MAP V2 SIDE.jpg",
  premiumBlock: "/FINAL RENDERS/Masterplan/PREMIUM 1 BLOCK CENTER.jpg",
  exclusiveBlock: "/FINAL RENDERS/Masterplan/EXCLUSIVE 1 BLOCK A.jpg",
  billboard: "/FINAL RENDERS/Billboards/7RX AI UPSCALED.jpeg",
  location: "/FINAL RENDERS/River view PREMIUM PLUS 2.jpg",
};

export const newPremiumPlusRenders = [
  finalRender("/FINAL RENDERS/Courtyard plot PREMIUM PLUS.jpg", "Courtyard"),
  finalRender("/FINAL RENDERS/Courtyard plot PREMIUM PLUS 2.jpg", "Courtyard"),
  finalRender("/FINAL RENDERS/Courtyard plot PREMIUM PLUS 7x.jpg", "Courtyard"),
  finalRender("/FINAL RENDERS/Courtyard plot PREMIUM PLUS4.jpg", "Courtyard"),
  finalRender("/FINAL RENDERS/Courtyard plot PREMIUM PLUS5.jpg", "Courtyard"),
  finalRender("/FINAL RENDERS/River view PREMIUM PLUS.jpg", "River View"),
  finalRender("/FINAL RENDERS/River view PREMIUM PLUS 2.jpg", "River View"),
  finalRender("/FINAL RENDERS/stadium PREMIUM PLUS_1.jpg", "Stadium"),
  finalRender("/FINAL RENDERS/stadium PREMIUM PLUS2.jpg", "Stadium"),
];

export const finalRenderImages = [
  ...newPremiumPlusRenders,
  finalRender("/FINAL RENDERS/BLOCK COMMUNITY LAKE 1.png", "Lake"),
  finalRender("/FINAL RENDERS/BLOCK COMMUNITY LAKE 3.png", "Lake"),
  finalRender("/FINAL RENDERS/DOWNTOWN CBD (1).jpg", "Downtown"),
  finalRender("/FINAL RENDERS/DOWNTOWN CBD (1).png", "Downtown"),
  finalRender("/FINAL RENDERS/DOWNTOWN CBD (3).jpg", "Downtown"),
  finalRender("/FINAL RENDERS/DOWNTOWN CBD UPSCALED.png", "Downtown"),
  finalRender("/FINAL RENDERS/LOCAL BLOCK MOSQUE 4.png", "Mosque"),
  finalRender("/FINAL RENDERS/LOCAL BLOCK SMALL MOSQUE 2.jpg", "Mosque"),
  finalRender("/FINAL RENDERS/MEGA MALL 1.png", "Commercial"),
  finalRender("/FINAL RENDERS/MEGA MALL 3.png", "Commercial"),
  finalRender("/FINAL RENDERS/MEGA MALL 4.png", "Commercial"),
  finalRender("/FINAL RENDERS/MEGA MALL 5.png", "Commercial"),
  finalRender("/FINAL RENDERS/MEGA MALL 6.png", "Commercial"),
  finalRender(
    "/FINAL RENDERS/PREMIUM 1 SECTOR CENTRAL AMENITIES 1.png",
    "Amenities",
  ),
  finalRender(
    "/FINAL RENDERS/PREMIUM 1 SECTOR CENTRAL AMENITIES 2.png",
    "Amenities",
  ),
  finalRender(
    "/FINAL RENDERS/PREMIUM 1 SECTOR CENTRAL MOSQUE 1.png",
    "Mosque",
  ),
  finalRender(
    "/FINAL RENDERS/PREMIUM 1 SECTOR CENTRAL MOSQUE 2.png",
    "Mosque",
  ),
  finalRender(
    "/FINAL RENDERS/PREMIUM 1 SECTOR- BLOCK C- COMMUNITY FARMING 1.jpg",
    "Community Farming",
  ),
  finalRender(
    "/FINAL RENDERS/PREMIUM 1 SECTOR- BLOCK C- COMMUNITY FARMING 3.png",
    "Community Farming",
  ),
  finalRender(
    "/FINAL RENDERS/PREMIUM 1 SECTOR- BLOCK C- COMMUNITY FARMING 7.png",
    "Community Farming",
  ),
  finalRender(
    "/FINAL RENDERS/PREMIUM 1 SECTOR- FOREST WALK 1.png",
    "Forest Walk",
  ),
  finalRender(
    "/FINAL RENDERS/PREMIUM 1 SECTOR- FOREST WALK 2.png",
    "Forest Walk",
  ),
  finalRender("/FINAL RENDERS/RIVER SIDE 1.png", "Riverside"),
  finalRender("/FINAL RENDERS/SECTOR CENTRAL AMENITIES 1.png", "Amenities"),
  finalRender("/FINAL RENDERS/SECTOR CENTRAL AMENITIES 2.png", "Amenities"),
  finalRender("/FINAL RENDERS/SECTOR CENTRAL AMENITIES 3.png", "Amenities"),
  finalRender("/FINAL RENDERS/SECTOR CENTRAL AMENITIES 4.png", "Amenities"),
  finalRender("/FINAL RENDERS/SECTOR CENTRAL AMENITIES 5.png", "Amenities"),
  finalRender("/FINAL RENDERS/SECTOR CENTRAL AMENITIES 6.jpg", "Amenities"),
  finalRender("/FINAL RENDERS/SECTOR CENTRAL AMENITIES 7.png", "Amenities"),
  finalRender(
    "/FINAL RENDERS/SECTOR CENTRAL HIGH SCHOOL 1.png",
    "Education",
  ),
  finalRender(
    "/FINAL RENDERS/SECTOR CENTRAL HIGH SCHOOL 2.png",
    "Education",
  ),
  finalRender("/FINAL RENDERS/SECTOR CENTRAL STADIUM 1.png", "Sports"),
  finalRender("/FINAL RENDERS/SECTOR CENTRAL STADIUM 2.png", "Sports"),
  finalRender("/FINAL RENDERS/UNIVERSITY 1.png", "Education"),
  finalRender("/FINAL RENDERS/UNIVERSITY 2.png", "Education"),
  finalRender("/FINAL RENDERS/UNIVERSITY 3.png", "Education"),
  finalRender("/FINAL RENDERS/UNIVERSITY 4.png", "Education"),
  finalRender("/FINAL RENDERS/UNIVERSITY LIBRARY.png", "Education"),
  finalRender(
    "/FINAL RENDERS/Masterplan/bhubon leaflet inner bg new HR.jpg",
    "Masterplan",
  ),
  finalRender(
    "/FINAL RENDERS/Masterplan/EXCLUSIVE 1 BLOCK A.jpg",
    "Masterplan",
  ),
  finalRender(
    "/FINAL RENDERS/Masterplan/EXCLUSIVE 1 BLOCK B.jpg",
    "Masterplan",
  ),
  finalRender(
    "/FINAL RENDERS/Masterplan/EXCLUSIVE 1 BLOCK C.jpg",
    "Masterplan",
  ),
  finalRender(
    "/FINAL RENDERS/Masterplan/EXCLUSIVE 1 BLOCK D.jpg",
    "Masterplan",
  ),
  finalRender(
    "/FINAL RENDERS/Masterplan/EXCLUSIVE 2 BLOCK D.jpg",
    "Masterplan",
  ),
  finalRender(
    "/FINAL RENDERS/Masterplan/EXCLUSIVE 2 CENTER P.jpg",
    "Masterplan",
  ),
  finalRender(
    "/FINAL RENDERS/Masterplan/EXCLUSIVE 2 CENTER.jpg",
    "Masterplan",
  ),
  finalRender("/FINAL RENDERS/Masterplan/FOREST WALK 2.jpg", "Masterplan"),
  finalRender("/FINAL RENDERS/Masterplan/FOREST WALK TOP.jpg", "Masterplan"),
  finalRender(
    "/FINAL RENDERS/Masterplan/FULL TOP MAP V2 SIDE.jpg",
    "Masterplan",
  ),
  finalRender("/FINAL RENDERS/Masterplan/FULL TOP MAP V2.jpg", "Masterplan"),
  finalRender(
    "/FINAL RENDERS/Masterplan/PREMIUM 1 BLOCK A.jpg",
    "Masterplan",
  ),
  finalRender(
    "/FINAL RENDERS/Masterplan/PREMIUM 1 BLOCK B.jpg",
    "Masterplan",
  ),
  finalRender(
    "/FINAL RENDERS/Masterplan/PREMIUM 1 BLOCK C.jpg",
    "Masterplan",
  ),
  finalRender(
    "/FINAL RENDERS/Masterplan/PREMIUM 1 BLOCK CENTER.jpg",
    "Masterplan",
  ),
  finalRender("/FINAL RENDERS/Masterplan/TOP PREMIUM.jpg", "Masterplan"),
  finalRender("/FINAL RENDERS/Billboards/1RX AI UPSCALED.png", "Billboard"),
  finalRender("/FINAL RENDERS/Billboards/6RX AI UPSCALED.png", "Billboard"),
  finalRender("/FINAL RENDERS/Billboards/7RX AI UPSCALED.jpeg", "Billboard"),
];

export const finalRenderHighlights = finalRenderImages.filter(
  (image) => image.label !== "Billboard",
);
