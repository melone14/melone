import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import styled from 'styled-components';
import * as CgIcons from 'react-icons/cg';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { testBasketProducts } from 'data';

const Wrapper = styled.main`
  width: 100%;
  max-width: 1400px;
  min-height: 500px;
  margin: 0 auto;
`;

const ProductsWrapper = styled.div`
  min-height: 100px;
  width: 100%;
  max-width: 1222px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;

  a {
    color: unset;
    text-decoration: none;
  }

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const ProductWrapper = styled.div`
  width: 290px;
  height: 420px;
  /* border: 1px solid green; */
  position: relative;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  /* border-bottom: 1px solid red; */
`;

const StyledRemoveButton = styled.button`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 10px;
  right: 0;
  background: white;
  outline: none;
  border: none;
  font-size: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
`;

const BasketButton = styled(StyledRemoveButton)`
  background: ${({ theme }) => theme.colors.black};
  top: unset;
  bottom: 128px;
  color: white;
  font-size: 23px;
`;

const ProductName = styled.h1`
  padding: 15px 0;
  height: 60px;
  /* border: 1px solid red; */
  font-size: 15px;
  font-weight: 500;
`;

const ProductPrice = styled.h2`
  padding-bottom: 2px;
  font-size: 15px;
  font-weight: 500;
`;

const ProductSize = styled(ProductPrice)`
  color: ${({ theme }) => theme.colors.grey};
`;

const WishList = () => {
  return (
    <>
      <SectionTitle withoutUnderline center>
        Wish List
      </SectionTitle>
      <Wrapper>
        <ProductsWrapper>
          {testBasketProducts.map(({ name, price, foto, size }) => (
            <Link to="/">
              <ProductWrapper>
                <StyledRemoveButton>
                  <CgIcons.CgClose />
                </StyledRemoveButton>
                <StyledImage src={foto} alt="" />
                <BasketButton>
                  <FiIcons.FiShoppingBag />
                </BasketButton>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price} zł</ProductPrice>
                <ProductSize>Rozmiar: {size}</ProductSize>
              </ProductWrapper>
            </Link>
          ))}
        </ProductsWrapper>
      </Wrapper>
    </>
  );
};

export default WishList;
