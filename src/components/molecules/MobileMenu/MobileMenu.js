import {
  MobileWrapper,
  MobileLinksWrapper,
  Wrapper,
  MobileHeader,
  CloseButton,
} from './MobileMenu.style';
import * as CgIcons from 'react-icons/cg';
import { StyledLink } from 'components/organisms/Navigation/Navigation.style';

const MobileMenu = ({ visible, handler }) => {
  return (
    <Wrapper visible={visible} onClick={handler}>
      <MobileWrapper visible={visible}>
        <CloseButton>
          <CgIcons.CgClose />
        </CloseButton>
        <MobileHeader>MENU</MobileHeader>
        <MobileLinksWrapper className="mobileList">
          <li>
            <StyledLink to="/kobiety">KOBIETY</StyledLink>
          </li>
          <li>
            <StyledLink to="/mezczyzni">MĘŻCZYŹNI</StyledLink>
          </li>
          <li>
            <StyledLink to="/wyprzedaz">WYPRZEDAŻ</StyledLink>
          </li>
          <li>
            <StyledLink to="/ulubione">ULUBIONE</StyledLink>
          </li>
          <li>
            <StyledLink to="/login">ZALOGUJ</StyledLink>
          </li>
        </MobileLinksWrapper>
      </MobileWrapper>
    </Wrapper>
  );
};

export default MobileMenu;
