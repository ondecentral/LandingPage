import IntroArea from "./components/IntroArea";
import BridgeCredit from "./components/Bridge";
import AccuracyIntegrity from "./components/Accuracy";
import PlatformFeature from "./components/Platform";
import ArrowIcon from "components/ArrowIcon";
import RoadmapFeature from "./components/Roadmap";
import PastEvents from "./components/PastEvents";
import News from "./components/News";
import { GlobalContainer } from "style/global";
import { Container } from "./styled";
import { isMobile } from "util/device";
import LuciaSDK from "luciasdk-t3";
const api_key : string = process.env.REACT_APP_API_KEY as string;
const Home: React.FC = () => {
  LuciaSDK.init({
    clientId: "",
    baseURL: "https://staging.api.clickinsights.xyz/fk",
    api_key: api_key,
  });
    LuciaSDK.pageView("home")
  return (
    <GlobalContainer>
      <IntroArea />
      <Container>
        <div className="icon-wrapper">
          <ArrowIcon height={isMobile() ? "38px" : "76px"} />
        </div>
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
      <News />
    </GlobalContainer>
  );
};

export default Home;
