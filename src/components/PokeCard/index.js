import React, { useState, useEffect } from "react";

import { Item, Image, Title, Circle, Type, ListTypes, PokeIndice, Info } from "./styles";

import { Link } from 'react-router-dom';

import api from "../../services/api";

export default function PokeCard(props) {
    const { title, url } = props;
    const [dataPokemon, setDataPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const [dataTypes, setDataType] = useState([]);
    const [pokeIndice, setPokeIndice] = useState('');

    const getPokeId = (url) => {
        let [, id] = url.split("/pokemon/");
        return id;
    }

    const reqAPI = async () => {
        let id = getPokeId(url);
        const response = await api.get(`pokemon/${id}`);

        const [indice,] = id.split("/");
        const pokemons = response.data;
        const types = response.data.types;

        setPokeIndice(indice);
        setDataPokemon(pokemons);
        setDataType(types);
        setLoading(false);
    }

    useEffect(() => {
        reqAPI();
    }, [loading]);

    return (
        <>
            {loading ?
                <Item>

                </Item>
                :
                <Item type={dataPokemon.types[0].type.name}>
                    <Link to={`/pokemonProfile/${pokeIndice}`}>
                        <PokeIndice>#{pokeIndice}</PokeIndice>
                        <Info>
                            <Title>{title ? title : "pokemon"}</Title>
                            <ListTypes>
                                {dataTypes.map(dataType => (
                                    <Type key={dataType.type.name}> {dataType.type.name}</Type>
                                ))}
                            </ListTypes>
                        </Info>
                        <Circle>
                            <Image src={dataPokemon.sprites.front_default} alt={dataPokemon.name} />
                        </Circle>
                    </Link>
                </Item>
            }
        </>
    );
}
