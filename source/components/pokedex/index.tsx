import React, { FC, useState } from 'react';
import { useInput, render } from 'ink'
import { Database } from '../../lib'
import _ from 'lodash';
import SelectInput from 'ink-select-input';
import SelectorItem from './slectorItem';

// importing components
import PokemonUI from './pokemon';

const Pokedex: FC<{ flag: any }> = ({ flag }) => {

    let [pos, setPos] = useState(0);
    const pokemonsList = _.chunk(Database.getAllPokemon(), 10);
    let [items, setItems] = useState(pokemonsList[pos]?.map(pokemon => ({ label: pokemon.name, value: pokemon.id })));

    const selectHandler = (item: any) => {
        render(<PokemonUI name={item.label} />)
    }

    type Shift = "left" | "right"

    const listShift = (shift: Shift) => {

        if (shift === "left") {
            if (pos !== 0) {
                setPos(pos - 1);
                setItems(pokemonsList[pos]?.map(pokemon => ({ label: pokemon.name, value: pokemon.id })));
            }
        }

        if (shift === "right") {
            if (pos !== pokemonsList.length - 1) {
                setPos(pos + 1);
                setItems(pokemonsList[pos]?.map(pokemon => ({ label: pokemon.name, value: pokemon.id })));
            }
        }
    }


    useInput((_input, key) => {
        if (key.leftArrow) {
            listShift("left");
        }
        if (key.rightArrow) {
            listShift("right");
        }
    })

    if (flag.pokemon) {
        return <PokemonUI name={flag.pokemon} />
    }

    return <>

        <SelectInput items={items} onSelect={selectHandler} itemComponent={SelectorItem} />
    </>
}

module.exports = Pokedex;
export default Pokedex;
