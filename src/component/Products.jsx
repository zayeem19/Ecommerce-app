import { useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
// import { popularProducts } from "./data";
import { connect } from "react-redux";
import { featuredProducts } from "../actions/productAction";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = ({ product: { products, loading }, featuredProducts }) => {
  useEffect(() => {
    featuredProducts();
    //eslint-disable-next-line
  }, []);

  if (loading || products === null) {
    return "Loading....";
  }

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { featuredProducts })(Products);
