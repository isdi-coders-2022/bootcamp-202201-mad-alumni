import { useAuth0 } from '@auth0/auth0-react';

export function LogoutButton() {
    const { logout } = useAuth0();

    return (
        <button
            className="button-logout"
            type="button"
            onClick={() => logout({ returnTo: window.location.origin })}
        >
            Log Out
        </button>
    );
}
