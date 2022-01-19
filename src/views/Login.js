import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
        <FormWrapper>
          {/* <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Nieprawidłowy mail')
                .required('Required'),
             password: Yup.password()
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log('1');
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {(formik) => (
              <InputsWrapper onSubmit={formik.handleSubmit}>
                <div>
                  <Input
                    placeholder="Imię"
                    bottomSpace
                    id="firstName"
                    type="text"
                    {...formik.getFieldProps('firstName')}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}
                  <Input
                    placeholder="Adres e-mail"
                    id="email"
                    type="email"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                  <CheckboxsWrapper>
                    <Gender>
                      <Checkbox
                        type="checkbox"
                        id="women"
                        name="gender"
                        value="women"
                      />
                      <Label htmlFor="women">Kobiety</Label>
                    </Gender>
                    <Gender>
                      <Checkbox
                        type="checkbox"
                        id="men"
                        name="gender"
                        value="men"
                      />
                      <Label htmlFor="men">Mężczyźni</Label>
                    </Gender>
                  </CheckboxsWrapper>
                </div>
                <SubmitButton type="submit">Wyślij</SubmitButton>
              </InputsWrapper>
            )}
          </Formik> */}
        </FormWrapper>
      </LoginWrapper>
      <RegisterWrapper>
        <FormWrapper></FormWrapper>
      </RegisterWrapper>
    </Wrapper>
  );
};

export default Login;
