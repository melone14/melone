import styled from 'styled-components';
import { useState } from 'react';

// import foto1 from 'assets/images/1.png';
import foto2 from 'assets/images/2.png';
import foto6 from 'assets/images/6.jpeg';
import foto4 from 'assets/images/4.png';
import foto7 from 'assets/images/7.jpeg';
import foto8 from 'assets/images/8.jpeg';
import foto9 from 'assets/images/9.jpeg';
import foto5 from 'assets/images/sukienki.jpg';
import * as FaIcons from 'react-icons/fa';
import Accordion from 'components/molecules/Accordion/Accordion';
import ShoppingInfo from 'components/molecules/ShoppingInfo/ShoppingInfo';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import Carousel from 'components/organisms/Carousel/Carousel';

const Wrapper = styled.section`
  padding: 30px 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid blue; */
`;

const ImageGalery = styled.div`
  width: 60%;
  max-width: 600px;
  display: flex;
  align-items: center;
  /* background: white; */
  /* border: 1px solid red; */
  height: 636px;
`;

// const MainImage = styled.img`
//   width: 80%;
//   height: auto;
//   max-height: 636px;
//   /* border: 1px solid green; */
// `;

const MainImage = styled.div`
  width: 80%;
  height: 636px;
  background: ${({ mainImage }) =>
    `url(${mainImage}) center/cover no-repeat border-box`};
`;

const SmallImagesWrapper = styled.div`
  width: 20%;
  height: 636px;
  /* border: 1px solid green; */
  background: white;
  margin: auto 0 auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const SmallImage = styled.div`
  width: 95%;
  height: 115px;
  display: block;
  background: ${({ img, theme }) =>
    `${theme.colors.lightGrey} url(${img}) center/contain no-repeat border-box`};
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 10px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.black};
  }
`;

const InfoWrapper = styled.div`
  width: 500px;
  height: 700px;
  /* border: 1px solid pink; */
`;

const ProductTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

const ProductPrice = styled.h1`
  font-size: 26px;
  margin: 20px 0;

  span {
    font-size: 16px;
    font-weight: 400;
    text-decoration: line-through;
    padding-right: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const ProductSizeWrapper = styled.div`
  /* border: 1px solid green; */
  padding: 30px 0 10px;

  h1 {
    font-size: 15px;
    font-weight: 400;
  }
`;

const SizesWrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  gap: 10px;
  padding: 10px 0;
`;

const Size = styled.div`
  padding: 10px;
  min-width: 50px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: black;
    border-color: black;
  }
`;

const ButtonsWrapper = styled.div`
  height: 60px;
  /* border: 1px solid green; */
  margin: 17px 0;
  display: flex;
  justify-content: space-between;
`;

const AddToCartBtn = styled.input`
  width: 430px;
  height: 60px;
  border-radius: 10px;
  color: white;
  background-color: ${({ theme }) => theme.colors.red};
  border: 1px solid ${({ theme }) => theme.colors.red};
  cursor: pointer;
  font-size: 20px;
  transition: all 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkRed};
  }
`;

const WishListBtn = styled.div`
  width: 60px;
  height: 60px;
  font-size: 35px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.grey};
    filter: brightness(1.4);
  }
`;

const ProductCart = () => {
  const activeImg = foto5;
  const images = [foto9, foto7, foto8, foto6, foto5];

  const [heart, setHeart] = useState(false);
  const [activeImage, setActiveImage] = useState(activeImg);

  const handleHeartClick = () => setHeart(!heart);

  const handleImageChange = (img) => setActiveImage(img);

  return (
    <>
      <Wrapper>
        <ImageGalery>
          <SmallImagesWrapper>
            <SmallImage
              img={images[0]}
              onClick={() => handleImageChange(images[0])}
            />
            <SmallImage
              img={images[1]}
              onClick={() => handleImageChange(images[1])}
            />
            <SmallImage
              img={images[2]}
              onClick={() => handleImageChange(images[2])}
            />
            <SmallImage
              img={images[3]}
              onClick={() => handleImageChange(images[3])}
            />
            <SmallImage
              img={images[4]}
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
          <SizesWrapper>
            <Size>S</Size>
            <Size>M</Size>
            <Size>L</Size>
            <Size>XL</Size>
            <Size>XXL</Size>
          </SizesWrapper>
          <ButtonsWrapper>
            <AddToCartBtn type="submit" value="Dodaj do koszyka" />
            <WishListBtn onClick={handleHeartClick}>
              {heart ? (
                <FaIcons.FaHeart style={{ color: '#ce3535' }} />
              ) : (
                <FaIcons.FaRegHeart />
              )}
            </WishListBtn>
          </ButtonsWrapper>
          <Accordion />
        </InfoWrapper>
      </Wrapper>
      <ShoppingInfo />
      <SectionTitle center>Nasze bestsellery</SectionTitle>
      <Carousel />
    </>
  );
};

export default ProductCart;
