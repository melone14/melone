import PropTypes from 'prop-types';
import { Wrapper } from './DropdownItem.style';
import React from 'react';

const DropdownItem = ({ product: { name, price, image, quantity } }) => {
  return (
    <Wrapper>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>
        <span>{quantity ? `${quantity} x` : '1 x'}</span> {price}
      </p>
    </Wrapper>
  );
};

DropdownItem.propTypes = {
  // product: React.PropTypes.shape({
  // name: PropTypes.string,
  // price: PropTypes.number,
  // image: PropTypes.string,
  // quantity: PropTypes.number,
  // }),
  product: PropTypes.object,
};

export default DropdownItem;
