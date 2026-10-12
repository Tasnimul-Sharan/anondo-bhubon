import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require(
  process.env.PORTAL_PLAYWRIGHT_MODULE || "playwright",
);
const base = process.env.PORTAL_TEST_URL || "http://localhost:3001";
const output = new URL("../.next/portal-qa/", import.meta.url);
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  ...(process.env.PORTAL_BROWSER_CHANNEL
    ? { channel: process.env.PORTAL_BROWSER_CHANNEL }
    : {}),
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
async function screenshot(name) {
  await page.screenshot({
    path: fileURLToPath(new URL(name, output)),
    fullPage: true,
  });
}
async function noOverflow() {
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
    "No page-level horizontal overflow",
  );
}
try {
  await page.goto(`${base}/admin?preview=1`);
  await page.getByRole("heading", { name: "Township overview" }).waitFor();
  await page
    .getByRole("heading", { name: "Property A-012", exact: true })
    .waitFor();
  await page
    .locator("article img")
    .first()
    .evaluate((img) => img.decode());
  await noOverflow();
  await screenshot("admin-desktop.png");

  await page.getByRole("button", { name: "Add client", exact: true }).click();
  await page
    .getByLabel("Full name", { exact: true })
    .fill("Preview Test Owner");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("test-owner@example.com");
  await page
    .getByLabel("Phone number", { exact: true })
    .fill("+880 1700 111222");
  await page.getByRole("button", { name: "Save changes", exact: true }).click();
  await page.getByRole("dialog").waitFor({ state: "hidden" });
  await page
    .getByRole("navigation", { name: "Portal navigation" })
    .getByRole("button", { name: /Clients/ })
    .click();
  await page
    .getByRole("button", { name: /Preview Test Owner/ })
    .first()
    .waitFor();
  await page.getByText("Client ID: AB-000004", { exact: true }).waitFor();
  await page.getByRole("button", { name: "Add client", exact: true }).click();
  await page.getByLabel("Client ID (optional)").fill("ab-custom-42");
  await page.getByLabel("Full name", { exact: true }).fill("Manual ID Owner");
  await page.getByLabel("Email address", { exact: true }).fill("manual-id@example.com");
  await page.getByRole("button", { name: "Save changes", exact: true }).click();
  await page.getByRole("dialog").waitFor({ state: "hidden" });
  await page.getByText("Client ID: AB-CUSTOM-42", { exact: true }).waitFor();
  await page.getByRole("button", { name: "Add client", exact: true }).click();
  await page.getByLabel("Client ID (optional)").fill("ab-custom-42");
  await page.getByLabel("Full name", { exact: true }).fill("Duplicate ID Owner");
  await page.getByLabel("Email address", { exact: true }).fill("duplicate-id@example.com");
  await page.getByRole("button", { name: "Save changes", exact: true }).click();
  await page.getByRole("alert").filter({ hasText: "This client ID already exists" }).waitFor();
  await page.getByRole("button", { name: "Cancel", exact: true }).click();
  await page.getByRole("searchbox").fill("AB-000004");
  await page.waitForFunction(
    () => document.querySelectorAll("tbody tr").length === 1,
  );
  assert.equal(
    await page
      .getByRole("searchbox")
      .evaluate((el) => document.activeElement === el),
    true,
    "Search retains keyboard focus",
  );
  await screenshot("clients-desktop.png");
  await page
    .getByRole("button", {
      name: "View Preview Test Owner's properties",
      exact: true,
    })
    .click();
  await page.getByRole("button", { name: "Add property", exact: true }).click();
  await page.getByLabel("Property number", { exact: true }).fill("TEST-101");
  await page
    .getByLabel("Property type", { exact: true })
    .selectOption("Luxury Villa");
  await page.getByLabel("Block / avenue", { exact: true }).fill("Test Avenue");
  await page.getByLabel("Plot size", { exact: true }).fill("10 Katha");
  await page
    .getByLabel("Construction stage", { exact: true })
    .selectOption("Structure");
  await page.getByLabel("Progress (%)", { exact: true }).fill("61");
  await page.getByRole("button", { name: "Save changes", exact: true }).click();
  await page
    .getByRole("heading", { name: "Property TEST-101", exact: true })
    .waitFor();
  await page
    .getByRole("button", { name: "View progress", exact: true })
    .click();
  await page.getByRole("button", { name: "New update", exact: true }).click();
  await page.getByLabel("Update title").fill("Test inspection report");
  await page
    .getByLabel("Progress report")
    .fill("The site inspection was completed. This is a preview-only report.");
  await page.getByRole("button", { name: "Save draft", exact: true }).click();
  await page.getByRole("heading", { name: "Test inspection report" }).waitFor();
  await page
    .getByRole("button", { name: "Publish update", exact: true })
    .click();
  await page.getByText("Published", { exact: true }).waitFor();
  await page
    .getByRole("button", { name: "Move to draft", exact: true })
    .click();
  await page.getByText("Draft", { exact: true }).waitFor();
  await screenshot("villa-progress-desktop.png");

  await page.goto(`${base}/portal?preview=1`);
  await page
    .getByRole("heading", { name: "Property A-012", exact: true })
    .waitFor();
  assert.equal(
    await page
      .getByRole("heading", { name: "Property B-028", exact: true })
      .count(),
    0,
  );
  assert.equal(
    await page.getByRole("button", { name: "Add client", exact: true }).count(),
    0,
  );
  await page
    .getByRole("button", {
      name: "View Architectural reference render",
      exact: true,
    })
    .click();
  await page.getByRole("dialog").waitFor();
  await page
    .getByRole("dialog")
    .locator("img")
    .evaluate((img) => img.decode());
  await screenshot("owner-media-desktop.png");
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "hidden" });
  await page
    .getByRole("button", { name: "View progress", exact: true })
    .click();
  await page
    .getByRole("heading", { name: "Construction milestones" })
    .waitFor();
  await noOverflow();
  await screenshot("owner-desktop.png");

  await page.setViewportSize({ width: 390, height: 844 });
  await noOverflow();
  await screenshot("owner-mobile.png");
  await page.getByRole("button", { name: "My profile", exact: true }).click();
  await page.getByText("AB-000001", { exact: true }).waitFor();
  await page
    .getByRole("heading", { name: "Arif Rahman", exact: true })
    .waitFor();
  await noOverflow();

  await page.goto(`${base}/admin?preview=1`);
  await page
    .getByRole("heading", { name: "Property A-012", exact: true })
    .waitFor();
  await noOverflow();
  await screenshot("admin-mobile.png");
  await page.getByRole("button", { name: "Add client", exact: true }).click();
  await page.getByRole("dialog").waitFor();
  await noOverflow();
  await screenshot("client-form-mobile.png");
  await page.keyboard.press("Escape");

  const unauthorized = await page.request.get(`${base}/api/portal/clients`);
  assert.equal(unauthorized.status(), 401);
  assert.match(unauthorized.headers()["cache-control"], /no-store/);
  const unauthorizedWrite = await page.request.post(
    `${base}/api/portal/upload`,
    { data: {} },
  );
  assert.equal(unauthorizedWrite.status(), 401);
  const loginResponse = await page.goto(`${base}/login`);
  assert.match(loginResponse.headers()["x-robots-tag"], /noindex/);
  await page
    .getByRole("heading", { name: "Welcome to Anondo Bhubon." })
    .waitFor();
  await noOverflow();
  await screenshot("login-mobile.png");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.waitForFunction(() => {
    const img = document.querySelector("main img");
    return img?.complete && img.naturalWidth >= 720;
  });
  await screenshot("login-desktop.png");
  assert.deepEqual(errors, [], "No browser runtime exceptions");
  console.log(
    "PASS: admin creation, client search/focus, property assignment, draft/publish, owner isolation, image viewer/Escape, desktop/mobile layout, login headers and unauthorized API requests.",
  );
} finally {
  await browser.close();
}
