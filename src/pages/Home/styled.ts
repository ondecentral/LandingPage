import styled from "styled-components";
export const Container = styled.div`
  border-radius: 40px;
  box-shadow: 0px 24px 54px 0px #0000001a;
  display: flex;
  background: white;
  padding: 25px;
  align-items: top;
  gap: 10px;
  h1 {
    font-size: 48px;
    font-weight: 500;
  }
  p {
    font-size: 24px;
    padding-top: 20px;
  }
  .content {
    width: fit-content;
  }
  @media (max-width: 480px) {
    margin: 10px;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
  }
`;
