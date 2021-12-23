import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Root = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Siemanko</h1>
    </ThemeProvider>
  </div>
);

export default Root;
