import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1400px;
  height: 700px;
  margin: 40px auto;
  margin-bottom: 0;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImageWrapper = styled.div`
  width: 30%;
  max-width: 437px;
  height: 655px;
  background: grey;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  p {
    display: block;
    padding: 20px 0;
    text-align: center;
    background: rgba(255, 255, 255, 0.85);
    position: absolute;
    left: 7px;
    right: 7px;
    bottom: 7px;
    text-transform: uppercase;
    transition: all 0.5s;
    border-radius: 20px;
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
