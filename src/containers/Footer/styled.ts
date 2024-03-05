import styled from "styled-components";

export const Container = styled.div`
  background: url(/images/footer.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const DiscoverContainer = styled.div`
  padding-top: 350px;

  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h1 {
    font-size: 67px;
    font-weight: 500;
  }
  h2 {
    font-size: 33px;
  }
  p {
    font-size: 19px;
  }
  padding-bottom: 80px;
`;

export const ButtonWrapper = styled.div`
  width: 316px;
  height: 76px;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 24px;
  margin-top: 60px;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: white;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  padding: 40px;
  display: flex;
  justify-content: center;
  gap: 10rem;
`;

export const LinkWrapper = styled.div`
  h1 {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 40px;
  }
  p {
    font-size: 18px;
  }
  .icon-wrapper {
    display: flex;
    gap: 10px;
  }
  .foot_link {
    width: 250px;
    height: 60px;
    color: white;
    font-size: 18px;
    margin-top: 20px;
  }
`;
