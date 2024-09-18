import styled from "styled-components";
import LuciaSDK from "luciasdk-t3";
const api_key : string = process.env.REACT_APP_API_KEY as string;
interface CardType {
  title: string;
  img: string;
  content: string;
  date: string;
  link: string;
}
const NewsCard: React.FC<CardType> = ({ title, img, content, date, link }) => {
  LuciaSDK.init({
    clientId: "",
    baseURL: "https://staging.api.clickinsights.xyz/fk",
    api_key: api_key,
  });
  return (
    <Container
        onClick={(e) => {
          // window.location.href = link;
          // e.preventDefault();
          LuciaSDK.buttonClick(title)
        }}
      href={link}
      target="__blank"
    >
      <img src={img} alt="img" />
      <div className="card-content">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="date">{date}</div>
      </div>
    </Container>
  );
};

export default NewsCard;

const Container = styled.a`
  width: 300px;
  height: 420px;
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: 0px 10px 40px 0px #49413714;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  img {
    width: 100%;
    height: 200px;
    border-radius: 28px 28px 0 0;
    object-fit: cover;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 10px;
  }
  .title {
    font-size: 18px;
    font-weight: 600;
    min-height: 48px;
  }
  .content {
    font-size: 13px;
    font-weight: 400;
  }
  .date {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondaryText};
    text-align: left;
  }
`;
