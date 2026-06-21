import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { finalRenderAssets } from "./finalRendersData";
// import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { blogsData } from "./blogsData";

// export const NoticeDetailsData = {
//   meta: {
//     title: "Notices | Anondo Cityscapers – Latest Announcements and Project Updates in Bangladesh",
//     description:
//       "Official notices, announcements, committee updates, registration updates and important information from Anondo Cityscapers.",
//     keywords:
//       "Anondo Cityscapers notice, committee update, registration notice, official announcement",
//     author: "Anondo Cityscapers",
//     url: "https://anondocityscapers.com/notices",
//     image: "https://anondocityscapers.com/notices/notice-og.jpg",
//   },

//   blogDetails: blogsData.map((item) => ({
//     slug: item.slug,
//     blogPost: {
//       title: item.title,
//       image: item.image,
//       author: item.author,
//       date: item.date,
//       description: item.description,
//       postTags: [],
//     },
//     socialIcons: social(),
//   })),
// };

// function social() {
//   return [
//     {
//       icon: FaFacebookF,
//       link: (url) =>
//         `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//           url
//         )}`,
//     },
//     {
//       icon: FaXTwitter,
//       link: (url, title) =>
//         `https://twitter.com/intent/tweet?url=${encodeURIComponent(
//           url
//         )}&text=${encodeURIComponent(title)}`,
//     },
//     {
//       icon: FaLinkedinIn,
//       link: (url, title) =>
//         `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
//           url
//         )}&title=${encodeURIComponent(title)}`,
//     },
//   ];
// }

// export const NoticeDetailsData = {
//   blogDetails: [
//     {
//       slug: "anondo-rosemont-estate",
//       blogPost: {
//         title: "Anondo Rosemont Estate",
//         description:
//           "A premium 807-bigha villa community inspired by European elegance, located near Purbachal.",
//         image: "/projects/rosemont.jpg",
//         date: "01 January, 2026",
//         author: "Anondo Cityscapers",
//         postTags: ["Luxury Living", "Villa", "Purbachal", "Real Estate"],
//       },
//       sections: [
//         {
//           title: "Project Overview",
//           content:
//             "Anondo Rosemont Estate is a master-planned villa community blending nature, elegance, and modern infrastructure.",
//         },
//         {
//           title: "Key Features",
//           list: [
//             "807 Bigha Land Area",
//             "60ft, 40ft, 25ft Road Network",
//             "Central Park & Lake",
//             "Sports Complex & Community Facilities",
//             "24/7 Security System",
//           ],
//         },
//         {
//           title: "Villa Options",
//           list: [
//             "5 Katha – 2750 sq ft",
//             "10 Katha – 4500 sq ft",
//             "20 Katha – 7200 sq ft",
//           ],
//         },
//       ],
//     },

//     {
//       slug: "anondo-bhubon",
//       blogPost: {
//         title: "Anondo Bhubon",
//         description:
//           "A smart eco-friendly township designed for sustainable and modern urban living.",
//         image: "/projects/bhubon.jpg",
//         date: "01 January, 2026",
//         author: "Anondo Cityscapers",
//         postTags: ["Smart City", "Eco Living", "Investment"],
//       },
//       sections: [
//         {
//           title: "Project Overview",
//           content:
//             "Anondo Bhubon is a future-ready smart township near the Sitalakhya River with green living and modern facilities.",
//         },
//         {
//           title: "Key Features",
//           list: [
//             "Sector-Based Planning",
//             "Artificial River & Canal",
//             "3KM Forest Walkway",
//             "IT Park & Commercial Hub",
//             "40–50% Green Space",
//           ],
//         },
//         {
//           title: "Residential Options",
//           list: ["Luxury Villas", "Mid-rise Apartments", "Modern Condominiums"],
//         },
//       ],
//     },
//   ],
// };

// export const blogDetailsData = {
//   blogDetails: [
//     {
//       slug: "invest-in-purbachal",
//       blogPost: {
//         title: "Why Invest in Purbachal Right Now?",
//         description:
//           "Purbachal is rapidly developing with government mega projects, making it the best investment zone.",
//         image: "/blogs/purbachal.jpg",
//         date: "05 January, 2026",
//         author: "Admin",
//         postTags: ["Investment", "Purbachal"],
//       },
//       sections: [
//         {
//           title: "Growth Potential",
//           content:
//             "Purbachal is supported by major infrastructure projects including expressways and metro connectivity.",
//         },
//         {
//           title: "Why Choose Now?",
//           list: [
//             "Low price compared to future value",
//             "High demand zone",
//             "Government development support",
//           ],
//         },
//       ],
//       socialIcons: social(),
//     },

