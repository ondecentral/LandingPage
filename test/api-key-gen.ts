const genApiKey = async () => {
  const apiUrl: string = "http://localhost:3002/api";
  const greenLight: string = "\x1b[32m✔\x1b[0m"; // Green checkmark
  const redLight: string = "\x1b[31m✘\x1b[0m"; // Red cross
  const token = process.env.TOKEN
  const logResult = (testName: string, passed: boolean): void => {
    console.log(`${passed ? greenLight : redLight} ${testName}`);
  };
  try {
    // console.log("Generating api key...");
    // Step 1: Generating api key
    const keyResponse = await (await fetch(`${apiUrl}/key`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
       },
    })).json();

    if (!keyResponse) {
      console.error(`${redLight} Key gen failed`);
      process.exit(1);
    }
    console.log(keyResponse?.key);
    return keyResponse?.key;
    // process.stdout.write(keyResponse?.key);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`${redLight} Test suite failed: ${errorMessage}`);
    process.exit(1);
  }
};

genApiKey();