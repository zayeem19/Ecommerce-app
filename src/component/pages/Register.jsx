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

const Agreement = styled.span`
  font-size: 12px;
`;

const Button = styled.button`
  width: 50%;
  margin: 10px 0;
  font-weight: 500;
  border: none;
  padding: 10px 20px;
  background: orange;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <Form>
          <Input placeholder="first Name" />
          <Input placeholder="last Name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
        </Form>
        <Agreement>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </Agreement>
        <Button>Submit</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
