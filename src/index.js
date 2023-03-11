import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'templates/ScrollToTop/ScrollToTop';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider
        autoHideDuration={3000}
        dense
        disableWindowBlurListener
        maxSnack={5}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <ScrollToTop>
          <Root />
        </ScrollToTop>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
