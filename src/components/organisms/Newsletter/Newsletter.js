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
import { Formik } from 'formik';
import * as Yup from 'yup';

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
              <Formik
                initialValues={{
                  firstName: '',
                  email: '',
                  women: false,
                  men: false,
                }}
                validationSchema={Yup.object({
                  firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                  email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                  women: Yup.boolean(),
                  men: Yup.boolean(),
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
                          {...formik.getFieldProps('women')}
                        />
                        <Label htmlFor="women">Kobiety</Label>
                      </Gender>
                      <Gender>
                        <Checkbox
                          type="checkbox"
                          id="men"
                          {...formik.getFieldProps('men')}
                        />
                        <Label htmlFor="men">Mężczyźni</Label>
                      </Gender>
                    </CheckboxsWrapper>
                  </InputsWrapper>
                )}
              </Formik>
              <SubmitButton>Wyślij</SubmitButton>
            </InputInnerWrapper>
          </InputWrapper>
        </ContentWrapper>
      </BackgroundImage>
    </Wrapper>
  );
};

export default Newsletter;
