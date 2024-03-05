import styled from "styled-components";

export const Container = styled.div`
  padding-top: 40px;
  background: #d0cfe9;
  box-shadow: 0px 14px 24px 0px #0000001a;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-top: 80px;
  h1 {
    font-size: 67px;
  }
  p {
    font-size: 23px;
  }
  .grid-container {
    padding: 40px;
    display: flex;
    justify-content: space-between;
    img {
      border-radius: 30px;
    }
  }
`;
