const newRenders = "/anondo bhubon New";
const premiumPlus = `${newRenders}/PREMIUM PLUS`;
const central = `${newRenders}/2- 20 BIGHA CENTRAL AMENITIES`;
const community = `${newRenders}/BLOCK- COMMUNITY GATHERING AMENITIES`;
const cbd = `${newRenders}/CBD FACILITIES`;

function image(src, width, height, alt) {
  return { src, width, height, alt };
}

const visuals = {
  forest: image(
    `${central}/FOREST WALK PREMIUM 1  (1)xx.jpg`, 4749, 3392,
    "A shaded pedestrian walkway beneath a canopy of trees at Anondo Bhubon",
  ),
  courtyard: image(
    `${premiumPlus}/COURTYARD PLOT (1)x.jpg`, 6776, 4838,
    "Landscaped residential courtyard with footpaths and seating",
  ),
  courtyardAerial: image(
    `${premiumPlus}/COURTYARD PLOT (2)x.jpg`, 4124, 2990,
    "Aerial view of a landscaped courtyard between residential buildings",
  ),
  greenNeighbourhood: image(
    `${premiumPlus}/COURTYARD PLOT (3)x.jpg`, 6776, 4838,
    "Green rooftops, planted courtyards and tree-lined streets in Premium Plus",
  ),
  courtyardGarden: image(
    `${premiumPlus}/COURTYARD PLOT (4)x.jpg`, 6776, 4838,
    "A shared garden and walking paths framed by residential buildings",
  ),
  river: image(
    `${premiumPlus}/RIVER VIEW PREMIUM PLUS (1)x.jpg`, 4155, 2968,
    "Residential waterfront with landscaped banks and arched pedestrian bridges",
  ),
  riverEvening: image(
    `${premiumPlus}/RIVER VIEW PREMIUM PLUS (2)x.jpg`, 4155, 2968,
    "Evening view of the waterway and green promenades through Premium Plus",
  ),
  cricket: image(
    `${premiumPlus}/STADIUM PREMIUM PLUSx.jpg`, 6776, 4838,
    "Cricket stadium and landscaped surroundings in Premium Plus",
  ),
  football: image(
    `${central}/STADIUM EXCLUSIVE 1 (1)x.jpg`, 4525, 2954,
    "Community football field with a running track and spectator seating",
  ),
  stadiumExclusive2: image(
    `${central}/STADIUM EXCLUSIVE 1 (2)x.jpg`, 4752, 3389,
    "Community stadium and athletic complex surrounded by residential blocks at Anondo Bhubon",
  ),
  communitySpace: image(
    `${central}/Community Space.jpg`, 4749, 3392,
    "Central community facilities with a sports field, mosque and landscaped streets",
  ),
  shoppingCourtyard: image(
    `${central}/CENTRAL AMENITIES PREMIUM 1 (3)x.jpg`, 4893, 3290,
    "Pedestrian shopping courtyard with planted terraces and gathering spaces",
  ),
  centralAmenities4: image(
    `${central}/CENTRAL AMENITIES PREMIUM 1 (4)x.jpg`, 4749, 3392,
    "Central amenities hub and community gathering spaces in Premium 1",
  ),
  centralAmenities5: image(
    `${central}/CENTRAL AMENITIES PREMIUM 1 (5)x.jpg`, 4886, 3296,
    "Landscaped central amenities plaza and neighbourhood walkways in Premium 1",
  ),
  centralMosque: image(
    `${central}/CENTRAL MOSQUE PREMIUM 1 (1)x.jpg`, 4749, 3392,
    "Central mosque reflected in a tranquil water court surrounded by residences",
  ),
  school: image(
    `${central}/HIGH SCHOOL (2)x.jpg`, 4912, 3277,
    "School entrance and pedestrian frontage within the residential community",
  ),
  schoolCampus: image(
    `${central}/HIGH SCHOOL (2)x.jpg`, 4912, 3277,
    "School campus with classroom buildings, landscaped grounds and sports fields",
  ),
  lake: image(
    `${community}/COMMUNITY LAKE 1x.jpg`, 4877, 3302,
    "Tree-lined paths along a community lake surrounded by residences",
  ),
  lakeside: image(
    `${community}/COMMUNITY LAKE 3x.jpg`, 4883, 3299,
    "Shaded lakeside walking and gathering spaces within the neighbourhood",
  ),
  farming: image(
    `${community}/COMMUNITY FARMING (1)x.jpg`, 7776, 5526,
    "Community vegetable gardens and greenhouses beside residential buildings",
  ),
  farmingAerial: image(
    `${community}/COMMUNITY FARMING (2)x.jpg`, 4742, 3395,
    "Aerial view of community growing beds, greenhouses and garden pathways",
  ),
  businessDistrict: image(
    `${cbd}/CBD DOWNTOWN (1)x (1).jpg`, 5808, 4147,
    "Waterfront business district with office towers and tree-lined streets",
  ),
  downtown: image(
    `${cbd}/CBD DOWNTOWN (2)x.jpg`, 5773, 2790,
    "A landscaped boulevard connecting offices and commercial destinations",
  ),
  businessAerial: image(
    `${cbd}/CBD DOWNTOWN (3)x.jpg`, 5808, 4147,
    "Aerial view of the commercial district and its connected streets",
  ),
  mall: image(
    `${cbd}/MEGA MALL 6x.jpg`, 4749, 3392,
    "Mega mall and office buildings beside a landscaped urban boulevard",
  ),
  promenade: image(
    `${cbd}/RIVER SIDE 1x.jpg`, 4749, 3392,
    "Waterfront promenade with seating and views across the township",
  ),
  university: image(
    `${cbd}/UNIVERSITY 3x.jpg`, 4749, 3392,
    "Anondo Bhubon university entrance with landscaped pedestrian approaches",
  ),
  universityCampus: image(
    `${cbd}/UNIVERSITY 2x.jpg`, 4749, 3392,
    "University campus buildings and landscaped arrival spaces",
  ),
  library: image(
    `${cbd}/UNIVERSITY LIBRARYx.jpg`, 4749, 3392,
    "University library and planted courtyard for learning and gathering",
  ),
  relaxation: image(
    "/bhubon-old/RELAXATION ZONE.jpg", 1624, 968,
    "Relaxation garden with hammocks, trees and a pool",
  ),
  meditationSpace: image(
    "/bhubon-old/MEDITATION SPACE.jpg", 1536, 1024,
    "Quiet meditation space with mats overlooking a planted garden",
  ),
  meditationArea: image(
    "/bhubon-old/MEDITATION AREA.jpg", 1536, 1024,
    "Open-air meditation deck shaded by trees in a green landscape",
  ),
};

