import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import { Container, Box, Head, PokeIndice, Title, ListTypes, Type, Circle, Image, Content, Abilities, Item, Text, TitleConent, Soft, Strong, StrongTitle } from './styles';

import api from '../../services/api';

export default function PokemonProfile({ match }) {

    const [dataPokemon, setDataPokemon] = useState({});
    const [dataTypes, setDataTypes] = useState([]);
    const [dataStats, setDataStat] = useState([]);
    const [dataAbilities, setDataAbility] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokeIndice, setPokeIndice] = useState('');

    const reqPokemons = async () => {

        const response = await api.get(`pokemon/${match.params.pokeindice}`);

        const pokemon = response.data;
        const Types = response.data.types;
        const stats = response.data.stats;
        const abilities = response.data.abilities;

        setDataPokemon(pokemon);
        setDataTypes(Types);
        setDataStat(stats);
        setDataAbility(abilities);
        setPokeIndice(match.params.pokeindice);
        setLoading(false);
    }
    useEffect(() => {
        reqPokemons();
    }, [loading]);

    return (
        <>
            <Header />
            {loading ?
                <></>
                :
                <Container>
                    <Box>
                        <Head typeColor={dataPokemon.types[0].type.name}>
                            <PokeIndice>#{pokeIndice}</PokeIndice>
                            <Item>
                                <Title>{dataPokemon.name}</Title>
                                <ListTypes>
                                    {dataTypes.map(dataType => (
                                        <Type key={dataType.type.name}> {dataType.type.name}</Type>
                                    ))}
                                </ListTypes>
                            </Item>
                            <Circle animated>
                                <Image src={dataPokemon.sprites.front_default} alt={dataPokemon.name} />
                            </Circle>
                        </Head>
                        <Content>
                            <TitleConent>About</TitleConent>
                            <StrongTitle>Stats</StrongTitle>
                            {dataStats.map(dataStat => (
                                <Text key={dataStat.stat.name}> <Soft>{dataStat.stat.name}:</Soft> <Strong>{dataStat.base_stat}</Strong></Text>
                            ))}
                            <Text>
                                <Soft>Weight:</Soft>
                                <Strong>{dataPokemon.weight}</Strong>
                            </Text>
                            <Text>
                                <Soft>Height:</Soft>
                                <Strong>{dataPokemon.height}</Strong>
                            </Text>
                            <Abilities>
                                <StrongTitle>Abilities</StrongTitle>
                                {dataAbilities.map(dataAbility => (
                                    <Text key={dataAbility.ability.name}> <Soft>{dataAbility.ability.name}</Soft></Text>
                                ))}
                            </Abilities>
                        </Content>
                    </Box>
                </Container>
            }
        </>
    );
}
