import { test, expect } from "@playwright/test";

test("Sign Up Flow", async ({ page }) => {
  const email = "test@test.com";
  const password = "password";

  await test.step("Open home → Sign in → Sign up", async () => {
    await page.goto("/");
    await page.getByRole("link", { name: "Sign in" }).click();
    await page.getByRole("link", { name: "Sign up" }).click();
    await expect(page).toHaveURL("/sign-up");
  });

  await test.step("Fill valid details, submit, and land on home", async () => {
    await page.getByLabel("name").fill("Test User");

    // Debug: how many email inputs are in the DOM?
    const count = await page.locator('input[type="email"]').count();
    console.log("email inputs count:", count);

    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Password").fill(password);
  });
});

// Workaround for Next.js 16 + React Activity:
// cached/hidden routes keep the previous page's inputs in the DOM,
// so getByLabel('Email'/'Password') can match both sign-in and sign-up fields
// and trigger a Playwright strict mode violation ("resolved to 2 elements").
// Limit the locator to the visible field.
// chain .filter({ visible: true })  to getByLabel()
