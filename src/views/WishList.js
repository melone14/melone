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
  BasketButton,
  ProductName,
  ProductPrice,
  ProductSize,
} from './styles/WishList.style';
import RemoveButton from 'components/atoms/RemoveButton/RemoveButton';

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
                <RemoveButton>
                  <CgIcons.CgClose />
                </RemoveButton>
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
