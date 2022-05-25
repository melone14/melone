import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  height: 530px;
  border: 1px solid black;
  background: white;
  position: absolute;
  top: 40px;
  right: -200px;

  @media (max-width: 1100px) {
    display: none !important;
  }
`;

export const ProductsWrapper = styled.div`
  height: 450px;
  overflow-y: scroll;
`;

export const Button = styled.button`
  width: 90%;
  height: 60px;
  margin: 10px auto;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  color: white;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    background: white;
  }
`;
