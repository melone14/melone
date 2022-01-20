import {
  Wrapper,
  InfoWrapper,
  Header,
  InfoTitle,
  StyledIcon,
  InfoContent,
} from './ShoppingInfo.style';
import * as BsIcons from 'react-icons/bs';
import deliveryIcon from 'assets/icons/deliveryIcon.svg';
import returnIcon from 'assets/icons/returnIcon.svg';

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
