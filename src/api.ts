const BASE_URL = 'https://pokeapi.co/api/v2/'

export const api = {
    getAllPokemon: async (key:number) => {
        let response = await fetch(`${BASE_URL}pokemon/${key}`)
        let json = await response.json()
        return json
    },
    getAllTypes: async () => {
        let response = await fetch(`${BASE_URL}type`)
        let json = await response.json()
        return json
    }
}