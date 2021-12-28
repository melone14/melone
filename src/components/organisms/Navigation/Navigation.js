import {
  Logo,
  NavIconsWrapper,
  NavigationWrapper,
  NavList,
  NavListItem,
  Icon,
  SearchBarInput,
  SearchBarWrapper,
} from './Navigation.style';
import logo from 'assets/images/logo.png';
import heart from 'assets/icons/heart.svg';
import cart from 'assets/icons/cart.svg';

const Navigation = () => {
  return (
    <header>
      <NavigationWrapper>
        <NavList>
          <NavListItem>KOBIETY</NavListItem>
          <NavListItem>MĘŻCZYŹNI</NavListItem>
          <NavListItem>WYPRZEDAŻ</NavListItem>
        </NavList>
        <Logo src={logo} />
        <SearchBarWrapper>
          <SearchBarInput placeholder="SZUKAJ" />
        </SearchBarWrapper>
        <NavIconsWrapper>
          <Icon icon={cart}></Icon>
          <Icon icon={heart}></Icon>
          <Icon icon={heart}></Icon>
        </NavIconsWrapper>
      </NavigationWrapper>
    </header>
  );
};

export default Navigation;
