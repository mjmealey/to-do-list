import { test, expect, Locator } from "@playwright/test";

const addTask: string = "#addTask";

test.beforeEach(async ({ page }) => {
  const link: string = "http://localhost:5173/";
  await page.goto(link);
  await page.locator("#addTask").click()
});

test("remove addTasks", async ({ page }) => {
  const locateAddTasks: Locator = page.locator(addTask);
  expect(
    await locateAddTasks.evaluate((task) => (task.style.display = "none"))
  );
});

test("remove noTasks", async ({ page }) => {
  const noTasks: string = "#noTasks";
  const locateNoTasks: Locator = page.locator(noTasks);
  expect(locateNoTasks.evaluate((task) => (task.style.display = "none")));
});
