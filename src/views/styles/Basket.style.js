import styled from 'styled-components';
export const Wrapper = styled.main`
  width: 95%;
  max-width: 1360px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 290px;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ProductsWrapper = styled.table`
  padding-right: 100px;
  width: 100%;
  text-align: left;

  @media (max-width: 1100px) {
    width: 95%;
    max-width: 650px;
    margin: 0 auto;
    padding-right: unset;
  }
`;

export const TableBody = styled.tbody`
  @media (max-width: 1100px) {
    tr {
      grid-template-columns: 140px 150px 90px 73px 90px 101px;
    }
  }

  @media (max-width: 700px) {
    tr {
      grid-template-columns: 80px 70px 60px 70px 70px 50px;
    }
  }
`;

export const TableHead = styled.thead`
  tr {
    display: grid;
    grid-template-columns: 130px 200px 200px 150px 200px 50px;
  }

  th {
    font-weight: 300;
    font-size: 12px;
  }

  @media (max-width: 1100px) {
    tr {
      grid-template-columns: 140px 169px 78px 87px 73px 97px;
    }
  }

  @media (max-width: 700px) {
    tr {
      grid-template-columns: 80px 78px 64px 68px 70px 50px;
    }
  }
`;

export const OrderWrapper = styled.div``;

export const Order = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  padding: 10px;
  position: sticky;
  top: 50px;

  h1 {
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
    padding-bottom: 5px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 15px;
      line-height: 2;
    }
  }

  div.total {
    border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
    width: 95%;
    margin: 5px auto;
    padding-top: 5px;
    font-weight: 600;
  }

  button {
    background: ${({ theme }) => theme.colors.black};
    color: white;
    cursor: pointer;
    transition: all 0.3s;
    border: 1px solid ${({ theme }) => theme.colors.black};
    width: 100%;
    padding: 12px;
    margin-top: 10px;

    &:hover {
      background: white;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  @media (max-width: 1100px) {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
  }
`;

export const InfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  padding-left: 40px;
  margin-top: 50px;
  justify-content: space-around;

  @media (max-width: 1100px) {
    width: 215px;
    margin: 55px auto;
    padding: 0;
  }
`;
