import React, { Component } from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

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
                    <h1>Pokemon List</h1>
                    {pokemons.map(pokemon => (
                        <li key={pokemon.name}>{pokemon.name}-</li>
                    ))}
                </Container>
            </>
        );
    }
}
