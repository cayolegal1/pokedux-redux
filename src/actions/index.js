import { SET_POKEMONS } from "./types";


//Posibles acciones que tendrá nuestro reducer
export const setPokemons = (payload) => ({

    type: SET_POKEMONS,
    payload
}); 