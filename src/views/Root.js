import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import styled from 'styled-components';
import bg from 'assets/images/background.jpeg';
import { Routes, Route } from 'react-router-dom';
import ProductCard from 'components/molecules/ProductCard/ProductCard';

const TestBgImg = styled.img`
  height: 100vh;
  width: 100%;
  display: block;
`;

const Root = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <MainTemplate>
        <Routes>
          <Route path="/" element={<TestBgImg src={bg} />} />
          <Route path="/kobiety" element={<h1>kobiety</h1>} />
          <Route path="/mezczyzni" element={<h1>mezczyzni</h1>} />
          <Route path="/wyprzedaz" element={<h1>wyprzedaz</h1>} />
        </Routes>

        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <ProductCard slider bestseller />
        <ProductCard />
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
        <h1>Siema</h1>
      </MainTemplate>
    </ThemeProvider>
  </div>
);

export default Root;
