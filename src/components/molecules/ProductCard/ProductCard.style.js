import styled from 'styled-components';

export const Wrapper = styled.article`
  border: ${({ slider, theme }) =>
    slider
      ? 'none'
      : `1px solid
     ${theme.colors.grey}`};
  height: ${({ slider }) => (slider ? '546px' : '538px')};
  width: ${({ slider }) => (slider ? '346px' : '360px')};
  padding: ${({ slider }) => (slider ? '63px 40px' : '39px 0 38px 0')};
  background: ${({ slider }) => (slider ? '#f2f2f2' : 'white')};
  border-radius: ${({ slider }) => (slider ? '20px' : '0')};
`;

export const ProductImage = styled.img`
  display: block;
  width: ${({ slider }) => (slider ? '266px' : '360px')};
  height: ${({ slider }) => (slider ? '291px' : '360px')};
`;

export const Bestseller = styled.p`
  font-size: 12px;
  text-align: center;
  padding: 18px 0 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.orange};
`;

export const ProductTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-weight: 500;
  padding: 5px 0;
`;

export const ProductPrice = styled(ProductTitle)`
  padding: 50px 0 0 0;
`;
