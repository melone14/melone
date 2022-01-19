import {
  Logo,
  NavIconsWrapper,
  NavigationWrapper,
  NavList,
  NavListItem,
  SearchBarInput,
  SearchBarWrapper,
  StyledLink,
} from './Navigation.style';
import { useEffect, useState } from 'react';
import logo from 'assets/images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import styled from 'styled-components';

import heart from 'assets/icons/heart.svg';
import user from 'assets/icons/user.svg';
import cart from 'assets/icons/cart.svg';

const Basket = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 300px;
  height: 200px;
  border: 1px solid red;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  /* border: 1px solid black; */

  background: url(${({ icon }) => (icon ? icon : '')}) center/cover no-repeat
    border-box;

  svg {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

// const StyledLink = styled(Link)`
//   color: ${({ theme }) => theme.colors.black};
// `;

const Navigation = () => {
  const [navbarScroll, setNavbarScroll] = useState(false);
  const { pathname } = useLocation();

  const handleNavbarScroll = () => {
    if (window.scrollY >= 2) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarScroll);

    return () => window.removeEventListener('scroll', handleNavbarScroll);
  }, []);

  return (
    <header>
      <NavigationWrapper
        className={
          navbarScroll
            ? 'active'
            : null || pathname.length > 2
            ? 'active'
            : null
        }
      >
        <NavList
          className={
            navbarScroll
              ? 'active'
              : null || pathname.length > 2
              ? 'active'
              : null
          }
        >
          <NavListItem>
            <StyledLink to="/kobiety">KOBIETY</StyledLink>
          </NavListItem>
          <NavListItem>
            <StyledLink to="/mezczyzni">MĘŻCZYŹNI</StyledLink>
          </NavListItem>
          <NavListItem>
            <StyledLink to="/wyprzedaz">WYPRZEDAŻ</StyledLink>
          </NavListItem>
        </NavList>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <SearchBarWrapper
          className={
            navbarScroll
              ? 'active'
              : null || pathname.length > 2
              ? 'active'
              : null
          }
        >
          <SearchBarInput placeholder="SZUKAJ" />
          <NavIconsWrapper
            className={
              navbarScroll
                ? 'active'
                : null || pathname.length > 2
                ? 'active'
                : null
            }
          >
            <StyledLink to="/koszyk">
              {/* <HiIcons.HiOutlineShoppingBag /> */}
              <Icon icon={cart} />
            </StyledLink>
            <StyledLink to="/ulubione">
              {/* <FaIcons.FaRegHeart /> */}
              <Icon icon={heart} />
            </StyledLink>
            <StyledLink to="/login">
              {/* <FaIcons.FaRegUser /> */}
              <Icon icon={user} />
            </StyledLink>
          </NavIconsWrapper>
        </SearchBarWrapper>
      </NavigationWrapper>
    </header>
  );
};

export default Navigation;
