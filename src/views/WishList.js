import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import * as CgIcons from 'react-icons/cg';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { testBasketProducts } from 'data';

import {
  Wrapper,
  ProductsWrapper,
  ProductWrapper,
  StyledImage,
  StyledRemoveButton,
  BasketButton,
  ProductName,
  ProductPrice,
  ProductSize,
} from './styles/WishList.style';

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
