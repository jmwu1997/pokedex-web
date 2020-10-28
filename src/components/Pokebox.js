import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import '../styles/pokebox.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Pokebox extends Component {
    
    render() {
        return(
            <li>
            <Link to={{pathname: '/pokemon/'+this.props.value , state: { id: this.props.value,name: this.props.name,img:this.props.img }}}>
                <Card className="card">
                    <Card.Img className="card_img" src={this.props.img} />
                    <Card.Body className="card_body">
                        <Card.Title className="card_content">
                            { this.props.name }
                        </Card.Title>
                        <Card.Text className="card_content">
                            { "#"+this.props.value }
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </Link> 
            </li>

            
        )
    }

}