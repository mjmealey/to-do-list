import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  const link: string = "http://localhost:5173/";
  await page.goto(link);
  await page.locator("#addTask").click();
});

test("append taskBlock to toDos", async ({page}) => {
    const taskBlock = "#taskBlock"
     page.locator(taskBlock)
})