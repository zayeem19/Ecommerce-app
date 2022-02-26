import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../actions/productAction";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../layouts/Navbar";
import NewsLetter from "../NewsLetter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  background: orange;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: 500;
`;

const Product = ({ product: { product, loading }, getProduct }) => {
  const { id } = useParams();

  useEffect(() => {
    getProduct(id);
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image />
        </ImgContainer>
        <InfoContainer>
          <Title>Denims</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odio vitae rerum cum, corrupti aliquam aspernatur consequuntur ea,
            sapiente minima totam illo laborum ipsam vel animi? Minus saepe fuga
            culpa.
          </Desc>
          <Price>$20</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProduct })(Product);
