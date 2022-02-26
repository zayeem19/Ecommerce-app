import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const Container = styled.div`
  height: 10vh;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//Left Navbar
const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

//Right Navbar
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

//Center Navbar
const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  width: 100%;
  border: 1px solid #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
              E-SHOP
            </Link>
          </Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
          <Language>EN</Language>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/login" style={{ color: "#333", textDecoration: "none" }}>
              Hello, Sign in
              <br /> Account & Lists
            </Link>
          </MenuItem>
          <MenuItem>
            Returns
            <br /> & Orders
          </MenuItem>
          <MenuItem>
            <Link to="/cart" style={{ color: "#333", textDecoration: "none" }}>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
