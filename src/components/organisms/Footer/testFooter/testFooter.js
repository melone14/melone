import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import { melone, customerService, shopPolicy, contact } from './links';
import SocialIcon from './SocialIcon';

import logo from 'assets/images/logo.png';
import facebook from 'assets/icons/facebook.svg';
import instagram from 'assets/icons/instagram.svg';
import youtube from 'assets/icons/youtube.svg';

const Wrapper = styled.footer`
  /* background: #1b1b1b; */
  background: white;
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 15px 15px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    /* border: 1px solid blue; */
    flex-direction: row;
    width: 100%;
    max-width: 1000px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
    padding-top: 30px;
  }
`;

const SocialsWrapper = styled.div`
  position: relative;
  height: 10vh;
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 750px) {
    width: 100%;
    max-width: 1000px;
    margin: 20px auto;
  }
`;

const LogoWrapper = styled.div`
  /* background-color: #dedfe0; */
  height: 12vh;
  /* max-height: 58px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const TestFooter = () => (
  <Wrapper>
    <InnerWrapper>
      <Content>
        <Accordion heading="MELONE" links={melone} melone />
        <Accordion heading="Obsługa klienta" links={customerService} />
        <Accordion heading="Polityka sklepu" links={shopPolicy} />
        <Accordion heading="Kontakt" links={contact} />
      </Content>
      <SocialsWrapper>
        <SocialIcon to="/" icon={facebook} />
        <SocialIcon to="/" icon={youtube} />
        {/* <SocialIcon to="/" icon={twitterIcon} /> */}
        <SocialIcon to="/" icon={instagram} />
      </SocialsWrapper>
      {/* <StyledRights>©2020-2022 Melone S.A. - All rights reserved</StyledRights> */}
      <LogoWrapper>
        {/* <StyledLogo to="/" />
        <StyledRights>
          ©2020-2022 Melone S.A. - All rights reserved
        </StyledRights> */}
        <Logo src={logo} />
        <Copyright>©2022-2024 Melone S.A. - All rights reserved</Copyright>
      </LogoWrapper>
    </InnerWrapper>
  </Wrapper>
);

export default TestFooter;
