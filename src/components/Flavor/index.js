import React, { useEffect } from 'react';

import { Container, Item } from './styles';

export default function Flavor(props) {
    const { title, onClickFilter } = props;

    useEffect(() => {
    }, []);

    return (
        <Container onClick={() => onClickFilter(title)}>
            <Item flavor={title}>{title ? title : "all"}</Item>
        </Container>
    );
}
