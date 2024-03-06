import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;
  text-align: center;
  h1 {
    font-size: 61px;
    font-weight: 500;
  }
  h2 {
    font-size: 33px;
    font-weight: 500;
  }
  h3 {
    font-size: 23px;
    font-weight: 400;
  }
  p {
    font-size: 19px;
  }
  .gradient-background {
    background: linear-gradient(
      53.68deg,
      rgba(51, 205, 247, 0.04) 19.93%,
      rgba(248, 246, 243, 0.2) 41.25%,
      rgba(233, 155, 77, 0.2) 85.53%
    );
    border-radius: 40px;
  }
  @media (max-width: 480px) {
    padding: 40px 10px 10px 10px;
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 25px;
    }
  }
`;

export const GridContainer = styled.div`
  padding-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  .dfr {
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 40px;
    align-items: center;
  }
  .fr {
    padding: 40px;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  div {
    position: relative;
    height: 254px;
  }
  .f-img {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 300px;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    .dfr {
      padding: 40px;
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
