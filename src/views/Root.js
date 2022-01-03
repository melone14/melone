import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Home from 'views/Home';
import { Routes, Route } from 'react-router-dom';
import Footer from 'components/organisms/Footer/Footer';

const Root = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <MainTemplate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kobiety" element={<h1>kobiety</h1>} />
          <Route path="/mezczyzni" element={<h1>mezczyzni</h1>} />
          <Route path="/wyprzedaz" element={<h1>wyprzedaz</h1>} />
        </Routes>
      </MainTemplate>
      <Footer />
    </ThemeProvider>
  </div>
);

export default Root;
