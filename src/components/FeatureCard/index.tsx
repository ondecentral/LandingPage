import styled from "styled-components";
interface CardType {
  img: string;
  title1: string;
  title2: string;
  content: string;
}
const FeatureCard: React.FC<CardType> = ({ img, title1, title2, content }) => {
  return (
    <Container>
      <img className="card-image" src={img} alt="img" />
      <div className="card-title">{title1}</div>
      <div className="card-title">{title2}</div>
      <p className="card-content">{content}</p>
    </Container>
  );
};

export default FeatureCard;

const Container = styled.div`
  max-width: 416px;
  background: #fffcfa;
  border-radius: 40px;
  box-shadow: 0px 20px 30px 0px #00000012;
  position: relative;
  padding: 200px 30px 30px 30px;
  height: 444px;
  .card-image {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .card-title {
    font-size: 33px;
    font-weight: 500;
  }
  .card-content {
    font-size: 19px;
    font-weight: 400;
    padding-top: 10px;
  }
`;
