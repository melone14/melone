import styled from 'styled-components';
import * as GoIcons from 'react-icons/go';
import * as BsIcons from 'react-icons/bs';
import deliveryIcon from 'assets/icons/deliveryIcon.svg';
import lockedIcon from 'assets/icons/lockedIcon.svg';
import returnIcon from 'assets/icons/returnIcon.svg';

const Wrapper = styled.section`
  height: 250px;
  max-width: 1250px;
  margin: 10px auto;

  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoWrapper = styled.div`
  width: 30%;
  max-width: 400px;
  min-height: 180px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  height: 50px;
  width: 70%;
  max-width: 300px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoTitle = styled.h1`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;

  svg {
    font-size: 28px;
    margin-right: 7px;
  }
`;

const StyledIcon = styled.div`
  margin-right: 9px;
  width: 28px;
  height: ${({ h }) => (h ? h : '28px')};
  background: url(${({ icon }) => icon}) center/cover no-repeat border-box;
`;

const InfoContent = styled.p`
  font-size: 12px;
  padding: 20px 45px;
  line-height: 1.5;
  text-align: center;
  min-height: 114px;
  /* border: 1px solid red; */
`;

const ShoppingInfo = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Header>
          <InfoTitle>
            <StyledIcon h="29px" icon={deliveryIcon} /> Bezpieczna wysyłka
          </InfoTitle>
        </Header>
        <InfoContent>
          Współpracujemy z najlepszymi firmami kurierskimi na całym świecie.
          Czas dostawy wynosi zazwyczaj do 7 dni w zależności od miejsca
          przeznaczenia. Darmowa wysyłka od 500 zł.
        </InfoContent>
      </InfoWrapper>
      <InfoWrapper>
        <Header>
          <InfoTitle>
            <StyledIcon icon={returnIcon} />
            14 dni na zwrot
          </InfoTitle>
        </Header>
        <InfoContent>
          Skorzystaj z formularza zwrotu dołączonego do przesyłki. Pamiętaj, że
          każdy produkt możesz wymienić. Jeśli się wahasz lub potrzebujesz
          porady - skontaktuj się z nami.
        </InfoContent>
      </InfoWrapper>
      <InfoWrapper>
        <Header>
          <InfoTitle>
            {/* <StyledIcon icon={lockedIcon} /> */}
            <BsIcons.BsLock />
            bezpieczna płatność
          </InfoTitle>
        </Header>
        <InfoContent>
          Monitorujemy wszystkie transakcje, korzystamy z technologii
          szyfrowania danych, dbając o bezpieczeństwo naszych klientów.
        </InfoContent>
      </InfoWrapper>
    </Wrapper>
  );
};

export default ShoppingInfo;
