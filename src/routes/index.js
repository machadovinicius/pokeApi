import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokedex from '../pages/Pokedex';
import Pokemon from '../pages/Pokemon';
import Berries from '../pages/Berries';


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Pokedex} />
            <Route path="/pokemon/" component={Pokemon} />
            <Route path="/berries/" component={Berries} />
        </Switch>
    );
}