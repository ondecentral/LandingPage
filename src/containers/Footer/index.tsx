import { LogoLetter } from "icons";
import { Link } from "react-router-dom";
import {
  Container,
  DiscoverContainer,
  ButtonWrapper,
  FooterContainer,
  LinkWrapper,
} from "./styled";
import { Button } from "components";
import LuciaSDK from "luciasdk-t3";

const Footer: React.FC = () => {
  LuciaSDK.init({
    clientId: "",
    baseURL: "http://localhost:3001",
    api_key: "6c0fe4f1-aad91b16-4089b2f8-fe574215-b7d78d12-b01a1db8-4b0ca8be-a1e84b93",
  });
  return (
    <Container>
      <DiscoverContainer>
        <h1>
          Discover What Lucia <br /> Protocol Can Offer You
        </h1>
        <h2>Unlock the Future of Finance Today</h2>
        <ButtonWrapper>
          <a
            href="https://app.fractal.id/authorize?client_id=Bx2JQIYq_IwZ8QzlT89n8-VonOKgMKL9ekqgwWGXj2Q&redirect_uri=https%3A%2F%2Fondecentral.com%2F&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
            target="__blank"
          >
            <Button height="76px" reverted onClick={LuciaSDK.buttonClick("Get Early access")}>
              Get Early Access
            </Button>
          </a>
        </ButtonWrapper>
        <p>Available on iOS & Android soon</p>
      </DiscoverContainer>
      <FooterContainer>
        <LogoLetter />
        <LinkWrapper>
          <h1>Follow</h1>
          <div className="icon-wrapper">
            <a
              href="https://www.linkedin.com/company/luciaprotocol/"
              target="__blank"
              onClick={()=>LuciaSDK.buttonClick("Linkedin")}
            >
              <img src="/images/linkedin.png" alt="img" />
            </a>
            <a href="https://t.me/+ktxyuIoFAuVhNTMx" target="__blank" onClick={()=>LuciaSDK.buttonClick("Telegram")}>
              <img src="/images/telegram.png" alt="img" />
            </a>
            <a href="https://twitter.com/luciaprotocol" target="__blank" onClick={()=>LuciaSDK.buttonClick("Twitter")}>
              <img src="/images/twitter.png" alt="img" />
            </a>
            <a href="https://discord.gg/ECuzSyshbv" target="__blank" onClick={()=>LuciaSDK.buttonClick("Discord")}>
              <img src="/images/discord.png" alt="img" />
            </a>
          </div>
        </LinkWrapper>
        <LinkWrapper>
          <h1>Quick Links</h1>
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:team@ondecentral.com";
              e.preventDefault();
            }}
          >
            <p>Contact Us</p>
          </Link>
          <Link to="/terms-conditions" onClick={()=>LuciaSDK.buttonClick("Terms and conditions")}>
            <p>Terms & Conditions</p>
          </Link>
          <Link to="/privacy-policy" onClick={()=>LuciaSDK.buttonClick("Privacy policy")}>
            <p>Privacy Policy</p>
          </Link>
          <a href="https://docs.luciaprotocol.com" target="__blank" onClick={()=>LuciaSDK.buttonClick("Footer - Docs")}>
            <p>Docs</p>
          </a>
          <a href="https://medium.com/@lucia-protocol" target="__blank" onClick={()=>LuciaSDK.buttonClick("Footer - Articles")}>
            <p>Articles</p>
          </a>
        </LinkWrapper>
        <LinkWrapper>
          <h1>Follow</h1>
          <p>Sign up to get the latest news and updates</p>
          <div className="foot_link">
            <Link
              to="#"
              onClick={(e) => {
                LuciaSDK.buttonClick("E-Mail")
                window.location.href = "mailto:social@ondecentral.com";
                e.preventDefault();
              }}
            >
              <Button height="60px">E-Mail</Button>
            </Link>
          </div>
        </LinkWrapper>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
