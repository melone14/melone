import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

import {
  Wrapper,
  ProductName,
  ProductDetails,
  Quantity,
} from './BasketItem.style';

const BasketItem = ({ product: { name, gid, color, size, price, foto } }) => {
  return (
    <Wrapper>
      <td>
        <Link to="/products/jakisprodukt">
          <img src={foto} alt={name} />
        </Link>
      </td>
      <td>
        <div>
          <ProductName>
            <Link to="/products/jakisprodukt">{name}</Link>
          </ProductName>
          <ProductDetails>GID: {gid}</ProductDetails>
          <ProductDetails>Kolor: {color}</ProductDetails>
          <ProductDetails>Rozmiar: {size}</ProductDetails>
        </div>
      </td>
      <td>{price} zł</td>
      <td>
        <Quantity>
          <button>-</button>1<button>+</button>
        </Quantity>
      </td>
      <td>{price} zł</td>
      <td className="trashIcon">
        <FaIcons.FaTrashAlt />
      </td>
    </Wrapper>
  );
};

export default BasketItem;
