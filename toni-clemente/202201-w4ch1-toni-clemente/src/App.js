import logo from './logo.svg';
import './App.css';
import { Header } from './components/core/header';
import { Topheroes } from './components/core/topheroes';
import { Herosearch } from './components/core/herosearch';
import { NewHeroeForm } from './components/core/newheroeform';
import { Heroeslist } from './components/core/heroeslist';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Topheroes></Topheroes>
            <Herosearch></Herosearch>
            <NewHeroeForm></NewHeroeForm>
            <Heroeslist></Heroeslist>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
