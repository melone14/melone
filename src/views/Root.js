import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';

const Root = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <h1>Siemanko</h1>
    </ThemeProvider>
  </div>
);

export default Root;
