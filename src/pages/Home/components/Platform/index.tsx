import { Container } from "./styled";
import FeatureCard from "components/FeatureCard";
const PlatformFeature: React.FC = () => {
  return (
    <Container>
      <h1 className="gradient">Platform Features</h1>
      <h2>An Insured Credit Landscape with Enhanced Privacy & Security</h2>
      <div className="card-wrapper">
        <FeatureCard
          img="/images/feature1.png"
          title1="Adaptive"
          title2="Collaterization Ratio"
          content="A fully automated system, designed to dynamically adjust and adapt collateralization ratios based on each user's individual case."
        />
        <FeatureCard
          img="/images/feature2.png"
          title1="Atribution Credit"
          title2="Scoring"
          content="Accurately evaluating credit using a multi-dimensional approach, combining both on-chain and onchain data to evaluate borrowers’ creditworthiness accurately"
        />
        <FeatureCard
          img="/images/feature3.png"
          title1="Token"
          title2="Governance"
          content="Staking pool grants LCI token holders voting rights to shape governance, endorse startups, and award them reputation points for easier ﬁnancial access."
        />
        <FeatureCard
          img="/images/feature4.png"
          title1="Enhanced Privacy"
          title2="with ZK Proofs"
          content="Zero-Knowledge Proofs are utilized to accurately assess borrowers' creditworthiness while keeping their ﬁnancial details conﬁdential."
        />
        <FeatureCard
          img="/images/feature5.png"
          title1="Lender Reward"
          title2="System"
          content="A reward system tailored for lenders who contribute to sustaining the stability and resilience of the protocol."
        />
      </div>
    </Container>
  );
};

export default PlatformFeature;
