import { useState, useContext } from 'react';
import { cartContext } from 'context/cartContext';
import { wishListContext } from 'context/wishListContext';
import { dummyData } from 'data';
import { testOneProduct } from 'data';

import foto6 from 'assets/images/6.jpeg';
import foto7 from 'assets/images/7.jpeg';
import foto8 from 'assets/images/8.jpeg';
import foto9 from 'assets/images/9.jpeg';
import foto5 from 'assets/images/sukienki.jpg';
import * as FaIcons from 'react-icons/fa';
import Accordion from 'components/molecules/Accordion/Accordion';
import ShoppingInfo from 'components/molecules/ShoppingInfo/ShoppingInfo';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import Carousel from 'components/organisms/Carousel/Carousel';
import Sizes from 'components/molecules/Sizes/Sizes';
import {
  Wrapper,
  ImageGalery,
  SmallImagesWrapper,
  SmallImage,
  MainImage,
  Description,
  AddToCartBtn,
  ButtonsWrapper,
  ProductSizeWrapper,
  ProductTitle,
  ProductPrice,
  InfoWrapper,
  WishListBtn,
} from './styles/ProductCart.style';
import { useSnackbar } from 'notistack';

const ProductCart = () => {
  const activeImg = foto5;
  const images = [foto9, foto7, foto8, foto6, foto5];

  const [activeImage, setActiveImage] = useState(activeImg);
  const { addProductToCart } = useContext(cartContext);
  const { addProductToWishList, wishListProducts } =
    useContext(wishListContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleHeartClick = () => {
    addProductToWishList(wishListProducts, testOneProduct);
  };

  const handleImageChange = (img) => setActiveImage(img);

  const alreadyLiked = wishListProducts.find(
    (product) => product.gid === testOneProduct.gid
  );

  return (
    <>
      <Wrapper>
        <ImageGalery>
          <SmallImagesWrapper>
            <SmallImage
              src={images[0]}
              onClick={() => handleImageChange(images[0])}
            />
            <SmallImage
              src={images[1]}
              onClick={() => handleImageChange(images[1])}
            />
            <SmallImage
              src={images[2]}
              onClick={() => handleImageChange(images[2])}
            />
            <SmallImage
              src={images[3]}
              onClick={() => handleImageChange(images[3])}
            />
            <SmallImage
              src={images[4]}
              onClick={() => handleImageChange(images[4])}
            />
            <SmallImage
              src={images[2]}
              onClick={() => handleImageChange(images[2])}
            />
            <SmallImage
              src={images[3]}
              onClick={() => handleImageChange(images[3])}
            />
            <SmallImage
              src={images[4]}
              onClick={() => handleImageChange(images[4])}
            />
          </SmallImagesWrapper>
          <MainImage mainImage={activeImage} />
        </ImageGalery>
        <InfoWrapper>
          <ProductTitle>SUKIENKA POLLY BROWN PANTERA</ProductTitle>
          <ProductPrice>
            <span>785,00 zł</span>450,00 zł
          </ProductPrice>
          <ProductSizeWrapper>
            <h1>Wybierz rozmiar:</h1>
          </ProductSizeWrapper>
          <Sizes sizes={dummyData} />
          <ButtonsWrapper>
            <AddToCartBtn
              type="submit"
              value="Dodaj do koszyka"
              onClick={() => {
                addProductToCart(testOneProduct);
                enqueueSnackbar('Dodano do koszyka', {
                  variant: 'success',
                });
              }}
            />
            <WishListBtn onClick={handleHeartClick}>
              {alreadyLiked ? (
                <FaIcons.FaHeart style={{ color: '#ce3535' }} />
              ) : (
                <FaIcons.FaRegHeart />
              )}
            </WishListBtn>
          </ButtonsWrapper>
          <Accordion />
        </InfoWrapper>
      </Wrapper>
      <Description>
        <h1>Opis produktu:</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
        voluptates sint error consectetur eos harum vel quo veniam vero
        consequuntur laudantium nisi blanditiis facere at qui, necessitatibus
        debitis earum eligendi.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quidem voluptates sint error consectetur eos harum vel
        quo veniam vero consequuntur laudantium nisi blanditiis facere at qui,
        necessitatibus debitis earum eligendi.
      </Description>
      <ShoppingInfo />
      <SectionTitle center>Nasze bestsellery</SectionTitle>
      <Carousel />
    </>
  );
};

export default ProductCart;
