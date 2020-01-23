import React, { useState, useEffect } from 'react';

import { Container, Card, Item, Image, Circle } from './styles';

import evolteTo from '../../assets/arrow_down.png';

import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function PokeEvolve(props) {
    const { pokeIndice } = props;
    const [pokeImg, setPokeImg] = useState('');
    const [typeEolve, setTypeEolve] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getImage = async () => {
            const response = await api.get(`pokemon/${pokeIndice}`);
            const primaryType = response.data.types[0].type.name;
            const pokeImg = response.data.sprites.front_default;
            setTypeEolve(primaryType);
            setPokeImg(pokeImg);
            setLoading(false);
        }
        getImage();
    }, [loading, pokeIndice]);

    return (
        <>
            {
                loading ?
                    <Container />
                    :
                    <Container>
                        <Item><Image src={evolteTo} alt="Evolves to" /></Item>
                        <Link to={`/pokemonProfile/${pokeIndice}`}>
                            <Card type={typeEolve}>
                                <Circle><Image src={pokeImg} alt={pokeIndice} /></Circle>
                                <Item>{pokeIndice}</Item>
                            </Card>
                        </Link>
                    </Container>
            }
        </>
    );
}
