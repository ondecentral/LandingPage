import { Button } from "components";
import {
  WebArea,
  TextArea,
  ButtonWrapper,
  Container,
  DexArea,
  DexTextArea,
} from "./styled";
import LuciaSDK from "luciasdk-t3";


const IntroArea: React.FC = () => {
  LuciaSDK.init({
    clientId: "",
    baseURL: "http://localhost:3001",
    api_key: "6c0fe4f1-aad91b16-4089b2f8-fe574215-b7d78d12-b01a1db8-4b0ca8be-a1e84b93",
  });
  return (
    <Container>
      <WebArea>
        <TextArea>
          <div>
            <h1>Web3 Credit Access</h1>
            <h2>Powered by AI</h2>
          </div>
          <p>
            Empowering Dreams.
            <br /> Redefining Credit.
          </p>
          <ButtonWrapper>
            <a
              href="https://app.fractal.id/authorize?client_id=Bx2JQIYq_IwZ8QzlT89n8-VonOKgMKL9ekqgwWGXj2Q&redirect_uri=https%3A%2F%2Fondecentral.com%2F&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
              target="__blank"
            >
              <Button height="76px" onClick={LuciaSDK.buttonClick("Early access")}>Get Early Access</Button>
            </a>
          </ButtonWrapper>
        </TextArea>
        <div className="intro-image">
          <img src="/images/homeImage1.png" alt="img" />
        </div>
      </WebArea>
      <DexArea>
        <div className="intro-image">
          <img src="/images/homeImage2.png" alt="img" />
        </div>
        <DexTextArea>
          <h1>All-In-One Multichain DEX</h1>
          <p>Your Gateway to Trading, Earning & Ownership</p>
        </DexTextArea>
      </DexArea>
    </Container>
  );
};

export default IntroArea;
