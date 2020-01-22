import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import ArrowButton from '../../components/ArrowButton';

import { Container, Box, Title, Pagination } from './styles';

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
        //console.log(previousPage);
        let [, params] = previousPage.split("/v2/");
        const response = await api.get(params);
        const { next, previous, results } = response.data;
        setNextPage(next);
        setPokemons(results);
        setPreviousPage(previous);
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
                <Title>Esta é a sua Pokedex</Title>
                <Pagination>
                    <ArrowButton fuc={previousPageReq} label="Previous" />
                    <ArrowButton func={nextPageReq} label="Next" />
                </Pagination>
                <Box>
                    {pokemons.map(pokemon => (
                        <PokeCard key={pokemon.name} title={pokemon.name} url={pokemon.url} />
                    ))}
                </Box>
                <Pagination>
                    <ArrowButton func={previousPageReq} label="Previous" />
                    <ArrowButton func={nextPageReq} label="Next" />
                </Pagination>
            </Container>
        </>
    );
}