//     {
//       slug: "anondo-rosemont-estate",
//       blogPost: {
//         title: "Anondo Rosemont Estate",
//         description: "Luxury villa project near Purbachal.",
//         image: "/projects/rosemont.jpg",
//         date: "07 January, 2026",
//         author: "Admin",
//         postTags: ["Villa", "Luxury"],
//       },
//       sections: [
//         {
//           title: "Project Overview",
//           content:
//             "A premium villa community designed with European style and modern planning.",
//         },
//         {
//           title: "Key Features",
//           list: [
//             "807 Bigha Land",
//             "Wide Roads",
//             "Central Park",
//             "24/7 Security",
//           ],
//         },
//       ],
//       socialIcons: social(),
//     },

//     {
//       slug: "anondo-bhubon",
//       blogPost: {
//         title: "Anondo Bhubon",
//         description: "Smart eco-friendly township.",
//         image: "/projects/bhubon.jpg",
//         date: "10 January, 2026",
//         author: "Admin",
//         postTags: ["Smart City"],
//       },
//       sections: [
//         {
//           title: "Overview",
//           content:
//             "An eco-friendly smart city with green spaces and modern infrastructure.",
//         },
//         {
//           title: "Highlights",
//           list: ["Artificial River", "Forest Walkway", "IT Hub"],
//         },
//       ],
//       socialIcons: social(),
//     },

//     {
//       slug: "benefits-of-buying-land",
//       blogPost: {
//         title: "Top 5 Benefits of Buying Land Early",
//         description: "Smart investment tips for land buyers.",
//         image: "/blogs/land-invest.jpg",
//         date: "12 January, 2026",
//         author: "Admin",
//         postTags: ["Investment"],
//       },
//       sections: [
//         {
//           title: "Benefits",
//           list: ["Lower price", "High future value", "Flexible development"],
//         },
//       ],
//       socialIcons: social(),
//     },

//     {
//       slug: "land-verification-guide",
//       blogPost: {
//         title: "How to Verify Land Before Buying",
//         description: "Avoid mistakes when buying land.",
//         image: "/blogs/land-verification.jpg",
//         date: "15 January, 2026",
//         author: "Admin",
//         postTags: ["Guide"],
//       },
//       sections: [
//         {
//           title: "Checklist",
//           list: [
//             "Verify ownership",
//             "Check land documents",
//             "Confirm approvals",
//           ],
//         },
//       ],
//       socialIcons: social(),
//     },

//     {
//       slug: "modern-vs-traditional-living",
//       blogPost: {
//         title: "Modern Living vs Traditional Housing",
//         description: "Which lifestyle is better?",
//         image: "/blogs/modern-living.jpg",
//         date: "18 January, 2026",
//         author: "Admin",
//         postTags: ["Lifestyle"],
//       },
//       sections: [
//         {
//           title: "Comparison",
//           list: [
//             "Planned vs unplanned",
//             "Facilities vs limitations",
//             "Security differences",
//           ],
//         },
//       ],
//       socialIcons: social(),
//     },
//   ],
// };

function social() {
  return [
    {
      icon: FaFacebookF,
      link: (url) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      icon: FaXTwitter,
      link: (url, title) =>
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url,
        )}&text=${encodeURIComponent(title)}`,
    },
    {
      icon: FaLinkedinIn,
      link: (url, title) =>
        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url,
        )}&title=${encodeURIComponent(title)}`,
    },
  ];
}

