import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import App from './App';

ReactDOM.render(
  <Container maxWidth="md">
    <App />
  </Container>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
