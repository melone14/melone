import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  flex-direction: column;
  height: unset;
  overflow-y: hidden;
  padding-bottom: 40px;

  @media (min-width: 900px) {
    max-width: 1500px;
    height: 85vh;
    flex-direction: row;
  }
`;

export const LoginWrapper = styled.div`
  width: 95%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  margin-bottom: 40px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    width: 50%;
    border: none;
    border-right: 2px solid ${({ theme }) => theme.colors.black};
    height: 400px;
  }
`;

export const RegisterWrapper = styled.div`
  width: 95%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    width: 50%;
    border: none;
  }
`;

export const FormWrapper = styled.form`
  width: 70%;
  max-width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  border: 1px solid black;
  padding: 8px;
  padding-left: 13px;
  font-size: 16px;
  width: 300px;
  height: 50px;
  border-radius: 0;
  margin-bottom: 10px;
  outline: none;
  background: inherit;
  color: ${({ theme }) => theme.colors.black};
`;

export const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 25px;
`;

export const SubmitBtn = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.black};
  color: white;
  width: 200px;
  height: 45px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.black};
  transition: all 0.4s;
  margin-top: 10px;
  font-size: 18px;

  &:hover {
    background: inherit;
    color: ${({ theme }) => theme.colors.black};
  }
`;
