import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-np1e26ci.us.auth0.com"
    clientId="wM1wZElZNo42ObWZ4CbZRB52j7qkNcaP"
    redirectUri={window.location.origin} cacheLocation = 'localstorage'>
      
    <GithubProvider>
      <App />
    </GithubProvider>
    </Auth0Provider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
