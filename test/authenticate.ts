const firstName: string = "tester";
const lastName: string = "tester";
const email: string = "tester@tester.com";
const password: string = "12345678";

const apiUrl: string = "http://localhost:3002/api";

const greenLight: string = "\x1b[32m✔\x1b[0m"; // Green checkmark
const redLight: string = "\x1b[31m✘\x1b[0m"; // Red cross
const logResult = (testName: string, passed: boolean): void => {
    console.log(`${passed ? greenLight : redLight} ${testName}`);
};

const authenticate = async () => {
  try {
    // console.log("Running authenticate...");
    // Signup
    const signupResponse = await fetch(`${apiUrl}/oauth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    // console.log("signupResponse", JSON.stringify(signupResponse));
    if (signupResponse.status !== 201) {
      console.error(`${redLight} Signup failed`, JSON.stringify(await signupResponse.json()));
      process.exit(1);
    }
    // console.log(`${greenLight} Signup success`);

    // Login
    const loginResponse = await fetch(`${apiUrl}/oauth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (loginResponse.status !== 200) {
      console.error(`${redLight} Login failed`);
      process.exit(1);
    }
    const loginData = await loginResponse.json();
    const token = loginData?.result?.token;
    // console.log(`${greenLight} Login success`);
    if (!token) {
      console.error(`${redLight} Failed to retrieve token`);
      process.exit(1);
    }
    console.log(token);
    return token;
  } catch (error: any) {
    console.error(`${redLight} Error during authentication:`, error.message);
    process.exit(1);
  }
};

authenticate();
