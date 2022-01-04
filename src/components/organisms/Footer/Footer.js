import {
  Copyright,
  FooterLink,
  InnerWrapper,
  ListWrapper,
  Logo,
  SocialIcon,
  SocialWrapper,
  Wrapper,
} from './Footer.style';
import logo from 'assets/images/logo.png';
import facebook from 'assets/icons/facebook.svg';
import instagram from 'assets/icons/instagram.svg';
import youtube from 'assets/icons/youtube.svg';

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <ListWrapper>
          <p>MELONE</p>

          <li>
            <FooterLink to="/o-nas">O Nas</FooterLink>
          </li>
          <li>
            <FooterLink to="/nasze-sklepy">Nasze Sklepy</FooterLink>
          </li>
          <li>
            <FooterLink to="/blog">Blog</FooterLink>
          </li>
          <li>
            <FooterLink to="/kariera">Kariera</FooterLink>
          </li>
          <li>
            <FooterLink to="/karta-podarunkowa">Karta Podarunkowa</FooterLink>
          </li>
          <li>
            <FooterLink to="/platnosci">Płatności</FooterLink>
          </li>
        </ListWrapper>
        <ListWrapper>
          <p>Obsługa klienta</p>
          <li>
            <FooterLink to="/polityka-zwrotow">Polityka Zwrotów</FooterLink>
          </li>
          <li>
            <FooterLink to="/zwroty">Zwroty</FooterLink>
          </li>
          <li>
            <FooterLink to="/wysylka">Wysyłka</FooterLink>
          </li>
          <li>
            <FooterLink to="/wymiany-produktow">Wymiany Produktów</FooterLink>
          </li>
          <li>
            <FooterLink to="/newsletter">Newsletter</FooterLink>
          </li>
          <li>
            <FooterLink to="/zglos-blad">Zgłoś Błąd</FooterLink>
          </li>
        </ListWrapper>
        <ListWrapper>
          <p>Polityka Sklepu</p>
          <li>
            <FooterLink to="/blog">Polityka Prywatności</FooterLink>
          </li>
          <li>
            <FooterLink to="/blog">Polityka Cookies</FooterLink>
          </li>
          <li>
            <FooterLink to="/blog">Regulamin Sklepu Internetowego</FooterLink>
          </li>
        </ListWrapper>
        <ListWrapper>
          <p>Kontakt</p>
          <h2>Infolinia</h2>
          <h2>pon. - pt. 8:00 - 20:00</h2>
          <h2> sob. - ns. 9:00 - 17:00</h2>
          <a href="tel:504843220">Tel. 504 84 32 20</a>
          <br /> <br />
          <h2>Współpraca</h2>
          <a href="mailto:bok@melone.pl">bok@melone.pl</a>
          <br /> <br />
          <h2>Inspektor Danych Osobowych</h2>
          <a href="mailto:iod@melone.pl">iod@melone.pl</a>
          <SocialWrapper>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={facebook} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={youtube} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={instagram} />
            </a>
          </SocialWrapper>
        </ListWrapper>
      </InnerWrapper>
      <Logo src={logo} />
      <Copyright>©2020-2022 Melone S.A. - All rights reserved</Copyright>
    </Wrapper>
  );
};

export default Footer;
