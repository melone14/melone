import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import {
  InfoTitle,
  StyledIcon,
} from 'components/molecules/ShoppingInfo/ShoppingInfo.style';
import * as BsIcons from 'react-icons/bs';
import deliveryIcon from 'assets/icons/deliveryIcon.svg';
import returnIcon from 'assets/icons/returnIcon.svg';
import BasketItem from 'components/molecules/BasketItem/BasketItem';
import { useContext } from 'react';
import { cartContext } from 'context/cartContext';
import {
  ProductsWrapper,
  TableHead,
  TableBody,
  OrderWrapper,
  Order,
  InfosWrapper,
  Wrapper,
} from './styles/Basket.style';

const Basket = () => {
  const { cartProducts } = useContext(cartContext);

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
            {cartProducts.map((product) => (
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
