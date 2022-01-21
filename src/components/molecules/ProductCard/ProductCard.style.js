import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductLink = styled(Link)`
  text-decoration: none;
  border: ${({ slider, theme }) =>
    slider
      ? 'none'
      : `1px solid
     ${theme.colors.grey}`};
  height: ${({ slider, news }) =>
    news ? '600px' : slider ? '480px' : '538px'};
  width: ${({ slider, news }) => (news ? '340px' : slider ? '346px' : '360px')};
  padding: ${({ slider, news }) =>
    news ? '0' : slider ? '50px 40px' : '39px 0 38px 0'};
  background: ${({ slider }) => (slider ? '#f2f2f2' : 'white')};
  border-radius: ${({ slider }) => (slider ? '20px' : '0')};
  display: block;

  /* &:hover {
    background: red;
  } */
`;

export const ProductImage = styled.img`
  display: block;
  width: ${({ slider, news }) => (news ? '340px' : slider ? '266px' : '360px')};
  height: ${({ slider, news }) => (news ? 'auto' : slider ? '291px' : '360px')};
  border-radius: ${({ news }) => (news ? '20px 20px 0 0' : '0')};
  /* border: 1px solid red; */
`;

export const BestsellerWrapper = styled.div`
  width: 100%;
  height: 20px;
  /* background: grey; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bestseller = styled.p`
  font-size: 13px;
  text-align: center;
  padding: 18px 0 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.orange};
`;

export const ProductTitle = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-weight: 500;
  padding: 5px 0;
`;

export const ProductPrice = styled(ProductTitle)`
  padding-top: ${({ news }) => (news ? '8px' : '20px')};
`;

// export const Check = styled.h1`
//   font-size: 19px;
//   display: block;
//   text-align: center;
//   width: 120px;
//   margin: 0 auto;
//   color: ${({ theme }) => theme.colors.black};
//   font-weight: 500;
//   border: 1px solid ${({ theme }) => theme.colors.black};
//   padding: 8px 0;
//   border-radius: 10px;
// `;
