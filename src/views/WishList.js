import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const WishList = () => {
  return (
    <Wrapper>
      <SectionTitle withoutUnderline center>
        Wish List
      </SectionTitle>
    </Wrapper>
  );
};

export default WishList;
