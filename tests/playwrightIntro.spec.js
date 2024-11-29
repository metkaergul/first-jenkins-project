// const {test}= require('@playwright/test')  -- this is old way of importing and this require keyword belongs only to playwright

import { test} from '@playwright/test'; // this is the new way of importing and the other programming lanuguages use same
//we imported the test function from playwright/test module

test('Simple playwright automation test 1 @google', async ({page}) => {
  await page.goto("https://www.google.com");
  await page.waitForTimeout(3000);

  let searchbox = page.locator("//textarea[@class='gLFyf' and @id='APjFqb']");

  await searchbox.fill("PlaywrightAutomation");

  await searchbox.press("Enter")



} );

test("Simple playwright automation test 2", async ({ page }) => {
  await page.goto("https://www.cydeo.com");
});



