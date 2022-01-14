import {
  Image,
  ImageWrapper,
  StyledLink,
  Wrapper,
} from './CategoryImages.style';
import kurtki from 'assets/images/kurtki.jpg';
import sukienki from 'assets/images/sukienki.jpg';
import dresy from 'assets/images/dresy.jpg';

const CategoryImages = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <StyledLink to="/kobiety/kurtki-plaszcze">
          <Image src={kurtki} />
          <p>Kurtki i płaszcze</p>
        </StyledLink>
      </ImageWrapper>
      <ImageWrapper>
        <StyledLink to="/kobiety/sukienki-spodnice">
          <Image src={sukienki} />
          <p>Sukienki i spódnice</p>
        </StyledLink>
      </ImageWrapper>
      <ImageWrapper>
        <StyledLink to="/kobiety/dresy">
          <Image src={dresy} />
          <p>Dresy</p>
        </StyledLink>
      </ImageWrapper>
    </Wrapper>
  );
};

export default CategoryImages;
