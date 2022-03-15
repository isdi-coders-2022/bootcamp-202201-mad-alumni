import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './context/context';

ReactDOM.render(
    <Auth0Provider
        domain="dev-71921pa8.us.auth0.com"
        clientId="D6LiRy5NO8DCn5IGwBvVvTPPEcdoUj2N"
        redirectUri={window.location.origin}
    >
        <React.StrictMode>
            <ContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ContextProvider>
        </React.StrictMode>
    </Auth0Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
