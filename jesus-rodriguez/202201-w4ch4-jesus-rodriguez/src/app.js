import './app.css';
// import { Routes, Route } from 'react-router-dom';
import { PersonalData } from './components/personalData';
import { AccessData } from './components/accesData';
import { Confirmation } from './components/confirmation';

export function App() {
    return (
        <div className="app">
            <form action="">
                <ul>
                    <PersonalData />
                    <AccessData />
                    <Confirmation />
                </ul>
            </form>
            <main className="app-main">
                {/* <Routes>

                    <Route path="/" element={<ToDo />} />
                    <Route path="/home" element={<ToDo />} />
                    <Route path="/gents" element={<GentlemenPage />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<ToDo />} />
                </Routes> */}
            </main>
        </div>
    );
}
