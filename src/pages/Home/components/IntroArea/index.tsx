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
    baseURL: "https://staging.api.clickinsights.xyz/fk",
    api_key: "a9a1a82d-38847aeb-88e4cf8a-764f7cad-b5646f40-f03315cd-a1d25341-4aec202b",
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
