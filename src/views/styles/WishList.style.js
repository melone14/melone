import styled from 'styled-components';
import { StyledRemoveButton } from 'components/atoms/RemoveButton/RemoveButton.style';

export const Wrapper = styled.main`
  width: 100%;
  max-width: 1400px;
  min-height: 500px;
  margin: 0 auto;
`;

export const ProductsWrapper = styled.div`
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

export const ProductWrapper = styled.div`
  width: 290px;
  height: 420px;
  /* border: 1px solid green; */
  position: relative;
`;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  /* border-bottom: 1px solid red; */
`;

export const BasketButton = styled(StyledRemoveButton)`
  background: ${({ theme }) => theme.colors.black};
  top: unset;
  bottom: 128px;
  color: white;
  font-size: 23px;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ProductName = styled.h1`
  padding: 15px 0;
  height: 60px;
  font-size: 15px;
  font-weight: 500;
`;

export const ProductPrice = styled.h2`
  padding-bottom: 2px;
  font-size: 15px;
  font-weight: 500;
`;

export const ProductSize = styled(ProductPrice)`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 300;
`;
