import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Flavor from '../../components/Flavor';
import Berry from '../../components/Berry';

import api from '../../services/api';

import { Container, Title, CardFlavors, CardBerries, TitleFlavor } from './styles';

export default function Berries() {
    const [dataFlavors, setDataFlavor] = useState([]);
    const [dataBerries, setDataBerries] = useState([]);
    const [loading, setloading] = useState(true);

    const reqData = async () => {
        const responseFlavors = await api.get('berry-flavor/');
        const { results } = responseFlavors.data;
        setDataFlavor(results);
        const responseCountBerries = await api.get('berry/');
        const { count } = responseCountBerries.data;
        const responseBerries = await api.get(`berry?offset=0&limit=${count}`);
        setDataBerries(responseBerries.data.results);
        setloading(false);
    }

    useEffect(() => {
        reqData();
    }, [loading]);

    return (
        <>
            <Header />
            {loading ?
                <Container>

                </Container>
                :
                <Container>
                    <Title>Berries</Title>
                    <CardFlavors>
                        <TitleFlavor>Filter:</TitleFlavor>
                        <Flavor />
                        {dataFlavors.map(dataFlavor => (
                            <Flavor key={dataFlavor.name} title={dataFlavor.name} url={dataFlavor.url} />
                        ))}
                    </CardFlavors>
                    <CardBerries>
                        {dataBerries.map(dataBerry => (
                            <Berry key={dataBerry.name} title={dataBerry.name} url={dataBerry.url} />
                        ))}
                    </CardBerries>
                </Container>
            }
        </>
    );
}
