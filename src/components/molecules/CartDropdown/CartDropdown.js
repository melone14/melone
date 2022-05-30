import { Button, ProductsWrapper, Wrapper } from './CartDropdown.style';
import { useContext } from 'react';

import { cartContext } from 'context/cartContext';
import DropdownItem from 'components/atoms/DropdownItem/DropdownItem';

const CartDropdown = () => {
  const { cartProducts } = useContext(cartContext);
  return (
    <Wrapper className="dropdown">
      <ProductsWrapper>
        {cartProducts.map((product) => (
          <DropdownItem product={product} key={product.gid} />
        ))}
      </ProductsWrapper>
      <Button>Koszyk</Button>
    </Wrapper>
  );
};

export default CartDropdown;
