import ProductCard from 'components/molecules/ProductCard/ProductCard';
import Slider from 'react-slick';
import { Wrapper } from './Carousel.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
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
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

const Carousel = () => (
  <Wrapper>
    <Slider {...settings}>
      <ProductCard slider bestseller />
      <ProductCard slider />
      <ProductCard slider bestseller />
      <ProductCard slider />
      <ProductCard slider bestseller />
      <ProductCard slider />
    </Slider>
  </Wrapper>
);

export default Carousel;
