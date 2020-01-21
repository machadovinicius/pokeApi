import React, { useState, useEffect } from "react";

import { Item, Image, Title, Circle, ListType, Types, PokeIndice, Info } from "./styles";

import api from "../../services/api";

export default function PokeCard(props) {
    const { title, url } = props;
    const [dataPokemon, setDataPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const [specie, setSpecie] = useState('');
    const [types, setType] = useState([]);
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
        setType(response.data.types);
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
                    <PokeIndice>#{pokeIndice}</PokeIndice>
                    <Info>
                        <Title>{title ? title : "pokemon"}</Title>
                        <ListType>
                            {types.map(type => (
                                <Types key={type.type.name}> {type.type.name}</Types>
                            ))}
                        </ListType>
                    </Info>
                    <Circle>
                        <Image src={dataPokemon.sprites.front_default} />
                    </Circle>
                </Item >
            }
        </>
    );
}