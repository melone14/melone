import {
  BackgroundImage,
  ContentWrapper,
  Input,
  InputInnerWrapper,
  InputsWrapper,
  InputWrapper,
  Checkbox,
  CheckboxsWrapper,
  SubmitButton,
  TextWrapper,
  Wrapper,
  Gender,
  Label,
} from './Newsletter.style';

const Newsletter = () => {
  return (
    <Wrapper>
      <BackgroundImage>
        <ContentWrapper>
          <TextWrapper>
            <h1>Newsletter</h1>
            <p>
              Zapisz się do newslettera <br />i odbierz 10% rabatu na pierwsze
              zamówienie!
            </p>
          </TextWrapper>
          <InputWrapper>
            <InputInnerWrapper>
              <InputsWrapper>
                <Input placeholder="Imię" bottomSpace />
                <Input placeholder="Adres e-mail" />
                <CheckboxsWrapper>
                  <Gender>
                    <Checkbox type="checkbox" id="women" />
                    <Label for="women">Kobiety</Label>
                  </Gender>
                  <Gender>
                    <Checkbox type="checkbox" id="men" />
                    <Label for="men">Mężczyźni</Label>
                  </Gender>
                </CheckboxsWrapper>
              </InputsWrapper>
              <SubmitButton>Wyślij</SubmitButton>
            </InputInnerWrapper>
          </InputWrapper>
        </ContentWrapper>
      </BackgroundImage>
    </Wrapper>
  );
};

export default Newsletter;
