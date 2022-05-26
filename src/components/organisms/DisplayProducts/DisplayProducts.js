import { testProducts } from 'data';
import { ProductsWrapper } from './DisplayProducts.style';
import ProductCard from 'components/molecules/ProductCard/ProductCard';

const DisplayProducts = () => {
  return (
    <ProductsWrapper>
      {testProducts.map((product) => (
        <ProductCard slider="yes" product={product} key={product.gid} />
      ))}
    </ProductsWrapper>
  );
};

export default DisplayProducts;
