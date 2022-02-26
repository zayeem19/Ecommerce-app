import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../layouts/Navbar";
import NewsLetter from "../NewsLetter";
import Products from "../Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterProducts = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Browse Popular Products</Title>
      <FilterProducts>
        <Filter>
          <FilterText>Filter</FilterText>
          <Select>
            <Option>Prime Delivery</Option>
            <Option>Brands</Option>
            <Option>Categories</Option>
            <Option>Price & Deals</Option>
            <Option>PC Accesories</Option>
            <Option>Customer Reviews</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort by</FilterText>
          <Select>
            <Option>Featured</Option>
            <Option>Price: Low to High</Option>
            <Option>Price: High to Low </Option>
            <Option>Avg Customer Rating</Option>
            <Option>Newest Arrivals</Option>
          </Select>
        </Filter>
      </FilterProducts>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
