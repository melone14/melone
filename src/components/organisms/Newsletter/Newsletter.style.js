import styled from 'styled-components';
import { Field } from 'formik';

import bg2 from 'assets/images/newsletter2.jpg';

export const Wrapper = styled.section`
  height: 620px;
  margin-top: 65px;
  overflow-y: hidden;
`;

export const BackgroundImage = styled.div`
  width: 90%;
  height: 620px;
  max-width: 1400px;
  padding: 80px 0;
  margin: 0 auto;
  background: url(${bg2}) center/cover no-repeat border-box;

  @media (max-width: 1100px) {
    width: 94%;
  }
`;

export const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1180px;
  margin: 0 auto;
  height: 460px;
  background: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    height: 505px;
  }
`;

export const TextWrapper = styled.div`
  width: 43%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 35px;
    letter-spacing: 1px;
    font-weight: 700;
    padding-bottom: 10px;
  }

  p {
    font-size: 27px;
    font-weight: 400;
    line-height: 1.3;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 18px;
    }

    h1,
    p {
      text-align: center;
    }
  }

  @media (max-width: 1100px) {
    width: 95%;
    max-width: 612px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 281px;
  height: 350px;

  @media (max-width: 1100px) {
    width: 300px;
    border: 1px solid red;
  }
`;

export const InputInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
`;

export const InputsWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 280px;
  height: 50px;
  background: inherit;
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  outline: none;
  margin-bottom: ${({ bottomSpace }) => (bottomSpace ? '15px' : '0')};
  border: 1px solid red;
`;

export const CheckboxsWrapper = styled.div`
  height: 50px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid blue; */
`;

export const Gender = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid green; */
`;

export const Label = styled.label`
  font-size: 13px;
  cursor: pointer;
`;

export const Checkbox = styled(Field)`
  width: 15px;
  height: 15px;
  margin: 0 5px 0 5px;
  background: inherit;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 65px;
  display: block;
  padding: 15px 0;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  background: inherit;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s all;
  position: relative;
  right: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.black};
    border: 2px solid inherit;
    color: white;
  }
`;
