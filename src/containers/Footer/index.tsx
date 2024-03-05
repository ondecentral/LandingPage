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

const Footer: React.FC = () => {
  return (
    <Container>
      <DiscoverContainer>
        <h1>
          Discover What Lucia <br /> Protocol Can Offer You
        </h1>
        <h2>Unlock the Future of Finance Today</h2>
        <ButtonWrapper>
          <Button height="76px" reverted>
            Get Early Access
          </Button>
        </ButtonWrapper>
        <p>Available on iOS & Android soon</p>
      </DiscoverContainer>
      <FooterContainer>
        <LogoLetter />
        <LinkWrapper>
          <h1>Follow</h1>
          <div className="icon-wrapper">
            <a href="https://linkedin.com" target="__blank">
              <img src="/images/linkedin.png" alt="img" />
            </a>
            <a href="https://linkedin.com" target="__blank">
              <img src="/images/telegram.png" alt="img" />
            </a>
            <a href="https://linkedin.com" target="__blank">
              <img src="/images/twitter.png" alt="img" />
            </a>
            <a href="https://linkedin.com" target="__blank">
              <img src="/images/discord.png" alt="img" />
            </a>
          </div>
        </LinkWrapper>
        <LinkWrapper>
          <h1>Quick Links</h1>
          <Link to="/chatus">
            <p>Contact Us</p>
          </Link>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <a href="https://docs.luciaprotocol.com" target="__blank">
            <p>Docs</p>
          </a>
        </LinkWrapper>
        <LinkWrapper>
          <h1>Follow</h1>
          <p>Sign up to get the latest news and updates</p>
          <div className="foot_link">
            <Link to="/chatus">
              <Button height="60px">E-Mail</Button>
            </Link>
          </div>
        </LinkWrapper>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
