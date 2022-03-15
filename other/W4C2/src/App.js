import { useState } from 'react';
import './App.css';
import { Gentleman } from './components/gentleman';
import { GENTLEMEN } from './components/gentlemen.data';
import { Header } from './components/header';
function App() {
  const [gentlemen, setgentlemen] = useState(GENTLEMEN);

  const deleteman = (gentleman) => {
    setgentlemen(gentlemen.filter((item) => item.id !== gentleman.id));
  };

  return (
    <div className="App">
      <Header></Header>
      <ul className="gentlemen">
        {gentlemen.map((gentleman, i) => {
          console.log(gentleman);
          return (
            <Gentleman key={i} gentleman={gentleman} deleteman={deleteman} />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
