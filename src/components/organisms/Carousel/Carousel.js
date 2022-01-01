import ProductCard from 'components/molecules/ProductCard/ProductCard';
import Slider from 'react-slick';
import { Title, Wrapper } from './Carousel.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

import image1 from 'assets/images/1.png';
import image2 from 'assets/images/2.png';
import image3 from 'assets/images/3.png';
import image4 from 'assets/images/4.png';

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
  <>
    <Title>Nasze bestsellery</Title>
    <Wrapper>
      <Slider {...settings}>
        <ProductCard slider bestseller image={image1} />
        <ProductCard slider image={image2} />
        <ProductCard slider bestseller image={image3} />
        <ProductCard slider image={image4} />
      </Slider>
    </Wrapper>
  </>
);

export default Carousel;
