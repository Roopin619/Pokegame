import React, { Component } from 'react'
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokeList: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    };

    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokeList];
        while (hand1.length < hand2.length) {
            let randomIndex = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(randomIndex, 1)[0];
            hand1.push(randomPokemon);
        }

        let exp1 = 0, exp2 = 0;
        hand1.forEach(pokemon => {
            exp1 += pokemon.base_experience;
        });
        hand2.forEach(pokemon => {
            exp2 += pokemon.base_experience;
        });

        console.log(exp1, exp2);
        

        return (
            <div className="Pokegame">
                <Pokedex pokeList={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokeList={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        );
    }
}

export default Pokegame;