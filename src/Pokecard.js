import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        let name = this.props.name;
        let type = this.props.type;
        let img = this.props.img;
        let exp = this.props.exp;
        return (
            <div className="Pokecard">
                <h3 className="Pokecard-title">{name}</h3>
                <div className="Pokecard-image">
                    <img src={img} alt={name} />
                </div>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">EXP: {exp}</div>
            </div>
        );
    }
}

export default Pokecard;