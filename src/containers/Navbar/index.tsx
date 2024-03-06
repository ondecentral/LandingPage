import React, { useState } from "react";
import { Link } from "react-router-dom";
import { More } from "icons";
import { Dropdown } from "components";
import {
  Container,
  Image,
  MenuContainer,
  MenuItem,
  ButtonWrapper,
  IconWrapper,
} from "./styled";

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Container>
      <IconWrapper>
        <Dropdown
          button={<More />}
          options={[
            <MenuItem>
              <Link to="/aboutus">About Us</Link>
            </MenuItem>,
            <MenuItem>
              <Link to="/products">Products</Link>
            </MenuItem>,
            <MenuItem>
              <a
                href="https://lucia-protocol.gitbook.io/lucia-protocol/"
                target="__blank"
              >
                Whitepaper
              </a>
            </MenuItem>,
            <MenuItem>
              <Link to="/faq">FAQ</Link>
            </MenuItem>,
            <MenuItem>
              <Link to="/developers">Developers</Link>
            </MenuItem>,
          ]}
        ></Dropdown>
      </IconWrapper>
      <Link to="/">
        <Image src="/images/logo.svg" />
      </Link>
      <MenuContainer>
        <MenuItem>
          <Link to="/aboutus">About Us</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/products">Products</Link>
        </MenuItem>
        <MenuItem>
          <a
            href="https://lucia-protocol.gitbook.io/lucia-protocol/"
            target="__blank"
          >
            Whitepaper
          </a>
        </MenuItem>
        <MenuItem>
          <Link to="/faq">FAQ</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/developers">Developers</Link>
        </MenuItem>
      </MenuContainer>
      <ButtonWrapper href="https://app.luciaprotocol.com" target="__blank">
        Launch App
      </ButtonWrapper>
    </Container>
  );
};

export default Navbar;
