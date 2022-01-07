import { useState } from 'react';

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
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

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
                <Input
                  placeholder="Imię"
                  bottomSpace
                  value={firstName}
                  onChange={handleFirstNameChange}
                  id="firstName"
                  name="firstName"
                />
                <Input
                  placeholder="Adres e-mail"
                  value={email}
                  onChange={handleEmailChange}
                  id="email"
                  name="email"
                />
                <CheckboxsWrapper>
                  <Gender>
                    <Checkbox type="checkbox" id="women" name="women" />
                    <Label for="women">Kobiety</Label>
                  </Gender>
                  <Gender>
                    <Checkbox type="checkbox" id="men" name="men" />
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
