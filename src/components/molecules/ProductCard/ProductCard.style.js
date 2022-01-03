import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const Wrapper = styled.article`
//   border: ${({ slider, theme }) =>
//     slider
//       ? 'none'
//       : `1px solid
//      ${theme.colors.grey}`};
//   height: ${({ slider, news }) =>
//     news ? '600px' : slider ? '480px' : '538px'};
//   width: ${({ slider, news }) => (news ? '340px' : slider ? '346px' : '360px')};
//   padding: ${({ slider, news }) =>
//     news ? '0' : slider ? '63px 40px' : '39px 0 38px 0'};
//   background: ${({ slider }) => (slider ? '#f2f2f2' : 'white')};
//   border-radius: ${({ slider }) => (slider ? '20px' : '0')};
// `;

export const ProductImage = styled.img`
  display: block;
  width: ${({ slider, news }) => (news ? '340px' : slider ? '266px' : '360px')};
  height: ${({ slider, news }) => (news ? 'auto' : slider ? '291px' : '360px')};
  border-radius: ${({ news }) => (news ? '20px 20px 0 0' : '0')};
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
    news ? '0' : slider ? '63px 40px' : '39px 0 38px 0'};
  background: ${({ slider }) => (slider ? '#f2f2f2' : 'white')};
  border-radius: ${({ slider }) => (slider ? '20px' : '0')};
  display: block;
`;
