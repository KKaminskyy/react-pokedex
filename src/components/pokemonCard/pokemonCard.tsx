import * as C from './pokemonCard.styles'
import { PokeInfoType } from '../../types/pokemonInfoType';
const PokemonCard = ({id, name, type, secondType, image}: PokeInfoType) => {

  type TypeColors = {
    [key: string]: string[]
  }
  const typeColors: TypeColors = {
    normal: ['#A8A878', '#6E6E47', '#444429'],
    fighting: ['#C03028', '#C92100', '#5F1818'],
    flying: ['#A890F0', '#A97BFF', '#47336B'],
    poison: ['#A040A0', '#C000C0', '#4F216F'],
    ground: ['#E0C068', '#E6BF5C', '#5F3F18'],
    rock: ['#B8A038', '#C4B078', '#5C5117'],
    bug: ['#A8B820', '#A8B820', '#536214'],
    ghost: ['#705898', '#9678B6', '#362A4B'],
    steel: ['#B8B8D0', '#A0A0A0', '#4B4B50'],
    fire: ['#F08030', '#FF9C57', '#661C00'],
    water: ['#6890F0', '#70B0FF', '#1A3661'],
    grass: ['#78C850', '#8CD750', '#3D4F23'],
    electric: ['#F8D030', '#F8E64E', '#8B7500'],
    psychic: ['#F85888', '#FF69B4', '#5F143F'],
    ice: ['#98D8D8', '#B0FFFF', '#407F7F'],
    dragon: ['#7038F8', '#7238F6', '#2D0C3D'],
    dark: ['#705848', '#6F5848', '#31291F'],
    fairy: ['#EE99AC', '#FF99AC', '#822C2C'],
  }



    return (
      <C.Container>
        <C.pokemonImage pokemonColor_bg={typeColors[type][0]}>
          <img src={image}/>
        </C.pokemonImage>
        <C.pokemonDetails 
        pokemonColor_bg={typeColors[type][1]}
        pokemonSecondColor_bg={secondType && typeColors[secondType][1]}
        pokemonColor={typeColors[type][2]}
        pokemonSecondColor={secondType && typeColors[secondType][2]}>

          <span>#0{id < 10 ? `0${id}` : id}</span>
          <span>{type}</span>

          {secondType !== undefined&&
            <span>{secondType}</span>
          }

          <h2>{name}</h2>
        </C.pokemonDetails>
      </C.Container>
    );
  }

export default PokemonCard