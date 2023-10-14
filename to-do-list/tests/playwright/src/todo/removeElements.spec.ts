import { test, expect, Locator } from "@playwright/test";

const addTask: string = "#addTask";

test.beforeEach(async ({ page }) => {
  const link: string = "http://localhost:5173/";
  await page.goto(link);
  await page.locator("#addTask").click();
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
  expect(await locateNoTasks.evaluate((task) => (task.style.display = "none")));
});

test("add taskBlock to toDos main element and append every element for taskBlock", async ({ page }) => {
  const toDos = "#toDos"
  await page.locator(toDos).waitFor()
  const taskBlock = "#taskBlock"
  await page.locator(taskBlock).waitFor()
  const nameLabel = "#nameLabel"
  const nameLabelText = "Name"
  page.locator(nameLabel).getByText(nameLabelText)
});
