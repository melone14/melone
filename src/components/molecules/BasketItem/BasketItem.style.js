import styled from 'styled-components';

export const Wrapper = styled.tr`
  border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
  height: 200px;
  display: grid;
  grid-template-columns: 130px 200px 200px 150px 200px 50px;
  color: ${({ theme }) => theme.colors.black};

  td {
    display: flex;
    align-items: center;

    font-size: 15px;
  }

  td img {
    display: block;
    width: 120px;
    height: 150px;
  }

  td.trashIcon svg {
    cursor: pointer;
    transition: all 0.3s;
  }

  td.trashIcon svg:hover {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  @media (max-width: 1000px) {
    height: 170px;
    grid-template-columns: 80px 70px 60px 70px 70px 50px;

    td img {
      width: 80px;
      height: 85px;
    }

    td {
      justify-content: center;
      font-size: 13px;
    }
  }
`;

export const ProductName = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  line-height: 1.15;

  a {
    text-decoration: none;
    cursor: pointer;
    transition: all 0.4s;
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      color: ${({ theme }) => theme.colors.darkGrey};
    }
  }

  @media (max-width: 1000px) {
    font-size: 11px;
  }
`;

export const ProductDetails = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;

export const Quantity = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto 0 0;
  justify-content: space-between;

  button {
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.black};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors.lightGrey};
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    justify-content: space-evenly;
    font-size: 12px;

    button {
      width: 14px;
      height: 14px;
    }
  }
`;
