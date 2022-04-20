import {
  ProductImage,
  Bestseller,
  ProductTitle,
  ProductPrice,
  BestsellerWrapper,
  ProductLink,
  // Check,
} from './ProductCard.style';
import PropTypes from 'prop-types';

const ProductCard = ({ slider, product }) => {
  return (
    <ProductLink
      slider={slider}
      news={product.news}
      to={`/products/${product.gid}`}
    >
      <ProductImage news={product.news} src={product.image} slider={slider} />
      <BestsellerWrapper>
        {product.bestseller && <Bestseller>Bestseller</Bestseller>}
        {product.news && <Bestseller>Nowość</Bestseller>}
      </BestsellerWrapper>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductPrice news={product.news}>{product.price} zł</ProductPrice>
      {/* <Check>ZOBACZ</Check> */}
    </ProductLink>
  );
};

ProductCard.propTypes = {
  slider: PropTypes.string,
  product: PropTypes.object,
};

export default ProductCard;
