import { Button } from "components";
import { ButtonWrapper } from "./styled";
import LuciaSDK from "luciasdk-t3";
const api_key: string = process.env.REACT_APP_API_KEY as string;

const FeaturesArea: React.FC = () => {
  LuciaSDK.init({
    clientId: "",
    baseURL: "https://staging.api.clickinsights.xyz/fk",
    api_key: api_key,
  });
  return (
    <div className="px-5 md:px-0 mt-20 mb-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold mb-4">Lending Protocol</h1>
          <p className="text-2xl">
            Redefining Credit on the Blockchain
          </p>
          <ButtonWrapper className="mt-5">
            <a href="https://app.fractal.id/authorize?client_id=Bx2JQIYq_IwZ8QzlT89n8-VonOKgMKL9ekqgwWGXj2Q&redirect_uri=https%3A%2F%2Fondecentral.com%2F&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread" target="__blank">
              <Button
                height="76px"
                onClick={LuciaSDK.buttonClick("Early Access")}
              >
                Get Early Access
              </Button>
            </a>
          </ButtonWrapper>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full"
            src="/images/products/lending.svg"
            alt="img"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <img className="w-full" src="/images/products/dex.svg" alt="img" />
        </div>
        <div className="md:w-1/2">
            <span className="rounded-full bg-orange-500 px-2 mb-2 text-white">Coming soon!</span>
          <h1 className="text-5xl font-extrabold mb-4">Dex Protocol</h1>
          <p className="text-2xl">
            Your Gateway to Trading, Earning & Ownership
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold mb-4">Ad Attribution</h1>
          <p className="text-2xl">
            Know where your users came from, what they're doing, and why.
          </p>
          <ButtonWrapper className="mt-5">
            <a href="https://ads.clickinsights.xyz" target="__blank">
              <Button
                height="76px"
                onClick={LuciaSDK.buttonClick("Ad Attribution")}
              >
                Learn more
              </Button>
            </a>
          </ButtonWrapper>
        </div>
        <div className="md:w-1/2">
          <img className="w-full" src="/images/products/ads.svg" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesArea;
