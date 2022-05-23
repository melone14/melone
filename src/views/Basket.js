import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import * as FaIcons from 'react-icons/fa';
import {
  InfoTitle,
  StyledIcon,
} from 'components/molecules/ShoppingInfo/ShoppingInfo.style';
import * as BsIcons from 'react-icons/bs';
import deliveryIcon from 'assets/icons/deliveryIcon.svg';
import returnIcon from 'assets/icons/returnIcon.svg';

import foto from 'assets/images/3.png';

const Wrapper = styled.main`
  width: 95%;
  max-width: 1360px;
  margin: 0 auto;
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: 1fr 290px;
`;

const ProductsWrapper = styled.table`
  /* border: 1px solid red; */
  padding-right: 100px;
  width: 100%;
  text-align: left;
`;

const BasketProduct = styled.tr`
  border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
  height: 200px;
  display: grid;
  grid-template-columns: 130px 200px 200px 150px 200px 50px;
  color: ${({ theme }) => theme.colors.black};

  td {
    display: flex;
    align-items: center;
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
`;

const ProductName = styled.h1`
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
`;

const ProductDetails = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
`;

const Quantity = styled.div`
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
`;

const TableBody = styled.tbody``;

const TableHead = styled.thead`
  /* height: 30px; */

  tr {
    display: grid;
    grid-template-columns: 130px 200px 200px 150px 200px 50px;
  }

  th {
    font-weight: 300;
    font-size: 12px;
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
            <BasketProduct>
              <td>
                <Link to="/products/jakisprodukt">
                  <img src={foto} alt="" />
                </Link>
              </td>
              <td>
                <div>
                  <ProductName>
                    <Link to="/products/jakisprodukt">
                      T-Shirt miami palm men white
                    </Link>
                  </ProductName>
                  <ProductDetails>GID: 298319</ProductDetails>
                  <ProductDetails>Kolor: Biały</ProductDetails>
                  <ProductDetails>Rozmiar: XL</ProductDetails>
                </div>
              </td>
              <td>164,50 zł</td>
              <td>
                <Quantity>
                  <button>-</button>1<button>+</button>
                </Quantity>
              </td>
              <td>164,50 zł</td>
              <td className="trashIcon">
                <FaIcons.FaTrashAlt />
              </td>
            </BasketProduct>
            <BasketProduct>
              <td>
                <Link to="/products/jakisprodukt">
                  <img src={foto} alt="" />
                </Link>
              </td>
              <td>
                <div>
                  <ProductName>
                    <Link to="/products/jakisprodukt">
                      T-Shirt miami palm men white
                    </Link>
                  </ProductName>
                  <ProductDetails>GID: 298319</ProductDetails>
                  <ProductDetails>Kolor: Biały</ProductDetails>
                  <ProductDetails>Rozmiar: XL</ProductDetails>
                </div>
              </td>
              <td>164,50 zł</td>
              <td>
                <Quantity>
                  <button>-</button>1<button>+</button>
                </Quantity>
              </td>
              <td>164,50 zł</td>
              <td className="trashIcon">
                <FaIcons.FaTrashAlt />
              </td>
            </BasketProduct>
            <BasketProduct>
              <td>
                <Link to="/products/jakisprodukt">
                  <img src={foto} alt="" />
                </Link>
              </td>
              <td>
                <div>
                  <ProductName>
                    <Link to="/products/jakisprodukt">
                      T-Shirt miami palm men white
                    </Link>
                  </ProductName>
                  <ProductDetails>GID: 298319</ProductDetails>
                  <ProductDetails>Kolor: Biały</ProductDetails>
                  <ProductDetails>Rozmiar: XL</ProductDetails>
                </div>
              </td>
              <td>164,50 zł</td>
              <td>
                <Quantity>
                  <button>-</button>1<button>+</button>
                </Quantity>
              </td>
              <td>164,50 zł</td>
              <td className="trashIcon">
                <FaIcons.FaTrashAlt />
              </td>
            </BasketProduct>
            <BasketProduct>
              <td>
                <Link to="/products/jakisprodukt">
                  <img src={foto} alt="" />
                </Link>
              </td>
              <td>
                <div>
                  <ProductName>
                    <Link to="/products/jakisprodukt">
                      T-Shirt miami palm men white
                    </Link>
                  </ProductName>
                  <ProductDetails>GID: 298319</ProductDetails>
                  <ProductDetails>Kolor: Biały</ProductDetails>
                  <ProductDetails>Rozmiar: XL</ProductDetails>
                </div>
              </td>
              <td>164,50 zł</td>
              <td>
                <Quantity>
                  <button>-</button>1<button>+</button>
                </Quantity>
              </td>
              <td>164,50 zł</td>
              <td className="trashIcon">
                <FaIcons.FaTrashAlt />
              </td>
            </BasketProduct>
            <BasketProduct>
              <td>
                <Link to="/products/jakisprodukt">
                  <img src={foto} alt="" />
                </Link>
              </td>
              <td>
                <div>
                  <ProductName>
                    <Link to="/products/jakisprodukt">
                      T-Shirt miami palm men white
                    </Link>
                  </ProductName>
                  <ProductDetails>GID: 298319</ProductDetails>
                  <ProductDetails>Kolor: Biały</ProductDetails>
                  <ProductDetails>Rozmiar: XL</ProductDetails>
                </div>
              </td>
              <td>164,50 zł</td>
              <td>
                <Quantity>
                  <button>-</button>1<button>+</button>
                </Quantity>
              </td>
              <td>164,50 zł</td>
              <td className="trashIcon">
                <FaIcons.FaTrashAlt />
              </td>
            </BasketProduct>
            <BasketProduct>
              <td>
                <Link to="/products/jakisprodukt">
                  <img src={foto} alt="" />
                </Link>
              </td>
              <td>
                <div>
                  <ProductName>
                    <Link to="/products/jakisprodukt">
                      T-Shirt miami palm men white
                    </Link>
                  </ProductName>
                  <ProductDetails>GID: 298319</ProductDetails>
                  <ProductDetails>Kolor: Biały</ProductDetails>
                  <ProductDetails>Rozmiar: XL</ProductDetails>
                </div>
              </td>
              <td>164,50 zł</td>
              <td>
                <Quantity>
                  <button>-</button>1<button>+</button>
                </Quantity>
              </td>
              <td>164,50 zł</td>
              <td className="trashIcon">
                <FaIcons.FaTrashAlt />
              </td>
            </BasketProduct>
            <BasketProduct>
              <td>
                <Link to="/products/jakisprodukt">
                  <img src={foto} alt="" />
                </Link>
              </td>
              <td>
                <div>
                  <ProductName>
                    <Link to="/products/jakisprodukt">
                      T-Shirt miami palm men white
                    </Link>
                  </ProductName>
                  <ProductDetails>GID: 298319</ProductDetails>
                  <ProductDetails>Kolor: Biały</ProductDetails>
                  <ProductDetails>Rozmiar: XL</ProductDetails>
                </div>
              </td>
              <td>164,50 zł</td>
              <td>
                <Quantity>
                  <button>-</button>1<button>+</button>
                </Quantity>
              </td>
              <td>164,50 zł</td>
              <td className="trashIcon">
                <FaIcons.FaTrashAlt />
              </td>
            </BasketProduct>
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
