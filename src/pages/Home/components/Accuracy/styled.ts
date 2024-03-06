import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;
  text-align: center;
  h1 {
    font-size: 61px;
    font-weight: 500;
    padding-bottom: 80px;
  }
  h2 {
    font-size: 33px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondaryText};
  }
  @media (max-width: 480px) {
    margin: 10px;
    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 25px;
    }
    .image {
      width: 100%;
    }
  }
`;