const lifestyleVisuals = {
  philosophy: {
    hero: visuals.river,
    sections: [{
      topBand: [visuals.lakeside],
      bottomBand: [visuals.forest, visuals.courtyard, visuals.cricket, visuals.farming],
    }],
  },
  "a-day-in-the-life": {
    hero: visuals.lake,
    sections: [{
      topBand: [visuals.forest],
      bottomBand: [
        { ...visuals.lake, fullWidth: true },
        { ...visuals.stadiumExclusive2, fullWidth: true },
        { ...visuals.school, fullWidth: true },
        visuals.centralAmenities4,
        visuals.centralAmenities5,
      ],
    }],
  },
  "our-commitment": {
    hero: visuals.riverEvening,
    sections: [{
      topBand: [visuals.greenNeighbourhood],
      bottomBand: [visuals.forest, visuals.lakeside, visuals.farming, visuals.courtyardGarden],
    }],
  },
  "healthy-lifestyle-for-every-generation": {
    hero: visuals.courtyard,
    sections: [{
      topBand: [visuals.lakeside],
      bottomBand: [visuals.schoolCampus, visuals.football, visuals.forest, visuals.courtyardGarden],
    }],
  },
  "green-township-at-every-level": {
    hero: visuals.greenNeighbourhood,
    sections: [{
      topBand: [visuals.courtyardAerial],
      bottomBand: [visuals.forest, visuals.lake, visuals.communitySpace, visuals.farming],
    }],
  },
  "living-and-working": {
    hero: visuals.downtown,
    sections: [{
      topBand: [visuals.businessDistrict],
      bottomBand: [visuals.businessAerial, visuals.mall, visuals.promenade],
    }],
  },
  "living-in-harmony-with-nature": {
    hero: visuals.river,
    sections: [
      { bottomBand: [visuals.greenNeighbourhood, visuals.courtyardAerial] },
      { bottomBand: [visuals.forest] },
      { bottomBand: [visuals.riverEvening, visuals.lakeside] },
      { bottomBand: [visuals.farming, visuals.farmingAerial] },
    ],
  },
  "physical-and-mental-well-being": {
    hero: visuals.cricket,
    sections: [
      { bottomBand: [visuals.football, visuals.communitySpace] },
      { bottomBand: [visuals.relaxation, visuals.meditationSpace, visuals.meditationArea] },
      { bottomBand: [visuals.lakeside, visuals.shoppingCourtyard] },
    ],
  },
  "education-and-lifelong-learning": {
    hero: visuals.university,
    sections: [{
      topBand: [visuals.school],
      bottomBand: [visuals.schoolCampus, visuals.universityCampus, visuals.library],
    }],
  },
  "vision-for-generations": {
    hero: visuals.riverEvening,
    sections: [{
      topBand: [visuals.courtyardGarden],
      bottomBand: [visuals.lakeside, visuals.forest, visuals.schoolCampus, visuals.greenNeighbourhood],
    }],
  },
  "vision-mission": {
    hero: visuals.river,
    sections: [
      {
        topBand: [{ ...visuals.greenNeighbourhood, fullWidth: true }],
        bottomBand: [
          { ...visuals.communitySpace, fullWidth: true },
          visuals.businessDistrict,
          visuals.university,
        ],
      },
      {
        topBand: [
          { ...visuals.riverEvening, fullWidth: true },
          visuals.courtyard,
          visuals.forest,
        ],
        bottomBand: [
          { ...visuals.downtown, fullWidth: true },
          visuals.schoolCampus,
          visuals.cricket,
          visuals.centralAmenities5,
          visuals.farming,
        ],
      },
    ],
  },
  "core-values": {
    hero: visuals.forest,
    sections: [
      {
        topBand: [
          { ...visuals.lake, fullWidth: true },
          visuals.forest,
          visuals.courtyardGarden,
        ],
        bottomBand: [
          { ...visuals.communitySpace, fullWidth: true },
          visuals.library,
          visuals.centralAmenities4,
          visuals.farming,
          visuals.centralMosque,
        ],
      },
    ],
  },
};

// Keep the original document wording separate from its presentation images.
export function withLifestyleVisuals(slug, documentContent) {
  const page = lifestyleVisuals[slug];
  if (!page) return documentContent;

  return {
    ...documentContent,
    heroImage: page.hero.src,
    sections: documentContent.sections.map((section, index) => ({
      ...section,
      topBand: page.sections[index]?.topBand || null,
      bottomBand: page.sections[index]?.bottomBand || null,
    })),
  };
}
