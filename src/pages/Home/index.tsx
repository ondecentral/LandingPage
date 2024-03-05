import IntroArea from "./components/IntroArea";
import BridgeCredit from "./components/Bridge";
import AccuracyIntegrity from "./components/Accuracy";
import PlatformFeature from "./components/Platform";
import ArrowIcon from "components/ArrowIcon";
import RoadmapFeature from "./components/Roadmap";
import PastEvents from "./components/PastEvents";
import { GlobalContainer } from "style/global";
import { Container } from "./styled";
const Home: React.FC = () => {
  return (
    <GlobalContainer>
      <IntroArea />
      <Container>
        <ArrowIcon height="76px" />
        <div className="content">
          <h1>
            Pioneering <span style={{ color: "#E99B4D" }}>Innovations</span> in
            Decentralized Finance
          </h1>
          <p>
            Lucia Protocol is a revolutionalry lending and borrowing platform
            that empowers individuals and startup enterprise to obtain credit
            quickly and easily.
          </p>
        </div>
      </Container>
      <BridgeCredit />
      <AccuracyIntegrity />
      <PlatformFeature />
      <RoadmapFeature />
      <PastEvents />
    </GlobalContainer>
  );
};

export default Home;
