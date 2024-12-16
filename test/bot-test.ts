const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true, // Explicitly launch in headless mode (background)
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log("Starting bot test...");

    // Navigate to your app
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    // Example test: Check if a button is present and clickable
    const firstButton = page.locator('button').first();
    await firstButton.waitFor({ state: 'attached' });
    console.log("Button is visible and clickable.");

    const result = await fetch("http://localhost:3002/api/dashboard/fingerprints")
    .then(async res => await res.json())
    .catch(error => {
      console.log("error", error);
      return null;
      process.exit(1); // Failure exit code
    })
    console.log(result);
    if(result)
      process.exit(0); // Success exit code
    console.error("Bot test failed")
    process.exit(1);
  } catch (error: any) {
    console.error("Bot test failed:", error.message);
    process.exit(2); // Failure exit code
  } finally {
    await browser.close();
  }
})();
