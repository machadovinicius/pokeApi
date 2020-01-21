import React, { useState, useEffect } from "react";

import Sprite from "../../assets/ditto.png";
import { Item, Image, Title } from "./styles";

import api from "../../services/api";

export default function PokeCard(props) {
    const { title, url } = props;
    const [dataPokemon, setDataPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    function getPokeId(url) {
        let [, id] = url.split("/pokemon/");
        return id;
    }

    const reqAPI = async () => {
        let id = getPokeId(url);
        const response = await api.get(`pokemon/${id}`);
        //console.log(response.data);
        setDataPokemon(response.data);
        setLoading(false);
    }
    useEffect(() => {
        reqAPI();
    }, []);

    return (
        <Item>
            {loading ?
                <></>
                :
                <Image src={dataPokemon.sprites.front_default} />
            }
            <Title>{title ? title : "pokemon"}</Title>
        </Item >
    );
}