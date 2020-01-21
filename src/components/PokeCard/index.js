import React, { useState, useEffect } from "react";

import { Item, Image, Title, Circle, ListTypes, Type, PokeIndice, Info } from "./styles";

import { Link } from 'react-router-dom';

import api from "../../services/api";

export default function PokeCard(props) {
    const { title, url } = props;
    const [dataPokemon, setDataPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const [specie, setSpecie] = useState('');
    const [dataTypes, setDataType] = useState([]);
    const [pokeIndice, setPokeIndice] = useState('');

    function getPokeId(url) {
        let [, id] = url.split("/pokemon/");
        return id;
    }

    const reqAPI = async () => {
        let id = getPokeId(url);
        const response = await api.get(`pokemon/${id}`);
        //console.log(response.data.types);
        const [indice,] = id.split("/");
        setPokeIndice(indice);
        setDataPokemon(response.data);
        setSpecie(response.data.species.url);
        setDataType(response.data.types);
        setLoading(false);
    }
    useEffect(() => {
        reqAPI();
    }, [loading]);

    return (
        <>
            {loading ?
                <></>
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
                </Item >
            }
        </>
    );
}