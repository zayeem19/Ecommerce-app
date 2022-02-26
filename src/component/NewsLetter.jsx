import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
  height: 60vh;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 350;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Input = styled.input`
  width: 75%;
  height: 40px;
  margin-bottom: 10px;
  border: none;
`;
const Button = styled.button`
  width: 75%;
  height: 40px;
  background: orange;
  color: #f4f4f4;
  border: none;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get latest update on your favorite products!</Description>
      <InputContainer placeholder="email">
        <Input />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
