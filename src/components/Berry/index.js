import React from 'react';

import { Container, Item } from './styles';

export default function Berry(props) {
    const { title } = props;
    return (
        <>
            <Container>
                <Item>{title}</Item>
            </Container>
        </>
    );
}
