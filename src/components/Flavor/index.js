import React, { useEffect, useState } from 'react';

import { Container, Item } from './styles';

import api from '../../services/api';

export default function Flavor(props) {
    const { title, url } = props;

    useEffect(() => {
    }, []);
    return (
        <Container>
            <Item flavor={title}>{title ? title : "all"}</Item>
        </Container>
    );
}
