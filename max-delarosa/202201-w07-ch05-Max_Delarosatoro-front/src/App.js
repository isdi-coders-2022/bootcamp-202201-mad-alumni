import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { Header } from './components/core/Header/Header';
import { Footer } from './components/core/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import * as actions from './redux/auth/actionCreators';
import UserDetail from './components/UserDetail/UserDetail';
import Profile from './components/Profile/Profile';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(actions.loginToken());
        }
    });

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/user-detail/:id"
                    element={
                        <ProtectedRoute>
                            <UserDetail />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
