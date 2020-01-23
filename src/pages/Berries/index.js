import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Flavor from '../../components/Flavor';
import Berry from '../../components/Berry';

import api from '../../services/api';

import { Container, Title, CardFlavors, CardBerries, TitleFlavor } from './styles';

export default function Berries() {
    const [dataFlavors, setDataFlavor] = useState([]);
    const [dataBerries, setDataBerries] = useState([]);
    const [filteredDataBerries, setFilteredDataBerries] = useState([]);
    const [detailsBerries, setDetailsBerries] = useState([]);
    const [loading, setloading] = useState(true);

    const reqData = async () => {
        const responseFlavors = await api.get('berry-flavor/');
        const { results } = responseFlavors.data;
        setDataFlavor(results);
        const responseCountBerries = await api.get('berry/');
        const { count } = responseCountBerries.data;
        const responseBerries = await api.get(`berry?offset=0&limit=${count}`);

        const listReq = await Promise.all(responseBerries.data.results.map(e => api.get(e.url.split("/v2/")[1])));
        const listObject = listReq.map(item => ({ flavors: item.data.flavors, name: item.data.name }));
        setDetailsBerries(listObject);
        setDataBerries(responseBerries.data.results);
        setFilteredDataBerries(responseBerries.data.results);
        setloading(false);
    }

    useEffect(() => {
        reqData();
    }, []);

    const onClickFilter = name => {
        if (name) {
            const filteredItems = detailsBerries.map(berry => {
                let arrayFiltered = berry.flavors.filter(flavor => flavor.potency > 0 && flavor.flavor.name === name);
                if (arrayFiltered.length > 0) {
                    return {
                        name: berry.name
                    }
                }
                else {
                    return null;
                }
            });
            setFilteredDataBerries(filteredItems.filter(e => e));
        } else {
            setFilteredDataBerries(dataBerries);
        }
    }

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
                        <Flavor onClickFilter={onClickFilter} />
                        {dataFlavors.map(dataFlavor => (
                            <Flavor
                                key={dataFlavor.name}
                                title={dataFlavor.name}
                                url={dataFlavor.url}
                                onClickFilter={onClickFilter}
                            />
                        ))}
                    </CardFlavors>
                    <CardBerries>
                        {filteredDataBerries.map(dataBerry => (
                            <Berry
                                key={dataBerry.name}
                                title={dataBerry.name}
                            />
                        ))}
                    </CardBerries>
                </Container>
            }
        </>
    );
}
