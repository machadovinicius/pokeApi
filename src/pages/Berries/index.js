import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import { Container } from './styles';

export default function Berries() {
    const [dataBerries, setDataBerrie] = useState([]);

    const reqDataBerries = async () => {
        const response = await api.get('berry/');
        console.log(response.data);
    }
    useEffect(() => {
        reqDataBerries();
    }, [dataBerries]);

    return (
        <>
            <Header />
            <Container>

            </Container>
        </>
    );
}
