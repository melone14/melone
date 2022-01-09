import styled from 'styled-components';
import ProductCard from 'components/molecules/ProductCard/ProductCard';

import foto1 from 'assets/images/1.png';
import foto2 from 'assets/images/2.png';
import foto3 from 'assets/images/3.png';
import foto4 from 'assets/images/4.png';

const SomeTemplate = styled.section`
  padding-top: 100px;
`;

const Wrapper = styled.section`
  min-height: 1000px;
  display: grid;
  grid-template-columns: 320px 1fr;
`;

const FiltersWrapper = styled.aside`
  width: 320px;
  border: 1px solid red;
  height: 600px;
  padding: 20px 40px;
`;

const ProductsWrapper = styled.section`
  min-height: 700px;
  border: 1px solid green;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding-left: 20px;
  padding-bottom: 30px;
`;

const SearchBar = styled.input`
  width: 100%;
  border: 1px solid red;
  background: white;
  height: 50px;
  display: block;
  margin: 10px auto 35px;
  outline: none;
  font-size: 25px;
`;

const Text = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  margin: 5px 0 15px 0;
`;

const testProducts = [
  {
    bestseller: true,
    image: foto1,
    news: false,
    price: '1230,00',
    name: 'Płaszcz Amoloco',
    gid: 12231,
  },
  {
    bestseller: true,
    image: foto2,
    news: false,
    price: '860,00',
    name: 'Koszula Bolton Gacio',
    gid: 154352,
  },
  {
    bestseller: true,
    image: foto3,
    news: false,
    price: '480,00',
    name: 'Koszula Fortes Powder Pink',
    gid: 1234532,
  },
  {
    bestseller: true,
    image: foto4,
    news: false,
    price: '480,00',
    name: 'Koszula Fortes White Pearl',
    gid: 107932,
  },
];

const Products = () => {
  return (
    <SomeTemplate>
      <Text style={{ paddingLeft: '30px' }}>
        Mężczyźni > Odzież > T-shirty i koszulki polo
      </Text>
      <Wrapper>
        <FiltersWrapper>
          <SearchBar type="text" placeholder="Szukaj" />
          <Text>Kategorie</Text>
        </FiltersWrapper>
        <ProductsWrapper>
          {testProducts.map((product) => (
            <ProductCard slider product={product} key={product.gid} />
          ))}
        </ProductsWrapper>
      </Wrapper>
    </SomeTemplate>
  );
};

export default Products;
