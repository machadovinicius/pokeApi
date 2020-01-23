import React, { useState } from 'react';

import pokemonLogo from '../../assets/pokemon_logo.png';
import CloseIcon from '../../assets/left-arrow.png';

import { Link } from 'react-router-dom';

import { Container, NavBar, Image, Menu, ListMenu, Item, Close } from './styles';

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false);

    const handleMenu = (e) => {
        e.preventDefault();
        setActiveMenu(!activeMenu);
    }
    return (
        <Container>
            <NavBar>
                <Link to="/"><Image src={pokemonLogo} alt="Logo pokemon" /></Link>
                <Menu onClick={handleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Menu>
                <ListMenu active={activeMenu}>
                    <Close onClick={handleMenu}><Image src={CloseIcon} alt="Close" /></Close>
                    <Link to="/"><Image src={pokemonLogo} alt="Logo pokemon" /></Link>
                    <Item><Link to="/">Pokedex</Link></Item>
                    <Item><Link to="/berries">Berries</Link></Item>
                </ListMenu>
            </NavBar>
        </Container>
    );
}
