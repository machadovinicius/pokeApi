import React, { useEffect, useState } from 'react';

import { Container, Item } from './styles';

import api from '../../services/api';

export default function Berry(props) {
    const { title, flavor } = props;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    }, [loading]);
    return (
        <>
            {loading ?
                <Container />
                :
                <Container>
                    <Item flavor={flavor}>{title}</Item>
                </Container>
            }

        </>
    );
}
