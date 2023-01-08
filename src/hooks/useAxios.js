import { useEffect, useState } from 'react';
import uuid from 'uuid';
import axios from 'axios';

// We want this hook, useAxios, to be able to take a base URL. If there is an additional 
// part needed for to complete an http request to an API (like the Pokemon one for a single
// pokemon by its name), we can do so by providing the rest of the URL when we want to add to our
// array of response data in state. And this hook should simultaneously work for the Card API.


const useAxios = (url) => {
	const [ cards, setCards ] = useState([]);
	const addCard = async () => {
		const response = await axios.get(url);
		setCards((cards) => [ ...cards, { ...response.data, id: uuid() } ]);
	};
	return [ cards, addCard ];
};


// The Pokemon API call:
// const [pokemon, setPokemon] = useState([]);
// const addPokemon = async name => {
//   const response = await axios.get(
//     `https://pokeapi.co/api/v2/pokemon/${name}/`
//   );
//   setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
// };

// The Playing Card useAxios hook that works:
// const useAxios = (url) => {
// 	const [ cards, setCards ] = useState([]);
// 	const addCard = async () => {
// 		const response = await axios.get(url);
// 		setCards((cards) => [ ...cards, { ...response.data, id: uuid() } ]);
// 	};
// 	return [ cards, addCard ];
// };

export default useAxios;
