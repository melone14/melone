import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
html {
    box-sizing: border-box;
}
*, *::after,*::before{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}
 
body {
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme }) => theme.colors.smokedWhite};
    color: ${({ theme }) => theme.colors.black};
    
    a, button {
        font-family: 'Montserrat', sans-serif;
    }
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  padding-right: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.3); 
border-radius: 20px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.6); 
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;
