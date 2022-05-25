import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: ${({ visible }) => (visible ? '0' : '-100%')};
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  z-index: 5;
`;

export const MobileWrapper = styled.nav`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 80vw;
  height: 100vh;
  background: rgb(252, 252, 252);
  transition: all 0.2s;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  left: ${({ visible }) => (visible ? '0' : '-100%')};
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
