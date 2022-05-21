import {
  Logo,
  NavIconsWrapper,
  NavigationWrapper,
  NavList,
  NavListItem,
  SearchBarInput,
  SearchBarWrapper,
  StyledLink,
  HamburgerBtn,
} from './Navigation.style';
import { useEffect, useState, useContext } from 'react';
import logo from 'assets/images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { cartContext } from 'context/cartContext';

import * as FiIcons from 'react-icons/fi';
import CartDropdown from 'components/molecules/CartDropdown/CartDropdown';

const Navigation = () => {
  const [navbarScroll, setNavbarScroll] = useState(false);
  const { pathname } = useLocation();
  const { products } = useContext(cartContext);

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
          <HamburgerBtn />
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
            <StyledLink to="/koszyk" className="cartIcon">
              <span>{products.length}</span>
              <FiIcons.FiShoppingBag />
              <CartDropdown />
            </StyledLink>
            <StyledLink to="/ulubione">
              <FiIcons.FiHeart />
            </StyledLink>
            <StyledLink to="/login">
              <FiIcons.FiUser />
            </StyledLink>
          </NavIconsWrapper>
        </SearchBarWrapper>
      </NavigationWrapper>
    </header>
  );
};

export default Navigation;
