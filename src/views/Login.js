import {
  Wrapper,
  LoginWrapper,
  SectionTitle,
  StyledInput,
  SubmitBtn,
  FormWrapper,
  RegisterWrapper,
} from './styles/Login.style';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

const Login = () => {
  return (
    <Wrapper>
      <LoginWrapper>
        <FormWrapper>
          <SectionTitle>Zaloguj się</SectionTitle>
          <StyledInput type="email" placeholder="E-mail" />
          <StyledInput type="password" placeholder="Hasło" />
          <SubmitBtn type="submit" value="Zaloguj" />
        </FormWrapper>
      </LoginWrapper>
      <RegisterWrapper>
        <FormWrapper>
          <SectionTitle>Zaresejstruj się</SectionTitle>
          <StyledInput type="text" placeholder="Imię" />
          <StyledInput type="text" placeholder="Nazwisko" />
          <StyledInput type="email" placeholder="E-mail" />
          <StyledInput type="password" placeholder="Hasło" />
          <StyledInput type="password" placeholder="Powtórz hasło" />
          <SubmitBtn type="submit" value="Zarejestruj" />
        </FormWrapper>
      </RegisterWrapper>
    </Wrapper>
  );
};

export default Login;
