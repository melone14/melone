import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 30px 0 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1250px) {
    border: 2px solid green;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageGalery = styled.div`
  width: 60%;
  max-width: 600px;
  display: flex;
  align-items: center;
  height: 636px;

  @media (max-width: 1250px) {
    border: 2px solid green;
    width: 90%;
    max-width: 900px;
    height: unset;
    flex-direction: column-reverse;
    margin-bottom: 20px;
  }
`;

export const MainImage = styled.div`
  width: 80%;
  height: 636px;
  background: ${({ mainImage }) =>
    `url(${mainImage}) center/cover no-repeat border-box`};

  @media (max-width: 1250px) {
    background: ${({ mainImage }) =>
      `url(${mainImage}) center/contain no-repeat border-box`};
  }
`;

export const SmallImagesWrapper = styled.div`
  width: 20%;
  height: 636px;
  margin: auto 0 auto 0;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  overflow-y: scroll;
  justify-content: space-around;

  &::-webkit-scrollbar {
    width: 5px;
    padding-right: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    /* background: rgba(0, 0, 0, 0.3); */
    background: inherit;
    border-radius: 20px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1250px) {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    width: 95%;
    overflow-x: auto;
    scroll-snap-type-x: mandatory;
    margin-top: 20px;
    height: 120px;
    flex-shrink: 0;
  }
`;

export const SmallImage = styled.div`
  width: 95%;
  height: 115px;
  display: block;
  background: ${({ img, theme }) =>
    `${theme.colors.lightGrey} url(${img}) center/contain no-repeat border-box`};
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 10px;
  margin: 15px auto;

  &:hover {
    border-color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 1250px) {
    max-width: 125px;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 700px;
  /* border: 1px solid pink; */

  @media (max-width: 1250px) {
    width: 95%;
    height: unset;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 1250px) {
    font-size: 24px;
  }
`;

export const ProductPrice = styled.h1`
  font-size: 26px;
  margin: 20px 0;

  span {
    font-size: 16px;
    font-weight: 400;
    text-decoration: line-through;
    padding-right: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  @media (max-width: 1250px) {
    font-size: 21px;

    span {
      font-size: 14px;
    }
  }
`;

export const ProductSizeWrapper = styled.div`
  /* border: 1px solid green; */
  padding: 30px 0 10px;

  h1 {
    font-size: 15px;
    font-weight: 400;
  }

  @media (max-width: 1250px) {
    padding: 7px 0 7px;
  }
`;

export const ButtonsWrapper = styled.div`
  height: 60px;
  /* border: 1px solid green; */
  margin: 17px 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1250px) {
    margin: 8px 0;
  }
`;

export const AddToCartBtn = styled.input`
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

  @media (max-width: 1250px) {
    width: 80%;
    height: 50px;
    font-size: 18px;
  }
`;

export const WishListBtn = styled.div`
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
    background: rgba(0, 0, 0, 0.06);
    filter: brightness(1.4);
  }

  @media (max-width: 1250px) {
    width: 17%;
    max-width: 65px;
    height: 50px;
    /* height: ; */
  }
`;

export const Description = styled.div`
  font-size: 16px;
  display: block;
  max-width: 1200px;
  padding: 0 310px 30px 0;
  margin: 0 auto;
  /* border: 1px solid black; */

  h1 {
    font-size: 17px;
    padding-bottom: 7px;
  }

  @media (max-width: 1250px) {
    border: 1px solid red;
    padding: 8px 20px;
  }
`;
