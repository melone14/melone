import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.footer`
  background: white;
  padding: 15px 0 40px 0;
`;

export const InnerWrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding-top: 30px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ListWrapper = styled.ul`
  display: block;
  list-style: none;
  width: 22%;
  /* border: 1px solid green; */
  /* text-align: center; */

  p {
    font-weight: 600;
    padding-bottom: 12px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
  }

  h2,
  a {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }

  a:hover {
    color: black;
  }

  @media (max-width: 800px) {
    border: 1px solid red;
    width: 95%;
    margin: 0 auto;
    padding: 8px 0 8px 10px;
    font-size: 12px;

    p {
      padding: 0;
    }
  }
`;

export const Logo = styled.img`
  width: 170px;
  height: auto;
  display: block;
  margin: 5px auto 5px auto;
`;

export const Copyright = styled.h1`
  font-size: 12px;
  text-align: center;
  font-weight: 400;
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  padding-bottom: 7px;
  display: block;

  &:hover {
    color: black;
  }
`;

export const SocialWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin: 14px 0 10px 20px;
`;

export const SocialIcon = styled.img`
  display: block;
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
