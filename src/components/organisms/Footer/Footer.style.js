import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.footer`
  background: white;
  padding: 20px 0 40px 0;
`;

export const InnerWrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
`;

export const ListWrapper = styled.ul`
  display: block;
  list-style: none;
  width: 22%;

  p {
    font-weight: 600;
    padding-bottom: 12px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
  }

  h2,
  a {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }

  a:hover {
    color: black;
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
