import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokedex extends Component {
    render() {
        let result;
        if (this.props.isWinner) {
            result = <h2 className="Pokedex-winner">Winning Hand</h2>
        } else {
            result = <h2 className="Pokedex-loser">Losing Hand</h2>
        }

        return (
            <div className="Pokedex">
                {result}
                <h5 className="Pokedex-exp">Total Experience : {this.props.exp}</h5>
                <div className="Pokedex-cards">
                    {this.props.pokeList.map((pokemon) => (
                        <Pokecard key={pokemon.id}
                            name={pokemon.name}
                            img={`${POKE_API}${padToThree(pokemon.id)}.png`}
                            type={pokemon.type}
                            exp={pokemon.base_experience}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;