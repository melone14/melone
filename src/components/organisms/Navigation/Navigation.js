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
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as GrIcons from 'react-icons/gr';

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
          <FaIcons.FaRegUser />
          <GrIcons.GrBasket />
          <FaIcons.FaRegHeart />
        </NavIconsWrapper>
      </NavigationWrapper>
    </header>
  );
};

export default Navigation;
