import React, { useState } from 'react';

import pokemonLogo from '../../assets/pokemon_logo.png';
import closeIcon from '../../assets/close.png';

import { Container, NavBar, Image, Menu, ListMenu, Item } from './styles';

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false);

    const handleMenu = (e) => {
        e.preventDefault();
        setActiveMenu(!activeMenu);
    }
    return (
        <Container>
            <NavBar>
                <Image src={pokemonLogo} alt="Logo pokemon" />
                <Menu onClick={handleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Menu>
                <ListMenu active={activeMenu}>
                    <span onClick={handleMenu}>x</span>
                    <Image src={pokemonLogo} alt="Logo pokemon" />
                    <Item>Pokedex</Item>
                    <Item>Berries</Item>
                </ListMenu>
            </NavBar>
        </Container>
    );
}
