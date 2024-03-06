import { Button } from "components";
import {
  WebArea,
  TextArea,
  ButtonWrapper,
  Container,
  DexArea,
  DexTextArea,
} from "./styled";

const IntroArea: React.FC = () => {
  return (
    <Container>
      <WebArea>
        <TextArea>
          <h1>Web3 Credit Access</h1>
          <h2>Powered by AI</h2>
          <p>
            Empowering Dreams.
            <br /> Redefining Credit.
          </p>
          <ButtonWrapper>
            <Button height="76px">Get Early Access</Button>
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
