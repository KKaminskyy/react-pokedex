import * as C from './App.styles';
import {useState, useEffect} from 'react';

import {PokemonCard} from './components/pokemonCard';
import { InputText } from './components/inputText';
import { NavToggle } from './components/navToggle';


import { PokeInfoType } from './types/pokemonInfoType';
import { api } from './api';

import search from './svgs/search.svg';

function App() {
  const [pokemonData, setPokemonData] = useState<PokeInfoType[]>([])
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [filteredPokemonInfo, setFilteredPokemonInfo] = useState<PokeInfoType[]>(pokemonData)
  const [searchInputValue, setSearchInputValue] = useState<string>('')

  useEffect(()=>{LoadPokeCard()},[])
  useEffect(()=>{GetPokemonTypes()},[])
  useEffect(()=> setFilteredPokemonInfo(pokemonData), [pokemonData])
  
  const LoadPokeCard = async () => {
    try {

      if(pokemonData.length === 0){
        const promises= []
        for(let i=1; i < 100; i++){
          const json = await api.getAllPokemon(i)
          promises.push(json)
        }
        const datas = await Promise.all(promises)
        const pokemonInfoArray = MapDataToPokemon(datas)
        setPokemonData(pokemonInfoArray)
      }

    } catch (error) {
      console.log('Error while fetching Pokemon data: ', error)
    }
    
  }

  const GetPokemonTypes = async () => {
    const pokemonTypesData = await api.getAllTypes()

    setPokemonTypes(pokemonTypesData.results)

  }

  type PokemonDataType = {
    id: number;
    name: string;
    types: {type: {name: string} }[];
    sprites: {other: {dream_world: {front_default:string}}}
  }

  const MapDataToPokemon = (datas:PokemonDataType[]): PokeInfoType[] => {
    return datas.map(data => {
      const pokemonInfo: PokeInfoType = {
        id: data.id,
        name: data.name,
        type: data.types[0].type.name,
        secondType: data.types[1]?.type.name,
        image: data.sprites.other.dream_world.front_default || '',
      }
      return pokemonInfo
    })
  }

  const handlePokemonFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setSearchInputValue(e.target.value)

    const filteredPokemons = pokemonData.filter(pokemon => 
      pokemon.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))

    setFilteredPokemonInfo(filteredPokemons)
  }

  return (
    <C.Container>
      <C.Header>
        <h1>Pokédex</h1>
        <C.inputBox>
          <InputText value={searchInputValue} onChange={handlePokemonFilter} placeholder='Search'/>
          <img src={search} alt="" />
        </C.inputBox>
        {/* <NavToggle typeNames={pokemonTypes}/> */}
      </C.Header>
      <C.Main>
        {filteredPokemonInfo.map((pokemon, index) => (
          <PokemonCard key={pokemon.id} {...pokemon}/>
        ))}
      </C.Main>
    </C.Container>
  );
}

export default App;
