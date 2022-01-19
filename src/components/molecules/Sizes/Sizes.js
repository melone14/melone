import { SizesWrapper, Size } from './Sizes.style';
import { useState } from 'react';

const dummyData = ['S', 'M', 'L', 'XL', 'XXL'];

const Sizes = ({ sizes }) => {
  const [activeSize, setActiveSize] = useState(null);

  const handleChooseSize = (size) => {
    setActiveSize(size);
  };

  return (
    <SizesWrapper>
      {dummyData.map((size) => (
        <Size
          onClick={() => handleChooseSize(size)}
          className={activeSize == size ? 'activeSize' : null}
        >
          {size}
        </Size>
      ))}
    </SizesWrapper>
  );
};

export default Sizes;
