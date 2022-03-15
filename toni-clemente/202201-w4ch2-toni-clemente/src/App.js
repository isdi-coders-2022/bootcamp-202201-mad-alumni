import logo from './logo.svg';
import './App.css';
import { Info } from './components/info';
import { Gentleman } from './components/gentleman';

function App() {
    return (
        <div className="App">
            <Info></Info>
            <main class="main">
                <Gentleman></Gentleman>
            </main>
        </div>
    );
}

export default App;
