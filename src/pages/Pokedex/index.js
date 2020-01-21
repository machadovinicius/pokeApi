import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import { Container, Box, Title, Previous, Next } from './styles';

import PokeCard from '../../components/PokeCard';

import api from '../../services/api';

export default function Pokedex() {

    const [pokemons, setPokemons] = useState([]);
    const [nextPage, setNextPage] = useState('');
    const [previousPage, setPreviousPage] = useState('');

    const reqPokemons = async () => {
        const response = await api.get('pokemon/');
        const listpokemon = response.data.results;
        const page = response.data.next;
        setPokemons(listpokemon);
        setNextPage(page);
    }

    const previousPageReq = async () => {
        console.log(previousPage);
        let [, params] = previousPage.split("/v2/");
        const response = await api.get(params);
        setNextPage(response.data.next);
        setPokemons(response.data.results);
        setPreviousPage(response.data.previous);

    }
    const nextPageReq = async () => {
        let [, params] = nextPage.split("/v2/");
        const response = await api.get(params);
        setPreviousPage(response.data.previous);
        setPokemons(response.data.results);
        setNextPage(response.data.next);
    }

    useEffect(() => {
        reqPokemons();
    }, []);


    return (
        <>
            <Header />
            <Container>
                <Title>Pokedex</Title>
                <Box>
                    {pokemons.map(pokemon => (
                        <PokeCard key={pokemon.name} title={pokemon.name} url={pokemon.url} />
                    ))}
                </Box>
                <Previous onClick={previousPageReq}>Anterior</Previous>
                <Next onClick={nextPageReq}>Próximo</Next>
            </Container>
        </>
    );
}
