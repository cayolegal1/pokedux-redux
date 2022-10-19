import axios from "axios";

const api = axios.create({

    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=150',
    // headers: {}
})

export const getPokemons = async () => {

    try {

        const {data, status} = await api.get();

        const response = data.results
        return response

    } catch(err) {

        console.log(err)
    }

};

console.log(await getPokemons())