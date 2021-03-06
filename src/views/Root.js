import { GlobalStyle } from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Home from 'views/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import Basket from './Basket';
import ProductCart from './ProductCart';
import Login from './Login';
import Footer from 'components/organisms/Footer/Footer';
import WishList from './WishList';
import { CartContextProvider } from 'context/cartContext';
import { WishListContextProvider } from 'context/wishListContext';

const Root = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartContextProvider>
        <WishListContextProvider>
          <Navigation />
          <MainTemplate>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kobiety/*" element={<Products />} />
              <Route path="/mezczyzni/*" element={<Products />} />
              <Route path="/wyprzedaz/*" element={<Products />} />
              <Route path="/products/:id" element={<ProductCart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/koszyk" element={<Basket />} />
              <Route path="/ulubione" element={<WishList />} />
            </Routes>
          </MainTemplate>
          <Footer />
        </WishListContextProvider>
      </CartContextProvider>
    </ThemeProvider>
  </div>
);

export default Root;
