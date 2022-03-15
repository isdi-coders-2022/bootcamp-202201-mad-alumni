import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from '../../App';

ReactDOM.render(
    <Auth0Provider
        domain="dev-71921pa8.us.auth0.com"
        clientId="D6LiRy5NO8DCn5IGwBvVvTPPEcdoUj2N"
        redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>,
    document.getElementById('root') /* window.location.origin */
);
