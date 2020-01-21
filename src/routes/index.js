import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokedex from '../pages/Pokedex';
import PokemonProfile from '../pages/PokemonProfile';
import Berries from '../pages/Berries';


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Pokedex} />
            <Route path="/PokemonProfile/" component={PokemonProfile} />
            <Route path="/berries/" component={Berries} />
        </Switch>
    );
}