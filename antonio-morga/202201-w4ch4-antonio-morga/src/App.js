import './App.css';
import { Footer } from './components/core/footer';
import { Header } from './components/core/header';
import { PersonalData } from './components/personal-page/personal-data';

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalData />
      <Footer />
    </div>
  );
}

export default App;
