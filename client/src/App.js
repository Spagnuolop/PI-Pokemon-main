import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import { CreatePokemon } from "./components/CreatePokemon";
import { Detail } from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createpokemon" element={<CreatePokemon />} />
          <Route path="/pokemons/details/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
