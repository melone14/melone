import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  background: rgba(255, 255, 255, 0);
  height: 85px;
  width: 100%;
  color: #383838;
  border-bottom: 1px solid rgba(201, 201, 201, 0.9);
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  font-size: 17px;
  position: fixed;
  top: 0;
`;

export const Logo = styled.img`
  height: 75px;
  width: auto;
  /* border: 1px solid red; */
  display: block;
  margin: 5px auto 5px auto;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid blue; */
  padding-left: 100px;
`;

export const NavListItem = styled.li`
  font-size: 14px;
  margin-right: 25px;
`;

export const NavIconsWrapper = styled.ul`
  /* border: 1px solid yellow; */
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 9px;
  cursor: pointer;
  background-image: ${({ icon }) => (icon ? `url(${icon})` : '')};
`;

export const SearchBarWrapper = styled.div`
  /* border: 1px solid #383838; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBarInput = styled.input`
  border: none;
  border-bottom: 1px solid #383838;
  font-size: 14px;
  color: #383838;
  background: inherit;
  outline: none;
  padding-bottom: 2px;
  margin-left: 90px;
  font-family: 'Montserrat', sans-serif;
`;
