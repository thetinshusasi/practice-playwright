import { test, expect } from "@playwright/test";

test.describe("First test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });

  test("Locator Synrax rules", async ({ page }) => {
    // by tag name
    page.locator("input");
    // by id
    page.locator("#inputEmail1");
    // by class name
    page.locator(".form-group");
    // by attribute
    page.locator('[type="email"]');
    // by text
    page.locator("text=Email");

    // by class value full
    page.locator(
      "[class='input-full-width size-medium status-basic shape-rectangle nb-transition']"
    );

    // by combination of different selector
    page.locator("input[type='email'].form-control[fullWidth]");

    // Xpath is not recommended

    // by xPath
    page.locator("//input[@type='email']");

    // by xpath id
    page.locator("//input[@id='inputEmail1']");

    // by xpath class
    page.locator(
      "//input[@class='input-full-width size-medium status-basic shape-rectangle nb-transition']"
    );

    // by xpath combination of different selector
    page.locator("//input[@type='email'].form-control[@fullWidth]");

    // by xpath link text
    page.locator("//a[@href='/forms/form-layouts']");

    // by link text
  });
});
