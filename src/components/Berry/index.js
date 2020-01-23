import React, { useEffect, useState } from 'react';

import { Container, Item } from './styles';

import api from '../../services/api';

export default function Berry(props) {
    const { title, url } = props;
    const [dataFlavors, setFlavors] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFlavors = async () => {
        let [, id] = url.split("/v2/");
        const response = await api.get(id);
        const { flavors } = response.data;

        const getFlavors = flavors.map(flavor => {
            let nameFlavor = flavor.flavor.name;
            let potency = flavor.potency;
            return { nameFlavor, potency };
        });

        const dataFalvors = getFlavors.filter(item => item.potency > 0);

        const nameFlavor = dataFalvors.map(flavor => {
            let nameFlavor = flavor.nameFlavor;
            return nameFlavor;
        });
        setFlavors(nameFlavor);
        setLoading(false);
        //console.log(nameFlavor);
    }
    useEffect(() => {
        getFlavors();
    }, [loading]);
    return (
        <>
            {loading ?
                <Container />
                :
                <Container>
                    <Item flavor={dataFlavors}>{title}</Item>
                </Container>
            }

        </>
    );
}
