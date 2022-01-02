import ProductCard from 'components/molecules/ProductCard/ProductCard';
import Slider from 'react-slick';
import { Wrapper } from './Carousel.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

import foto1 from 'assets/images/1.png';
import foto2 from 'assets/images/2.png';
import foto3 from 'assets/images/3.png';
import foto4 from 'assets/images/4.png';

const testProducts = [
  {
    bestseller: true,
    image: foto1,
    news: false,
    price: '1230,00',
    name: 'Płaszcz Amoloco',
    gid: 12231,
  },
  {
    bestseller: true,
    image: foto2,
    news: false,
    price: '860,00',
    name: 'Koszula Bolton Gacio',
    gid: 154352,
  },
  {
    bestseller: true,
    image: foto3,
    news: false,
    price: '480,00',
    name: 'Koszula Fortes Powder Pink',
    gid: 1234532,
  },
  {
    bestseller: true,
    image: foto4,
    news: false,
    price: '480,00',
    name: 'Koszula Fortes White Pearl',
    gid: 107932,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  lazyLoad: true,
  centerMode: true,
  adaptiveHeight: true,
  //   fade: true,
  arrows: true,
  autoplaySpeed: 5000,
  className: 'slides',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          {testProducts.map((product) => (
            <ProductCard slider product={product} key={product.gid} />
          ))}
        </Slider>
      </Wrapper>
    </>
  );
};

export default Carousel;
