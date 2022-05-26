import styled from 'styled-components';

export const ProductsWrapper = styled.section`
  min-height: 700px;
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding-left: 20px;
  padding-bottom: 30px;

  @media (max-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
