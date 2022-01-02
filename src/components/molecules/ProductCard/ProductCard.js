import {
  Wrapper,
  ProductImage,
  Bestseller,
  ProductTitle,
  ProductPrice,
  BestsellerWrapper,
} from './ProductCard.style';

const ProductCard = ({ slider, product }) => {
  return (
    <Wrapper slider={slider} news={product.news}>
      <ProductImage news={product.news} src={product.image} slider={slider} />
      <BestsellerWrapper>
        {product.bestseller && <Bestseller>Bestseller</Bestseller>}
        {product.news && <Bestseller>Nowość</Bestseller>}
      </BestsellerWrapper>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductPrice news={product.news}>{product.price} zł</ProductPrice>
    </Wrapper>
  );
};

export default ProductCard;
