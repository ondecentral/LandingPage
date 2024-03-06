import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 60px 24px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    padding-inline: 20px;
  }
`;

export const Image = styled.img`
  height: 40px;
`;

export const MenuContainer = styled.div`
  display: flex;
  column-gap: 48px;
  @media (max-width: 1024px) {
    padding-inline: 20px;
  }
  @media (max-width: 860px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  font-size: 14px;
  text-align: center;
  padding: 10px 12px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const ButtonWrapper = styled.a`
  border: 1px solid #e99b4d;
  height: 54px;
  width: 174px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1024px) {
    height: 37px;
    width: 120px;
  }
`;

export const IconWrapper = styled.div`
  display: none;
  @media (max-width: 860px) {
    display: block;
    cursor: pointer;
  }
`;
