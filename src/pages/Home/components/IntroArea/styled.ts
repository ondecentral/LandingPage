import styled from "styled-components";

export const WebArea = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    font-size: 67px;
    font-weight: 500;
  }
  h2 {
    font-size: 67px;
    font-weight: 700;
    background-image: ${({ theme }) => theme.colors.primaryGradient};
    background-clip: text;
    color: transparent;
  }
  p {
    font-size: 33px;
  }
`;
export const ButtonWrapper = styled.div`
  width: 316px;
  height: 76px;
  color: white;
  font-size: 24px;
`;
export const Container = styled.div`
  position: relative;
  margin-bottom: 400px;
`;
export const DexArea = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  align-items: end;
  position: absolute;
  bottom: -400px;
  left: -80px;
`;
export const DexTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-size: 48px;
    font-weight: 500;
  }
  p {
    font-size: 23px;
  }
  margin-bottom: 120px;
`;
