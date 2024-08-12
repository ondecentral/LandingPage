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
import LuciaSDK from "luciasdk-t3";
LuciaSDK.init({
  clientId: "",
  baseURL: "https://staging.api.clickinsights.xyz/fk",
  api_key: "a9a1a82d-38847aeb-88e4cf8a-764f7cad-b5646f40-f03315cd-a1d25341-4aec202b",
});
const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Container>
      <IconWrapper>
        <Dropdown
          button={<More />}
          options={[
            <MenuItem >
              <Link to="/aboutus" onClick={()=>LuciaSDK.buttonClick("About us")}>About Us</Link>
            </MenuItem>,
            <MenuItem>
              <Link to="/products" onClick={()=>LuciaSDK.buttonClick("products")}>Products</Link>
            </MenuItem>,
            <MenuItem>
              <a 
                href="https://lucia-protocol.gitbook.io/lucia-protocol/"
                target="__blank"
                onClick={()=>LuciaSDK.buttonClick("whitepaper")}
              >
                Whitepaper
              </a>
            </MenuItem>,
            <MenuItem>
              <Link to="/developers" onClick={()=>LuciaSDK.buttonClick("developers")}>Developers</Link>
            </MenuItem>,
          ]}
        ></Dropdown>
      </IconWrapper>
      <Link to="/">
        <Image src="/images/logo.svg" />
      </Link>
      <MenuContainer>
        <MenuItem>
          <Link to="/aboutus" onClick={()=>LuciaSDK.buttonClick("About us")}>About Us</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/products" onClick={()=>LuciaSDK.buttonClick("Products")}>Products</Link>
        </MenuItem>
        <MenuItem>
          <a
            href="https://lucia-protocol.gitbook.io/lucia-protocol/"
            target="__blank"
            onClick={()=>LuciaSDK.buttonClick("whitepaper")}
          >
            Whitepaper
          </a>
        </MenuItem>
        <MenuItem>
          <a href="https://docs.luciaprotocol.com/" target="__blank" onClick={()=>LuciaSDK.buttonClick("developers")}>
            Developers
          </a>
        </MenuItem>
      </MenuContainer>
      <ButtonWrapper href="https://app.luciaprotocol.com" target="__blank" onClick={()=>LuciaSDK.buttonClick("Launch app")}>
        Launch App
      </ButtonWrapper>
    </Container>
  );
};

export default Navbar;
