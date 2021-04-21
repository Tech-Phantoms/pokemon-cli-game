import React, { FC } from 'react';
import { Text, render } from 'ink'
import SelectInput from 'ink-select-input';

// importing components
import Pokemon from './pokemon';
import PokemonIndex from './pokemonIndex';

const Pokedex: FC<{ flag: any }> = ({ flag }) => {

    const handleSelect = (item: any) => {
        if(item.value === 0){
            render(<PokemonIndex />)
        }
    }

    if (flag.pokemon) {
        return <Pokemon name={flag.pokemon} />
    }

    if (flag.index) {
        return <>
            <Text>Pokemon Index</Text>
        </>
    }

    if (flag.owned) {
        return <>
            <Text>Owned Pokemon</Text>
        </>
    }

    return <SelectInput items={[
        { label: "pokemon index", value: 0 },
        { label: "my pokemons", value: 1 },
    ]} onSelect={handleSelect} />
}

module.exports = Pokedex;
export default Pokedex;