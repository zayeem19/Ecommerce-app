import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #f4f4f4;
  background: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.a`
  width: 50%;
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Amazon.com</Logo>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          tempore corporis hic ut quisquam nulla sed sint officiis vero velit.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Navigate</Title>
        <List>
          <ListItem href="/">Home</ListItem>
          <ListItem href="/cart">Cart</ListItem>
          <ListItem href="/">My Account</ListItem>
          <ListItem href="/cart">Order Tracking</ListItem>
          <ListItem href="/">Wishlist</ListItem>
          <ListItem href="/register">Register</ListItem>
          <ListItem href="/">Terms & Condition</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us.</Title>
        <ContactItem>
          <Room style={{ marginRight: "12px" }} /> 173 MCU Street, Lorem 300098
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "12px" }} /> +71 55 555 55555
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "12px" }} /> mail@amazon.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
