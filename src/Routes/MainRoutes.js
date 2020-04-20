import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Book from '../components/Book/book';
import Favorites from '../components/Favorites/favorites';
import Classifications from '../components/Classification/classification';

const MainRoutes = () => (
    <Switch>
        <Route exact path={"/Classifications"} component={Classifications} />
        <Route exact path={"/Favorites"} component={Favorites} />
        <Route exact path={"/"} component={Book} />
    </Switch>
);

export default MainRoutes;