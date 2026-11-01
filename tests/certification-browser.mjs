import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { noticeData } from "../data/noticeData.js";

const base = process.env.CERTIFICATION_TEST_URL || "http://localhost:3000";
const output = new URL("../.next/certification-qa/", import.meta.url);
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  ...(process.env.PORTAL_BROWSER_CHANNEL ? { channel: process.env.PORTAL_BROWSER_CHANNEL } : {}),
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const canonical = (path) => `https://www.anondobhubon.com${path}`;

async function noOverflow() {
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), "No horizontal page overflow");
}

async function screenshot(name) {
  await page.screenshot({ path: fileURLToPath(new URL(name, output)), fullPage: true });
}

try {
  for (const path of ["/notice", ...noticeData.map((item) => `/notice/${item.slug}`)]) {
    const response = await page.request.get(`${base}${path}`, { maxRedirects: 0 });
    assert.equal(response.status(), 308, `Permanent redirect for ${path}`);
    assert.equal(response.headers().location, path.replace("/notice", "/certification"));
  }
  // Existing original-document links must not be captured by the route redirects.
  for (const image of noticeData.flatMap((item) => item.images)) {
    const response = await page.request.get(`${base}${encodeURI(image)}`, { maxRedirects: 0 });
    assert.equal(response.status(), 200);
    assert.match(response.headers()["content-type"], /^image\//);
  }

  await page.goto(`${base}/notice`);
  await page.getByRole("heading", { name: "Certification", exact: true }).waitFor();
  assert.equal(new URL(page.url()).pathname, "/certification");
  assert.match(await page.title(), /^Certification \|/);
  assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), canonical("/certification"));
  await page.getByRole("navigation", { name: "Primary navigation", exact: true }).getByRole("link", { name: "Certification", exact: true }).waitFor();
  assert.equal(await page.getByRole("link", { name: "Notice", exact: true }).count(), 0);
  const cards = page.getByRole("link").filter({ hasText: "View Certification" });
  assert.equal(await cards.count(), noticeData.length);
  await cards.first().locator("img").evaluate((image) => image.decode());
  await noOverflow();
  await screenshot("listing-desktop.png");

  for (const item of noticeData) {
    await page.goto(`${base}/certification/${item.slug}`);
    await page.getByRole("heading", { name: "Certification Details", exact: true }).waitFor();
    await page.getByRole("heading", { name: item.title, exact: true }).waitFor();
    assert.match(await page.title(), /Anondo Bhubon Certification$/);
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), canonical(`/certification/${item.slug}`));
    const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
    const breadcrumb = schema["@graph"].find((entry) => entry["@type"] === "BreadcrumbList");
    assert.equal(breadcrumb.itemListElement[1].name, "Certification");
    assert.equal(breadcrumb.itemListElement[1].item, canonical("/certification"));
    assert.equal(await page.getByRole("link", { name: "Open Original", exact: true }).count(), item.images.length);
    assert.equal(await page.getByRole("link", { name: "Back to Certification" }).getAttribute("href"), "/certification");
    await noOverflow();
  }
  await screenshot("details-desktop.png");
  await page.setViewportSize({ width: 390, height: 844 });
  await noOverflow();
  await screenshot("details-mobile.png");
  await page.getByRole("link", { name: "Back to Certification" }).click();
  await page.getByRole("heading", { name: "Certification", exact: true }).waitFor();
  await noOverflow();
  await screenshot("listing-mobile.png");
  await page.getByRole("button", { name: "Open navigation menu", exact: true }).click();
  await page.getByRole("navigation", { name: "Mobile navigation", exact: true }).getByRole("link", { name: /Certification/ }).click();
  await page.getByRole("button", { name: "Open navigation menu", exact: true }).waitFor();
  assert.deepEqual(errors, [], "No browser runtime errors");
  console.log("PASS: certification routes, legacy redirects, original documents, navigation, details, canonical URLs, breadcrumbs and desktop/mobile layouts.");
} finally {
  await browser.close();
}
