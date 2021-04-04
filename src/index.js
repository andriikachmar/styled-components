import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';
import './index.css';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas
}
`;

const theme = {
    colors: {
        primary: '#f00',
        secondary: '#fff',
    },
    media: {
        phone: '(max-width:425px)',
        tablet: '(max-width:768px) and (min-width:425px)',
    },
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Global />
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
);
