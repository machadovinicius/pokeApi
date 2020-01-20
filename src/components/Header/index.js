import React from 'react';

import pokemonLogo from '../../assets/pokemon_logo.png';
import { Container, NavBar, Image, ListMenu, Item, Action } from './styles';

export default function Header() {
    return (
        <Container>
            <NavBar>
                <Image src={pokemonLogo} alt="Logo pokemon" />
                <ListMenu>
                    <Item>
                        <Action href="">Pokedex</Action>
                    </Item>
                    <Item>
                        <Action href="">Berries</Action>
                    </Item>
                </ListMenu>
            </NavBar>
        </Container>
    );
}
