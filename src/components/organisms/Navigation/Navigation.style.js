import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 70px;
  background: rgba(255, 255, 255, 0);
  width: 100%;
  border-bottom: 0px solid white;
  box-shadow: rgb(221, 221, 221) 0px -1px inset;
  color: #383838;
  font-size: 17px;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out;
  z-index: 10;

  &.active {
    background: rgba(255, 255, 255, 0.95);
  }

  @media (min-width: 700px) {
    height: 80px;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
  }

  @media (min-width: 1250px) {
    height: 85px;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
  }
`;

export const HamburgerBtn = styled(FiIcons.FiMenu)`
  font-size: 40px;
  display: block;
  color: ${({ theme }) => theme.colors.black};
  width: 40px;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  display: block;

  @media (min-width: 1250px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 75px;
  width: auto;
  /* border: 1px solid red; */
  display: block;
  margin: 5px auto 5px auto;

  @media (max-width: 700px) {
    height: 54px;
    margin: 8px auto;
  }
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

  @media (max-width: 700px) {
    padding: 0;
    margin: 0;
    margin-left: 25px;
  }
`;

export const NavListItem = styled.li`
  font-size: 14px;
  margin-right: 25px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavIconsWrapper = styled.ul`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  left: 1000px;
  position: relative;
  font-size: 30px;
  margin-left: 30px;
  color: ${({ theme }) => theme.colors.black};
  width: 120px;

  &.active {
    opacity: 1;
    left: 0;
  }

  svg {
    margin-right: 5px;
    cursor: pointer;
    transition: all 0.3s;
    stroke-width: 1.4px;
  }

  svg:hover {
    color: ${({ theme }) => theme.colors.grey};
  }

  @media (max-width: 700px) {
    margin: 0;
    margin-right: 25px;
    width: unset;
  }
`;

export const SearchBarWrapper = styled.div`
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

  @media (max-width: 700px) {
    /* display: none; */
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

  @media (max-width: 700px) {
    display: none;
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
