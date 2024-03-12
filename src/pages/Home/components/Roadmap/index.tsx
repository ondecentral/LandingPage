import RoadmapCard from "components/RoadmapCard";
import { Container } from "./styled";

const roadmaps = [
  {
    year: "2023",
    stage: "Q4",
    contents: [
      "Seed Round",
      "Flash Loan & LP Dev",
      "Lending & Borrowing",
      "Team Expansion",
      "CTO, CCO, CLA",
      "Partnership Expansion",
    ],
  },
  {
    year: "2024",
    stage: "Q1",
    contents: ["GTM", "Alpha V1 & V2", "Reg A Tier II", "Public Sale"],
  },
  {
    year: "2024",
    stage: "Q2",
    contents: [
      "Audits & Security Check",
      "Token Treasury",
      "Integration",
      "ETH & Polygon Testnet",
      "Expand Blockchain",
      "Partnerships",
    ],
  },
  {
    year: "2024",
    stage: "Q3",
    contents: [
      "Visa, MasterCard Partnership",
      "Token Treasury Integration",
      "ETH & Polygon Mainnet",
      "Governance Launch",
    ],
  },
  {
    year: "2024",
    stage: "Q4",
    contents: [
      "Virtual Credit Card Release",
      "Payment Provider Partnerships",
      "Entry to 1st 3 Markets",
    ],
  },
  {
    year: "2025",
    stage: "Q1",
    contents: [
      "Lucia V3",
      "Accelerator",
      "Partnerships",
      "Entry to next 3 Markets",
    ],
  },
  {
    year: "2025",
    stage: "Q2",
    contents: ["Series A", "Next 3 Markets Entry"],
  },
  {
    year: "2025",
    stage: "Q3",
    contents: ["Global Expansion"],
  },
];

const RoadmapFeature: React.FC = () => {
  return (
    <Container>
      <h1 className="gradient">Roadmap</h1>
      <div className="grid-container">
        {roadmaps.map((_roadmap, index) => (
          <div className="grid-item" key={index}>
            <RoadmapCard {..._roadmap} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default RoadmapFeature;
