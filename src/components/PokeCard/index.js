import React from 'react';

import Sprite from '../../assets/ditto.png';
import { Item, Image, Title } from './styles';

export default function PokeCard(props) {
    const { img, title } = props;
    return (
        <Item>
            <Image src={img ? img : Sprite} alt="Sprite example" />
            <Title>{title ? title : "pokemon"}</Title>
        </Item>
    );
}
