import { Linkedin } from "icons";
import styled from "styled-components";
interface CardType {
  img: string;
  name: string;
  position: string;
  link: string;
}
const TeamCard: React.FC<CardType> = ({ img, name, position, link }) => {
  return (
    <Container>
      <img src={img} alt="img" />
      <div className="team-name">{name}</div>
      <div className="team-position">{position}</div>
      <a href={link} target="__blank">
        <Linkedin />
      </a>
    </Container>
  );
};

export default TeamCard;

const Container = styled.div`
  background: linear-gradient(
    90deg,
    rgba(63, 207, 247, 0.2) 0%,
    rgba(243, 245, 243, 0.2) 34.33%,
    rgba(234, 159, 84, 0.2) 100%
  );
  max-width: 417px;
  width: 100%;
  height: 541px;
  box-shadow: 0px 34px 30px 0px #00000012;
  border-radius: 30px;
  padding: 30px;
  margin-block: 10px;
  img {
    width: 100%;
  }
  text-align: center;
  .team-name {
    font-size: 30px;
    font-weight: 700;
  }
  .team-position {
    font-size: 20px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
