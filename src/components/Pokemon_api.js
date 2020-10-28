import React, {Component} from "react";
import pokemon from "pokemon";

export default class Pokemon_api extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          pokemon_type: null,

        };
    }

    async componentDidMount() {
        const url = "https://pokeapi.co/api/v2/pokemon/" +this.props.id;
        
        const response = await fetch(url);
        const data = await response.json();
        var pokemon_type=[];
        var pokemon_abilities=[];
        var pokemon_weight;
        var pokemon_height;
        var pokemon_stats=[];
  
        
        if(data.hasOwnProperty('types')){
          for (var i = 0; i < data.types.length; i++) {
            pokemon_type.push(data.types[i].type.name)
          }
        }
        if(data.hasOwnProperty('abilities')){
          for (var i = 0; i < data.types.length; i++) {
            pokemon_abilities.push(data.abilities[i].ability.name)
          }
        }
        if(data.hasOwnProperty('weight')){
          pokemon_weight=data.weight/10;
        }
        if(data.hasOwnProperty('height')){
          pokemon_height=data.height*10;
        }
        if(data.hasOwnProperty('stats')){
          for (var i = 0; i < data.stats.length; i++) {
            pokemon_stats.push(data.stats[i].stat.name)
            pokemon_stats.push(data.stats[i].base_stat)
          }
        }               

        this.setState({
          pokemon_type,
          pokemon_abilities,
          pokemon_weight,
          pokemon_height,
          pokemon_stats,
          isLoaded:true});
        
          
    }

    render() {
        const { error, isLoaded, pokemon_type, pokemon_abilities ,pokemon_weight,pokemon_height,pokemon_stats } = this.state;
        console.log(pokemon_type,pokemon_abilities)
        var pokemon_name = pokemon.getName(this.props.id);
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return (
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          );
        } else {
          return(
              // <div>
              // <p>{pokemon_type}</p>
              // <p>{pokemon_abilities}</p>
              // <p>{pokemon_weight+"kg"}</p>
              // <p>{pokemon_height+"cm"}</p>
              // <p>{pokemon_stats}</p>

              // </div>
              <figcaption className="card__caption">
                <h1 className="card__name">{pokemon_name}</h1>

                <h3 className="card__type">
                {"#"+this.props.id}
                </h3>
                <br></br>
                <h4 className="card__type">
                    <span className="card__label">Type:</span>
                    &nbsp;
                    {pokemon_type[0]}
                    &nbsp;&nbsp;
                    {pokemon_type[1]}
                    
                </h4>
                <br></br>
                <div className="card__abilities">
                <h4 className="card__ability">
                    <span className="card__label">Abilities:</span>
                    <br></br>
                    {pokemon_abilities[0]}
                    <br></br>
                    {pokemon_abilities[1]}
                    
                </h4>
                <br></br>
                <h4 className="card__stats">
                    <span className="card__label">Height:</span>
                    {pokemon_height+"cm"}
                    <br></br>
                    <span className="card__label">Weight:</span>
                    {pokemon_weight+"kg"}
                </h4>

                <br></br>
                <table className="card__stats">
                <tbody><tr>
                    <th>{pokemon_stats[0]+":"}</th>
                    <td>{pokemon_stats[1]}</td>
                </tr>
                <tr>
                    <th>{pokemon_stats[2]+":"}</th>
                    <td>{pokemon_stats[3]}</td>
                </tr>
                
                <tr>
                    <th>{pokemon_stats[4]+":"}</th>
                    <td>{pokemon_stats[5]}</td>
                </tr>

                <tr>
                    <th>{pokemon_stats[6]+":"}</th>
                    <td>{pokemon_stats[7]}</td>
                </tr>
                <tr>
                    <th>{pokemon_stats[8]+":"}</th>
                    <td>{pokemon_stats[9]}</td>
                </tr>
                <tr>
                    <th>{pokemon_stats[10]+":"}</th>  
                    <td>{pokemon_stats[11]}</td>
                </tr>
                </tbody></table>
                </div>
            </figcaption>
          );
        }
    }
}