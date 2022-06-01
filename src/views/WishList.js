import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import * as CgIcons from 'react-icons/cg';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
import { useContext } from 'react';
import { wishListContext } from 'context/wishListContext';

const WishList = () => {
  const { wishListProducts, removeProduct } = useContext(wishListContext);

  return (
    <>
      <SectionTitle withoutUnderline center>
        Wish List
      </SectionTitle>
      <Wrapper>
        <ProductsWrapper>
          {wishListProducts.map(({ name, price, image, size, gid }) => (
            <Link to="/" key={gid}>
              <ProductWrapper>
                <RemoveButton
                  onClick={
                    (e) => {
                      e.preventDefault();
                      removeProduct(wishListProducts, { gid });
                    }
                    // (e) => console.log(e.target)
                    // () => console.log('click')
                  }
                >
                  <CgIcons.CgClose />
                </RemoveButton>
                <StyledImage src={image} alt="" />
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
