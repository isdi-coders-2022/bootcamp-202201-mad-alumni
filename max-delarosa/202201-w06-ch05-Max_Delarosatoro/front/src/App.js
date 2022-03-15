import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Header } from './components/core/Header/Header';
import { Footer } from './components/core/Footer/Footer';
import AddRobot from './components/AddRobot/AddRobot';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-robot" element={<AddRobot />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
