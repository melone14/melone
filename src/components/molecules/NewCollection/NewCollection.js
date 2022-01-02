import ProductCard from '../ProductCard/ProductCard';
import kamizelka from 'assets/images/kamizelka.jpeg';
import plaszcz from 'assets/images/plaszcz.jpeg';
import spodnie from 'assets/images/spodnie.jpeg';

const { Wrapper } = require('./NewCollection.style');

const testProducts = [
  {
    bestseller: false,
    image: kamizelka,
    news: true,
    price: '1950,00',
    name: 'Kamizelka Notorius',
    gid: 231,
  },
  {
    bestseller: false,
    image: spodnie,
    news: true,
    price: '1100,00',
    name: 'Spodnie Sexy Magic',
    gid: 15432,
  },
  {
    bestseller: false,
    image: plaszcz,
    news: true,
    price: '2730,00',
    name: 'Płaszcz Black Widow',
    gid: 12532,
  },
];

const NewCollection = () => {
  return (
    <Wrapper>
      {testProducts.map((product) => (
        <ProductCard slider product={product} key={product.gid} />
      ))}
    </Wrapper>
  );
};

export default NewCollection;
