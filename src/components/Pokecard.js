import React, {Component, Profiler} from "react";
import Pokebox from "./Pokebox";
import pokemon from "pokemon";
import PokemonProfile from "./PokemonProfile"



export default class Pokecard extends Component {
    constructor(props) {
        super(props);
        this.state = { pokemon: '' };
      }
    
    myChangeHandler = (event) => {
    this.setState({pokemon: event.target.value});
    }

    render() {
        var pokebox=[];
        let pokemons=new Map();
        var searchpokebox=[]; 
        var image;
        for(var i=1;i<152;i++){
            image= "/images/"+i+".png"
            pokebox.push(<Pokebox value={i} name={pokemon.getName(i)} img={image}/>);
            pokemons.set(pokemon.getName(i).toLowerCase(),i);
        }
        //console.log(elements[0].props.name)
        //console.log(pokemons)
        if (this.state.pokemon!= ""){
            for (const [key, value] of pokemons.entries()) {
                if(key.startsWith(this.state.pokemon.toLowerCase())){
                    image= "/images/"+value+".png"
                    searchpokebox.push(<Pokebox value={value} name={pokemon.getName(value)} img={image}/>);
                }
            }
            return(
                <div>
                    <form>
                        <input type='text'onChange={this.myChangeHandler}/>
                    </form>
                    <ul>
                        {searchpokebox}
                    </ul>
                </div>
            )
        }else{
            return(
                <div>
                    <form>
                        <input type='text' onChange={this.myChangeHandler}/>
                    </form>
                    <ul>
                        {pokebox}
                    </ul>
                </div>
            )
        }
    }

}