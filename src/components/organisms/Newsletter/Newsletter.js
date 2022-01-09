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
                  gender: [],
                }}
                validationSchema={Yup.object({
                  firstName: Yup.string()
                    .min(
                      2,
                      'Twoje imię na pewno posiada więcej niż jedną literę'
                    )
                    .max(20, 'Twoje imię na pewno nie jest takie długie')
                    .required('Required'),
                  email: Yup.string()
                    .email('Nieprawidłowy mail')
                    .required('Required'),
                  gender: Yup.array().of(Yup.string()),
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
              </Formik>
            </InputInnerWrapper>
          </InputWrapper>
        </ContentWrapper>
      </BackgroundImage>
    </Wrapper>
  );
};

export default Newsletter;
