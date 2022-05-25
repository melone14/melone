import styled from 'styled-components';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import {
  InfoTitle,
  StyledIcon,
} from 'components/molecules/ShoppingInfo/ShoppingInfo.style';
import * as BsIcons from 'react-icons/bs';
import deliveryIcon from 'assets/icons/deliveryIcon.svg';
import returnIcon from 'assets/icons/returnIcon.svg';
import { testBasketProducts } from 'data';
import BasketItem from 'components/molecules/BasketItem/BasketItem';

const Wrapper = styled.main`
  width: 95%;
  max-width: 1360px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 290px;
`;

const ProductsWrapper = styled.table`
  padding-right: 100px;
  width: 100%;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableHead = styled.thead`
  tr {
    display: grid;
    grid-template-columns: 130px 200px 200px 150px 200px 50px;
  }

  th {
    font-weight: 300;
    font-size: 12px;
  }

  @media (max-width: 1000px) {
    tr {
      grid-template-columns: 80px 70px 60px 70px 70px 50px;
    }
  }
`;

const OrderWrapper = styled.div``;

const Order = styled.div`
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
`;

const InfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  padding-left: 40px;
  margin-top: 50px;
  justify-content: space-around;
`;

const Basket = () => {
  return (
    <>
      <SectionTitle center withoutUnderline>
        Koszyk
      </SectionTitle>
      <Wrapper>
        <ProductsWrapper>
          <TableHead>
            <tr>
              <th>PRODUKT</th>
              <th></th>
              <th>CENA</th>
              <th>ILOŚĆ</th>
              <th>RAZEM</th>
            </tr>
          </TableHead>
          <TableBody>
            {testBasketProducts.map((product) => (
              <BasketItem product={product} key={product.gid} />
            ))}
          </TableBody>
        </ProductsWrapper>
        <OrderWrapper>
          <Order>
            <h1>TWOJE ZAMÓWIENIE</h1>
            <div>
              <p>1 produkt</p>
              <p>364,50 zł</p>
            </div>
            <div>
              <p>Dostawa</p>
              <p>0,00 zł</p>
            </div>
            <div className="total">
              <p>RAZEM: </p>
              <p>364,50 zł</p>
            </div>
            <button>PRZEJDŹ DO KASY</button>
          </Order>

          <InfosWrapper>
            <InfoTitle>
              <StyledIcon h="29px" icon={deliveryIcon} /> Bezpieczna wysyłka
            </InfoTitle>
            <InfoTitle>
              <StyledIcon icon={returnIcon} />
              14 dni na zwrot
            </InfoTitle>
            <InfoTitle>
              <BsIcons.BsLock />
              bezpieczna płatność
            </InfoTitle>
          </InfosWrapper>
        </OrderWrapper>
      </Wrapper>
    </>
  );
};

export default Basket;
