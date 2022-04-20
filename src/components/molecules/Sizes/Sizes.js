import { SizesWrapper, Size } from './Sizes.style';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Sizes = ({ sizes }) => {
  const [activeSize, setActiveSize] = useState(null);

  const handleChooseSize = (size) => {
    setActiveSize(size);
  };

  return (
    <SizesWrapper>
      {sizes.map((size) => (
        <Size
          onClick={() => handleChooseSize(size)}
          className={activeSize === size ? 'activeSize' : null}
          key={size}
        >
          {size}
        </Size>
      ))}
    </SizesWrapper>
  );
};

Sizes.propTypes = {
  sizes: PropTypes.array,
};

export default Sizes;
