import styled from "styled-components";
interface CardType {
  year: string;
  stage: string;
  contents: string[];
}
const RoadmapCard: React.FC<CardType> = ({ year, stage, contents }) => {
  return (
    <Container>
      <div className="roadmap-stage">
        <div className="roadmap-year">{year}</div>
        <div className="roadmap-q">{stage}</div>
      </div>
      <div className="roadmap-content">
        {contents.map((_content, index) => (
          <div key={index}>•{_content}</div>
        ))}
      </div>
    </Container>
  );
};

export default RoadmapCard;

const Container = styled.div`
  max-width: 416px;
  width: 100%;
  height: 212px;
  border-radius: 30px;
  padding-block: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  font-size: 18px;
  background: #f7f3f6;
  box-shadow: 0px 4px 4px 0px #0000001a;
  .roadmap-stage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .roadmap-year {
    font-size: 33px;
  }
  .roadmap-q {
    font-size: 58px;
    color: ${({ theme }) => theme.colors.secondaryText};
  }
  .roadmap-content {
  }
`;
