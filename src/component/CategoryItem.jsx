import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 0 5px;
  height: 50vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #f4f4f4;
  margin: 20px;
`;
const Button = styled.a`
  border: none;
  padding: 10px;
  background: #f4f4f4;
  cursor: pointer;
  text-decoration: none;
  color: #333;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button href="/products">Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
