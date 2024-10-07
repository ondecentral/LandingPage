import { Container } from "./styled";
import FeatureCard from "components/FeatureCard";
const PlatformFeature: React.FC = () => {
  return (
    <Container>
      <h1 className="gradient">Platform Features</h1>
      <h2>An Insured Credit and Ad Attribution Landscape with Enhanced Privacy & Security</h2>
      <div className="card-wrapper">
        <FeatureCard
          img="/images/illustrations/illustration_1.svg"
          title1="Adaptive"
          title2="Collaterization Ratio"
          content="A fully automated system, designed to dynamically adjust and adapt collateralization ratios based on each user's individual case."
        />
        <FeatureCard
          img="/images/illustrations/illustration_2.svg"
          title1="Atribution Credit"
          title2="Scoring"
          content="Accurately evaluating credit using a multi-dimensional approach, combining both on-chain and onchain data to evaluate borrowers’ creditworthiness accurately"
        />
        <FeatureCard
          img="/images/illustrations/illustration_3.svg"
          title1="Seemless"
          title2="Integration"
          content="Integration with major social media platforms (e.g. Twitter, Discord, Telegram, LinkedIn, and Google) for comprehensive data collection."
        />
        <FeatureCard
          img="/images/illustrations/illustration_4.svg"
          title1="Real-time"
          title2="Metrics"
          content="Comprehensive suite of insights derived from SDK, designed to enhance your understanding of user engagement and conversion metrics."
        />
        <FeatureCard
          img="/images/illustrations/illustration_5.svg"
          title1="AI-Driven"
          title2="Insights"
          content="Leverage AI for deeper understanding and optimization of ad campaigns."
        />
        <FeatureCard
          img="/images/illustrations/illustration_1.svg"
          title1="Token"
          title2="Governance"
          content="Staking pool grants LCI token holders voting rights to shape governance, endorse startups, and award them reputation points for easier ﬁnancial access."
        />
        <FeatureCard
          img="/images/illustrations/illustration_2.svg"
          title1="Enhanced Privacy"
          title2="with ZK Proofs"
          content="Zero-Knowledge Proofs are utilized to accurately assess borrowers' creditworthiness while keeping their ﬁnancial details conﬁdential."
        />
        <FeatureCard
          img="/images/illustrations/illustration_3.svg"
          title1="Lender Reward"
          title2="System"
          content="A reward system tailored for lenders who contribute to sustaining the stability and resilience of the protocol."
        />
      </div>
    </Container>
  );
};

export default PlatformFeature;
