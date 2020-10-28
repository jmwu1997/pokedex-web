import React, {Component} from "react";
import Pokemon_api from './Pokemon_api'
import "../styles/pokemonprofile.css"

export default class PokemonProfile extends Component {
    
    
    render() {
        console.log(this.props.location.state);
        return(

                <figure className="cardd">
                    <div className="card__image-container">
                        <img src={this.props.location.state.img} alt="Image" class="card__image"/>   
                    </div>
                
                    <Pokemon_api id={this.props.location.state.id}></Pokemon_api>
                    
                </figure>
               
            
            
        )
    }

}