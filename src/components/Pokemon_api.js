import React, {Component} from "react";

export default class Pokemon_api extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          pokemon_info: null
        };
    }

    async componentDidMount() {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        
        const response = await fetch(url);
        const data = await response.json();
        this.setState({pokemon_info: data.abilities[0].ability.name, isLoaded:true});
        
          
    }

    render() {
        const { error, isLoaded, pokemon_info } = this.state;
        console.log(pokemon_info)
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return(
          <div><p>{pokemon_info}</p></div>
          );
        }
    }
}