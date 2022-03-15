import { Routes, Route } from 'react-router-dom';
import { CocktailList } from './components/cocktail-list/cocktail-list';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { CocktailListFav } from './components/cocktail-list-fav/cocktail-list-fav';
import { Details } from './components/details/details';

function App() {
    const menuOptions = [
        { path: '/', label: 'Home' },
        { path: '/favorites', label: 'Favorites' },
    ];
    return (
        <div className="App">
            <Header menuOptions={menuOptions} />
            <Routes>
                <Route path="/" element={<CocktailList />} />
                <Route path="/home" element={<CocktailList />} />
                <Route path="/favorites" element={<CocktailListFav />} />
                <Route path="/details" element={<Details />} />
            </Routes>

            <Footer />
        </div>
    );
}
export default App;
