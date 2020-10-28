
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'
import Footer from './components/Footer'
import Pokedex from './pages/Pokedex'
import Pokebox from './components/Pokebox'
import Pokecard from './components/Pokecard'
import About from './pages/About'
import Pokemon_api from "./components/Pokemon_api";
import PokemonProfile from "./components/PokemonProfile";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Pokecard} />
          <Route exact path="/about" component={About} />
          <Route path="/pokemon/:id" component={PokemonProfile} />
        </div>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
