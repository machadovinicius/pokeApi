import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import {
    Container,
    Box,
    Head,
    PokeIndice,
    Title,
    ListTypes,
    Type,
    Circle,
    Image,
    Content,
    Abilities,
    Item,
    Text,
    NavBar,
    NavItem,
    Soft,
    Strong,
    StrongTitle,
    CardBox,
    Card
} from './styles';

import api from '../../services/api';

export default function PokemonProfile({ match }) {

    const [dataPokemon, setDataPokemon] = useState({});
    const [dataTypes, setDataType] = useState([]);
    const [dataStats, setDataStat] = useState([]);
    const [dataAbilities, setDataAbility] = useState([]);
    const [dataSpecies, setDataSpecie] = useState({});
    const [dataEvolvesName, setDataEvolvesName] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokeIndice, setPokeIndice] = useState('');

    const reqPokemons = async () => {
        const response = await api.get(`pokemon/${match.params.pokeindice}`);

        const pokemon = response.data;
        const Types = response.data.types;
        const stats = response.data.stats;
        const abilities = response.data.abilities;
        const species = response.data.species.url;

        //set datas in states
        setDataPokemon(pokemon);
        setDataType(Types);
        setDataStat(stats);
        setDataAbility(abilities);
        setDataSpecie(species);
        setPokeIndice(match.params.pokeindice);
        setLoading(false);
    }

    const reqEvolvessName = async () => {
        let [, reqSpecie] = dataSpecies.split("v2");
        const response = await api.get(reqSpecie);
        const chain = response.data.evolution_chain.url;
        let [, reqChain] = chain.split("v2");
        const responseChain = await api.get(reqChain);
        const evolves = responseChain.data.chain.evolves_to;

        const arrayGarimpado = evolves.map(elemento => {
            let nomeEspecie = elemento.species.name;
            let nomeEvolucoes = elemento.evolves_to.map(e => e.species.name);
            return [nomeEspecie, ...nomeEvolucoes];
        });

        console.log(arrayGarimpado);


        setDataEvolvesName(evolves);
    }

    const handleTab = () => {
        console.log('clicou');
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
                            <NavBar>
                                <NavItem active onClick={handleTab}>About</NavItem>
                                <NavItem onClick={reqEvolvessName}>Evolution</NavItem>
                            </NavBar>
                            <CardBox>
                                <Card active={true}>
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
                                </Card>
                                <Card active={false}>
                                    <Text>Poke evolution</Text>
                                </Card>
                            </CardBox>
                        </Content>
                    </Box>
                </Container>
            }
        </>
    );
}
