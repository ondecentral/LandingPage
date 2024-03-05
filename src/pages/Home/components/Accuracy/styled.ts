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
`;
