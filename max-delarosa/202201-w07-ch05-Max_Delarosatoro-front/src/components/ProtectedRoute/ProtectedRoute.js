import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const auth = useSelector((state) => state.auth);
    if (!auth.token) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
