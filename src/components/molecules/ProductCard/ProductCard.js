import {
  Wrapper,
  ProductImage,
  Bestseller,
  ProductTitle,
  ProductPrice,
} from './ProductCard.style';

const ProductCard = ({ slider, bestseller }) => (
  <Wrapper slider={slider}>
    <ProductImage
      src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=266&hei=291&fmt=png-alpha&.v=1591634795000"
      slider={slider}
    />
    {bestseller && <Bestseller>Bestseller</Bestseller>}
    <ProductTitle>Koszula XYZ</ProductTitle>
    <ProductPrice>1 234,00 zł</ProductPrice>
  </Wrapper>
);

export default ProductCard;
