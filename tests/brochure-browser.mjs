import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const base = process.env.BROCHURE_TEST_URL || "http://localhost:3000";
const output = new URL("../.next/brochure-qa/", import.meta.url);
const pdfPath = "/downloads/anondo-bhubon-brochure.pdf";
const filename = "Anondo Bhubon Brochure.pdf";
const expected = await readFile(
  new URL("../public" + pdfPath, import.meta.url),
);
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
await mkdir(output, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  ...(process.env.BROCHURE_BROWSER_CHANNEL
    ? { channel: process.env.BROCHURE_BROWSER_CHANNEL }
    : {}),
});

try {
  for (const [name, viewport] of [
    ["desktop", { width: 1440, height: 1000 }],
    ["mobile", { width: 390, height: 844 }],
  ]) {
    const context = await browser.newContext({ viewport, acceptDownloads: true });
    try {
      const downloads = [];
      context.on("page", (tab) => {
        tab.on("download", (download) => downloads.push(download));
      });
      const page = await context.newPage();
      const response = await context.request.get(`${base}${pdfPath}`);
      assert.equal(response.status(), 200);
      assert.match(response.headers()["content-type"], /application\/pdf/);
      assert.equal(
        response.headers()["content-disposition"],
        `inline; filename="${filename}"`,
      );
      assert.equal(response.headers()["x-content-type-options"], "nosniff");
      assert.equal(hash(await response.body()), hash(expected));
      assert.equal(expected.subarray(0, 5).toString(), "%PDF-");

      await page.goto(base, { waitUntil: "domcontentloaded" });
      const hero = page.locator("section#top");
      const link = hero.getByRole("link", { name: "Download Brochure", exact: true });
      await link.waitFor({ state: "visible" });
      assert.equal(await link.getAttribute("href"), pdfPath);
      assert.equal(await link.getAttribute("download"), null);
      assert.equal(await link.getAttribute("target"), "_blank");
      assert.equal(await link.getAttribute("rel"), "noopener noreferrer");
      assert.equal(await page.getByRole("link", { name: "Download Leaflet" }).count(), 0);
      await hero.locator("img").evaluate((img) => img.decode());
      await page.evaluate(() => document.fonts.ready);
      await link.scrollIntoViewIfNeeded();
      await page.screenshot({
        path: fileURLToPath(new URL(`${name}.png`, output)),
      });
      const bounds = await link.boundingBox();
      assert.ok(bounds && bounds.x >= 0 && bounds.x + bounds.width <= viewport.width);

      const before = page.url();
      const opened = page.waitForEvent("popup");
      await link.click();
      const preview = await opened;
      await preview.waitForURL(`${base}${pdfPath}`, { waitUntil: "load" });
      assert.equal(page.url(), before, "Preview must not navigate away from the homepage");
      assert.equal(context.pages().length, 2, "Brochure must open in a new tab");
      assert.equal(downloads.length, 0, "Opening the brochure must not force a download");
      assert.equal(await preview.evaluate(() => window.opener), null);
      console.log(`${name}: inline PDF headers, content and new-tab preview verified`);
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}
