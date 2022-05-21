import { Wrapper } from './CartDropdown.style';
import { useContext } from 'react';

import { cartContext } from 'context/cartContext';

const CartDropdown = () => {
  const { products } = useContext(cartContext);
  return (
    <Wrapper className="dropdown">
      CartDropdown
      {products.map(({ name, price, image }) => (
        <div>
          <h1>{name}</h1>
          <p>{price}</p>
          <img src={image} alt={name} />
        </div>
      ))}
    </Wrapper>
  );
};

export default CartDropdown;
