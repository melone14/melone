import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 30px 0 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1250px) {
    border: 2px solid red;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
  }
`;

export const ImageGalery = styled.div`
  width: 60%;
  max-width: 650px;
  display: flex;
  align-items: center;
  height: 636px;

  @media (max-width: 1250px) {
    border: 2px solid blue;
    width: 94%;
    max-width: 900px;
    /* height: unset; */
    height: 520px;
    flex-direction: column-reverse;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export const MainImage = styled.div`
  width: 80%;
  border-radius: 10px;
  height: 636px;
  background: ${({ mainImage }) =>
    `url(${mainImage}) center/cover no-repeat border-box`};

  @media (max-width: 1250px) {
    background: ${({ mainImage }) =>
      `url(${mainImage}) center/contain no-repeat border-box`};
    height: 365px;
  }
`;

export const SmallImagesWrapper = styled.div`
  width: 20%;
  height: 636px;
  margin: auto 20px auto 0;
  overflow-y: scroll;
  justify-content: space-around;

  &::-webkit-scrollbar {
    width: 5px;
    padding-right: 10px;
  }

  &::-webkit-scrollbar-track {
    background: inherit;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1250px) {
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 140px;
    overflow-x: scroll;
    overflow-y: hidden;
    margin: 0 auto;
    flex-shrink: 0;

    &::-webkit-scrollbar {
      height: 5px;
    }
  }
`;

export const SmallImage = styled.img`
  width: 95%;
  height: auto;
  display: block;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 10px;
  margin: 15px auto;
  /* overflow: hidden; */

  &:hover {
    border-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1250px) {
    width: 120px;
    height: auto;
    border: 1px solid red;
    margin: 0 5px;
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
