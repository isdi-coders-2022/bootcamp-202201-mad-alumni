import { Route, Routes } from 'react-router-dom';
import PersonalData from './PersonalData';
import './Form.css';
import AccessData from './AccessData';
import ReviewData from './ReviewData';
import Login from './Login';
import LoggedIn from './LoggedIn';

export default function Form() {
    return (
        <Routes>
            <Route path="/form/personal-data" element={<PersonalData />} />
            <Route path="/form/access-data" element={<AccessData />} />
            <Route path="/form/review-data" element={<ReviewData />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logged-in" element={<LoggedIn />} />
        </Routes>
    );
}
