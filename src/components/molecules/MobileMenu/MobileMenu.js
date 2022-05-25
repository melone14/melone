import { Wrapper, MobileLinksWrapper } from './MobileMenu.style';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import { StyledLink } from 'components/organisms/Navigation/Navigation.style';

const MobileMenu = ({ visible }) => {
  return (
    <Wrapper visible={visible}>
      <SectionTitle center>Menu</SectionTitle>
      <MobileLinksWrapper>
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
    </Wrapper>
  );
};

export default MobileMenu;
