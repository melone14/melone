import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 80vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
`;

export const MobileLinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;

  li {
    padding: 10px 0;
    text-align: center;
  }

  li a:hover {
    color: inherit;
    border-bottom: none;
  }
`;
