import React from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 60%;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 50%;
  margin: 10px 0;
  font-weight: 500;
  border: none;
  padding: 10px 20px;
  background: orange;
  cursor: pointer;
`;

const Link = styled.a`
  color: #333;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: orange;
    text-decoration: underline;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LogIn to your Account</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
        </Form>
        <Button>LogIn</Button>
        <Link>Forgot your password</Link>
        <Link>Create an account</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
