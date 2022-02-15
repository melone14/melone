import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'templates/ScrollToTop/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Root />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
