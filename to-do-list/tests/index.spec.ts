import { test, expect, Locator } from "@playwright/test";

test("has title", async ({page}) => {
    await page.goto("http://localhost:5173/")
    const title = /To-Do-List/
    expect(page).toHaveTitle(title)
})

test("inbox text", async ({page}) => {
    
})