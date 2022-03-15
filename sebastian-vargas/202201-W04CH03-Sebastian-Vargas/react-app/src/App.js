// import { useState } from "react";
import "./App.css";
import { Info } from "./components/info";
import { Gentleman } from "./components/gentleman";
// import { GENTLEMEN } from "./models/gentleman.data";

function App() {
  // const [gentleman, setGentleman] = useState(GENTLEMEN)
  return (
    <div className="App">
      <Info></Info>
      <main>
        <Gentleman></Gentleman>
      </main>
    </div>
  );
}

export default App;
