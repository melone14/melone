import { MobileWrapper, MobileLinksWrapper, Wrapper } from './MobileMenu.style';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import { StyledLink } from 'components/organisms/Navigation/Navigation.style';

const MobileMenu = ({ visible, handler }) => {
  return (
    <Wrapper visible={visible} onClick={handler}>
      <MobileWrapper visible={visible}>
        <SectionTitle center>Menu</SectionTitle>
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
        </MobileLinksWrapper>
      </MobileWrapper>
    </Wrapper>
  );
};

export default MobileMenu;
