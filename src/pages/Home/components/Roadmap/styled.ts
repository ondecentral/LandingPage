import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;
  h1 {
    font-size: 61px;
    font-weight: 700;
    text-align: center;
    padding-bottom: 40px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
  }
  @media (max-width: 1200px) {
    .grid-container {
      display: grid;
      grid-template-columns: auto auto;
      gap: 20px;
    }
  }
  @media (max-width: 860px) {
    padding-top: 40px;
    padding: 10px;
    h1 {
      font-size: 32px;
      padding-bottom: 20px;
    }
    .grid-container {
      display: grid;
      grid-template-columns: auto;
      gap: 20px;
    }
  }
`;
