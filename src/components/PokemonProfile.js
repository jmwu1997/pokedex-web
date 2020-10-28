import React, {Component} from "react";
import Pokemon_api from './Pokemon_api'


export default class PokemonProfile extends Component {
    
    
    render() {
        console.log(this.props.location.state);
        return(
            <div>
                <img src={this.props.location.state.img}></img>
                {this.props.location.state.name}
                {this.props.location.state.id}
            </div>
        )
    }

}