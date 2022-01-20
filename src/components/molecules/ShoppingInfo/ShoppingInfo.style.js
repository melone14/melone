import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 250px;
  max-width: 1250px;
  margin: 10px auto;

  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  width: 30%;
  max-width: 400px;
  min-height: 180px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  height: 50px;
  width: 70%;
  max-width: 300px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoTitle = styled.h1`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;

  svg {
    font-size: 28px;
    margin-right: 7px;
  }
`;

export const StyledIcon = styled.div`
  margin-right: 9px;
  width: 28px;
  height: ${({ h }) => (h ? h : '28px')};
  background: url(${({ icon }) => icon}) center/cover no-repeat border-box;
`;

export const InfoContent = styled.p`
  font-size: 12px;
  padding: 20px 45px;
  line-height: 1.5;
  text-align: center;
  min-height: 114px;
  /* border: 1px solid red; */
`;
