import styled from "styled-components";

type PokemonColorProps = {
    pokemonColor_bg: string,
    pokemonSecondColor_bg?: string,
    pokemonColor?: string,
    pokemonSecondColor?: string
}

export const Container = styled.div `
    display: grid;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 280px;
    border: 2px solid #000;
    border-radius: 15px;
    box-shadow: 4px 4px 5px #0007;
    background: #ffe;
    overflow: hidden;
    cursor: pointer;

    :hover{
        transform: scale(1.1);
        transition: all ease .2s;
    }
`

export const pokemonImage = styled.div<PokemonColorProps> `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 190px;
    background-color: ${props => props.pokemonColor_bg};
    border-bottom: 2px solid #000;
    img{
        width: 55%;
    }
`

export const pokemonDetails = styled.div<PokemonColorProps>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, .5fr);
    gap: 3px 0;
    align-items: center;
    width: 100%;
    margin-top: 4px;
    

    h2, span{
        margin: 0px 10px;
    }

    h2{
        grid-column: 1/4;
        grid-row: 3/4;
    }

    span:nth-child(1){
        grid-column: 1/3;
    }

    span:nth-child(2), span:nth-child(3){
        background-color: ${props => props.pokemonColor_bg};
        color: ${props => props.pokemonColor};
        text-align: center;
        font: bold .8rem arial;
        letter-spacing: 1px;
        padding: 2px 3px;
        border-radius: 5px;
        border: 2px solid ${props => props.pokemonColor};
    }

    span:nth-child(3){
        grid-column: 3/4;
        background-color: ${props => props.pokemonSecondColor_bg};
        color: ${props => props.pokemonSecondColor};
        border: 2px solid ${props => props.pokemonSecondColor};
    }


`