export const blogDetailsData = {
  blogDetails: [
    {
      slug: "invest-in-purbachal",
      blogPost: {
        title: "Why Invest in Purbachal Right Now?",
        description:
        "Purbachal is rapidly transforming into the most promising real estate hub in Bangladesh, backed by massive government projects and infrastructure development.",
        image: finalRenderAssets.masterplanSide,
        date: "05 January, 2026",
        author: "Admin",
        postTags: ["Investment", "Purbachal", "Real Estate"],
      },
      sections: [
        {
          title: "Rapid Infrastructure Growth",
          content:
          "Purbachal is witnessing significant development including 300 ft expressway, metro rail connectivity, and modern road networks. These projects are directly increasing land value and future demand.",
        },
        {
          title: "High Investment Return",
          content:
            "Land prices in Purbachal are still relatively affordable compared to future projections. Investors are already seeing strong appreciation within short time periods.",
          },
          {
            title: "Why You Should Invest Now",
            list: [
              "Prices are still lower than upcoming market value",
              "Strong government backing and planning",
            "High demand from both residential and commercial buyers",
            "Safe and secure investment opportunity",
          ],
        },
      ],
      socialIcons: social(),
    },
    
    {
      slug: "anondo-rosemont-estate",
      blogPost: {
        title: "Anondo Rosemont Estate",
        description:
        "A premium luxury villa community designed to redefine elite living near Purbachal.",
        image: finalRenderAssets.exclusiveBlock,
        date: "07 January, 2026",
        author: "Admin",
        postTags: ["Villa", "Luxury", "Project"],
      },
      sections: [
        {
          title: "Project Overview",
          content:
          "Anondo Rosemont Estate is a thoughtfully designed luxury villa project combining European architectural elegance with modern urban planning.",
        },
        {
          title: "World-Class Facilities",
          list: [
            "807 Bigha master planned township",
            "60 ft wide roads and green avenues",
            "Central lake and landscaped parks",
            "24/7 gated security system",
            "Community club & recreational facilities",
          ],
        },
        {
          title: "Why Choose This Project",
          content:
          "This project offers a peaceful, secure, and high-standard lifestyle away from city congestion while still being well-connected to major urban areas.",
        },
      ],
      socialIcons: social(),
    },
    
    {
      slug: "anondo-bhubon",
      blogPost: {
        title: "Anondo Bhubon",
        description:
        "A next-generation smart eco-friendly township built for modern sustainable living.",
        image: finalRenderAssets.hero,
        date: "10 January, 2026",
        author: "Admin",
        postTags: ["Smart City", "Eco Living"],
      },
      sections: [
        {
          title: "Smart Living Concept",
          content:
          "Anondo Bhubon integrates smart technology, green infrastructure, and sustainable planning to create a future-ready living environment.",
        },
        {
          title: "Unique Features",
          list: [
            "Artificial river and waterfront design",
            "Forest walkway and green zones",
            "Dedicated IT hub and business zone",
            "Smart security and digital monitoring",
          ],
        },
        {
          title: "Lifestyle Benefits",
          content:
          "Residents will enjoy a balanced lifestyle with nature, technology, and modern facilities combined in one integrated community.",
        },
      ],
      socialIcons: social(),
    },

    {
      slug: "benefits-of-buying-land",
      blogPost: {
        title: "Top 5 Benefits of Buying Land Early",
        description:
          "Investing in land at an early stage can bring maximum financial benefits and long-term security.",
        image: finalRenderAssets.lake,
        date: "12 January, 2026",
        author: "Admin",
        postTags: ["Investment", "Tips"],
      },
      sections: [
        {
          title: "Why Early Investment Matters",
          content:
            "Buying land early allows investors to secure property at a lower price before development increases its value significantly.",
        },
        {
          title: "Key Benefits",
          list: [
            "Lower purchase cost",
            "High appreciation potential",
            "Flexible development options",
            "Low maintenance cost",
            "Long-term financial security",
          ],
        },
      ],
      socialIcons: social(),
    },

    {
      slug: "land-verification-guide",
      blogPost: {
        title: "How to Verify Land Before Buying",
        description:
          "A complete guide to safely verify land documents and avoid legal complications.",
        image: finalRenderAssets.masterplan,
        date: "15 January, 2026",
        author: "Admin",
        postTags: ["Guide", "Legal"],
      },
      sections: [
        {
          title: "Importance of Verification",
          content:
            "Land verification is crucial to avoid fraud, disputes, and legal issues. Always ensure proper documentation before purchasing.",
        },
        {
          title: "Verification Checklist",
          list: [
            "Verify ownership and seller identity",
            "Check land registration documents",
            "Confirm government approvals",
            "Ensure no legal disputes exist",
            "Consult a legal expert if needed",
          ],
        },
      ],
      socialIcons: social(),
    },

    {
      slug: "modern-vs-traditional-living",
      blogPost: {
        title: "Modern Living vs Traditional Housing",
        description:
          "Explore the key differences between modern planned communities and traditional housing systems.",
        image: finalRenderAssets.riverside,
        date: "18 January, 2026",
        author: "Admin",
        postTags: ["Lifestyle", "Comparison"],
      },
      sections: [
        {
          title: "Modern Living Advantages",
          list: [
            "Planned infrastructure and road network",
            "Advanced security system",
            "Community facilities and parks",
            "Better utility management",
          ],
        },
        {
          title: "Traditional Housing Limitations",
          list: [
            "Unplanned development",
            "Limited facilities",
            "Security concerns",
            "Poor infrastructure",
          ],
        },
        {
          title: "Final Verdict",
          content:
            "Modern planned communities provide a safer, more comfortable, and future-ready lifestyle compared to traditional housing systems.",
        },
      ],
      socialIcons: social(),
    },
  ],
};
