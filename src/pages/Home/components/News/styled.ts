import styled from "styled-components";

export const Container = styled.div`
  padding-block: 40px;
  background: #d0cfe9;
  box-shadow: 0px 14px 24px 0px #0000001a;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-top: 80px;
  h1 {
    font-size: 67px;
  }
  .card-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
  @media (max-width: 820px) {
    h1 {
      font-size: 35px;
    }
    .card-container {
      margin-top: 10px;
    }
    margin-inline: 10px;
    padding-block: 20px;
  }
`;
