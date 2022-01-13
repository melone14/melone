import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

export const NavigationWrapper = styled.nav`
  background: rgba(255, 255, 255, 0);
  height: 85px;
  width: 100%;
  color: #383838;
  border-bottom: 0px solid white;
  box-shadow: rgb(221, 221, 221) 0px -1px inset;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  font-size: 17px;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out;
  z-index: 10;

  &.active {
    background: rgba(255, 255, 255, 0.95);
  }
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
  padding-left: 50px;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  position: relative;
  right: 1000px;

  &.active {
    opacity: 1;
    right: 0;
  }
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
  opacity: 0;
  transition: all 0.5s ease-in-out;
  left: 1000px;
  position: relative;
  font-size: 30px;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.black};

  &.active {
    opacity: 1;
    left: 0;
  }

  svg {
    margin-right: 5px;
    cursor: pointer;
    transition: all 0.3s;
  }

  svg:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const SearchBarWrapper = styled.div`
  /* border: 1px solid #383838; */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  position: relative;
  left: 1000px;

  &.active {
    opacity: 1;
    left: 0;
  }
`;

export const SearchBarInput = styled.input`
  border: none;
  border-bottom: 1px solid #383838;
  font-size: 14px;
  color: #383838;
  background: inherit;
  outline: none;
  padding-bottom: 2px;
  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledLink = styled(NavLink)`
  color: #383838;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;

  &.active {
    font-weight: 600;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    padding-bottom: 10px;
  }
`;
