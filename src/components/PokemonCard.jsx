import { useEffect, useState } from "react";

const PokemonCard = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [inputName, setInputName] = useState('');
    const [pokemonSprite, setPokemonSprite] = useState('');

    async function fetchData(pokemon) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            if (!response) {
                throw new Error("unable to fetch Pokemon!!!");
            }
            const pokemonData = await response.json();
            setPokemonSprite(pokemonData.sprites.front_default);
            setPokemonName(pokemonData.name);
            console.log(pokemonData.name);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData('corviknight'); //favourite pokemon alongside dragonair <3
    }, []);

  return (
    <div>
        <h1>i forgoor</h1>
        <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="enter pokemon naem"
        />
        <button onClick={() => fetchData(inputName)}>catch em</button>
        <h1>{pokemonName}</h1>
        <img src={pokemonSprite} alt="Pokemon Sprite" style={{display: pokemonSprite ? 'block' : "none", width: "350px"}} />
    </div>
  )
}

export default PokemonCard