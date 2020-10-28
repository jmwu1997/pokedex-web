import React, {Component, Profiler} from "react";
import Pokebox from "./Pokebox";
import pokemon from "pokemon";
import PokemonProfile from "./PokemonProfile"



export default class Pokecard extends Component {


    render() {
        var elements=[];
        var image;
        for(var i=1;i<152;i++){
            image= "/images/"+i+".png"
            elements.push(<Pokebox value={i} name={pokemon.getName(i)} img={image}/>);
        }
        return (
            <ul>
            {elements}
            </ul>
        );
    }

}