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
  .image-container {
    position: relative;
    height: 600px;
  }
  .grid-container {
    position: absolute;
    left: 20px;
    top: 0;
    right: 20px;
    bottom: 0;
    overflow: auto;
    padding: 40px;
    display: flex;
    gap: 20px;
    z-index: 1;
    img {
      border-radius: 30px;
      width: 100%;
      height: 500px;
      width: 700px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .icon-wrapper {
    width: 73px;
    height: 73px;
    border-radius: 50%;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .scroll-button {
    position: absolute;
    padding: 20px;
    z-index: 2;
    bottom: 50%;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .reverse {
    transform: rotate(180deg);
  }
  @media (max-width: 820px) {
    display: none;
  }
`;
