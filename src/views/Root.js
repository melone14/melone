import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Home from 'views/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import ProductCart from './ProductCart';
import Login from './Login';
import Footer from 'components/organisms/Footer/Footer';

const Root = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <MainTemplate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kobiety/*" element={<Products />} />
          <Route path="/mezczyzni/*" element={<Products />} />
          <Route path="/wyprzedaz" element={<Products />} />
          <Route path="/products/:id" element={<ProductCart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainTemplate>
      <Footer />
    </ThemeProvider>
  </div>
);

export default Root;
