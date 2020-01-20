import React, { Component } from 'react';

import Header from '../../components/Header';

import { Container, Box, Title } from './styles';

import PokeCard from '../../components/PokeCard';

import api from '../../services/api';

export default class Pokedex extends Component {

    state = {
        pokemons: [],
    };
    async componentDidMount() {
        const response = await api.get('pokemon/');

        const listpokemon = response.data.results;

        console.log(listpokemon);

        this.setState({
            pokemons: listpokemon,
        });
    }

    render() {
        const { pokemons } = this.state;
        return (
            <>
                <Header />
                <Container>
                    <Title>Pokedex</Title>
                    <Box>
                        {pokemons.map(pokemon => (
                            <PokeCard key={pokemon.name} title={pokemon.name} />
                        ))}
                    </Box>
                </Container>
            </>
        );
    }
}
