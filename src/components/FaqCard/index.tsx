import React, { useState } from "react";
import styled from "styled-components";
interface CardType {
  title: string;
  marked?: string;
  content: string;
}
const FaqCard: React.FC<CardType> = ({ title, marked, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <div className="faq-title" onClick={() => setOpen(!open)}>
        {title} <span className="faq-marked">{marked || ""}</span>?
      </div>
      {open && <div className="faq-content">{content}</div>}
    </Container>
  );
};

export default FaqCard;

const Container = styled.div`
  position: relative;
  background: linear-gradient(
    89.03deg,
    #f6f6f7 0%,
    #fbfbfb 24.5%,
    #f4f4f5 50.71%,
    #fdfdfd 69.64%,
    #ededf0 100%
  );
  box-shadow: 0px 6px 5px 0px #00000012;
  width: 100%;
  border-radius: 50px;
  padding: 20px 40px 20px 120px;
  font-weight: 200;
  .faq-title {
    font-size: 47px;
    cursor: pointer;
  }
  .faq-marked {
    color: ${({ theme }) => theme.colors.secondaryText};
  }
  .faq-content {
    font-size: 22px;
    margin-top: 20px;
  }
  @media (max-width: 480px) {
    .faq-content {
      font-size: 15px;
    }
    .faq-title {
      font-size: 25px;
    }
  }
`;
