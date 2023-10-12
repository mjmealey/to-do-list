import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  const title = /To-Do-List/;
  expect(page).toHaveTitle(title);
});
