import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1400px;
  /* height: 700px; */
  padding: 30px 0;
  margin: 40px auto;
  margin-bottom: 0;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
    height: unset;
    padding-bottom: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 30%;
  max-width: 437px;
  background: grey;
  position: relative;
  overflow: hidden;
  border-radius: 13px 13px 0 0;

  p {
    display: block;
    padding: 20px 0;
    text-align: center;
    background: rgba(255, 255, 255, 0.85);
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    text-transform: uppercase;
    transition: all 0.5s;
  }

  @media (max-width: 800px) {
    width: 80%;
    margin-bottom: 30px;

    p {
      padding: 10px 0;
      font-size: 13px;
    }
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  transition: all 0.8s;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    img {
      transform: scale(1.1);
    }

    p {
      background: rgba(255, 255, 255, 0.92);
    }
  }
`;
