import styled from 'styled-components';

const Wrapper = styled.section`
  height: 250px;
  max-width: 1250px;
  margin: 0 auto;
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
`;

const InfoWrapper = styled.div`
  width: 30%;
  max-width: 400px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const InfoContent = styled.p`
  font-size: 12px;
  padding: 20px 45px;
  line-height: 1.5;
  text-align: center;
`;

const ShoppingInfo = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Header>
          <InfoTitle>Bezpieczna wysyłka</InfoTitle>
        </Header>
        <InfoContent>
          Współpracujemy z najlepszymi firmami kurierskimi na całym świecie.
          Czas dostawy wynosi zazwyczaj do 7 dni w zależności od miejsca
          przeznaczenia. Darmowa wysyłka od 500 zł.
        </InfoContent>
      </InfoWrapper>
      <InfoWrapper>
        <Header>
          <InfoTitle>14 dni na zwrot</InfoTitle>
        </Header>
        <InfoContent>
          Skorzystaj z formularza zwrotu dołączonego do przesyłki. Pamiętaj, że
          każdy produkt możesz wymienić. Jeśli się wahasz lub potrzebujesz
          porady - skontaktuj się z nami.
        </InfoContent>
      </InfoWrapper>
      <InfoWrapper>
        <Header>
          <InfoTitle>bezpieczna płatność</InfoTitle>
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
