import {
  Logo,
  NavIconsWrapper,
  NavigationWrapper,
  NavList,
  NavListItem,
  Icon,
  SearchBarInput,
  SearchBarWrapper,
  StyledLink,
} from './Navigation.style';
import { useEffect, useState } from 'react';
import logo from 'assets/images/logo.png';
import heart from 'assets/icons/heart.svg';
import cart from 'assets/icons/cart.svg';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [navbarScroll, setNavbarScroll] = useState(false);

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
      <NavigationWrapper className={navbarScroll ? 'active' : null}>
        <NavList className={navbarScroll ? 'active' : null}>
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
        <SearchBarWrapper className={navbarScroll ? 'active' : null}>
          <SearchBarInput placeholder="SZUKAJ" />
        </SearchBarWrapper>
        <NavIconsWrapper className={navbarScroll ? 'active' : null}>
          <Icon icon={cart}></Icon>
          <Icon icon={heart}></Icon>
          <Icon icon={heart}></Icon>
        </NavIconsWrapper>
      </NavigationWrapper>
    </header>
  );
};

export default Navigation;
