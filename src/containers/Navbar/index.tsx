import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Image,
  MenuContainer,
  MenuItem,
  ButtonWrapper,
} from "./styled";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Image src="/images/logo.svg" />
      <MenuContainer>
        <MenuItem>
          <Link to="aboutus">About Us</Link>
        </MenuItem>
        <MenuItem>Products</MenuItem>
        <MenuItem>Whitepaper</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuItem>Developers</MenuItem>
      </MenuContainer>
      <ButtonWrapper href="https://testnet.luciadex.com" target="__blank">
        Launch App
      </ButtonWrapper>
    </Container>
  );
};

export default Navbar;
