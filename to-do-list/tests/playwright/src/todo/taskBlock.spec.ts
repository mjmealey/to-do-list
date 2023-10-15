import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  const link: string = "http://localhost:5173/";
  await page.goto(link);
  await page.locator("#addTask").click();
  const taskBlock = "#taskBlock";
  page.locator(taskBlock);
});

test("locate name label", async ({ page }) => {
  const nameLabel: string = "#nameLabel"
  page.locator(nameLabel)
});