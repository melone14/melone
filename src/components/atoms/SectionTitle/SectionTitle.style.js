import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  display: ${({ center }) => (center ? 'inline-block' : 'block')};
  margin: 30px auto;
  max-width: 1400px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.black};

  &::after {
    content: '';
    display: block;
    position: absolute;
    /* width: 100px; */
    bottom: -5px;
    left: ${({ center }) => (center ? '25%' : '')};
    right: ${({ center }) => (center ? '25%' : '')};
    min-width: 50px;
    height: 3px;
    border-radius: 40px;
    background: ${({ theme }) => theme.colors.black};
  }
`;
