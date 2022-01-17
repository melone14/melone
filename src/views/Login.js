import styled from 'styled-components';

const Wrapper = styled.section`
  height: 85vh;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  width: 50%;
  border-right: 2px solid ${({ theme }) => theme.colors.black};
  /* border: 2px solid ${({ theme }) => theme.colors.black}; */
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterWrapper = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.form`
  width: 70%;
  max-width: 400px;
  height: 500px;
  border: 1px solid red;
`;

const Login = () => {
  return (
    <Wrapper>
      <LoginWrapper>
        <FormWrapper></FormWrapper>
      </LoginWrapper>
      <RegisterWrapper>
        <FormWrapper></FormWrapper>
      </RegisterWrapper>
    </Wrapper>
  );
};

export default Login;
