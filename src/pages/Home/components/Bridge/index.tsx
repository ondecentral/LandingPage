import { Container, GridContainer } from "./styled";

const BridgeCredit: React.FC = () => {
  return (
    <Container>
      <h1>
        Bridging Credit with <span className="gradient">Innovation</span>
      </h1>
      <h3>Transforming the Collateral Landscape with User-Centric Insights</h3>
      <GridContainer>
        <div className="gradient-background dfr">
          <h2>
            Bridging Data, <br />
            Building Trust
          </h2>
          <p>
            Integrating on-chain and off-chain data for comprehensive credit
            assessment.
          </p>
        </div>
        <div className="gradient-background fr">
          <img src="/images/homeImage3.png" className="f-img" alt="img" />
        </div>
        <div className="gradient-background fr">
          <img src="/images/homeImage4.png" className="s-img" alt="img" />
        </div>
        <div className="gradient-background fr">
          <h2>
            Next-Gen KYC <br /> with Biometrics
          </h2>
          <p>
            Using facial recognition and liveness detection for enhanced,
            compliant identify verification
          </p>
        </div>
        <div className="gradient-background fr">
          <h2>
            AI-Driven <br /> User Insights
          </h2>
          <p>
            Examining data from various social platforms to create a
            comprehensive profile of user activity
          </p>
        </div>
      </GridContainer>
    </Container>
  );
};

export default BridgeCredit;
