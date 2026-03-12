// @ts-check
import { test, expect } from '@playwright/test';

test("oragngehrm title",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await expect(page).toHaveTitle("OrangeHRM");
});

  test("oragngehrm login test",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
const username=await page.getByPlaceholder("Username");
await username.fill("Admin");
await page.waitForTimeout(3000);
const password=await page.getByPlaceholder("password");
await password.fill("admin123");
await page.waitForTimeout(3000);
const button= await page.locator(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button").click();
//await button.click();
await expect(page).toHaveURL(/dashboard/);
// await page.waitForTimeout(3000);


});


test('orange hrm add-admin',async ({page})=>{
  page.setDefaultTimeout(40000)

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
const username=await page.getByPlaceholder("Username");
await username.fill("Admin");
const password=await page.getByPlaceholder("password");
await password.fill("admin123");
const button= await page.locator(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button").click();
//await button.click();
await expect(page).toHaveURL(/dashboard/);
const admin=await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a').click();
await page.locator(".oxd-input.oxd-input--active").first().fill("Praveen");
//
  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();

});

test('logout',async function({page}){
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
const username=await page.getByPlaceholder("Username");
await username.fill("Admin");
const password=await page.getByPlaceholder("password");
await password.fill("admin123");
const button= await page.locator(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button").click();
//await button.click();
expect(page).toHaveURL(/dashboard/);
await page.locator(".oxd-userdropdown-img").click();
 await page.waitForTimeout(2000);
 await page.getByText("Logout").click();
await page.waitForTimeout(2000);
await expect(page).toHaveURL(/auth/);
});


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  page.setDefaultTimeout(60000);
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
