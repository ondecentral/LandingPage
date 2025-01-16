const { chromium } = require('playwright');
const dotenv = require('dotenv');
dotenv.config();

const runBotTests = async () => {
  const apiUrl: string = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;
  const greenLight: string = "\x1b[32m✔\x1b[0m"; // Green checkmark
  const redLight: string = "\x1b[31m✘\x1b[0m"; // Red cross
  let allTestsPassed: boolean = true;
  const token = process.env.TOKEN;
  const bots = 5;

  const logResult = (testName: string, passed: boolean): void => {
    console.log(`${passed ? greenLight : redLight} ${testName}`);
    if (!passed) allTestsPassed = false;
  };
  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const browser = await chromium.launch({ headless: true });

  try {
    console.log("Running bot tests...");
    // Step 1: Bot Testing
    const runBotTests = async (token: string): Promise<any> => {
      for (let i = 1; i <= bots; i++) {
        const context = await browser.newContext({
          userAgent: `Bot-${i}`,
        });
        const page = await context.newPage();
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
        const firstButton = page.locator('button').first();
        await firstButton.waitFor({ state: 'attached' });
        console.log(`Bot-${i} visited.`);
      }

      const fingerprints = await fetch(`${apiUrl}/dashboard/fingerprints`, {
        headers: { authorization: `Bearer ${token}` },
      });
      const views = await fetch(`${apiUrl}/dashboard/views/1M`, {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log("views", views.status);
      await browser.close();
      // return {}
      return {
        fingerprints: fingerprints.status !== 200 ? null : await fingerprints.json(),
        views: views.status !== 200 ? null : await views.json(),
      }
    };

    const {fingerprints, views} = await runBotTests(token as string);
    console.log(JSON.stringify(fingerprints));
    console.log(JSON.stringify(views));
    if(fingerprints === null) {
      throw new Error("Failed to fetch fingerprints data");
    }
    // if(views === null) {
    //   throw new Error("Failed to fetch views data");
    // }
    logResult("Test: fingerprints length validation, fingerprints: " + fingerprints.length, fingerprints.length >= bots);
    // logResult("Test: views length validation, views: " + views.length, views.length >= bots);
    if(fingerprints.length < bots) {
      process.exit(1);
    }
    // if(views.length < bots) {
    //   process.exit(1);
    // }

    // Step : Validate Fingerprints
    const validateFingerprints = (fingerprints: any[]): boolean => {
      return fingerprints.every((el) => el.lucia_user_id === fingerprints[0].lucia_user_id);
    };

    const fingerprintValidationPassed: boolean = validateFingerprints(fingerprints);
    // logResult("Test: fingerprint consistency test", fingerprintValidationPassed);
    // if (!fingerprintValidationPassed) throw new Error("Fingerprints are inconsistent");

    // All tests passed
    if (allTestsPassed) {
      console.log(`${greenLight} All tests passed!`);
    }
    process.exit(0);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`${redLight} Test suite failed: ${errorMessage}`);
    process.exit(1);
  }
};

runBotTests();