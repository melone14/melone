import {
  ProductImage,
  Bestseller,
  ProductTitle,
  ProductPrice,
  BestsellerWrapper,
  ProductLink,
  // Check,
} from './ProductCard.style';

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

export default ProductCard;
