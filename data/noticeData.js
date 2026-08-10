export const noticeData = [
  {
    id: 1,
    title: "Non-Encumbrance Certificate (NEC)",
    slug: "non-encumbrance-certificate-nec",
    date: "04 August, 2026",
    isoDate: "2026-08-04",
    author: "Anondo Bhubon",
    category: "Legal Certificate",
    image:
      "/notice/Anondo Bhubon_ACSL Non Encumbrance Certificate (NEC) Day Mukti Sanod-1.jpg",
    images: [
      "/notice/Anondo Bhubon_ACSL Non Encumbrance Certificate (NEC) Day Mukti Sanod-1.jpg",
    ],
    description:
      "Official Non-Encumbrance Certificate (NEC) document for Anondo Bhubon, published for stakeholder reference and project transparency.",
  },
  {
    id: 2,
    title: "Environmental Impact Assessment (EIA) ToR Approval Notice",
    slug: "eia-tor-approval-notice",
    date: "02 December, 2025",
    isoDate: "2025-12-02",
    author: "Anondo Bhubon",
    category: "Environmental Approval",
    image: "/notice/Adobe Scan Dec 02, 2025(4)-1.jpg",
    images: [
      "/notice/Adobe Scan Dec 02, 2025(4)-1.jpg",
      "/notice/Adobe Scan Dec 02, 2025(4)-2.jpg",
    ],
    description:
      "Official scanned notice documents related to the Environmental Impact Assessment (EIA) Terms of Reference approval for Anondo Bhubon.",
  },
];

export function getSortedNotices() {
  return [...noticeData].sort(
    (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime(),
  );
}

export function getNoticeBySlug(slug) {
  return noticeData.find((notice) => notice.slug === slug);
}
